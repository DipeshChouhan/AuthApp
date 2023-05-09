import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const AuthErrors = {
  EmailAlreadyInUse: 'auth/email-alread-in-use',
  InvalidEmail: 'auth/invalid-email',
};

/*
 * user -> {name, email, password}
 * callbacks -> {onSuccess, onError}
 * */

function registerUser(user, callbacks) {
  auth()
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(response => {
      const uid = response.user.uid;
      const data = {
        id: uid,
        email: user.email,
        name: user.name,
      };
      const usersCollection = firestore().collection('users').doc(uid);
      usersCollection
        .set(data)
        .then(() => {
          console.log(data);
          callbacks.onSuccess(data);
        })
        .catch(error => {
          console.log(error);
          callbacks.onError(error);
        });
    })
    .catch(error => {
      console.log(error);
      callbacks.onError(error);
    });
}

function loginUser(user, callbacks) {
  auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(response => {
      const uid = response.user.uid;
      const usersCollection = firestore().collection('users').doc(uid);

      usersCollection
        .get()
        .then(userDoc => {
          callbacks.onSuccess(userDoc.data());
        })
        .catch(error => {
          callbacks.onError(error);
        });
    })
    .catch(error => {
      callbacks.onError(error);
    });
}

function logoutUser(callbacks) {
  auth()
    .signOut()
    .then(() => {
      callbacks.onSuccess();
    })
    .catch(error => {
      callbacks.onError(error);
    });
}

function getUser(uid, callbacks) {
  firestore()
    .collection('users')
    .doc(uid)
    .get()
    .then(userDoc => {
      callbacks.onSuccess(userDoc.data());
    })
    .catch(error => {
      callbacks.onError(error);
    });
}

export { registerUser, loginUser, AuthErrors, getUser, logoutUser };
