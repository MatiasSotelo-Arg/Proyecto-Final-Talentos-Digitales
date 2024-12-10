import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

function ItemDetail() {
  const { cursoId } = useParams();
  console.log(cursoId);

  const cursos = useSelector((state) => state.courses.courses);
  const [cursoFiltrado, setCursoFiltrado] = useState(null);

  useEffect(() => {
    if (cursos.length > 0) {
      const cursoEncontrado = cursos.find((item) => item._id === cursoId);
      if (cursoEncontrado) {
        setCursoFiltrado(cursoEncontrado);
      }
    }
  }, [cursos, cursoId]);

  if (!cursoFiltrado) {
    return <p>Cargando curso...</p>;
  }

  return (
    <div className="item-detail">
      <h2>Detalles del Curso</h2>

      <p>{cursoFiltrado.name}</p>
      {/* <img src={item.imagen} alt={item.titulo} />
      <p>{item.nombreProfesor}</p>
      <h3>{item.titulo}</h3>
      <p>{item.descripcion}</p>
      <div>
       {
        item.descuento && <div> 
                            <div>
                              <s>${item.precio}</s> <p>%{item.porcentajeDescuento}</p>
                            </div>
                            <div>
                              <p>$1000</p>
                            </div>
                          </div>
        } 
      </div> */}

      <button>Comprar</button>
    </div>
  );
}

export default ItemDetail;
