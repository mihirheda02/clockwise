import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_Pw8J4eG1RRwz7ZiijuZoLy0bBIgxy6k",
  authDomain: "clockwise-7c4e8.firebaseapp.com",
  projectId: "clockwise-7c4e8",
  storageBucket: "clockwise-7c4e8.appspot.com",
  messagingSenderId: "869204503308",
  appId: "1:869204503308:web:65c0aebf055ab3556cb729",
  measurementId: "G-DG2VCFQNMK",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
