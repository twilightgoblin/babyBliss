import { useState, useEffect } from 'react';
import { triggerInstallPrompt } from '../utils/pwa';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handleInstallable = (e) => {
      setDeferredPrompt(e.detail.prompt);
      setShowPrompt(true);
    };

    window.addEventListener('pwa-installable', handleInstallable);

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowPrompt(false);
    }

    return () => {
      window.removeEventListener('pwa-installable', handleInstallable);
    };
  }, []);

  const handleInstall = async () => {
    const accepted = await triggerInstallPrompt(deferredPrompt);
    if (accepted) {
      setShowPrompt(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-2xl shadow-2xl p-6 z-50 border-2 border-pink-200 animate-slide-up">
      <button
        onClick={handleDismiss}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
        aria-label="Dismiss"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-xl flex items-center justify-center">
          <span className="text-2xl">👶</span>
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-gray-900 mb-1">Add BabyBliss to Home Screen</h3>
          <p className="text-sm text-gray-600 mb-4">
            Install our app for quick access and offline browsing!
          </p>
          
          <button
            onClick={handleInstall}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2.5 px-4 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Install App
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
