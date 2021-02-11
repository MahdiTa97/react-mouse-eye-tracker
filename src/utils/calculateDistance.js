function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(
    Math.sqrt(
      Math.pow(mouseX - (elem.offsetLeft + elem.offsetWidth / 2), 2) +
        Math.pow(mouseY - (elem.offsetTop + elem.offsetHeight / 2), 2)
    )
  );
}

export default calculateDistance;
