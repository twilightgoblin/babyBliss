// Register service worker
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      console.log('Service Worker registered:', registration);
      return registration;
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

// Request notification permission
export const requestNotificationPermission = async () => {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

// Send a local notification (no server needed)
export const sendLocalNotification = async () => {
  const hasPermission = await requestNotificationPermission();
  
  if (!hasPermission) {
    alert('Please enable notifications to receive updates from BabyBliss!');
    return;
  }

  if ('serviceWorker' in navigator && 'PushManager' in window) {
    // Get service worker registration
    const registration = await navigator.serviceWorker.ready;
    
    // Show notification directly through service worker
    registration.showNotification('BabyBliss', {
      body: 'BabyBliss says hi! Thanks for checking us out 👶✨',
      icon: '/icon.svg',
      badge: '/icon.svg',
      vibrate: [200, 100, 200],
      tag: 'babybliss-notification',
      requireInteraction: false
    });
  } else {
    // Fallback to regular notification
    new Notification('BabyBliss', {
      body: 'BabyBliss says hi! Thanks for checking us out 👶✨',
      icon: '/icon.svg'
    });
  }
};

// Check if app is installable
export const checkInstallability = () => {
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show install button
    const event = new CustomEvent('pwa-installable', { detail: { prompt: deferredPrompt } });
    window.dispatchEvent(event);
  });

  return deferredPrompt;
};

// Trigger install prompt
export const triggerInstallPrompt = async (deferredPrompt) => {
  if (!deferredPrompt) {
    return false;
  }

  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`User response to install prompt: ${outcome}`);
  
  return outcome === 'accepted';
};
