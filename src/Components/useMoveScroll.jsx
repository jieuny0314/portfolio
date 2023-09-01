import { useRef } from "react";

function useMoveScroll(name) {
  const element = useRef();
  console.log(element);
  const onMoveToElement = (element) => {
    element.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { element, onMoveToElement, name };
}

export default useMoveScroll;
