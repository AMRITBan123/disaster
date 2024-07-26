document.addEventListener('DOMContentLoaded', () => {
    const stateInput = document.getElementById('state');
    const goButton = document.getElementById('goButton');
    const sosButton = document.getElementById('sosButton');
    const locationInput = document.getElementById('location');
    const modal = document.getElementById('sosModal');
    const closeModal = document.getElementsByClassName('close')[0];
    const chatbotContainer = document.getElementById('chatbotContainer');
    const toggleChatbotButton = document.getElementById('toggleChatbot');

    const stateNewsUrls = {
        "Andhra Pradesh": "https://timesofindia.indiatimes.com/city/amaravati",
        "Arunachal Pradesh": "https://arunachaltimes.in/",
        "Assam": "https://www.assamtribune.com/",
        "Bihar": "https://www.hindustantimes.com/india-news/bihar/",
        "Chhattisgarh": "https://www.ndtv.com/chhattisgarh-news",
        "Goa": "https://timesofindia.indiatimes.com/city/goa",
        "Gujarat": "https://www.dnaindia.com/india/gujarat",
        "Haryana": "https://www.tribuneindia.com/news/haryana/",
        "Himachal Pradesh": "https://www.hindustantimes.com/india-news/himachal-pradesh/",
        "Jharkhand": "https://www.dailypioneer.com/jharkhand",
        "Karnataka": "https://www.deccanherald.com/state",
        "Kerala": "https://www.thehindu.com/news/national/kerala/",
        "Madhya Pradesh": "https://www.freepressjournal.in/madhya-pradesh",
        "Maharashtra": "https://www.hindustantimes.com/india-news/maharashtra/",
        "Manipur": "https://www.thesangaiexpress.com/",
        "Meghalaya": "https://meghalayatimes.info/",
        "Mizoram": "https://timesofindia.indiatimes.com/city/aizawl",
        "Nagaland": "https://www.easternmirrornagaland.com/",
        "Odisha": "https://www.orissapost.com/",
        "Punjab": "https://www.tribuneindia.com/news/punjab/",
        "Rajasthan": "https://www.patrika.com/rajasthan-news/",
        "Sikkim": "https://www.sikkimexpress.com/",
        "Tamil Nadu": "https://www.thehindu.com/news/national/tamil-nadu/",
        "Telangana": "https://www.deccanchronicle.com/nation/current-affairs/240722/telangana.html",
        "Tripura": "https://www.tripuratoday.com/",
        "Uttar Pradesh": "https://timesofindia.indiatimes.com/city/lucknow",
        "Uttarakhand": "https://www.tribuneindia.com/news/uttarakhand/",
        "West Bengal": "https://www.telegraphindia.com/west-bengal",
        "Andaman and Nicobar Islands": "https://www.andamanchronicle.net/",
        "Chandigarh": "https://www.hindustantimes.com/chandigarh/",
        "Dadra and Nagar Haveli and Daman and Diu": "https://www.dnaindia.com/india/daman-and-diu",
        "Lakshadweep": "https://www.newindianexpress.com/states/kerala/lakshadweep/",
        "Delhi": "https://timesofindia.indiatimes.com/city/delhi",
        "Puducherry": "https://www.thehindu.com/news/cities/puducherry/"
    };

    goButton.addEventListener('click', () => {
        const selectedState = stateInput.value;
        const location = locationInput.value;
        const url = stateNewsUrls[selectedState];
        if (url) {
            window.location.href = url;
        } else {
            alert('Please select a valid state from the list.');
        }
    });

    sosButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    const callPoliceButton = document.getElementById('callPolice');
    const callFireButton = document.getElementById('callFire');
    const callAmbulanceButton = document.getElementById('callAmbulance');

    callPoliceButton.addEventListener('click', () => {
        window.location.href = "tel:100"; // Replace with the local police number if needed
    });

    callFireButton.addEventListener('click', () => {
        window.location.href = "tel:101"; // Replace with the local fire brigade number if needed
    });

    callAmbulanceButton.addEventListener('click', () => {
        window.location.href = "tel:102"; // Replace with the local ambulance number if needed
    });

    toggleChatbotButton.addEventListener('click', () => {
        chatbotContainer.classList.toggle('show');
        if (chatbotContainer.classList.contains('show')) {
            toggleChatbotButton.textContent = 'Close Chatbot';
        } else {
            toggleChatbotButton.textContent = 'Chat with Us';
        }
    });
});
