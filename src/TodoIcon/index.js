import { ReactComponent as CheckSVG } from "./checkIcon.svg";
import { ReactComponent as DeleteSVG } from "./deleteIcon.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSVG className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}{" "}
      {/* Accedemos a la propiedad type del objeto iconTypes, cualquiera que sea es una funcion que recibe como argumento un color, la funcion retorna un componente al cual se le pasa el color como parametro. */}
    </span>
  );
}

export { TodoIcon };
