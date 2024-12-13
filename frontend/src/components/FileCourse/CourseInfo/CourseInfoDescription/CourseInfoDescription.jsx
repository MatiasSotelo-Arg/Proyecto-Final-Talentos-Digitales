import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CourseInfoDescription = ({ cursoFiltrado }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between">
        <h4>Descripción</h4>
        {/* Alternar íconos y manejar clic */}
        {isDescriptionVisible ? (
          <IoIosArrowUp
            style={{ cursor: "pointer", margin:"auto 10px"}}
            onClick={toggleDescription}
          />
        ) : (
          <IoIosArrowDown
            style={{ cursor: "pointer", margin:"auto 10px"}}
            onClick={toggleDescription}
          />
        )}
      </div>

      {/* Mostrar u ocultar descripción */}
      {isDescriptionVisible && <p className="text-start">{cursoFiltrado.description}</p>}
    </div>
  );
};

export default CourseInfoDescription;
