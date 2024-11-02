import React, { useState } from "react";
import styled from "styled-components";

export const Adilet = () => {
  const [valueButton, setValueButton] = useState("");
  console.log(valueButton);
  return (
    <Stylediv>
      <div>
        <i>Бро ты самый лучший</i>
        <p>
          я тебя ценю и уважаю сколько бы гадостей не говорил знай что ты для
          меня хороший друг
        </p>
        <img
          src="https://avatars.mds.yandex.net/i?id=2dbbc4085930144399e5cf78780430a4_l-6956651-images-thumbs&n=13"
          alt=""
        />
      </div>
      <button onClick={() => setValueButton("flap")}>и знай</button>

      <div class="envelope">
        <div class={valueButton}>
          <h2>{valueButton == "flap" ? "Океания обед" : ""}</h2>
        </div>
        <div class="body"></div>
      </div>
    </Stylediv>
  );
};
const Stylediv = styled("div")`
  text-align: center;
  button {
    width: 100px;
    height: 40px;
    padding: auto;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    background-color: #8b0000;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  i {
    font-size: 20px;
  }
  p {
    font-size: 18px;
  }
  .envelope {
    width: 200px;
    height: 100px;
    margin: 0 auto;
  }
  .flap {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 50%;
    font-size: large;
    background-color: #f5eeee;
    color: red;
    transform-origin: top;
    animation: flapOpen 3s forwards;
  }
  @keyframes flapOpen {
    from {
      transform: rotateX(-90deg);
    }
    to {
      transform: rotateX(0);
    }
  }
`;
