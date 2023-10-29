import { signInWithPopup, signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider, getRedirectResult } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const initiateSignInWithRedirect = (providerName) => {
  let authProvider;
  switch (providerName) {
    case "google":
      authProvider = new GoogleAuthProvider();
      break;
    case "facebook":
      authProvider = new FacebookAuthProvider();
      break;
    default:
      throw new Error("Invalid provider");
  }

  signInWithRedirect(auth, authProvider);
};

export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);

    if (result.user) {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
      return { token, user };
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData?.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error(errorCode, errorMessage, email, credential);
    return Promise.reject(error);
  }
};

// export const _signInWithPopup = (provider) => {
//   console.log(provider);
//   let authProvider;
//   switch (provider) {
//     case "google":
//       authProvider = new GoogleAuthProvider();
//       break;
//     case "facebook":
//       authProvider = new FacebookAuthProvider();
//       break;
//     // case "apple":
//     //   signInWithPopup(auth, new AppleAuthProvider());
//     //   break;
//     default:
//       return Promise.reject("Invalid provider");
//   }

//   signInWithPopup(auth, new GoogleAuthProvider())
//     .then((result) => {
//       console.log(result);
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       return Promise.resolve({ token, user });
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = authProvider.credentialFromError(error);
//       console.error(errorCode, errorMessage, email, credential);
//       return Promise.reject(error);
//     });
// };
