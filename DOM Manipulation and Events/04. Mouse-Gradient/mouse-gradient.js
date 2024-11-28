function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (event) => {
        // Use offsetX to calculate the percentage directly
        const percentage = Math.floor((event.offsetX / gradient.clientWidth) * 100);

        // Clamp the percentage and update the result
        result.textContent = `${Math.min(Math.max(percentage, 0), 100)}%`;
    });

    // Clear result when the mouse leaves the gradient
    gradient.addEventListener('mouseout', () => {
        result.textContent = '';
    });
}
