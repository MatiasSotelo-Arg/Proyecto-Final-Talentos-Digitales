import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPlayList, addSelectedPlaylist } from '../../../redux/playListSlice';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import './CoursePlayListContainer.css';

const CoursePlayListContainer = () => {
  const courses = useSelector((state) => state.courses.courses); // Selector del estado global
  const playListCourse = useSelector((state) => state.playListCourse.playListCourse);
  const dispatch = useDispatch();

  // Capturo el ID del curso desde la URL
  const { cursoId } = useParams();

  // Cargar las playlists cuando hay cursos disponibles
  useEffect(() => {
    if (courses?.length > 0 && playListCourse.length === 0) {
      dispatch(addPlayList({ coursesArray: courses, courseId: cursoId }));
    }
  }, [courses, dispatch, playListCourse.length, cursoId]);

  // Actualizar la playlist seleccionada al hacer clic en un botón
  const handleSelectPlaylist = (item) => {
    dispatch(addSelectedPlaylist(item)); // Despachar la acción con el curso seleccionado
  };

  return (
    <div>
      {playListCourse.map((item) => (
        <Button
          key={item._id} // Evita warnings de React
          variant="primary"
          className="bg-transparent text-black border-0 btn-success add-hover"
          onClick={() => handleSelectPlaylist(item)} // Manejar el clic
        >
          <p>{item.name}</p>
        </Button>
      ))}
    </div>
  );
};

export default CoursePlayListContainer;
