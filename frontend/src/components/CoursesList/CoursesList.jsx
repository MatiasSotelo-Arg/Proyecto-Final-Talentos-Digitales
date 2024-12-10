import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

function ItemList() {

  const cursos = useSelector((state) => state.courses.courses);

  return (
    <div>
      <h2>Lista de Cursos</h2>
      <div className="items-grid">
        {cursos.map((item) => (
          <div key={item._id} className="item-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <Link to={`/cursos/${item._id}`}>ver mas</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
