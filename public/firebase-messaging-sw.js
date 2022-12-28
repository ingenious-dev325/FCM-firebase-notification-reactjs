// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//     apiKey: "AIzaSyAqulA4pxQEBgBeavdoYO1n-CiFappBwoY",
//     authDomain: "first-cloud-messaging-26f80.firebaseapp.com",
//     projectId: "first-cloud-messaging-26f80",
//     storageBucket: "first-cloud-messaging-26f80.appspot.com",
//     messagingSenderId: "836039824631",
//     appId: "1:836039824631:web:637c7fbb3d2ce3af766ff2"
//   };
const firebaseConfig = {
  apiKey: "Enter Your's",
  authDomain: "Enter Your's",
  databaseURL: "Enter Your's",
  projectId: "Enter Your's",
  storageBucket: "Enter Your's",
  messagingSenderId: "Enter Your's",
  appId: "Enter Your's",
  measurementId: "Enter Your's",
};
firebase.initializeApp(firebaseConfig);
// Retrieve firebase messaging
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});