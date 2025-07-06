import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { ref, runTransaction, get} from "firebase/database";
import {setUser, logoutUser} from "@/redux/slices/UserSlice.js";
import { app, db} from "@/firebase";

const auth = getAuth(app);

export const registerUser = async (email, password, userName) => {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(userCredentials.user, {
        displayName: userName,
    });

    return userCredentials;
}

export const loginUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signInWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    try {
        return await signInWithPopup(auth, provider);
    } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
            throw new Error("Account exists with a different sign-in method.");
        }
        throw error;
    }
};

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        return await signInWithPopup(auth, provider);
    } catch (error) {
        if (error.code === "auth/account-exists-with-different-credential") {
            throw new Error("Account exists with a different sign-in method.");
        }
        throw error;
    }
};

export const signOutUser = async () => {
    return await signOut(auth);
}

export const checkUserAuth = (dispatch) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({
                email: user.email,
                uid: user.uid,
                displayName: user.displayName,
            }));
        }
        else {
            dispatch(logoutUser());
        }
    })
}

export const incrementUsersCount = async () => {
    const userCountRef = ref(db, "userCount");
    await runTransaction(userCountRef, (count) => {
        return (count || 0) + 1;
    });
}

export const getUserCount = async () => {
    const userCountRef = ref(db, "userCount");
    const snapshot = await get(userCountRef);

    if(snapshot.exists()){
        return snapshot.val();
    }
    else{
        return 0;
    }
}