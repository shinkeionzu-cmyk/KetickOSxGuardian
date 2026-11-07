<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD82RZ6qz3_HpvEoNoyajCdrohvZft2YZc",
    authDomain: "ketickguard.firebaseapp.com",
    projectId: "ketickguard",
    storageBucket: "ketickguard.firebasestorage.app",
    messagingSenderId: "328459601678",
    appId: "1:328459601678:web:2a7756a2d20d441767795f",
    measurementId: "G-4NV5VBVBMD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
