export function getNextImageIndex(currentIndex, imageLength) {
    return (currentIndex + 1) % imageLength;
  }
  
  export function getPrevImageIndex(currentIndex, imageLength) {
    return (currentIndex - 1 + imageLength) % imageLength;
  }
  