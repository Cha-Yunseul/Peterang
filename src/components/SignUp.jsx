import { auth } from '../firebase-config';

function SignUp() {
  const onSignIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setIsLoggedIn(true);
    } catch (e) {
      setError(e.message);
    }
  };

  const onSignUp = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setIsLoggedIn(true);
    } catch (e) {
      setError(e.message);
    }
  };

  const onSignOut = async () => {
    await auth.signOut();
    setIsLoggedIn(false);
  };

  return (
    <div>
      <input
        placeholder="Email"
        onChange={(e) => {
          setRegisterEmail(e.target.value);
        }}
      />
      <input
        placeholder="EmailPassword"
        onChange={(e) => {
          setRegisterPassword(e.target.value);
        }}
      />
      <button onClick={onSignUp}>CreateUser</button>
    </div>
  );
}

export default SignUp;
