import type React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  click: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, click }) => {
  return (
    <StyledWrapper>
      <button
        className="button text-primary outline-2 outline-solid outline-[#1e1d1aeb] mt-3"
        onClick={() => click()}
      >
        {text}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    padding: 0.8em 1.5em;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 1000ms;
    font-size: 20px;
    position: relative;
    overflow: hidden;
  }

  button:hover {
    color: #ffffff;
    transform: scale(1.1);
    outline: 2px solid #1e1d1aeb;
    box-shadow: 4px 5px 17px -4px #1e1d1aeb;
  }

  button::before {
    content: "";
    position: absolute;
    left: -50px;
    top: 0;
    width: 0;
    height: 100%;
    background-color: black;
    transform: skewX(45deg);
    z-index: -1;
    transition: width 1000ms;
  }

  button:hover::before {
    width: 250%;
  }
`;

export default Button;
