# Alternative Halloween Fest 🎃

Landing page (hero) del festival de Halloween de **Alternative**.

- Fecha: 31 de octubre (cuenta regresiva automática al año en curso)
- Ubicación: próximamente
- Boletos: próximamente

## Requisitos

- Node.js 18+

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  main.jsx                      # Punto de entrada de React
  App.jsx                       # Composición del hero
  index.css                     # Tailwind + keyframes atmosféricos
  components/
    AtmosphericBackground.jsx   # Imagen, halos, niebla y viñetas
    BatSwarm.jsx                # Enjambre de murciélagos animado
    EmbersCanvas.jsx            # Partículas de brasas (canvas)
    NavBar.jsx                  # Barra con la marca y estado "Próximamente"
    Hero.jsx                    # Badge, título, invitación y botones
    Countdown.jsx               # Cuenta regresiva al 31 de octubre
    EventFooter.jsx             # Franja de detalles (fecha, lugar, boletos)
```
