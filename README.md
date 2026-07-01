# Suricate

Point of sale application with thermal printer support.

## Development

```bash
npm run dev     # Start the development server
```

See [Deployment](#deployment) below for how the app is published.

## Deployment

The app is published to GitHub Pages at **https://anteloio.github.io/suricate/**.

There are two ways it gets deployed:

### Manual deploy — Bruno's machine (primary)

Bruno deploys from his own computer by running the `GENERER.sh` script, which lives in his
local clone at `/Users/brunoferre/Desktop/MENU/suricate`:

```bash
./GENERER.sh
```

The script runs the full cycle, in order:

1. `git pull` — pull the latest changes
2. `npm install` — install/update dependencies
3. `npm run deploy` — build the app and push `dist/` to the `gh-pages` branch (`gh-pages -d dist`)
4. `git add . && git commit -m "update" && git push` — commit the rebuilt `dist/` and push to `main`

If any step fails, the script prints `UNE ERREUR EST SURVENUE` and pauses so the error stays visible.

> **Note:** `dist/` is committed to the repo on purpose (it is *not* gitignored), because
> `GENERER.sh` rebuilds and commits it on every deploy.

### Automatic deploy — GitHub Actions

Every push to `main` also triggers the `.github/workflows/deploy.yml` workflow, which builds the
app and publishes `dist/` to GitHub Pages automatically.

## Connecting from Mobile Device (Android Tablet)

To test the thermal printer functionality on your Android device:

- Find your computer's local IP address:

  - Mac: `ipconfig getifaddr en0`
  - Linux: `hostname -I`
  - Windows: `ipconfig` (look for IPv4 Address)

- Make sure your mobile device is on the same WiFi network

- Access the app from your mobile device's browser: http://192.168.1.94:5173

## Thermal Printer Integration

The app integrates with **RawBT Printer** app on Android devices for Bluetooth thermal printing:

- Install RawBT Printer from Google Play Store
- Connect your Bluetooth thermal printer through the RawBT app
- When you click "Imprimer", the receipt will be sent directly to the thermal printer
- On non-Android devices, a preview window will open instead
