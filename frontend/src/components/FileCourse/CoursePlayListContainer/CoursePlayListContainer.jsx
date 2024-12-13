import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPlayList } from '../../../redux/playListSlice';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import './CoursePlayListContainer.css'


const CoursePlayListContainer = () => {
  const courses = useSelector((state) => state.courses.courses); // Selector del estado global
  const playListCourse = useSelector((state) => state.playListCourse); // Ajusta según tu slice
  const dispatch = useDispatch();  

  //capturo ID
  const {cursoId} = useParams()

  // Controlar el despacho de la acción
  useEffect(() => {
    if (courses?.length > 0) {
      console.log("dispacho");
      // Solo despachar si no hay elementos en playListCourse
      if (playListCourse.length === 0) {
        dispatch(addPlayList({ coursesArray: courses, courseId: cursoId }));
      }
    }
  }, [courses, dispatch, playListCourse.length]); // También dependemos de playListCourse.length para evitar duplicados
  

  useEffect(() => {
    console.log("playListCourse actualizado:", playListCourse);
  }, [playListCourse]);

  

  return (
    <div>
    
      {playListCourse.map((item) => { 
        return (
           
            <Button
            variant="primary"
            className="bg-transparent text-black border-0 btn-success add-hover"
            >
                <p key={item._id}>{item.name}</p>
            </Button>
        )
         
          
         
      })}
    
    </div>
  );
  
  
};

export default CoursePlayListContainer;
