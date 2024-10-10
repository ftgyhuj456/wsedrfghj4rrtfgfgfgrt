if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);

                // Check for updates to the service worker
                registration.onupdatefound = () => {
                    const installingWorker = registration.installing;
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === 'installed') {
                            if (navigator.serviceWorker.controller) {
                                // New update available
                                console.log('New update available. Please refresh the page.');
                            } else {
                                // Content is now available offline
                                console.log('Content is cached for offline use.');
                            }
                        }
                    };
                };
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });

        // Handle online and offline events
        window.addEventListener('online', () => {
            console.log('You are back online.');
            // Optionally, you could prompt the user to refresh the page
        });

        window.addEventListener('offline', () => {
            console.log('You are offline. Some features may be unavailable.');
            // You can also notify the user about offline status if needed
        });
    });
}
