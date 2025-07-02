import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    // Force the SDK to use Application Default Credentials.
    // This can resolve authentication issues in some environments.
    credential: admin.credential.applicationDefault(),
    // Explicitly setting the projectId can also help.
    projectId: 'immersiafolio',
  });
}

// Export the Firestore database instance
const db = admin.firestore();

export { db };
