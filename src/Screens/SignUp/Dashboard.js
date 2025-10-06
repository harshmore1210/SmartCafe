import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, useNavigate } from "react-router-dom";
import "../SignUp/SignUp.css";
import { images } from "../../Constant/index";
import { auth, db, logout,useAuth,storage, } from "../../firebase";
import { query, collection, getDocs, where, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      setEmail(data.email);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/sign-up");
    fetchUserName();
  }, [user, loading]);

//form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];

    //Create a unique image name
    const date = new Date().getTime();
    const storageRef = ref(storage, `profile/${name}`);
    const userRef = query(collection(db, "users"), where("uid", "==", user?.uid));
    const findUsers = await getDocs(userRef);
    findUsers.forEach(async (user) => {
      const getUser = doc(db, 'users', user?.id);
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateDoc(getUser, {
              // name,
              photoURL: downloadURL,
            });
            navigate("/dashboard")
          } catch {
            console.log(err);
            setErr(true);
            // setLoading1(false);
          }
        });
      });
    });
  };


  return (
    <section>
      <div className="dashboard">
        <div className="dashboard__container">
          Logged in as
          <div>{name}</div>
          <div>{email}</div>
          <NavLink to="/edit">
            <button className="dashboard__btn">
              Edit
            </button>
          </NavLink>
          <button className="dashboard__btn" onClick={logout}>
            Logout
          </button>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img
              src={images.logo}
              style={{ height: "50px", marginLeft: "20px" }}
              alt=""
            />
            <span style={{ marginLeft: "20px" }}>Add an avatar</span>
            <button style={{ borderRadius: "20px", marginLeft: "20px" }}>
              Upload
            </button>
          </label>
        </form>
      </div>
      </div>
    </section>
  );
}
export default Dashboard;
