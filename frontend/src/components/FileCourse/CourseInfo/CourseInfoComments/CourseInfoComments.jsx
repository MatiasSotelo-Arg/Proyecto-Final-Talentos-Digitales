import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../../../redux/commentsSlice";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

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
                return <Card body className="my-2">
                    <h5 className="fw-bold" >{comment.author?.name}</h5>
                    <p>{comment.content}</p>
                </Card>;
                
                // <div>
                        
                //        </div>
            })}
        </div>
    )
}

export default CourseInfoComments