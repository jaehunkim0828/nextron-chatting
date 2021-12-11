"use strict";
exports.id = 626;
exports.ids = [626];
exports.modules = {

/***/ 4626:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db),
/* harmony export */   "I": () => (/* binding */ auth)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9421);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5942);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9714);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_2__);
// Import the functions you need from the SDKs you need


 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyBi0xT-wcmJwlW5LTdw5lGUwwTgjdqwqWk',
  authDomain: 'chatting-app-35460.firebaseapp.com',
  projectId: 'chatting-app-35460',
  storageBucket: 'chatting-app-35460.appspot.com',
  messagingSenderId: '772140384040',
  appId: '1:772140384040:web:4a8a69e70f8be2af5a1a1d',
  measurementId: 'G-LQ4MXPXYFT'
}; // Initialize Firebase

function creacteFirebaseApp(config) {
  try {
    return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)();
  } catch {
    return (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config);
  }
}

const app = creacteFirebaseApp(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);

/***/ })

};
;