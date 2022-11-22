import { getDatabase, ref, child, get } from "firebase/database";

function ReadData(container, userId, setUserData) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${container}/${userId}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setUserData(snapshot.val());
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export default ReadData;
