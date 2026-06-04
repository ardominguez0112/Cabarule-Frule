// ── NAV HAMBURGER ──
function toggleMenu() {
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('navMobile');
  ham.classList.toggle('open');
  mob.classList.toggle('open');
}

// ── NAV SCROLL OPACITY ──
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.background = window.scrollY > 40
    ? 'rgba(10,10,10,0.98)'
    : 'rgba(10,10,10,0.92)';
});

// ── SONGS DATA ──
const songs = [
  {
    number: '01',
    name: 'Bienvenido',
    album: 'Sencillo',
    duration: '4:54',
    lyrics: `Bienvenido al club de bastardos sin suerte,
el cajón de lamentos de los que nunca van a ganar...

Bienvenido al club de bastardos que nunca tienen suerte,
el cajón de lamentos de los que nunca van a ganar.
Bienvenido al club de bastardos que no hacen mas que caerse,
el maldito purgatorio de los que solo saben fracasar.

Justo en el momento en donde pensaba que podía ganar;
siquiera pude empatar.

Por eso, otra vez vuelvo a maldecir el día.
Otra vez, vuelvo a sangrar en las noches.
Otra vez, lamiéndote los pies de rodillas.
Otra vez y otra vez volví a caer.

Justo en el momento en el que creía que era inmortal,
me bajaron de un hachazo y no creo que de esta muerte pueda resucitar.

Y ahora vuelvo a estar solo, solo con mi sombra y mi mala suerte,
maldiciendo al destino traidor que otra vez me volvió a fallar.
Por eso vuelvo a estar solo, solo con mi sombra y mi mala suerte,
por culpa del maldito destino que otra vez me volvió a matar.

Ya no tengo ganas de seguir disfrazándome de guerrero,
sabiendo que mi alma agoniza y tengo el corazón muerto.
Me había despertado del sueño eterno y como era de esperarse
me estoy durmiendo de nuevo.

Solo como un perro, solo con mi sombra y mi mala suerte;
maldiciendo al destino borracho que otra vez me volvió a fallar.
Solo como un perro, solo con mi sombra y mi mala suerte;
maldiciendo al destino borracho que otra vez me volvió a matar.`
  },
  {
    number: '02',
    name: 'Que le voy a hacer?',
    album: 'Sencillo',
    duration: '3:47',
    lyrics: `Letra aun no cargada`
  },
  {
    number: '03',
    name: 'Reina Cucaracha',
    album: 'Sencillo',
    duration: '5:03',
    lyrics: `Letra aun no cargada`
  },
  {
    number: '04',
    name: 'La Caverna',
    album: 'Sencillo',
    duration: '3:28',
    lyrics: `Letra aun no cargada`
  },
  {
    number: '05',
    name: 'Garfio Maldito',
    album: 'Sencillo',
    duration: '4:55',
    lyrics: `Letra aun no cargada`
  },
  {
    number: '06',
    name: 'El Águila',
    album: 'Sencillo',
    duration: '3:15',
    lyrics: `Letra aun no cargada`
  },
];

// ── RENDER SONG LIST ──
const songList = document.getElementById('songList');
songs.forEach((s, i) => {
  const el = document.createElement('div');
  el.className = 'song-item' + (i === 0 ? ' active' : '');
  el.setAttribute('data-index', i);
  el.innerHTML = `
    <span class="song-number">${s.number}</span>
    <div class="song-info">
      <div class="song-name">${s.name}</div>
      <div class="song-album">${s.album}</div>
    </div>
    <span class="song-duration">${s.duration}</span>
  `;
  el.addEventListener('click', () => selectSong(i));
  songList.appendChild(el);
});

function selectSong(index) {
  document.querySelectorAll('.song-item').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.song-item')[index].classList.add('active');
  const s = songs[index];
  document.getElementById('lyricsTitle').textContent = s.name;
  document.getElementById('lyricsMeta').textContent = s.album + ' · ' + s.duration;
  document.getElementById('lyricsBody').textContent = s.lyrics;
}

// Load first song
selectSong(0);

// ── INTERSECTION OBSERVER (fade-in on scroll) ──
const observerOpts = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, observerOpts);

document.querySelectorAll('.member-card, .show-row, .stat-card, .social-link').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
