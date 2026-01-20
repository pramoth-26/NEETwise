# MyNewApp

A React Native Expo application featuring a product catalog with Firebase integration, user authentication, and theme switching.

## Features

- **User Authentication**: Login and logout functionality using Firebase Auth
- **Product Catalog**: Browse products with pagination, sorting, and category filtering
- **Theme Support**: Light and dark theme toggle
- **Responsive Design**: Optimized for mobile devices
- **Firebase Integration**: Real-time database for products and user data
- **Navigation**: Stack and drawer navigation for seamless user experience

## Technologies Used

- **React Native**: Framework for building native apps
- **Expo**: Platform for universal React applications
- **Firebase**: Backend services for authentication and database
- **React Navigation**: Navigation library for React Native
- **Context API**: State management for theme

## Prerequisites

- Node.js (version 14 or later)
- npm or yarn
- Expo CLI
- Firebase project setup

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Copy your Firebase config to `src/firebase.js`

3. Start the development server:
   ```bash
   npm start
   ```

## Running the App

- **iOS**: `npm run ios` (requires Xcode and iOS Simulator)
- **Android**: `npm run android` (requires Android Studio and emulator)
- **Web**: `npm run web`
- **Expo Go**: Scan QR code with Expo Go app on your device

## Project Structure

```
MyNewApp/
├── assets/                 # Static assets (images, icons)
├── src/
│   ├── api/               # API functions (Firebase queries)
│   ├── components/        # Reusable UI components
│   ├── context/           # React Context for state management
│   ├── firebase.js        # Firebase configuration
│   ├── navigation/        # Navigation setup
│   └── screens/           # App screens
├── App.js                 # Main app component
├── app.json               # Expo configuration
├── index.js               # Entry point
└── package.json           # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.</content>
<parameter name="filePath">/workspaces/expodemo/MyNewApp/README.md