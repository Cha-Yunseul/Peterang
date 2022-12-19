import { firebaseDB } from './firebase-config';

class Repository {
  storeBoard(userId, title) {
    firebaseDB.ref(`제목/${userId}/${title.id}`).set(title);
  }

  deleteBoard(userId, title) {
    firebaseDB.ref(`제목/${userId}/${title.id}`).remove();
  }
  readBoard(userId, onUpdate) {
    const dbRef = firebaseDB.ref(`title/${userId}`);
    dbRef.on('value', (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });
    return dbRef.off;
  }
}
export default Repository;
