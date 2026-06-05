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
    duration: '4:54 ',
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
    duration: '3:24 ',
    lyrics: `Que le voy a hacer si me gusta beber
hasta la última copa de sangre...
Siempre que me encuentro me vuelvo a perder
y me voy desdoblando hasta el paraíso eterno, en tu sombra.

Y que le voy a hacer si me gusta beber
hasta la última gota de sangre;
guardado en tu sombra para no caer.
Siempre que te encuentro, te vuelvo a perder
mientras me desdoblo en el paraíso; 
infierno en tu sombra que no me deja caer.

Sordos fragmentos de muerte profanando la dosis de mi resurrección.
Anochece y tus ojos sangre disparan por la espalda.
Sin pedir perdón, asesíname; convénceme y asesíname…

Por eso voy a convertirme en viento y abrazar a las almas desesperadas.
Voy a convertirme en lluvia y lavar la tierra que embarra tu cara.
Voy a caminar el fuego de tu paraíso,
después de abrazar mi nocturna dosis de electroshock.

Voy a ser la luna llena que ilumina el cielo de tu noche oscura.
Voy a ser el licor amargo que moja tus labios
y siempre te emborracha.
Voy a subir hasta la luna y a ponerle gatillo,
después de abrazar mi nocturna dosis de electroshock.


Y que le voy a hacer si me gusta beber
(y siempre que me encuentro me vuelvo a perder)
Y que puedo hacer si me emborracha tu piel
(y siempre que me encuentro me vuelvo a perder)
Y que le voy a hacer si me arrodillo a tu infierno
(y que puedo hacer si se que voy a morir)
Y que puedo hacer si se que voy a morir rendido a tus pies...`
  },
  {
    number: '03',
    name: 'Reina Cucaracha',
    album: 'Sencillo',
    duration: '4:26 ',
    lyrics: `Saliste de nuevo del agujero, como cada noche, para ver que pasa;
desplegando tus alas rotas, convidando miseria, para ver que pasa.
Vas a invitarme otra vez al juego de pintar con tu sangre la pared;
Vas a escaparte otra vez de entre mis dedos para derrotarme otra vez.
Fuc*** cucaracha...

Cada noche que pasa espero que la paranoia vuelva en mí a crecer;
si te miro con los ojos ciegos, caminando frágil sobre la pared
Pero un día no te vas a escapar,
Cuando caigas en la trampa yo voy a estar de pie para odiarte...

Pero un día no te vas a escapar, no, no...
Cuando muerdas el anzuelo yo voy a estar de pie para gritarte...

- Hola mi Reina, este es el infierno, bienvenida a tu sueño peor.
Dormías en el polvo y te despertó el fuego que se acuna en tu sueño peor.
Juguemos al esclavo junto con los gusanos que me azotan
y escupen el veneno encerrado en el alma hasta que…

Reina Cucaracha, este es el infierno, bienvenida a tu sueño peor.
Si el corazon te quema y el fuego no se apaga, bienvenida a tu sueño peor.
Cuando la muerte baile en esta orgia de ruidos borrachos...
Reina Cucaracha, junto con los esclavos…
Vas a arrastrarte hasta mi cruz presa del odio, desangrándote.
Vas a arrastrarte hasta mi cruz presa del odio, desangrándote.
Vas a arrastrarte hasta mi cruz presa del odio, desangrándote.`
  },
  {
    number: '04',
    name: 'La Caverna',
    album: 'Sencillo',
    duration: '5:17 ',
    lyrics: `Después de mi dosis de electroshock
del vaso me deje caer en un sueño profundo…
Y pasmado de oír aullidos que no duermen,
la realidad aniquilo su impulsión.
Le burlaron el alma;
y escupí en el infinito el espejismo de mi ilusión.

Voy a emborrachar mi tumba mordiendo huellas que nunca pise,
a despertar lo que odiaba al soñar dormido…
Voy a rasguñar mis huesos hasta el último centavo de piel
aunque el numero de latidos ya se este por terminar.

Todo lo que ves no es nada más que humo,
que de tan rancio no te deja salir;
te deja preso como en una caverna.
Que serán de mañana todas las realidades;
si pudiste pensarlas, pudiste soñarlas
pero no podes verlas.

Voy a emborrachar mi tumba mordiendo huellas que nunca pise.
A despertar lo que odiaba al soñar dormido…
Voy a rasguñar mis huesos hasta el último centavo de piel
aunque el numero de latidos ya se este por terminar.

Y si no tenes donde ir,
yo voy camino a ninguna parte,
como un mendigo que ya no tiene nada por perder.
Ahogando en una botella lagrimas de hielo seco,
seguí jugando al inmortal.
Cuando el Cierzo duerma y la tristeza me apunte a la sien,
aliado de mi soledad…

Voy a emborrachar mi tumba mordiendo huellas que nunca pise,
a despertar lo que odiaba al soñar dormido.
Voy a rasguñar tus huesos hasta el último centavo de piel
aunque el numero de latidos ya se este por terminar.`
  },
  {
    number: '05',
    name: 'Garfio Maldito',
    album: 'Sencillo',
    duration: '5:03 ',
    lyrics: `Se escondió la noche ebria de mentiras sin final,
buscando un galeón en donde navegar.
Tratando de no quedar cacheteado en el carajo
(si mi lengua fue barco y tus piernas el mar)

Garfio maldito rompió la coraza y lo desangro,
hiriendo de muerte al sucio pirata ladrón...
Tormenta en Noviembre uno y seis; y me tire a nadar
sin saber si lo hacia en lagrimas, espinas, o que...

Y al pirata lo colgaron como a un murciélago,
sangrando en la soledad de la noche.
Dejando atrás siete vidas gastadas
y viejas historias que no valen nada
(si mi lengua fue barco y tus piernas el mar)
Tus piernas el mar...

Calavera no chilla, mi viejo;
baja la bandera que el barco se esta hundiendo
y el parche empieza a chorrear.

Calavera no chilla;
baja la bandera que el barco se hunde
y el parche empieza a chorrear.
Naufragando en la oscuridad desierta
(y pensar que casi sin darnos cuenta
mi lengua fue barco y tus piernas el mar)

Garfio maldito rompió la coraza y lo desangro,
dejando sin chances al sucio pirata ladrón.
Nada que apostar esta vez,
sabiéndose herido se dejo perder...

Y al pirata lo colgaron como a un murciélago,
sangrando en la soledad de la noche,
brindando en la borda vacía por lo que no pudo ser.
Tantas historias y tantas medallas para regalar;
mi lengua fue barco y volvió a naufragar.
Tus piernas el mar...

Se escondió la noche ebria de mentiras sin final...`
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


function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  const buttons = document.querySelectorAll('.btn-filter');

  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  // Filtrar imágenes
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

let currentAlbumImages = [];
let currentImageIndex = 0;

function openLightbox(element) {
  // 1. Buscamos todos los <span> dentro del div oculto de esa tarjeta
  const spans = element.querySelectorAll('.album-urls span');
  currentAlbumImages = Array.from(spans).map(span => span.textContent.trim());
  
  // 2. Reseteamos el índice a la primera foto (la portada)
  currentImageIndex = 0;
  
  if (currentAlbumImages.length > 0) {
    updateLightboxImage();
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden'; // Evita que la página de fondo haga scroll
  }
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = 'auto'; // Devuelve el scroll a la página
}

function changeImage(direction) {
  currentImageIndex += direction;
  
  // Si se pasa del final, vuelve a la primera
  if (currentImageIndex >= currentAlbumImages.length) {
    currentImageIndex = 0;
  }
  // Si va hacia atrás del principio, va a la última
  if (currentImageIndex < 0) {
    currentImageIndex = currentAlbumImages.length - 1;
  }
  
  updateLightboxImage();
}

function updateLightboxImage() {
  const imgElement = document.getElementById('lightbox-img');
  const indexElement = document.getElementById('lightbox-index');
  
  // Cambia la ruta de la imagen
  imgElement.src = currentAlbumImages[currentImageIndex];
  // Actualiza el texto "1 / 4", "2 / 4", etc.
  indexElement.textContent = `${currentImageIndex + 1} / ${currentAlbumImages.length}`;
}

// Opcional: Cerrar el visor si clickean la parte negra del fondo
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) {
    closeLightbox();
  }
});
