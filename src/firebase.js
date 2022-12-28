import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
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
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
export const fetchToken = (setTokenFound) => {
    return getToken(messaging, {
        vapidKey:
            "Enter Your key from project_settings > scroll down > generate new key > and paste here",
    })
        .then((currentToken) => {
            if (currentToken) {
                console.log("current token for client: ", currentToken);
                setTokenFound(true);
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log(
                    "No registration token available. Request permission to generate one."
                );
                setTokenFound(false);
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.log("An error occurred while retrieving token. ", err);
            // catch error while creating client token
        });
};
export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            resolve(payload);
        });
    });
//   export default Firebase;
//amqps://tziscvmz:USqRmzw7wWQYwTgYk7_MShLquWXyyblm@shrimp.rmq.cloudamqp.com/tziscvmz