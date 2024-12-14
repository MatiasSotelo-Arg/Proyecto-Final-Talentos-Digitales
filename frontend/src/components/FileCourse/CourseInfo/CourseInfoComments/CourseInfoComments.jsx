import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../../../redux/commentsSlice";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";

const CourseInfoComments = () => {

    // Obtener Comentarios de la BD
     const { data, loading, error } = useFetch(
        import.meta.env.VITE_API_URL + "api/posts"
    );

    //Guardarlos en el store
    const dispatch = useDispatch()

    useEffect(() => {
        if(data) {
            dispatch(addComments(data))
        }
    }, [data,dispatch])

    if (loading) return <p>Cargando los comentarios...</p>;
    if (error) return <p>Error al cargar los comentarios: {error.message}</p>;

    //Obtener Comentarios del Store
    const { cursoId } = useParams();
    const commentsByCourse = data.filter((comment) => comment.course ===  cursoId);
    
    console.log(commentsByCourse,cursoId)

    return (
        <div className="mb-4">
            <h4>Comentarios</h4>
            {commentsByCourse.map((comment) => {
                return <p>{comment.content}</p>
            })}
        </div>
    )
}

export default CourseInfoComments