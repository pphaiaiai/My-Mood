var admin = require("firebase-admin");
const { getFirestore } = require('firebase-admin/firestore')

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "/***** replace with your databaseURL ************/"
});

var db = getFirestore() ;

var users = [
    {
        "username": "tarathep",
        "password": 63130500055,
        "email": "tarathep.siripis@mail.kmutt.ac.th",
        "display_name": ["Tarathep", "pphaiaiai", "Admin Tarathep"],
        "is_admin": true
    },
    {
        "username": "kittipat",
        "password": 123456789,
        "email": "kitt.123@gmail.com",
        "display_name": ["Kittipat", "Kitt"],
        "is_admin": false
    },
    {
        "username": "user3",
        "password": 123456789,
        "email": "user_id3@gmail.com",
        "display_name": ["uid3"],
        "is_admin": false
    },
    {
        "username": "user4",
        "password": 123456789,
        "email": "uid4@gmail.com",
        "display_name": ["uid4"],
        "is_admin": false
    },
    {
        "username": "user5",
        "password": 123456789,
        "email": "uid5@gmail.com",
        "display_name": ["uid5"],
        "is_admin": false
    },
    {
        "username": "user6",
        "password": 123456789,
        "email": "uid6@gmail.com",
        "display_name": ["uid6"],
        "is_admin": false
    },
    {
        "username": "user7",
        "password": 123456789,
        "email": "uid7@gmail.com",
        "display_name": ["uid7"],
        "is_admin": false
    },
    {
        "username": "user8",
        "password": 123456789,
        "email": "uid8@gmail.com",
        "display_name": ["uid8"],
        "is_admin": false
    },
    {
        "username": "user9",
        "password": 123456789,
        "email": "uid9@gmail.com",
        "display_name": ["uid9"],
        "is_admin": false
    },
    {
        "username": "user10",
        "password": 123456789,
        "email": "uid10@gmail.com",
        "display_name": ["uid10"],
        "is_admin": false
    }
]

users.forEach(function(obj){
    db.collection("users").add({
        username: obj.username,
        password: obj.password,
        email: obj.email,
        display_name: obj.display_name,
        is_admin: obj.is_admin,
    }).then( docRef => { console.log("Document written with ID : "+ docRef.id)})
});


