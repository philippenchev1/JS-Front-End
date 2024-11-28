document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // Select all profile divs
    const profiles = document.querySelectorAll('.profile');

    // Iterate through each profile to attach event listeners
    profiles.forEach(profile => {
        // Get references to key elements
        const showMoreButton = profile.querySelector('button');
        const hiddenFields = profile.querySelector('.hidden-fields');

        // Add click event listener to the "Show more" button
        showMoreButton.addEventListener('click', () => {
            // Check if the profile is locked
            const isLocked = profile.querySelector('input[type="radio"]:checked').id.includes('Lock');

            if (!isLocked) {
                // Toggle visibility of hidden fields
                if (hiddenFields.style.display === 'block') {
                    hiddenFields.style.display = 'none';
                    showMoreButton.textContent = 'Show more';
                } else {
                    hiddenFields.style.display = 'block';
                    showMoreButton.textContent = 'Hide it';
                }
            }
        });
    });
}
