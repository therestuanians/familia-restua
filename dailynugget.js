// dailyNugget.js

// Array of daily nuggets alternating between English and Tagalog
const dailyNuggets = [
  "Family is not an important thing, it's everything", // 1
  "Ang pamilya ang pinakamahalagang kayamanan sa buhay.", // 2
  "The love of a family is life's greatest blessing.", // 3
  "Sa pamilya, nag-uumpisa ang tunay na pagmamahal.", // 4
  "A family in harmony will prosper in everything.", // 5
  "Pamilya: kung saan nagsisimula ang buhay at ang pag-ibig ay hindi kailanman nagtatapos.", // 6
  "The family is the first essential cell of human society", // 7
  "Walang perpektong pamilya, pero ang tunay na pamilya ay nagtutulungan sa hirap at ginhawa.", // 8
  "The family is one of nature's masterpieces.", // 9
  "Ang pamilya ay tahanan ng pagmamahalan at suporta.", // 10
  "A happy family is but an earlier heaven.", // 11
  "Ang pagsasama ng pamilya ay nagbibigay ng saya at ligaya.", // 12
  "Family means no one gets left behind or forgotten.", // 13
  "Ang pagmamahal ng pamilya ay nagbibigay ng lakas sa atin.", // 14
  "The best family is the one that can support each other through life's ups and downs.", // 15
  "Ang tahanan ay kung saan naroroon ang iyong pamilya.", // 16
  "Family is the heart of a home.", // 17
  "Ang pamilya ay ang ating unang guro sa buhay.", // 18
  "The bond that links your true family is not one of blood, but of respect and joy in each other’s life.", // 19
  "Ang bawat miyembro ng pamilya ay may mahalagang papel sa ating buhay.", // 20
  "A family is a little world created by love.", // 21
  "Ang pamilya ay isang maliit na mundo na nilikha ng pag-ibig.", // 22
  "In every conceivable manner, the family is a link to our past, a bridge to our future.", // 23
  "Ang pamilya ang ating kanlungan sa gitna ng unos.", // 24
  "Having somewhere to go is home. Having someone to love is family. Having both is a blessing.", // 25
  "Ang mga alaala ng pamilya ang nagsisilbing yaman ng ating puso.", // 26
  "The greatest legacy we can leave our children is happy memories.", // 27
  "Walang katumbas na kayamanan ang pagmamahal ng pamilya.", // 28
  "Family is the foundation upon which we build our lives.", // 29
  "Ang pamilya ay ang ating lakas sa bawat pagsubok.", // 30
  "Family and friendships are two of the greatest facilitators of happiness.", // 31
  "Ang pagsasama ng pamilya ay nagbibigay ng saya at ligaya." // 32
];

// Function to set a random nugget
function setRandomNugget() {
  const today = new Date();
  const currentDate = today.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'

  // Check if the nugget for today has already been set
  const storedDate = localStorage.getItem("nuggetDate");
  const storedNugget = localStorage.getItem("dailyNugget");

  if (storedDate === currentDate && storedNugget) {
    // If the nugget is already stored for today, use that
    document.getElementById("nuggetBox").innerText = storedNugget;
  } else {
    // Alternate between nuggets based on the day of the month
    const dayOfMonth = today.getDate(); // Get current day of the month
    const nuggetIndex = (dayOfMonth - 1); // Get index for the nugget

    // Use the nuggetIndex to determine if it's an even or odd day
    const nugget = dailyNuggets[nuggetIndex];

    // Store the nugget and today's date in local storage
    localStorage.setItem("nuggetDate", currentDate);
    localStorage.setItem("dailyNugget", nugget);

    // Display the nugget
    document.getElementById("nuggetBox").innerText = nugget;
  }
}

// Clear local storage for testing (optional)
function clearStorage() {
  localStorage.removeItem("nuggetDate");
  localStorage.removeItem("dailyNugget");
}

// Update the nugget immediately on page load
document.addEventListener("DOMContentLoaded", () => {
  // Uncomment the following line for testing to clear local storage
  // clearStorage();
  setRandomNugget();
});
