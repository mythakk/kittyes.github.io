const song = [
  ["Mangu", "Fourtwnty ft. Charita Utami", 27386203, 125000, "img/alb1.jpg", "audio/Fourtwnty_Mangu.mp3"],
  ["Slalu Ada di Nadi", "B.C.L", 1500000, 23000, "img/alb2.jpg", "audio/adaaa.mp3"],
  ["Lesung Pipi", "Raim LaOde", 2440000, 54000, "img/alb3.jpg", "audio/pipi.mp3"],
  ["Hello Future", "NCT DREAM", 4500000, 43000, "img/alb4.jpg", "audio/helloo.mp3"],
  ["Cancer", "MCR", 4770000, 41000, "img/alb5.jpg", "audio/MCR.mp3"]
];

const listEl = document.getElementById("song-list");
const player = document.getElementById("audio-player");

// Format angka likes dan plays
function formatNumber(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + "Juta";
  if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + "K";
  return num;
}

// Tampilkan semua lagu
song.forEach((data) => {
  const card = document.createElement("div");
  card.className = "song-card";
  card.innerHTML = `
    <img src="${data[4]}" alt="Cover ${data[0]}" class="album-cover">
    <div class="song-title">${data[0]}</div>
    <div class="song-meta">Penyanyi: ${data[1]}</div>
    <div class="song-meta">💗 ${formatNumber(data[3])} &nbsp; ▶ ${formatNumber(data[2])}</div>
  `;
  card.addEventListener("click", () => {
    player.src = data[5];
    player.play();
  });
  listEl.appendChild(card);
});
