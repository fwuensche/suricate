# Suricate

Point of sale application with thermal printer support.

## Development

```bash
npm run dev     # Start the development server
npm run deploy  # Deploy the application
```

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
