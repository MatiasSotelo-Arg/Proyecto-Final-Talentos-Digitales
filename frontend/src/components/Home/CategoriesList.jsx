import React, {useEffect, useState} from "react";
import { fetchCourse } from "../../services/courseCategory";
import { useFetch } from "../../hooks/useFetch";

const CategoriesList = () => {

    // const [categories, setCategories] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const getCategories = async() => {
    //         const data = await fetchCourse(); 
    //         setCategories(data);
    //         setLoading(false)
    //     }

    //     getCategories(); 
    // }, []);

    const {data, loading} = useFetch(import.meta.env.VITE_API_URL + "api/courses")

    console.log(data);

    if(loading) return <p>Recibiendo las categorias...</p>

    return (
        <> 
        {
            data.map((category) => (
            <div key={category.id}>
                {category.category}
            </div>
        ))}
        </>
       
    )
}

export default CategoriesList;