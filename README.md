# Expo Flagpole App

En mobilapplikation byggd med **Expo** och **React Native** där användaren kan se och interagera med flaggstänger på en karta. Appen använder GPS-positionering och ljud för att skapa en interaktiv upplevelse.

## 🚩 Funktioner

- Visa användarens position på karta
- Markera flaggstänger på kartan
- Spela upp ljud när användaren är nära en flaggstång
- Skicka och visa meddelanden kopplade till flaggstänger

## 🛠️ Tekniker & Paket

- **expo-router** – Navigering
- **react-native-maps** – Kartkomponent
- **expo-location** – Hämta användarens GPS-position
- **expo-audio** – Spela upp ljud
- **expo-image** – Bildhantering
- **Jotai** – Tillståndshantering

## 🚀 Kom igång

### Förutsättningar

- Node.js & npm
- Expo CLI (installera med `npm install -g expo`)

### Installation

1. Klona projektet:
   ```bash
   git clone https://github.com/Ratmastererik/expo-project-1.git
   cd expo-project-1
   ```
2. Installera beroenden:
   ```bash
   npm install
   ```

### Starta appen

Kör följande kommando för att starta utvecklingsservern:

```bash
npm start
```

eller

```bash
expo start
```

Följ instruktionerna i terminalen för att öppna appen i en emulator eller på din mobil med Expo Go.

## 📂 Projektstruktur

- `app/` – Sidor och navigering
- `components/` – Återanvändbara React-komponenter (karta, flaggstångsmarkörer, menyer, formulär mm)
- `data/` – Statisk data (flaggstänger, användare)
- `hooks/` – Egna React hooks (t.ex. för ljud och position)
- `utils/` – Hjälpfunktioner
- `assets/` – Bilder, ljud och typsnitt

## 📝 Exempel på användning

1. Starta appen och ge platsbehörighet.
2. Din position visas på kartan.
3. När du närmar dig en flaggstång spelas ett ljud.
4. Tryck på en flaggstång för att se eller lämna ett meddelande.

## 📦 Scripts

- `npm start` – Startar Expo-utvecklingsservern
- `npm run android` – Startar på Android-emulator
- `npm run ios` – Startar på iOS-simulator
- `npm run web` – Startar i webbläsare

## 🧑‍💻 Utveckling

Koden är skriven i TypeScript och följer moderna React Native-principer. Pull requests och förbättringsförslag välkomnas!

## 📄 Licens

MIT
