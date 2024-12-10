import React from 'react';

import { useParams } from 'react-router-dom';

import {useSelector} from 'react-redux';

function ItemDetail() {

  const { itemId } = useParams();

  const cursos = useSelector((state) => state.courses.courses);

  console.log(cursos)

  const cursoFiltrado = cursos.find((item) => item.id === itemId)
  
  console.log(cursoFiltrado.name)

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