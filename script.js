// MAIN JAVASCRIPT FILE - Controls all the flashcard behavior

// VARIABLES TO TRACK STATE
let currentCategory = null; // Which category is selected
let currentCards = []; // Array of cards in current category
let currentCardIndex = 0; // Which card we're on (starts at 0)
let isFlipped = false; // Is the card showing the back?

// VOICE SETTINGS - Female voice only
let koreanVoice = null; // Will store the Korean voice

// GET REFERENCES TO HTML ELEMENTS
// These are like "grabbing" elements from the HTML so we can use them
const categoryContainer = document.getElementById('category-container');
const categoryButtonsDiv = document.getElementById('category-buttons');
const flashcardArea = document.getElementById('flashcard-area');
const flashcard = document.getElementById('flashcard');
const cardContent = flashcard.querySelector('.card-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cardCounter = document.getElementById('card-counter');
const backToCategoriesBtn = document.getElementById('back-to-categories');

// INITIALIZE KOREAN VOICE (Female only)
function initVoices() {
    const voices = speechSynthesis.getVoices();
    
    // Find Korean voices
    const koreanVoiceList = voices.filter(voice => voice.lang.startsWith('ko'));
    
    if (koreanVoiceList.length > 0) {
        // Try to find a female voice, otherwise use the first Korean voice
        koreanVoice = koreanVoiceList.find(v => v.name.includes('Female') || v.name.includes('female')) || koreanVoiceList[0];
    } else {
        console.warn('No Korean voices found. Using default voice.');
    }
}

// Load voices when available
speechSynthesis.onvoiceschanged = initVoices;
initVoices();

// SPEAK KOREAN TEXT (Female voice)
function speakKorean(text) {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9; // Slightly slower for learning
    
    // Use the Korean female voice if available
    if (koreanVoice) {
        utterance.voice = koreanVoice;
    }
    
    speechSynthesis.speak(utterance);
}

// SHUFFLE FUNCTION - Randomizes an array
function shuffleArray(array) {
    // Create a copy so we don't mess up the original data
    const shuffled = [...array];
    
    // Fisher-Yates shuffle algorithm (simple and effective)
    // This randomly rearranges all the cards
    for (let i = shuffled.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements at positions i and j
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// STEP 1: CREATE CATEGORY BUTTONS WHEN PAGE LOADS
function createCategoryButtons() {
    // Loop through each category in our flashcardData object
    for (let categoryName in flashcardData) {
        // Create a button element
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.textContent = categoryName;
        
        // When button is clicked, load that category
        button.addEventListener('click', function() {
            loadCategory(categoryName);
        });
        
        // Add the button to the page
        categoryButtonsDiv.appendChild(button);
    }
}

// STEP 2: LOAD A CATEGORY
function loadCategory(categoryName) {
    currentCategory = categoryName;
    
    // Get the cards and SHUFFLE them randomly every time
    currentCards = shuffleArray(flashcardData[categoryName]);
    
    currentCardIndex = 0; // Start at first card
    isFlipped = false; // Card starts showing front
    
    // Hide category selection, show flashcard area
    categoryContainer.classList.add('hidden');
    flashcardArea.classList.remove('hidden');
    
    // Display the first card
    displayCard();
}

// STEP 3: DISPLAY A CARD
function displayCard() {
    const card = currentCards[currentCardIndex]; // Get current card data
    
    if (isFlipped) {
        // Show BACK of card (romanization + meaning)
        cardContent.innerHTML = `
            <div class="card-back">
                <div class="korean">${card.korean}</div>
                <div class="romanization">${card.romanization}</div>
                <div class="meaning">${card.meaning}</div>
            </div>
        `;
        
        // Automatically speak the Korean word when flipped
        speakKorean(card.korean);
    } else {
        // Show FRONT of card (Korean only)
        cardContent.innerHTML = `
            <div class="card-front">${card.korean}</div>
        `;
    }
    
    // Update the counter (e.g., "1 / 10")
    cardCounter.textContent = `${currentCardIndex + 1} / ${currentCards.length}`;
    
    // Enable/disable navigation buttons
    updateNavigationButtons();
}

// STEP 4: UPDATE NAVIGATION BUTTONS
function updateNavigationButtons() {
    // Disable "Previous" if we're on first card
    if (currentCardIndex === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }
    
    // Disable "Next" if we're on last card
    if (currentCardIndex === currentCards.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// STEP 5: FLIP CARD (when clicked)
flashcard.addEventListener('click', function() {
    isFlipped = !isFlipped; // Toggle between true and false
    displayCard(); // Show the card again with new state
});

// STEP 6: PREVIOUS BUTTON
prevBtn.addEventListener('click', function() {
    if (currentCardIndex > 0) {
        currentCardIndex--; // Go back one card
        isFlipped = false; // Reset to front
        displayCard();
    }
});

// STEP 7: NEXT BUTTON
nextBtn.addEventListener('click', function() {
    if (currentCardIndex < currentCards.length - 1) {
        currentCardIndex++; // Go forward one card
        isFlipped = false; // Reset to front
        displayCard();
    }
});

// STEP 8: BACK TO CATEGORIES BUTTON
backToCategoriesBtn.addEventListener('click', function() {
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Hide flashcard area, show category selection
    flashcardArea.classList.add('hidden');
    categoryContainer.classList.remove('hidden');
    
    // Reset state
    currentCategory = null;
    currentCards = [];
    currentCardIndex = 0;
    isFlipped = false;
});

// RUN THIS WHEN PAGE LOADS
createCategoryButtons();
