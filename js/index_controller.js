function IndexControler(){
    this._registerServiceWorker();
};

IndexController.prototype._registerServiceWorker = function () {
    //check browser support
    if (!navigator.serviceWorker) return;

    const indexController = this;
    //start service worker registration
    navigator.serviceWorker.register('/sw.js').then(function (reg) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
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
    // This works around a bug in "force update on reload".
    let refreshing;
    navigator.serviceWorker.addEventListener('controllerchange', function () {
        if (refreshing) return;
        window.location.reload();
        refreshing = true;
    });
};
//load IndexController function which will register new service worker sw.js once the page is loaded.
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        new IndexControler();
    });
};