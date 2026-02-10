import './style.css';
import { database } from './data.js';

let currentQuestionObj = null;

// DOM Elements
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

// Event Listeners
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

    // Random choice
    currentQuestionObj = list[Math.floor(Math.random() * list.length)];

    // UI Updates
    practiceArea.classList.remove('hidden');
    placeholder.classList.add('hidden');

    // Set content
    questionText.innerText = currentQuestionObj.q;
    userAnswer.value = '';

    // Reset sections
    hintBox.classList.add('hidden');
    sampleBox.classList.add('hidden');

    // Populate sections (hidden by default)
    hintTitle.innerText = currentQuestionObj.framework;
    hintContent.innerText = currentQuestionObj.hint;
    sampleContent.innerText = currentQuestionObj.sample;

    // Scroll
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
