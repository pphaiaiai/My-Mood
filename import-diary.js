var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "/***** replace with your databaseURL ************/"
});

var db = getFirestore() ;

var diary = [
    {
        "title": "เรื่องราวที่ 1",
        "mood": "happy",
        "description": "ฉันรู้สึกมีความสุขมากวันนี้",
        "created_at": "2021-04-01 12:00:00",
        "is_public": true,
        "favorite": {
            "count": 3,
            "comment": [
                {"username": "tarathep", "comment": "เรื่องราวนี้ดีมาก"},
                {"username": "kittipat", "comment": "good story"},
                {"username": "user3", "comment": "I like this story"}
            ]
        },
        "username": "tarathep"
    },
    {
        "title": "วันนี้ฉันรู้สึกเศร้ามาก",
        "mood": "sad",
        "description": "ทำไมฉันทำได้ไม่ดีพอ",
        "created_at": "2021-04-01 12:00:00",
        "is_public": true,
        "favorite": {
            "count": 2,
            "comment": [
                {"username": "tarathep", "comment": "อย่าเศร้านะ"},
                {"username": "kittipat", "comment": "I feel you"}
            ]
        },
        "username": "tarathep"
    },
    {
        "title": "วันอะไรวันนี้",
        "mood": "angry",
        "description": "โกรธมากวันนี้",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "kittipat"
    },
    {
        "title": "กดไลค์ให้ฉันหน่อย",
        "mood": "scared",
        "description": "อยากให้คนอื่นกดไลค์ให้ฉัน",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "user10"
    },
    {
        "title": "ไม่รู้ว่าจะเขียนอะไร",
        "mood": "surprised",
        "description": "",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "user10"
    },
    {
        "title": "อะไรก็ได้",
        "mood": "disgusted",
        "description": "",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "user10"
    },
    {
        "title": "i don't know what to write",
        "mood": "confused",
        "description": "everything is confusing",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "user10"
    },
    {
        "title": "this is a title",
        "mood": "bored",
        "description": "something something something",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "user10"
    },
    {
        "title": "damn it",
        "mood": "excited",
        "description": "so excited",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "user10"
    },
    {
        "title": "test test test",
        "mood": "relaxed",
        "description": "what is this",
        "created_at": "2021-04-01 12:00:00",
        "is_public": false,
        "favorite": {
            "count": 0,
            "comment": []
        },
        "username": "user10"
    }
]

diary.forEach(function(obj){
    db.collection("diary").doc(obj.id).set({
        username: obj.name,
        password: obj.state,
        email: obj.country,
        display_name: obj.capital,
        is_admin: obj.population,
    }).then( docRef => { console.log("Document written with ID : "+ docRef.id)})
});


