// Import the functions you need from Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your web app's Firebase configuration
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
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const toggleForm = document.getElementById("toggleForm");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

// Toggle between login and register forms
toggleForm.addEventListener("click", () => {
    if (loginForm.classList.contains("hidden")) {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        toggleForm.textContent = "Don't have an account? Register here";
    } else {
        loginForm.classList.add("hidden");
        registerForm.classList.remove("hidden");
        toggleForm.textContent = "Already have an account? Login here";
    }
});

// Login logic
loginButton.addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful! Welcome " + userCredential.user.email);
    } catch (error) {
        alert("Error logging in: " + error.message);
    }
});

// Registration logic
registerButton.addEventListener("click", async () => {
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value.trim();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful! Welcome " + userCredential.user.email);
    } catch (error) {
        alert("Error registering: " + error.message);
    }
});