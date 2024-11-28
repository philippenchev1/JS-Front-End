document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // Function to convert time units based on the input type
    function convertTime(inputId) {
        const daysInput = document.querySelector("#days-input");
        const hoursInput = document.querySelector("#hours-input");
        const minutesInput = document.querySelector("#minutes-input");
        const secondsInput = document.querySelector("#seconds-input");

        let days, hours, minutes, seconds;

        if (inputId === "days") {
            days = parseFloat(daysInput.value) || 0;
            hours = days * 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (inputId === "hours") {
            hours = parseFloat(hoursInput.value) || 0;
            days = hours / 24;
            minutes = hours * 60;
            seconds = minutes * 60;
        } else if (inputId === "minutes") {
            minutes = parseFloat(minutesInput.value) || 0;
            hours = minutes / 60;
            days = hours / 24;
            seconds = minutes * 60;
        } else if (inputId === "seconds") {
            seconds = parseFloat(secondsInput.value) || 0;
            minutes = seconds / 60;
            hours = minutes / 60;
            days = hours / 24;
        }

        // Update all input fields with the converted values
        daysInput.value = days.toFixed(2);
        hoursInput.value = hours.toFixed(2);
        minutesInput.value = minutes.toFixed(2);
        secondsInput.value = seconds.toFixed(2);
    }

    // Attach event listeners to all "Convert" buttons
    document.querySelector("#daysBtn").addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission
        convertTime("days");
    });

    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const input = form.querySelector("input[type=number]");
            const inputId = input.id.split('-')[0]; // Get the input unit (days, hours, etc.)
            convertTime(inputId);
        });
    });
}
