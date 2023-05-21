import React, { FC } from "react";
import "./venture.css";

interface VentureInt {
  venture: {
    title: string;
    description: string;
    learnmore: string;
    img: any;
    golldy: boolean;
  };
  setCurrentVenture: React.Dispatch<
    React.SetStateAction<{
      title: string;
      description: string;
      learnmore: string;
      img: any;
      golldy: boolean;
    }>
  >;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Venture: FC<VentureInt> = ({
  venture,
  setCurrentVenture,
  setOpenModal,
}) => {
  const handleClick = () => {
    setCurrentVenture({ ...venture });
    setOpenModal(true);
  };

  function useTilt() {
    const ref = React.useRef(null);

    React.useEffect(() => {
      if (!ref.current) {
        return;
      }

      const state: any = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined,
      };

      let el: HTMLDivElement = ref.current;

      const handleMouseMove = (e: any) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;

        el.style.setProperty("--px", `${px}`);
        el.style.setProperty("--py", `${py}`);
      };

      el.addEventListener("mousemove", handleMouseMove);

      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);

    return ref;
  }
  const ref = useTilt();
  return (
    <div
      className={`Venture-Wrapper Venture-${venture.title}
        `}
      ref={ref}
      onClick={handleClick}
    >
      <div className="Venture-Content">
        <h3>{venture.title}</h3>
        <p>{venture.description}</p>
      </div>
    </div>
  );
};

export default Venture;
