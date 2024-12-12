import {useSelector} from 'react-redux';
import CourseCard from '../CourseCardDetail/CourseCardDetail';

function ItemList() {

  const cursos = useSelector((state) => state.courses.courses);

  return (
    <div>
      <CourseCard courses={cursos}/>
    </div>
  );
}

export default ItemList;
