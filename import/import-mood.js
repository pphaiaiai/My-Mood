var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "/***** replace with your databaseURL ************/"
});

var db = getFirestore() ;

var mood = [
    {
        "mood": "happy",
        "description": "อารมณ์แห่งความสุข มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกดี"
    },
    {
        "mood": "sad",
        "description": "อารมณ์แห่งความเศร้า มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกเศร้า"
    },
    {
        "mood": "angry",
        "description": "อารมณ์แห่งความโกรธ มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกโกรธ"
    },
    {
        "mood": "scared",
        "description": "อารมณ์แห่งความกลัว มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกกลัว"
    },
    {
        "mood": "surprised",
        "description": "อารมณ์แห่งความประหลาดใจ มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกประหลาดใจ"
    },
    {
        "mood": "disgusted",
        "description": "อารมณ์แห่งความอับอาย มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกอับอาย"
    },
    {
        "mood": "confused",
        "description": "อารมณ์แห่งความสับสน มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกสับสน"
    },
    {
        "mood": "bored",
        "description": "อารมณ์แห่งความเบื่อ มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกเบื่อ"
    },
    {
        "mood": "excited",
        "description": "อารมณ์แห่งความตื่นเต้น มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกตื่นเต้น"
    },
    {
        "mood": "relaxed",
        "description": "อารมณ์แห่งความผ่อนคลาย มักใส่ในเรื่องราวที่ได้เขียนเพราะรู้สึกผ่อนคลาย"
    }
]

mood.forEach(function(obj){
    db.collection("mood").doc(obj.id).set({
        mood: obj.mood,
        description: obj.description,
    }).then( docRef => { console.log("Document written with ID : "+ docRef.id)})
});


