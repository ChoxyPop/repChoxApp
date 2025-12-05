importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.1/firebase-messaging-compat.js');

// Configuración Firebase
firebase.initializeApp({
  apiKey: "AIzaSyBvtawDsDEine7gjyGYxYLkdNAKPEHrzYY",
  authDomain: "app-choxypop.firebaseapp.com",
  projectId: "app-choxypop",
  storageBucket: "app-choxypop.firebasestorage.app",
  messagingSenderId: "353378084410",
  appId: "1:353378084410:web:81d295fc4205bde3bfb703"
});

const messaging = firebase.messaging();

// Recibir notificaciones en segundo plano
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Recibido mensaje en segundo plano ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon-192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
