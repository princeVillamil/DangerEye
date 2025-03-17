const express = require("express")
const app = express()
const cors = require("cors");

require("dotenv").config();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors()); //need to communicate on diff PORT

const admin = require("firebase-admin");
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

//Gets users using UID
app.get("/api/users/:uid", async (req, res) => {
  const { uid } = req.params; // Get UID from URL

  try {
      const userDoc = await db.collection("users").doc(uid).get();

      if (!userDoc.exists) {
          return res.status(404).json({ error: "User not found" });
      }

      res.json({ uid: userDoc.id, ...userDoc.data() });
  } catch (error) {
      res.status(500).json({ error: "Error retrieving user", details: error.message });
  }
});


//adds new users to firestore
app.post("/api/users/add", async (req, res) => {
    const { uid, displayName, email, photoURL, emailVerified, metadata } = req.body;
  
    if (!uid || !email) {
      return res.status(400).json({ error: "Missing required user data" });
    }
  
    try {
      // Convert metadata timestamp to readable date
    //   const createdAt = new Date(parseInt(metadata.createdAt)).toISOString();
    //   const lastLoginAt = new Date(parseInt(metadata.lastLoginAt)).toISOString();
  
      const userRef = db.collection("users").doc(uid);
      await userRef.set(
        {
          uid,
          displayName: displayName || null,
          email,
          photoURL: photoURL || null,
          emailVerified,
        //   createdAt,
        //   lastLoginAt,
          createdReportsID: []
        },
        { merge: true } // Merge to update existing user
      );
      console.log("got this far")
      res.status(200).json({ message: "User stored successfully", uid });
    } catch (error) {
      res.status(500).json({ error: "Error storing user", details: error.message });
    }
  });
//adds pinnedLocation to firestore db
app.post("/api/pinnedCollection/add", async (req, res) => {
  const { lng, lat, note, tags, hazardType, id, userID, timestamp, likes } = req.body;

  if (!id || !lng || !lat || !userID) {
    return res.status(400).json({ error: "Missing required hazard data" });
  }

  try {
    const pinRef = db.collection("pinnedCollection").doc(id.toString());
    await pinRef.set(
      {
        lng,
        lat,
        note: note || "",
        tags: tags || [],
        hazardType: hazardType || "unknown",
        id,
        userID,
        timestamp: timestamp || new Date().toISOString(),
        likes: likes || 0,
      },
      { merge: true } // Merge to update existing pins
    );

    console.log("Hazard pinned successfully!");
    res.status(200).json({ message: "Hazard pinned successfully", id });
  } catch (error) {
    res.status(500).json({ error: "Error pinning hazard", details: error.message });
  }
});
//Get all documents in pinnedCollections
app.get("/api/pinnedCollection", async (req, res) => {
  try {
    const pinnedCollectionRef = db.collection("pinnedCollection");
    const snapshot = await pinnedCollectionRef.get();

    if (snapshot.empty) {
      return res.status(404).json({ message: "No pinned hazards found" });
    }

    const pins = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(pins);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving pinned hazards", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// APIs //


const PORT = process.env.PORT || 3002
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})