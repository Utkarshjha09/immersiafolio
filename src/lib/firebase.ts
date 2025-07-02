import admin from 'firebase-admin';

// This is the recommended way to initialize the Admin SDK in Google Cloud environments like App Hosting.
// It automatically uses the service account associated with the environment.
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

// Export the Firestore database instance
const db = admin.firestore();

export { db };
