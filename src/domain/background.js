export default function getBackground(condition) {
  console.log("ini condition", condition);
  if (condition == "Rain") {
    return "rain.webp";
  }
  if (condition == "Haze") {
    return "haze.webp";
  }
  if (condition == "Clouds") {
    return "clouds.webp";
  }
  if (condition == "Mist") {
    return "mist.webp";
  }
  if (condition == "Clear") {
    return "clear.webp";
  }
  return "default.webp";
}
