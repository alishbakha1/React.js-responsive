// Firebase Authentication Service
// This file is prepared for Firebase Auth integration.
// Currently uses LocalStorage via AuthContext for development.

// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'firebase/auth';
// import app from './firebase-config';

// const auth = getAuth(app);

/**
 * FIREBASE AUTH INTEGRATION POINT
 * Connect Firebase Authentication here when ready.
 *
 * Signup flow:
 *   const userCredential = await createUserWithEmailAndPassword(auth, email, password);
 *   await updateProfile(userCredential.user, { displayName: name });
 *   return userCredential.user;
 *
 * Login flow:
 *   const userCredential = await signInWithEmailAndPassword(auth, email, password);
 *   return userCredential.user;
 *
 * Logout flow:
 *   await signOut(auth);
 *
 * Auth state listener:
 *   onAuthStateChanged(auth, (user) => { ... });
 */

export const firebaseAuth = {
  signup: async (email, password, name) => {
    // TODO: Replace with Firebase createUserWithEmailAndPassword
    console.log('Firebase signup placeholder:', { email, name });
    return { uid: 'firebase-placeholder', email, displayName: name };
  },

  login: async (email, password) => {
    // TODO: Replace with Firebase signInWithEmailAndPassword
    console.log('Firebase login placeholder:', { email });
    return { uid: 'firebase-placeholder', email };
  },

  logout: async () => {
    // TODO: Replace with Firebase signOut
    console.log('Firebase logout placeholder');
  },

  onAuthChange: (callback) => {
    // TODO: Replace with Firebase onAuthStateChanged
    // return onAuthStateChanged(auth, callback);
    return () => {};
  },
};

export default firebaseAuth;
