import './style.css';
import { database } from './data.js';
import Clerk from '@clerk/clerk-js';

// --- CONFIGURATION ---
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const allowedDomains = (import.meta.env.VITE_ALLOWED_DOMAINS || '').split(',').map(d => d.trim());

// --- DOM ELEMENTS ---
const signInContainer = document.getElementById('sign-in-container');
const appContainer = document.getElementById('app-container');
const accessDeniedModal = document.getElementById('access-denied');
const userButtonDiv = document.getElementById('user-button');
const signOutBtn = document.getElementById('sign-out-btn');
// App elements
const categorySelect = document.getElementById('category');
const getQuestionBtn = document.getElementById('getQuestionBtn');
const practiceArea = document.getElementById('practiceArea');
const placeholder = document.getElementById('placeholder');
const questionText = document.getElementById('questionText');
const userAnswer = document.getElementById('userAnswer');
const toggleHintBtn = document.getElementById('toggleHintBtn');
const toggleSampleBtn = document.getElementById('toggleSampleBtn');
const hintBox = document.getElementById('hintBox');
const sampleBox = document.getElementById('sampleBox');
const hintTitle = document.getElementById('hintTitle');
const hintContent = document.getElementById('hintContent');
const sampleContent = document.getElementById('sampleContent');
const copySampleBtn = document.getElementById('copySampleBtn');

let currentQuestionObj = null;
let clerk = null;

// --- AUTH LOGIC ---
async function initClerk() {
    if (!clerkPubKey) {
        showSetupError("Missing Clerk Publishable Key in .env");
        return;
    }

    try {
        clerk = new Clerk(clerkPubKey);
        await clerk.load();

        if (clerk.user) {
            // User is signed in
            checkAccess(clerk.user);
        } else {
            // User is not signed in -> Mount Sign In
            mountSignIn();
        }
    } catch (err) {
        console.error("Clerk Init Error:", err);
        showSetupError("Error initializing Clerk. Check your Publishable Key.");
    }
}

function showSetupError(msg) {
    signInContainer.innerHTML = `
        <div class="text-center p-6 bg-red-50 border border-red-200 rounded-xl text-red-800">
            <h3 class="font-bold text-lg mb-2"><i class="fa-solid fa-triangle-exclamation"></i> Configuration Required</h3>
            <p class="text-sm">${msg}</p>
            <p class="text-xs mt-2 text-gray-500">Please update .env file with your Clerk keys.</p>
        </div>
    `;
    signInContainer.classList.remove('hidden');
    appContainer.classList.add('hidden');
}

function mountSignIn() {
    appContainer.classList.add('hidden');
    signInContainer.classList.remove('hidden');

    clerk.mountSignIn(signInContainer, {
        appearance: {
            elements: {
                formButtonPrimary: 'bg-ori-navy hover:bg-slate-800 text-white',
                footerActionLink: 'text-ori-navy hover:text-ori-gold'
            }
        }
    });
}

function checkAccess(user) {
    const userEmail = user.primaryEmailAddress.emailAddress;
    const userDomain = userEmail.split('@')[1];

    // Check if email domain is allowed
    // Note: In a real app, you might check specific emails or call a backend.
    // Here we use a client-side allowed list from env for simplicity/demo.
    const isAllowed = allowedDomains.includes(userDomain) || allowedDomains.includes(userEmail);

    if (isAllowed) {
        // Access Granted
        signInContainer.classList.add('hidden');
        appContainer.classList.remove('hidden');
        accessDeniedModal.classList.add('hidden');

        // Mount User Button (Profile/SignOut)
        clerk.mountUserButton(userButtonDiv);
    } else {
        // Access Denied
        signInContainer.classList.add('hidden');
        appContainer.classList.add('hidden');
        accessDeniedModal.classList.remove('hidden');
        accessDeniedModal.style.display = 'flex'; // Ensure flex layout for centering
    }
}

// Sign Out Logic for Access Denied Modal
signOutBtn.addEventListener('click', async () => {
    await clerk.signOut();
    location.reload();
});


// --- APP LOGIC ---
getQuestionBtn.addEventListener('click', getQuestion);
toggleHintBtn.addEventListener('click', () => toggleSection(hintBox));
toggleSampleBtn.addEventListener('click', () => toggleSection(sampleBox));
copySampleBtn.addEventListener('click', copySample);

function getQuestion() {
    const category = categorySelect.value;
    const list = database[category];

    if (!list || list.length === 0) {
        alert("Chưa có câu hỏi cho chủ đề này!");
        return;
    }

    currentQuestionObj = list[Math.floor(Math.random() * list.length)];

    practiceArea.classList.remove('hidden');
    placeholder.classList.add('hidden');

    questionText.innerText = currentQuestionObj.q;
    userAnswer.value = '';

    hintBox.classList.add('hidden');
    sampleBox.classList.add('hidden');

    hintTitle.innerText = currentQuestionObj.framework;
    hintContent.innerText = currentQuestionObj.hint;
    sampleContent.innerText = currentQuestionObj.sample;

    practiceArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleSection(element) {
    if (!currentQuestionObj) return;
    element.classList.toggle('hidden');
}

function copySample() {
    if (!sampleContent.innerText) return;

    navigator.clipboard.writeText(sampleContent.innerText).then(() => {
        const originalHTML = copySampleBtn.innerHTML;
        copySampleBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied';
        copySampleBtn.classList.add('text-green-500');

        setTimeout(() => {
            copySampleBtn.innerHTML = originalHTML;
            copySampleBtn.classList.remove('text-green-500');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Start App
initClerk();
