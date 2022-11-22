import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import ReadData from "./ReadData";

export function AddData(
  data,
  userId,
  container,
  navigate,
  setCounter,
  counter
) {
  const db = getDatabase();
  set(ref(db, `${container}/data/${counter + 1}`), {
    ...data,
    userId,
    date: "123213",
  });

  navigate("/");
}
