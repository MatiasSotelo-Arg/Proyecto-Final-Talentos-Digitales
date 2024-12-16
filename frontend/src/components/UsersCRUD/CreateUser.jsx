import { useDispatch } from "react-redux";
import { useState } from "react";

const CreateUser = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    roll: "",
    myCourses: [],
    like: [],
    favourites: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userData);
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Error al crear el curso");
      }

      const data = await response.json();
      dispatch(createCourse(data));
      alert("Curso creado exitosamente");
    } catch (error) {
      console.error("Error:", error);
      alert("Error al crear el curso");
    }
  };
};
