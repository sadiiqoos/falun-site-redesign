# Guide: Publicera American Take Away Falun på App Stores

## Steg 1: Förbered projektet

### A. Installera beroenden
```bash
npm install @capacitor/core @capacitor/cli @capacitor/android @capacitor/ios
npm install @capacitor/splash-screen @capacitor/status-bar @capacitor/push-notifications
```

### B. Bygg webbappen
```bash
npm run build
npx next export -o out
```

### C. Initiera Capacitor
```bash
npx cap init "American Take Away Falun" "se.americantakeawayfalun.app"
npx cap add android
npx cap add ios
```

---

## Steg 2: Google Play Store (Android)

### Krav:
- Google Play Developer-konto ($25 engångskostnad)
- App-ikoner (redan inkluderade i /public/icons/)
- Skärmdumpar (minst 2 st)
- Integritetspolicy URL

### Steg:
1. **Synka och bygg:**
   ```bash
   npx cap sync android
   npx cap open android
   ```

2. **I Android Studio:**
   - Gå till Build → Generate Signed Bundle / APK
   - Skapa en ny keystore (spara den säkert!)
   - Välj "Android App Bundle"
   - Bygg för release

3. **Ladda upp till Google Play Console:**
   - Skapa ny app
   - Ladda upp AAB-filen
   - Fyll i butiksinformation
   - Skicka för granskning (tar 1-7 dagar)

---

## Steg 3: Apple App Store (iOS)

### Krav:
- Apple Developer-konto ($99/år)
- Mac med Xcode
- App-ikoner (redan inkluderade)
- Skärmdumpar för iPhone/iPad

### Steg:
1. **Synka och öppna:**
   ```bash
   npx cap sync ios
   npx cap open ios
   ```

2. **I Xcode:**
   - Välj ditt team under Signing & Capabilities
   - Uppdatera Bundle Identifier till: se.americantakeawayfalun.app
   - Arkivera appen: Product → Archive
   - Distribuera till App Store Connect

3. **I App Store Connect:**
   - Skapa ny app
   - Ladda upp build
   - Fyll i metadata och skärmdumpar
   - Skicka för granskning (tar 1-3 dagar)

---

## Steg 4: PWA (Fungerar nu!)

Din webbapp är redan en PWA och kan installeras direkt:

### Android:
- Öppna sidan i Chrome
- Klicka på "Installera" när prompten visas
- Eller: Meny → "Lägg till på startskärmen"

### iOS:
- Öppna sidan i Safari
- Tryck på dela-knappen
- Välj "Lägg till på hemskärmen"

---

## App Store Metadata

### Titel:
American Take Away Falun - Pizza

### Kort beskrivning:
Beställ äkta amerikansk pizza direkt från din telefon!

### Lång beskrivning:
Välkommen till American Take Away Falun! 🍕

Upplev äkta amerikansk pizza med tjocka, frasiga bottnar och generösa pålägg. Vår app gör det enkelt att:

✓ Bläddra i hela vår meny
✓ Anpassa din pizza med extra toppings
✓ Beställ tillbehör, drycker och såser
✓ Betala online eller vid upphämtning
✓ Följ din orderhistorik

Öppettider: 15:00 - 21:00 varje dag
Adress: Östra Hamngatan 18, Falun
Telefon: 023-220 44

### Nyckelord:
pizza, falun, american, takeaway, mat, beställa, hämta, restaurang

### Kategori:
Mat & Dryck / Food & Drink

### Åldersgräns:
4+ (ingen stötande innehåll)
