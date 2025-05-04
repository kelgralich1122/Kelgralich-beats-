// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth-compat.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACknEp5ZnuUkDeMVA-zuMiSa2R73nbdDw",
    authDomain: "kelgralich-f1358.firebaseapp.com",
    projectId: "kelgralich-f1358",
    storageBucket: "kelgralich-f1358.firebasestorage.app",
    messagingSenderId: "1091277032902",
    appId: "1:1091277032902:web:6d60454c168283aaa2f6c7",
    measurementId: "G-RNZM6EZN56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM Elements
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const googleLoginButton = document.getElementById("google-login");
const toggleToSignup = document.getElementById("toggle-to-signup");
const backToLogin = document.getElementById("back-to-login");
const authError = document.getElementById("auth-error");

// Toggle Forms
toggleToSignup.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    signupForm.classList.remove("hidden");
    authError.classList.add("hidden");
});

backToLogin.addEventListener("click", () => {
    signupForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
    authError.classList.add("hidden");
});

// Handle Login
loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successful! Welcome " + userCredential.user.email);
    } catch (error) {
        authError.textContent = error.message;
        authError.classList.remove("hidden");
    }
});

// Handle Sign-Up
signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Sign-Up Successful! Welcome " + userCredential.user.email);
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
    } catch (error) {
        authError.textContent = error.message;
        authError.classList.remove("hidden");
    }
});

// Handle Google Login
googleLoginButton.addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        alert("Google Login Successful! Welcome " + result.user.displayName);
    } catch (error) {
        authError.textContent = error.message;
        authError.classList.remove("hidden");
    }
});