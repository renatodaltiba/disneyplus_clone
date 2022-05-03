import { initializeApp } from 'firebase/app'

import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDLtNkhRucUIKGBEvt2LIyJDT3HEQH2I4s',

  authDomain: 'disney-clone-plus-ece0a.firebaseapp.com',

  projectId: 'disney-clone-plus-ece0a',

  storageBucket: 'disney-clone-plus-ece0a.appspot.com',

  messagingSenderId: '632678561009',

  appId: '1:632678561009:web:5f692c8f4e37a41777a550',

  measurementId: 'G-GLTSM82VSX'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const storage = getStorage(app)

export default db
