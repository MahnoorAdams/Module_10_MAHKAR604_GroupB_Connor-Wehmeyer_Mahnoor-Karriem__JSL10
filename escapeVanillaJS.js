document.addEventListener("DOMContentLoaded", () => {
    // Correct ID used for attaching the event listener
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json')
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                // Correct element ID to display the result
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    function findMostRecentBook(books) {
        // Corrected logic to find the most recent book
        return books.reduce((mostRecent, book) => new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent);
    }



    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        // Corrected function call
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });
    
    function findIntersection(setA, setB) {
        // Corrected logic to find intersection
        const intersection = new Set([...setA].filter(x => setB.has(x)));
        return intersection;
    }
    
    

    // 🪲 Bug: Asynchronous function ?
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        // 🪲 Bug: Incorrect method
                        document.getElementById("room3Result").innerHTML = message;
                    });
            });
    });
});

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Fantastic work on getting a grip on Vanilla JavaScript! Now, it’s time to explore React, where you'll create vibrant and sophisticated web applications. Let’s jump in and get started!";
}


function findMostRecentBook(books) {
    // 🪲 Bug: Logic error
    return books.reduce((mostRecent, book) => new Date(book.published) < new Date(mostRecent.published) ? book : mostRecent);
}

function findIntersection(setA, setB) {
    // 🪲 Bug: Incorrect logic
    const intersection = new Set([...setA]);
    return intersection;
}

async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        // 🪲 Bug: No delay
        new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Great job on mastering the basics of Vanilla JavaScript! Now, you're ready to step into the realm of React, where you'll craft robust and interactive web applications. Let’s get started!";
}