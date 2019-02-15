/**
 * @author Mahmud Ahsan <https://github.com/mahmudahsan>
 */

import Firebase from './firebaseauth';

const getPlaylist = (collectionName) => {
  return new Promise((resolve, reject) => {
    const db = Firebase.firestore();
    const collectionRef = db.collection(collectionName);

    let playList = [];

    collectionRef.get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const obj = {
            id: doc.id, 
            title: doc.data()['title'],
            description: doc.data()['description'],
            youtube: doc.data()['youtube']
          }
          playList.push(obj);
        });
        playList.sort((a, b) => ( a.id - b.id ));
        resolve (playList);
      });
  });
};

export default getPlaylist;

// use to add item in firebase
const addItemInPlaylist = (collectionName, id, title, description, youtube) => {
  return new Promise((resolve, reject) => {
    const db = Firebase.firestore();
    const collectionRef = db.collection(collectionName);

    // document id externally provided
    collectionRef.doc(id).set({
      title: title, 
      description: description,
      youtube: youtube
    })
    .then(() => {
      console.log("Success.");
    })
    .catch((error) => {
      console.log("Error. " + error);
    });
  });
};

export {addItemInPlaylist};