window.onload = function() {
    let noMessages = ["No", "Are you sure?", "Disappointment", "Really?", "Last chance", "...", "Fine.", "LEAVE ME ALONE!"];
    let noCounter = 0;

    function noClick() {
        noCounter = (noCounter + 1) % noMessages.length; // Use modulo to loop back to the start when reaching the end
        document.querySelector('.no-button').innerText = noMessages[noCounter];

        // Increase the font-size of the "Yes" button
        let yesButton = document.querySelector('.yes-button');
        let currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentFontSize + 2) + "px"; // Increase the font-size by 2px

        // Reset the font-size of the "No" button
        let noButton = document.querySelector('.no-button');
        noButton.style.fontSize = "16px"; // Reset the font-size to 16px
    }

    // Attach the noClick function to the "No" button
    function yesClick(){
        window.location.href = "yes.html"
    }

    document.querySelector('.no-button').onclick = noClick;
    document.querySelector('.yes-button').onclick = yesClick;

    // JavaScript
        // ... Your existing code ...
    
        const container = document.getElementById('hearts-container');
    
        for(let i=0; i<100; i++) {
            const heart = document.createElement('img');
            heart.src = 'spinning-heart-transparent.gif';
            heart.className = 'heart';
            heart.style.position = 'absolute';
            heart.style.top = '-100%'; // Position the hearts just outside the top edge of the container
            heart.style.left = `${Math.random() * 100}vw`; // Set a random left position
            heart.style.animationName = 'fall'; // The name of the animation defined in your CSS
            heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
            container.appendChild(heart);
        }
};

    
