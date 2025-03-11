const express = require("express")
const app = express()
const cors = require("cors");

require("dotenv").config();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors()); //need to communicate on diff PORT

const admin = require("firebase-admin")
// const credential = require("./firebaseServiceAccount.json")
const credential = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  };

admin.initializeApp({
    credential: admin.credential.cert(credential),
});

const db = admin.firestore();

async function authenticateToken(req, res, next) {
const token = req.headers.authorization?.split("Bearer ")[1];

if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken; // Extracts the UID
        next();
    } catch (error) {
        return res.status(403).json({ error: "Invalid or expired token" });
    }
}

/*

given firebase data
{
  "uid": "abcdefgh1234567",
  "email": "test@example.com",
  "emailVerified": false,
  "displayName": null,
  "photoURL": null,
  "metadata": {
    "creationTime": "Wed, 12 Mar 2025 10:00:00 GMT",
    "lastSignInTime": "Wed, 12 Mar 2025 10:00:00 GMT"
  },
  "providerData": [
    {
      "providerId": "password",
      "uid": "test@example.com",
      "displayName": null,
      "email": "test@example.com",
      "photoURL": null
    }
  ]
}

*/




// APIs //
app.post("/api/users", authenticateToken, async (req, res) => {
    const { uid, email, emailVerified, displayName, photoURL, metadata, providerData } = req.body;
    if (!uid) {
        return res.status(400).json({ error: "UID is required" });
    }
    try {
        await db.collection("users").doc(uid).set({
        email,
        emailVerified,
        displayName,
        photoURL,
        metadata,
        providerData,
        });
        res.json({ message: "User data saved successfully", uid });
    } catch (error) {
        res.status(500).json({ error: "Error saving user data", details: error.message });
    }
});


// APIs //


const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})