import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = { 
  apiKey: "AIzaSyBPl5uO-EjMn7xVG9ljh1GRGU16N2rSZnE", 
  authDomain: "lab5-f735f.firebaseapp.com", 
  projectId: "lab5-f735f", 
  storageBucket: "lab5-f735f.appspot.com", 
  messagingSenderId: "858946543748", 
  appId: "1:858946543748:web:59066c03d61a268ec8e2d1", 
  measurementId: "G-89KXJM3611"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sử dụng AsyncStorage để lưu trữ trạng thái đăng nhập
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
setLogLevel('debug');
export { db, auth };
