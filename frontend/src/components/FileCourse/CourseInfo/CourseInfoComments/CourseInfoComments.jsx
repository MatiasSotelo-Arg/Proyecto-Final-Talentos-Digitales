import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addComments } from "../../../../redux/commentsSlice";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Card, Form, Button } from "react-bootstrap";

const CourseInfoComments = ({ courseAdquired }) => {
    // Obtener Comentarios de la BD
    const { data, loading, error } = useFetch(
        import.meta.env.VITE_API_URL + "api/posts"
    );

    // Guardarlos en el store
    const dispatch = useDispatch();

    // Estado local para manejar los comentarios y el contenido del nuevo comentario
    const [commentsByCourse, setCommentsByCourse] = useState([]);
    const [addedComments, setAddedComments] = useState([]); // Comentarios agregados manualmente
    const [newCommentContent, setNewCommentContent] = useState(""); // Estado para el contenido del textarea

    const { cursoId } = useParams();

    useEffect(() => {
        if (data) {
            // Filtrar comentarios del curso y almacenarlos en el estado local
            const filteredComments = data.filter((comment) => comment.course === cursoId);
            setCommentsByCourse(filteredComments);

            // Guardar todos los comentarios en el store
            dispatch(addComments(data));
        }
    }, [data, cursoId, dispatch]);

    if (loading) return <p>Cargando los comentarios...</p>;
    if (error) return <p>Error al cargar los comentarios: {error.message}</p>;

    // Manejar el envío de un nuevo comentario
    const handleAddComment = () => {
        if (!newCommentContent.trim()) {
            alert("El comentario no puede estar vacío.");
            return;
        }

        const newComment = {
            "_id": Date.now().toString(), // Generar un ID único basado en la marca de tiempo
            "author": {
                "name": "usuario de prueba"
            },
            "content": newCommentContent // Usar el estado del textarea
        };

        // Agregar el nuevo comentario a los estados locales
        setCommentsByCourse((prevComments) => [newComment, ...prevComments]);
        setAddedComments((prevAdded) => [newComment, ...prevAdded]);

        // Limpiar el campo de texto
        setNewCommentContent("");
    };

    // Manejar la eliminación de un comentario agregado
    const handleDeleteComment = (id) => {
        setCommentsByCourse((prevComments) => prevComments.filter((comment) => comment._id !== id));
        setAddedComments((prevAdded) => prevAdded.filter((comment) => comment._id !== id));
    };

    return (
        <div>
            { courseAdquired && 
            
            <div className="mb-4">
                <h4>Agregar un comentario</h4>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Escriba su comentario..."
                    value={newCommentContent} // Enlazar el estado con el textarea
                    onChange={(e) => setNewCommentContent(e.target.value)} // Actualizar el estado con el valor ingresado
                />
                <Button variant="primary" className="w-10 mt-2" onClick={handleAddComment}>
                    Agregar Comentario
                </Button>
            </div>

            }
                <div className="mb-4">
    <h4>Comentarios</h4>
    {commentsByCourse.length === 0 ? (
        <p>No hay comentarios disponibles para este curso.</p>
    ) : (
        commentsByCourse.map((comment, index) => (
            <Card body className="my-2" key={index}>
                <div className="d-flex justify-content-between">
                    <div>
                        <h5 className="fw-bold">{comment.author?.name}</h5>
                        <p>{comment.content}</p>
                    </div>
                    <div>
                        {addedComments.some((added) => added._id === comment._id) && (
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDeleteComment(comment._id)}
                            >
                                Eliminar
                            </Button>
                        )}
                    </div>
                </div>
            </Card>
        ))
    )}
</div>

            
        </div>
    );
};

export default CourseInfoComments;
