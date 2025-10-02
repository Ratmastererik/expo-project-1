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
npm expo start
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

## Krav för godkänt

[x] Projektet använder minst 4 stycken RN-komponenter och minst 4 stycken Expo
komponenter.

[x] De utvalda komponenterna MÅSTE antecknas i README filen tillsammans med en
lista över genomförda krav.

[x] React Navigation används för att skapa en bättre upplevelse i appen.

[x] Git & GitHub har använts.

[x] Projektmappen innehåller en README.md fil.

[x] Uppgiften lämnas in i tid!

[x] Muntlig presentation är genomförd

## Krav för väl godkänt

[x] Alla punkter för godkänt är uppfyllda

[x] Ytterligare en valfri extern modul används i projektet (jotai).

[] Appen ska prata med ett Web-API för att hämta data.
