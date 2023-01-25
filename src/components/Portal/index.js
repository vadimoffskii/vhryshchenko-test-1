import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom'

const Portal = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    container.classList.add('portal')
    document.body.appendChild(container);
    return () => document.body.removeChild(container);
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal