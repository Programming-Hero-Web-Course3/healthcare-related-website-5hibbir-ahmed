import { useState } from 'react';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { useEffect } from 'react';

import initializeFirebase from '../Firebase/firebase.init';

initializeFirebase();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [name, setName] = useState();

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		signOut(auth).then(() => {
			setUser({});
		});
	};
	const createUser = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				setUser(user);
				getName();
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};

	const signUpUser = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				setUser(user);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
			});
	};
	const getName = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
		})
			.then(() => {
				// Profile updated!
				// ...
			})
			.catch((error) => {
				// An error occurred
				// ...
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
		});
	}, []);

	return {
		signInUsingGoogle,
		logOut,
		createUser,
		signUpUser,
		setEmail,
		setPassword,
		user,
		setName,
	};
};
export default useFirebase;
