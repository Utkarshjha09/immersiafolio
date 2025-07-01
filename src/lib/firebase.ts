'use server';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
// This checks if the app is already initialized to prevent errors.
if (!admin.apps.length) {
  admin.initializeApp({
    // When running on Firebase/Google Cloud, credentials are automatically discovered.
    // For local development, you need to be authenticated via the Firebase CLI.
  });
}

// Export the Firestore database instance
const db = admin.firestore();

export { db };
