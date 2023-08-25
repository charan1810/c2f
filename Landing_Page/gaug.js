const ticksContainer = document.querySelector('.ticks');
const numTicks = 5; // Number of tick marks
const maxTemperature = 100; // Maximum temperature value

// Numbers in meter
// for (let i = 0; i <= numTicks; i++) {
//     const tick = document.createElement('div');
//     tick.classList.add('tick');
//     ticksContainer.appendChild(tick);

//     const label = document.createElement('div');
//     label.classList.add('label');
//     label.textContent = (i * (maxTemperature / numTicks)) + "°C";
//     ticksContainer.appendChild(label);
// }

function convertToCelsius() {
    const celsiusInput = document.getElementById('celsiusInput');
    const fahrenheitValue = document.getElementById('fahrenheitValue');

    if (celsiusInput.value !== '') {
        const celsiusTemperature = parseFloat(celsiusInput.value);
        const fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;

        fahrenheitValue.textContent = fahrenheitTemperature.toFixed(2);

        const rotationDegrees = (fahrenheitTemperature / maxTemperature) * 180;
        updateNeedle(rotationDegrees);
    }
}

function updateNeedle(rotationDegrees) {
    const needle = document.getElementById('needle');
    needle.style.transform = `translateX(-50%) rotate(${rotationDegrees}deg)`;
}
