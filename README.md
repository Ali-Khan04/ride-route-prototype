# Ride Route Prototype

A standalone prototype for implementing a Mapbox-based ride routing and navigation system using **React Native (Expo Dev Client)**. This project is designed to validate and test mapping functionality before integration into the main company application.

---

## 🚀 Tech Stack

- React Native (Expo)
- Expo Dev Client
- Mapbox SDK (@rnmapbox/maps)
- TypeScript
- Android Emulator / Physical Android Device

---

## 🎯 Purpose

This repository serves as:

- A testing ground for Mapbox integration
- A modular base for future navigation features (ETA, route optimization, tracking, etc.)

---

## ⚠️ Important Note About Expo Go

Mapbox requires native SDK integration. Because of this:

- ❌ Expo Go is NOT supported
- ✅ Expo Dev Client is REQUIRED

This means the app must be run using a custom development build instead of the standard Expo Go environment.

---

## 📦 Installation

### 1. Create React Native Project with Expo

```bash
npx create-expo-app ride-testapp
cd ride-testapp
```

### 2. Install Expo Dev Client

```bash
npx expo install expo-dev-client
```

### 3. Install Mapbox Maps SDK

```bash
npm install @rnmapbox/maps
```

---

## 🧱 Project Structure

```
ride-testapp/
│
├── app/
│   ├── _layout.tsx
│   └── index.tsx
│
├── src/
│   ├── screens/
│   │   └── MapScreen.tsx
│   ├── components/
│   │   └── MapView.tsx
│   ├── services/
│   │   └── mapbox.ts
│   
│
├── android/
├── .env
├── app.config.ts
└── package.json
```

---

## 🔐 Environment Variables (.env)

Create a `.env` file in root:

```
EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN=pk_your_mapbox_token_here
```

---

## 🧠 Configuration Flow Explained

### 1. app.config.ts

This file controls how Expo builds the native Android app.

**Responsibilities:**
- App name and identity
- Native permissions
- Plugin configuration
- Injecting Mapbox token at build-time

Changing this file REQUIRES a rebuild using:

```bash
npx expo run:android
```

### 2. mapbox.ts

Responsible for runtime configuration of Mapbox inside the JavaScript layer. It passes the access token when the app starts.

### 3. MapScreen.tsx

Main screen that renders the map component and acts as the entry point for routing features.

---

## 🛠 Android SDK Setup (Critical Step)

Expo requires access to the **Android SDK** (Software Development Kit) to build native apps.

### What is the Android SDK?

The Android SDK is a collection of tools installed on your local machine that lets you:
- Compile Android apps
- Run the Android Emulator
- Debug applications
- Manage Android device connections

**Important:** The build process needs to know where these SDK tools are located on **your local computer**, whether you're using an emulator or a physical device.

---

### 📍 How to Locate Your Android SDK

#### Method 1: Through Android Studio (Easiest)

1. Open **Android Studio**
2. Go to **File → Settings**
3. Navigate to **Appearance & Behavior → System Settings → Android SDK**
4. Look at the top - you'll see **Android SDK Location**
5. Copy that path (usually looks like `C:\Users\YourName\AppData\Local\Android\Sdk`)

#### Method 2: Check Default Windows Path

The SDK is usually installed at:

```
C:\Users\<YOUR_USERNAME>\AppData\Local\Android\Sdk
```

You can verify this by:
1. Opening File Explorer
2. Pasting the path in the address bar (replace `<YOUR_USERNAME>` with your actual username)
3. If the folder exists with subfolders like `platform-tools`, `platforms`, etc., you've found it!

#### Method 3: Check Environment Variables

Open **Command Prompt** and run:

```bash
echo %ANDROID_HOME%
```

If it returns a path, that's your SDK location!

---

### ❓ Do I Need Android Studio?

**Short answer: Not technically, but highly recommended.**

Here's why:
- ✅ Android Studio installs the SDK automatically
- ✅ Manages SDK updates and tools
- ✅ Provides the Android Emulator
- ✅ Makes development much easier

**Without Android Studio:**
- You'd need to manually download and configure the SDK command-line tools
- Much more complex setup
- Harder to troubleshoot issues

**Recommendation:** Install Android Studio even if you only use VS Code for React Native development. You don't need to use Android Studio as your main editor, but it's the easiest way to manage Android SDK and emulators.

---

### ✅ Required Action

Create this file in your project:

```
android/local.properties
```

And add (replace `<YOUR_USERNAME>` with your actual Windows username):

```
sdk.dir=C:\\Users\\<YOUR_USERNAME>\\AppData\\Local\\Android\\Sdk
```

**Example:**
```
sdk.dir=C:\\Users\\AliAhmed\\AppData\\Local\\Android\\Sdk
```

**Note:** Use double backslashes `\\` on Windows!

---

### Alternative Method: Environment Variables

You can also set the environment variable:

```
ANDROID_HOME=C:\Users\<YOUR_USERNAME>\AppData\Local\Android\Sdk
```

And add this to PATH:

```
%ANDROID_HOME%\platform-tools
```

This ensures the Android build system knows where SDK tools are located on your machine.

---

### 📱 Do You Need an Android Emulator?

**Short Answer:** No, but you need **either** an emulator **or** a physical Android device.

#### Option 1: Android Emulator (Easier for Development)
- ✅ Built into Android Studio
- ✅ No need for a physical device
- ✅ Can test different Android versions easily
- ❌ Slower performance
- ❌ Uses more computer resources

#### Option 2: Physical Android Device (Recommended for Testing)
- ✅ Faster and more responsive
- ✅ Real-world testing conditions
- ✅ Better for testing GPS, camera, sensors
- ❌ Requires USB cable
- ❌ Need to enable Developer Options on the device

**To use a physical device:**
1. Enable **Developer Options** on your Android phone
2. Enable **USB Debugging**
3. Connect via USB cable
4. Run `adb devices` to verify connection
5. Run `npx expo run:android` - it will detect your device

---

### 🔍 Verify Your Setup

To check if everything is configured correctly, run:

```bash
adb devices
```

You should see your connected emulator or physical device listed.

---

## ▶️ How To Run The App

### ✅ First Time / Native Changes

Use this ONLY when changing native configuration or adding native libraries:

```bash
npx expo run:android
```

### ✅ Daily Development (Normal Use)

This is your regular command:

```bash
npx expo start --dev-client
```

This launches the dev server and connects to the already built Android client.

---

## 🔁 When Rebuild Is Required

| Action | Rebuild Needed |
|--------------------------------|----------------|
| Changing app.config.ts | ✅ Yes |
| Installing new native plugin | ✅ Yes |
| Updating Mapbox config | ✅ Yes |
| UI / business logic changes | ❌ No |

---

## 🧪 Current Features

- Mapbox map rendering
- GPS-based user location
- Modular code structure
- Native-ready configuration

**Planned features:**
- Route drawing between points
- Start/End marker selection
- ETA and distance calculation
- Supabase trip storage

---
```

---

## 🗒 Developer Notes

- This project avoids Expo Go due to Mapbox native dependency.
---

## ✅ Status

- ✔ Mapbox successfully integrated
- ✔ Development environment configured
- 🚧 Feature implementation in progress

---

## 👨‍💻 Maintainer

**Ali Ahmed Khan**  
Computer Engineering | React Native | Mapping Systems

---

For questions or changes related to the development workflow, refer to this README 
