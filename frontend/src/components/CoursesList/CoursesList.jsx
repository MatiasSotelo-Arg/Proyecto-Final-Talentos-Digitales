import {useSelector} from 'react-redux';
import CourseCard from '../CourseCard/CourseCard';

function ItemList() {

  const cursos = useSelector((state) => state.courses.courses);



  return (
    <div>
      <h2>Lista de Cursos</h2>
      <CourseCard courses={cursos}/>
    </div>
  );
}

export default ItemList;
