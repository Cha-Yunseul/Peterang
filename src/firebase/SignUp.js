import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';

//회원가입
const Signup = async (email, password) => {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error.message);
    alert(error.message);
  }
};

export default Signup;
