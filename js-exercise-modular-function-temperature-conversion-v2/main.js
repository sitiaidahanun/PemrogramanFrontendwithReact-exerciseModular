function kelvinToCelsius(kelvin) {
  // your code here
  return kelvin - 273.15;
}

function kelvinToFahrenheit(kelvin) {
  // your code here
  return (kelvin - 273.15) * 9/5 + 32;
}

function celsiusToFahrenheit(celsius) {
  // your code here
  return (celsius * 9/5) + 32;
}

function celsiusToKelvin(celsius) {
  // your code here
  return celsius + 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  // your code here
  return (fahrenheit - 32) * 5/9 + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  // your code here
  return (fahrenheit - 32) * 5/9;
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  const validUnits = ['C', 'F', 'K'];
  if (!validUnits.includes(initialUnit) || !validUnits.includes(finalUnit)) {
    throw new Error("Invalid unit. Must be 'C', 'F', or 'K'.");
  }
  if (initialUnit === finalUnit) {
    throw new Error("Initial and final units must be different.");
  }
  let result;

  if (initialUnit === 'C') {
    if (finalUnit === 'K') {
      result = celsiusToKelvin(temperature);
    } else if (finalUnit === 'F') {
      result = celsiusToFahrenheit(temperature);
    }
  } else if (initialUnit === 'K') {
    if (finalUnit === 'C') {
      result = kelvinToCelsius(temperature);
    } else if (finalUnit === 'F') {
      result = kelvinToFahrenheit(temperature);
    }
  } else if (initialUnit === 'F') {
    if (finalUnit === 'C') {
      result = fahrenheitToCelsius(temperature);
    } else if (finalUnit === 'K') {
      result = fahrenheitToKelvin(temperature);
    }
  }

  return parseFloat(result.toFixed(2));
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
