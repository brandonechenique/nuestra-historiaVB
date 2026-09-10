# Nuestra Historia — revista mensual 💌

Página web tipo revista/scrapbook: una **portada** con el día que empezó
todo, y después un "capítulo" por cada mes cumplido, con dos fotos, un
texto y un espacio para la canción de Spotify. Se abre sola cada 10.

## Estructura del proyecto

```
revista/
├── index.html
├── css/style.css
├── js/script.js
└── images/
    ├── imagen1.jpg   (portada, foto de fondo grande)
    ├── imagen2.jpg   (portada, foto 2 de la fila de abajo)
    ├── imagen3.jpg   (portada, foto 3 de la fila de abajo)
    ├── imagen4.jpg   (portada, foto 4 de la fila de abajo)
    ├── imagen5.jpg   (mes 1, foto 1)
    ├── imagen6.jpg   (mes 1, foto 2)
    ├── imagen7.jpg   (mes 2, foto 1)
    ├── imagen8.jpg   (mes 2, foto 2)
    └── ...           (así sucesivamente, 2 fotos por mes)
```

La portada usa 4 fotos (como una carátula tipo Netflix: una foto grande
de fondo + 3 en la fila de abajo) y cada mes usa 2. Solo tienes que
arrastrar tus fotos a `images/` siguiendo ese orden numérico. Si una
foto todavía no existe, la página simplemente muestra un aviso en vez
de romperse.

## Cómo editar el texto

Abre `js/script.js`. Ahí vas a encontrar dos cosas:

- **`INTRO`**: la portada, con formato de "perfil de pareja" (como una
  carátula de Netflix). Sus campos son:
  - `names`: el título grande en cursiva, ej. `"Gisselle y Lucas"`.
  - `badge`: la etiqueta roja arriba del título, ej. `"N Parejas"`.
  - `tag`: la etiqueta pequeña junto al año, ej. `"1ª Favorito"`.
  - `handle`: el usuario que se muestra junto a los botones, ej. `"@usuario"`.
  - `diary`: la sinopsis, el texto que cuenta cómo empezó todo.
  - `spotifyEmbed`: opcional, la canción de ese día (no se muestra en
    la portada, pero queda guardada si luego quieres usarla).

- **`MESES`**: un arreglo con un bloque por cada mes cumplido, con este formato:

```js
{
  eyebrow: "Mes I",
  headline: "El primer mes",
  diary: "Aquí va el recuerdo del mes...",
  caption1: "ese día",
  caption2: "nosotros",
  spotifyEmbed: ""
}
```

- `eyebrow`: la etiqueta pequeña arriba del título (como una sección de revista).
- `headline`: el título grande de la página.
- `diary`: el texto del "diario". Puedes usar `\n\n` para dejar un espacio entre párrafos.
- `caption1` / `caption2`: la palabra manuscrita bajo cada foto tipo polaroid.
- `spotifyEmbed`: el espacio para la canción (ver abajo).

Hay 12 meses ya creados como plantilla, más la portada. Puedes agregar
más copiando y pegando un bloque nuevo dentro de `MESES`, o quitar los
que no necesites.

## Cómo agregar la canción de Spotify

1. En Spotify, abre la canción → botón **Compartir** → **Insertar canción**.
2. Copia el link que aparece en `src="..."` (algo como
   `https://open.spotify.com/embed/track/XXXXXXXX`).
3. Pégalo en el bloque correspondiente:

```js
spotifyEmbed: "https://open.spotify.com/embed/track/XXXXXXXX"
```

También puedes pegar el `<iframe>` completo tal cual lo copia Spotify, y
la página lo detecta automáticamente. Mientras una página no tenga
canción, se muestra un aviso de "todavía no hay canción para este mes…".

## La fecha de inicio y el bloqueo automático

Al inicio de `js/script.js` hay dos constantes:

```js
const RELATIONSHIP_START = "2026-01-10"; // el día que empezó todo
const REVEAL_DAY = 10;                    // el día del mes de cada capítulo
```

Cámbialas por tu fecha real. A partir de ahí:

- La **portada** usa exactamente `RELATIONSHIP_START` (el día real).
- El **Mes I** cae el `REVEAL_DAY` del mes siguiente (el primer mes cumplido).
- Cada mes después es exactamente un mes más, así que el **Mes XII** cae
  justo en el mes del año cumplido.

Ejemplo: si `RELATIONSHIP_START` es el 10 de enero 2026, la portada es
ese mismo 10 de enero, el Mes I es el 10 de febrero 2026, y el Mes XII
es el 10 de enero 2027.

Las páginas cuyo día todavía no ha llegado se muestran bloqueadas: fotos
borrosas, un listón que dice "Próxima edición" y una nota con cuenta
regresiva ("faltan X días · Prepárate para la nueva aventura"). Se
desbloquean solas cuando llega la fecha (según la fecha del dispositivo
de quien mire la página).

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser privado si prefieres
   que no cualquiera lo vea, o público si no te importa).
2. Sube el contenido de esta carpeta (`index.html`, `css/`, `js/`,
   `images/`) a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En "Source" elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. En un par de minutos GitHub te da un link tipo
   `https://tu-usuario.github.io/tu-repositorio/`.

Listo — cada 10 se actualiza sola, solo necesitas subir las fotos nuevas
y pegar el link de Spotify unos días antes.

