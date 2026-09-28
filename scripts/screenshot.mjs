/* Capturas de verificación: espera carga completa (red + fuentes) antes de fotografiar */
import puppeteer from 'puppeteer-core'
import { existsSync } from 'node:fs'

const EDGE_PATHS = [
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
]
const executablePath = EDGE_PATHS.find((p) => existsSync(p))
const url = process.argv[2] ?? 'http://localhost:5173/'

const browser = await puppeteer.launch({ executablePath, headless: 'new' })

for (const [name, width, height] of [
  ['preview-1440.png', 1440, 900],
  ['preview-mobile.png', 390, 844],
]) {
  const page = await browser.newPage()
  await page.setViewport({ width, height })
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
  await page.evaluate(() => document.fonts.ready)
  await new Promise((r) => setTimeout(r, 2600))
  await page.screenshot({ path: name })
  await page.close()
  console.log(`${name} ok`)
}

await browser.close()
