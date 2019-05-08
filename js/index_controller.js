function IndexController(){
    this._registerServiceWorker();
};

IndexController.prototype._registerServiceWorker = function () {
    //check browser support
    if (!navigator.serviceWorker) return;

    const indexController = this;
    //start service worker registration
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', reg.scope);
        //check if service worker has been loaded
        if (!navigator.serviceWorker.controller) {
            return;
        }
        //check if new version of service worker is available, if yes update user with the message
        if (reg.waiting) {
            indexController._updateReady(reg.waiting);
            return;
        }
        //check for intalling service worker and track its state
        if (reg.installing) {
            indexController._trackInstalling(reg.installing);
            return;
        }
        //check for service worker's updates and track its state
        reg.addEventListener('updatefound', function () {
            indexController._trackInstalling(reg.installing);
        });
    }, function (err) {
        // registration failed 
        console.log('ServiceWorker registration failed: ', err);
    });

    // Ensure refresh is only called once.
    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
    });
};
//check the state of installing service worker
IndexController.prototype._trackInstalling = function (worker) {
    const indexController = this;
    worker.addEventListener('statechange', function () {
        //if new service worker installed inform user about it
        if (worker.state == 'installed') {
            indexController._updateReady(worker);
        }
    });
};

IndexController.prototype._updateReady = function (worker) {
    let updateNeeded = false;
    //Display a confirmation box:
    updateNeeded = confirm("New version available, shall we apply it?");
    //if update is not need quit 
    if (!updateNeeded) return;
    //skipWaiting do the update
    worker.postMessage({ action: 'skipWaiting' });
};

//load IndexController function which will register new service worker sw.js once the page is loaded.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        new IndexController();
    });
};
