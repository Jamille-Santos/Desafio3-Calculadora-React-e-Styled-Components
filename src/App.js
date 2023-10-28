import "./styles.css";
import React, { useState } from "react";
import styled from "styled-components";

const CalculadoraCaixa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("https://upload.wikimedia.org/wikipedia/pt/c/cd/Nazar%C3%A9_Confusa.jpg");
  background-size: cover;
`;

const Input = styled.input`
  width: 330px;
  padding: 10px;
  margin: 5px;
  font-size: 28px;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  width: 80px;
  height: 80px;
  font-size: 30px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: blue;
  }
`;

const Resultado = styled.div`
  margin-top: 10px;
  font-size: 44px;
`;

export default function App() {
  const [primeiroValor, setPrimeiroValor] = useState(0);
  const [segundoValor, setSegundoValor] = useState(0);
  const [operacao, setOperacao] = useState("");
  const [resultado, setResultado] = useState(0);

  const capturarPrimeiroValor = (item) => {
    setPrimeiroValor(Number(item.target.value));
  };

  const capturarSegundoValor = (item) => {
    setSegundoValor(Number(item.target.value));
  };

  const handlerOperacao = () => {
    switch (operacao) {
      case "+":
        setResultado(primeiroValor + segundoValor);
        break;
      case "-":
        setResultado(primeiroValor - segundoValor);
        break;
      case "*":
        setResultado(primeiroValor * segundoValor);
        break;
      case "/":
        setResultado(primeiroValor / segundoValor);
        break;
      case "^":
        setResultado(Math.pow(primeiroValor, segundoValor));
        break;
      case "π":
        setResultado(Math.PI);
        break;
      default:
        setResultado(0);
        break;
    }
  };

  const limparCalculadora = () => {
    setPrimeiroValor(0);
    setSegundoValor(0);
    setOperacao("");
    setResultado(0);
  };

  return (
    <CalculadoraCaixa>
      <Input
        type="number"
        placeholder="Primeiro valor"
        onChange={capturarPrimeiroValor}
      />
      <Input
        type="number"
        placeholder="Segundo valor"
        onChange={capturarSegundoValor}
      />

      <ButtonWrapper>
        <Button onClick={() => setOperacao("+")}>+</Button>
        <Button onClick={() => setOperacao("-")}>-</Button>
        <Button onClick={() => setOperacao("*")}>*</Button>
        <Button onClick={() => setOperacao("/")}>/</Button>
        <Button onClick={handlerOperacao}>=</Button>
        <Button onClick={() => setOperacao("^")}>^</Button>
        <Button onClick={() => setOperacao("π")}>π</Button>
        <Button onClick={limparCalculadora}>C</Button>
      </ButtonWrapper>
      <Resultado>Resultado: {resultado}</Resultado>
    </CalculadoraCaixa>
  );
}
