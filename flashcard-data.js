// ALL FLASHCARD DATA
// This object contains all the Korean words organized by category
const flashcardData = {
    // READING FOUNDATIONS
    "Hangul Consonants": [
        { korean: "ㄱ", romanization: "g/k", meaning: "Consonant G/K" },
        { korean: "ㄴ", romanization: "n", meaning: "Consonant N" },
        { korean: "ㄷ", romanization: "d/t", meaning: "Consonant D/T" },
        { korean: "ㄹ", romanization: "r/l", meaning: "Consonant R/L" },
        { korean: "ㅁ", romanization: "m", meaning: "Consonant M" },
        { korean: "ㅂ", romanization: "b/p", meaning: "Consonant B/P" },
        { korean: "ㅅ", romanization: "s", meaning: "Consonant S" },
        { korean: "ㅇ", romanization: "ng/silent", meaning: "Consonant NG (or silent)" },
        { korean: "ㅈ", romanization: "j", meaning: "Consonant J" },
        { korean: "ㅊ", romanization: "ch", meaning: "Consonant CH" },
        { korean: "ㅋ", romanization: "k", meaning: "Consonant K" },
        { korean: "ㅌ", romanization: "t", meaning: "Consonant T" },
        { korean: "ㅍ", romanization: "p", meaning: "Consonant P" },
        { korean: "ㅎ", romanization: "h", meaning: "Consonant H" }
    ],

    "Hangul Vowels": [
        { korean: "ㅏ", romanization: "a", meaning: "Vowel A" },
        { korean: "ㅑ", romanization: "ya", meaning: "Vowel YA" },
        { korean: "ㅓ", romanization: "eo", meaning: "Vowel EO" },
        { korean: "ㅕ", romanization: "yeo", meaning: "Vowel YEO" },
        { korean: "ㅗ", romanization: "o", meaning: "Vowel O" },
        { korean: "ㅛ", romanization: "yo", meaning: "Vowel YO" },
        { korean: "ㅜ", romanization: "u", meaning: "Vowel U" },
        { korean: "ㅠ", romanization: "yu", meaning: "Vowel YU" },
        { korean: "ㅡ", romanization: "eu", meaning: "Vowel EU" },
        { korean: "ㅣ", romanization: "i", meaning: "Vowel I" }
    ],

    "Basic Syllables": [
        { korean: "가", romanization: "ga", meaning: "GA syllable" },
        { korean: "나", romanization: "na", meaning: "NA syllable" },
        { korean: "다", romanization: "da", meaning: "DA syllable" },
        { korean: "라", romanization: "ra", meaning: "RA syllable" },
        { korean: "마", romanization: "ma", meaning: "MA syllable" },
        { korean: "바", romanization: "ba", meaning: "BA syllable" },
        { korean: "사", romanization: "sa", meaning: "SA syllable" },
        { korean: "아", romanization: "a", meaning: "A syllable" },
        { korean: "자", romanization: "ja", meaning: "JA syllable" },
        { korean: "차", romanization: "cha", meaning: "CHA syllable" },
        { korean: "카", romanization: "ka", meaning: "KA syllable" },
        { korean: "타", romanization: "ta", meaning: "TA syllable" },
        { korean: "파", romanization: "pa", meaning: "PA syllable" },
        { korean: "하", romanization: "ha", meaning: "HA syllable" }
    ],

    // NUMBERS
    "Native Korean Numbers (1-20)": [
        { korean: "하나", romanization: "hana", meaning: "One" },
        { korean: "둘", romanization: "dul", meaning: "Two" },
        { korean: "셋", romanization: "set", meaning: "Three" },
        { korean: "넷", romanization: "net", meaning: "Four" },
        { korean: "다섯", romanization: "daseot", meaning: "Five" },
        { korean: "여섯", romanization: "yeoseot", meaning: "Six" },
        { korean: "일곱", romanization: "ilgop", meaning: "Seven" },
        { korean: "여덟", romanization: "yeodeol", meaning: "Eight" },
        { korean: "아홉", romanization: "ahop", meaning: "Nine" },
        { korean: "열", romanization: "yeol", meaning: "Ten" },
        { korean: "열하나", romanization: "yeol-hana", meaning: "Eleven" },
        { korean: "열둘", romanization: "yeol-dul", meaning: "Twelve" },
        { korean: "열셋", romanization: "yeol-set", meaning: "Thirteen" },
        { korean: "열넷", romanization: "yeol-net", meaning: "Fourteen" },
        { korean: "열다섯", romanization: "yeol-daseot", meaning: "Fifteen" },
        { korean: "열여섯", romanization: "yeol-yeoseot", meaning: "Sixteen" },
        { korean: "열일곱", romanization: "yeol-ilgop", meaning: "Seventeen" },
        { korean: "열여덟", romanization: "yeol-yeodeol", meaning: "Eighteen" },
        { korean: "열아홉", romanization: "yeol-ahop", meaning: "Nineteen" },
        { korean: "스물", romanization: "seumul", meaning: "Twenty" }
    ],

    "Sino-Korean Numbers (1-20)": [
        { korean: "일", romanization: "il", meaning: "One" },
        { korean: "이", romanization: "i", meaning: "Two" },
        { korean: "삼", romanization: "sam", meaning: "Three" },
        { korean: "사", romanization: "sa", meaning: "Four" },
        { korean: "오", romanization: "o", meaning: "Five" },
        { korean: "육", romanization: "yuk", meaning: "Six" },
        { korean: "칠", romanization: "chil", meaning: "Seven" },
        { korean: "팔", romanization: "pal", meaning: "Eight" },
        { korean: "구", romanization: "gu", meaning: "Nine" },
        { korean: "십", romanization: "sip", meaning: "Ten" },
        { korean: "십일", romanization: "sip-il", meaning: "Eleven" },
        { korean: "십이", romanization: "sip-i", meaning: "Twelve" },
        { korean: "십삼", romanization: "sip-sam", meaning: "Thirteen" },
        { korean: "십사", romanization: "sip-sa", meaning: "Fourteen" },
        { korean: "십오", romanization: "sip-o", meaning: "Fifteen" },
        { korean: "십육", romanization: "sip-yuk", meaning: "Sixteen" },
        { korean: "십칠", romanization: "sip-chil", meaning: "Seventeen" },
        { korean: "십팔", romanization: "sip-pal", meaning: "Eighteen" },
        { korean: "십구", romanization: "sip-gu", meaning: "Nineteen" },
        { korean: "이십", romanization: "i-sip", meaning: "Twenty" }
    ],

    // DAILY LIFE
    "Basic Greetings": [
        { korean: "안녕하세요", romanization: "annyeonghaseyo", meaning: "Hello / Goodbye (polite)" },
        { korean: "안녕", romanization: "annyeong", meaning: "Hi / Bye (casual)" },
        { korean: "안녕히 가세요", romanization: "annyeonghi gaseyo", meaning: "Goodbye (to person leaving)" },
        { korean: "안녕히 계세요", romanization: "annyeonghi gyeseyo", meaning: "Goodbye (you are leaving)" },
        { korean: "좋은 아침", romanization: "joeun achim", meaning: "Good morning" },
        { korean: "잘 자", romanization: "jal ja", meaning: "Good night (casual)" },
        { korean: "잘 자요", romanization: "jal jayo", meaning: "Good night (polite)" },
        { korean: "또 봐요", romanization: "tto bwayo", meaning: "See you again" },
        { korean: "다음에 봐요", romanization: "daeume bwayo", meaning: "See you next time" },
        { korean: "어서 오세요", romanization: "eoseo oseyo", meaning: "Welcome" }
    ],

    "Polite Expressions": [
        { korean: "감사합니다", romanization: "gamsahamnida", meaning: "Thank you (formal)" },
        { korean: "고맙습니다", romanization: "gomapseumnida", meaning: "Thank you (polite)" },
        { korean: "고마워", romanization: "gomawo", meaning: "Thanks (casual)" },
        { korean: "죄송합니다", romanization: "joesonghamnida", meaning: "I'm sorry (formal)" },
        { korean: "미안해요", romanization: "mianhaeyo", meaning: "I'm sorry (polite)" },
        { korean: "미안", romanization: "mian", meaning: "Sorry (casual)" },
        { korean: "괜찮아요", romanization: "gwaenchanayo", meaning: "It's okay" },
        { korean: "실례합니다", romanization: "sillyehamnida", meaning: "Excuse me" },
        { korean: "잠시만요", romanization: "jamsimanyo", meaning: "Just a moment" },
        { korean: "천만에요", romanization: "cheonmaneyo", meaning: "You're welcome" }
    ],

    "Yes / No / Common Responses": [
        { korean: "네", romanization: "ne", meaning: "Yes" },
        { korean: "응", romanization: "eung", meaning: "Yeah (casual)" },
        { korean: "아니요", romanization: "aniyo", meaning: "No" },
        { korean: "아니", romanization: "ani", meaning: "No (casual)" },
        { korean: "알겠습니다", romanization: "algesseumnida", meaning: "I understand / Okay (formal)" },
        { korean: "알았어", romanization: "arasseo", meaning: "Got it / Okay (casual)" },
        { korean: "물론", romanization: "mullon", meaning: "Of course" },
        { korean: "그래요", romanization: "geuraeyo", meaning: "That's right / I see" },
        { korean: "아마", romanization: "ama", meaning: "Maybe / Perhaps" },
        { korean: "정말요?", romanization: "jeongmallyo?", meaning: "Really?" }
    ],

    // PEOPLE & PRONOUNS
    "Family Members": [
        { korean: "아버지", romanization: "abeoji", meaning: "Father (formal)" },
        { korean: "아빠", romanization: "appa", meaning: "Dad" },
        { korean: "어머니", romanization: "eomeoni", meaning: "Mother (formal)" },
        { korean: "엄마", romanization: "eomma", meaning: "Mom" },
        { korean: "할아버지", romanization: "harabeoji", meaning: "Grandfather" },
        { korean: "할머니", romanization: "halmeoni", meaning: "Grandmother" },
        { korean: "형", romanization: "hyeong", meaning: "Older brother (male speaker)" },
        { korean: "오빠", romanization: "oppa", meaning: "Older brother (female speaker)" },
        { korean: "누나", romanization: "nuna", meaning: "Older sister (male speaker)" },
        { korean: "언니", romanization: "eonni", meaning: "Older sister (female speaker)" },
        { korean: "동생", romanization: "dongsaeng", meaning: "Younger sibling" },
        { korean: "남동생", romanization: "namdongsaeng", meaning: "Younger brother" },
        { korean: "여동생", romanization: "yeodongsaeng", meaning: "Younger sister" }
    ],

    "Pronouns": [
        { korean: "나", romanization: "na", meaning: "I / Me (casual)" },
        { korean: "저", romanization: "jeo", meaning: "I / Me (polite)" },
        { korean: "너", romanization: "neo", meaning: "You (casual)" },
        { korean: "당신", romanization: "dangsin", meaning: "You (formal)" },
        { korean: "우리", romanization: "uri", meaning: "We / Us" },
        { korean: "그", romanization: "geu", meaning: "He / Him" },
        { korean: "그녀", romanization: "geunyeo", meaning: "She / Her" },
        { korean: "이것", romanization: "igeot", meaning: "This" },
        { korean: "그것", romanization: "geugeot", meaning: "That" },
        { korean: "저것", romanization: "jeogeot", meaning: "That (over there)" }
    ],

    "Titles": [
        { korean: "선생님", romanization: "seonsaengnim", meaning: "Teacher" },
        { korean: "학생", romanization: "haksaeng", meaning: "Student" },
        { korean: "사장님", romanization: "sajangnim", meaning: "Boss / President" },
        { korean: "친구", romanization: "chingu", meaning: "Friend" },
        { korean: "의사", romanization: "uisa", meaning: "Doctor" },
        { korean: "간호사", romanization: "ganhosa", meaning: "Nurse" },
        { korean: "경찰", romanization: "gyeongchal", meaning: "Police" },
        { korean: "회사원", romanization: "hoesawon", meaning: "Office worker" }
    ],

    // VOCABULARY GROUPS
    "Fruits": [
        { korean: "사과", romanization: "sagwa", meaning: "Apple" },
        { korean: "바나나", romanization: "banana", meaning: "Banana" },
        { korean: "딸기", romanization: "ttalgi", meaning: "Strawberry" },
        { korean: "포도", romanization: "podo", meaning: "Grape" },
        { korean: "수박", romanization: "subak", meaning: "Watermelon" },
        { korean: "오렌지", romanization: "orenji", meaning: "Orange" },
        { korean: "배", romanization: "bae", meaning: "Pear" },
        { korean: "복숭아", romanization: "boksunga", meaning: "Peach" },
        { korean: "레몬", romanization: "remon", meaning: "Lemon" },
        { korean: "키위", romanization: "kiwi", meaning: "Kiwi" }
    ],

    "Vegetables": [
        { korean: "당근", romanization: "danggeun", meaning: "Carrot" },
        { korean: "양파", romanization: "yangpa", meaning: "Onion" },
        { korean: "토마토", romanization: "tomato", meaning: "Tomato" },
        { korean: "오이", romanization: "oi", meaning: "Cucumber" },
        { korean: "감자", romanization: "gamja", meaning: "Potato" },
        { korean: "고구마", romanization: "goguma", meaning: "Sweet potato" },
        { korean: "배추", romanization: "baechu", meaning: "Cabbage" },
        { korean: "무", romanization: "mu", meaning: "Radish" },
        { korean: "마늘", romanization: "maneul", meaning: "Garlic" },
        { korean: "버섯", romanization: "beoseot", meaning: "Mushroom" }
    ],

    "Food": [
        { korean: "밥", romanization: "bap", meaning: "Rice / Meal" },
        { korean: "김치", romanization: "gimchi", meaning: "Kimchi" },
        { korean: "국", romanization: "guk", meaning: "Soup" },
        { korean: "빵", romanization: "ppang", meaning: "Bread" },
        { korean: "고기", romanization: "gogi", meaning: "Meat" },
        { korean: "생선", romanization: "saengseon", meaning: "Fish" },
        { korean: "계란", romanization: "gyeran", meaning: "Egg" },
        { korean: "우유", romanization: "uyu", meaning: "Milk" },
        { korean: "라면", romanization: "ramyeon", meaning: "Ramen" },
        { korean: "치킨", romanization: "chikin", meaning: "Chicken" }
    ],

    "Drinks": [
        { korean: "물", romanization: "mul", meaning: "Water" },
        { korean: "커피", romanization: "keopi", meaning: "Coffee" },
        { korean: "차", romanization: "cha", meaning: "Tea" },
        { korean: "주스", romanization: "juseu", meaning: "Juice" },
        { korean: "맥주", romanization: "maekju", meaning: "Beer" },
        { korean: "소주", romanization: "soju", meaning: "Soju" },
        { korean: "우유", romanization: "uyu", meaning: "Milk" },
        { korean: "콜라", romanization: "kolla", meaning: "Cola" },
        { korean: "녹차", romanization: "nokcha", meaning: "Green tea" },
        { korean: "와인", romanization: "wain", meaning: "Wine" }
    ],

    "Colors": [
        { korean: "빨강", romanization: "ppalgang", meaning: "Red" },
        { korean: "파랑", romanization: "parang", meaning: "Blue" },
        { korean: "노랑", romanization: "norang", meaning: "Yellow" },
        { korean: "초록", romanization: "chorok", meaning: "Green" },
        { korean: "검정", romanization: "geomjeong", meaning: "Black" },
        { korean: "하양", romanization: "hayang", meaning: "White" },
        { korean: "주황", romanization: "juhwang", meaning: "Orange" },
        { korean: "분홍", romanization: "bunhong", meaning: "Pink" },
        { korean: "보라", romanization: "bora", meaning: "Purple" },
        { korean: "갈색", romanization: "galsaek", meaning: "Brown" }
    ],

    "Animals": [
        { korean: "개", romanization: "gae", meaning: "Dog" },
        { korean: "고양이", romanization: "goyangi", meaning: "Cat" },
        { korean: "새", romanization: "sae", meaning: "Bird" },
        { korean: "물고기", romanization: "mulgogi", meaning: "Fish" },
        { korean: "말", romanization: "mal", meaning: "Horse" },
        { korean: "소", romanization: "so", meaning: "Cow" },
        { korean: "돼지", romanization: "dwaeji", meaning: "Pig" },
        { korean: "닭", romanization: "dak", meaning: "Chicken" },
        { korean: "호랑이", romanization: "horangi", meaning: "Tiger" },
        { korean: "곰", romanization: "gom", meaning: "Bear" }
    ],

    // TIME & ROUTINE
    "Days of the Week": [
        { korean: "월요일", romanization: "woryoil", meaning: "Monday" },
        { korean: "화요일", romanization: "hwayoil", meaning: "Tuesday" },
        { korean: "수요일", romanization: "suyoil", meaning: "Wednesday" },
        { korean: "목요일", romanization: "mogyoil", meaning: "Thursday" },
        { korean: "금요일", romanization: "geumyoil", meaning: "Friday" },
        { korean: "토요일", romanization: "toyoil", meaning: "Saturday" },
        { korean: "일요일", romanization: "ilyoil", meaning: "Sunday" }
    ],

    "Time Words": [
        { korean: "시", romanization: "si", meaning: "Hour / O'clock" },
        { korean: "분", romanization: "bun", meaning: "Minute" },
        { korean: "초", romanization: "cho", meaning: "Second" },
        { korean: "오전", romanization: "ojeon", meaning: "Morning (AM)" },
        { korean: "오후", romanization: "ohu", meaning: "Afternoon (PM)" },
        { korean: "어제", romanization: "eoje", meaning: "Yesterday" },
        { korean: "오늘", romanization: "oneul", meaning: "Today" },
        { korean: "내일", romanization: "naeil", meaning: "Tomorrow" },
        { korean: "지금", romanization: "jigeum", meaning: "Now" },
        { korean: "나중에", romanization: "najunge", meaning: "Later" }
    ],

    "Daily Activities": [
        { korean: "먹다", romanization: "meokda", meaning: "To eat" },
        { korean: "자다", romanization: "jada", meaning: "To sleep" },
        { korean: "공부하다", romanization: "gongbuhada", meaning: "To study" },
        { korean: "일하다", romanization: "ilhada", meaning: "To work" },
        { korean: "가다", romanization: "gada", meaning: "To go" },
        { korean: "오다", romanization: "oda", meaning: "To come" },
        { korean: "보다", romanization: "boda", meaning: "To see / watch" },
        { korean: "듣다", romanization: "deutda", meaning: "To hear / listen" },
        { korean: "말하다", romanization: "malhada", meaning: "To speak" },
        { korean: "쓰다", romanization: "sseuda", meaning: "To write" }
    ],

    // SURVIVAL KOREAN
    "Transportation": [
        { korean: "버스", romanization: "beoseu", meaning: "Bus" },
        { korean: "지하철", romanization: "jihacheol", meaning: "Subway" },
        { korean: "택시", romanization: "taeksi", meaning: "Taxi" },
        { korean: "기차", romanization: "gicha", meaning: "Train" },
        { korean: "비행기", romanization: "bihaenggi", meaning: "Airplane" },
        { korean: "자전거", romanization: "jajeon-geo", meaning: "Bicycle" },
        { korean: "자동차", romanization: "jadongcha", meaning: "Car" },
        { korean: "오토바이", romanization: "otobai", meaning: "Motorcycle" }
    ],

    "Places": [
        { korean: "학교", romanization: "hakgyo", meaning: "School" },
        { korean: "병원", romanization: "byeongwon", meaning: "Hospital" },
        { korean: "가게", romanization: "gage", meaning: "Store / Shop" },
        { korean: "식당", romanization: "sikdang", meaning: "Restaurant" },
        { korean: "집", romanization: "jip", meaning: "House / Home" },
        { korean: "회사", romanization: "hoesa", meaning: "Company / Office" },
        { korean: "은행", romanization: "eunhaeng", meaning: "Bank" },
        { korean: "우체국", romanization: "ucheguk", meaning: "Post office" },
        { korean: "공항", romanization: "gonghang", meaning: "Airport" },
        { korean: "역", romanization: "yeok", meaning: "Station" }
    ],

    "Directions": [
        { korean: "왼쪽", romanization: "oenjjok", meaning: "Left" },
        { korean: "오른쪽", romanization: "oreunjjok", meaning: "Right" },
        { korean: "직진", romanization: "jikjin", meaning: "Straight" },
        { korean: "앞", romanization: "ap", meaning: "Front" },
        { korean: "뒤", romanization: "dwi", meaning: "Back" },
        { korean: "위", romanization: "wi", meaning: "Above / On" },
        { korean: "아래", romanization: "arae", meaning: "Below / Under" },
        { korean: "안", romanization: "an", meaning: "Inside" },
        { korean: "밖", romanization: "bak", meaning: "Outside" },
        { korean: "옆", romanization: "yeop", meaning: "Side / Next to" }
    ]
};
