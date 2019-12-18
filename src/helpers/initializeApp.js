import { firestore, initializeApp } from "firebase/app";
import "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyCFV4y1II4uFOmb9EoqgNdhhyQRGxTnd6k",
  authDomain: "todolist-b715e.firebaseapp.com",
  databaseURL: "https://todolist-b715e.firebaseio.com",
  projectId: "todolist-b715e",
  storageBucket: "todolist-b715e.appspot.com",
  messagingSenderId: "410803828493",
  appId: "1:410803828493:web:68d4f3175d57601e02e244",
  measurementId: "G-FEB2L1DCQQ"
});

firestore().settings({ timestampsInSnapshots: true });

firestore()
  .enablePersistence({ experimentalTabSynchronization: true })
  .catch(err => {
    console.error(err);
  });
