

document.addEventListener('DOMContentLoaded', function () {
    const finishersList = document.getElementById('finishers-list');
    let previousTime = null;

    persons.forEach((person, index) => {
        const listItem = document.createElement('li');

        // Assign medals to the top 3 finishers
        let medal = '';
        if (index === 0) {
            medal = '<span class="gold">🥇</span>';
        } else if (index === 1) {
            medal = '<span class="silver">🥈</span>';
        } else if (index === 2) {
            medal = '<span class="bronze">🥉</span>';
        } else {
            listItem.style.paddingLeft = '34px';  // Horizontal padding
            listItem.style.paddingTop = '8px';   // Vertical top padding
            listItem.style.paddingBottom = '8px';// Vertical bottom padding
        }

        // Calculate the time difference
        const timeDifference = previousTime
            ? calculateTimeDifference(previousTime, person.time)
            : 'Winner';
        previousTime = person.time;

        // Render the list item
        listItem.innerHTML = `${medal} ${person.name} - Time: ${person.time} (${timeDifference})`;
        finishersList.appendChild(listItem);
    });
});



// Convert "HH:MM" to total minutes
function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

// Calculate the difference between two times
function calculateTimeDifference(prevTime, currTime) {
    const diffMinutes = timeToMinutes(currTime) - timeToMinutes(prevTime);
    const hours = Math.floor(diffMinutes / 60);
    const minutes = diffMinutes % 60;

    return `+ ${hours > 0 ? hours + 'h ' : ''}${minutes}m`;
}