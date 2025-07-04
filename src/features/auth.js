import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    GithubAuthProvider,
    fetchSignInMethodsForEmail,
    linkWithCredential,
    signInWithPopup
} from "firebase/auth";
import {setUser, logoutUser} from "@/redux/slices/UserSlice.js";
import app from "@/firebase";

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

export const changeName = async (userName) => {
    const user = auth.currentUser;
    if (!user) throw new Error("No authenticated user");

    await updateProfile(user,{
        displayName: userName,
    });

    return user;
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