import styled, { keyframes } from "react-emotion";

export const Wrapper = styled.div`
  padding: 1em;
  width: 100%;
  max-width: 64em;
  margin: 0 auto;
`;

export const H1 = styled.h1`
  color: #333;
  text-transform: uppercase;
  text-align: center;
  margin-top: 0;
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  margin: 0 0 0.5em;
`;

export const Input = styled.input`
  appearance: none;
  border: 1px solid #777;
  height: 40px;
  width: 100%;
  padding: 0.8rem 1em;
  font: inherit;

  ~ input,
  ~ button,
  ~ textarea {
    margin-top: 1em;
  }
`;

export const Textarea = styled.textarea`
  appearance: none;
  font: inherit;

  resize: none;
  border: 1px solid #777;
  width: 100%;
  font-size: 1em;
  padding: 0.8rem 1em;
`;

export const Button = styled.button`
  appearance: none;
  border: 0;
  background: #333;
  color: #fff;
  padding: 0.8em 1em;
  font: inherit;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  margin: 0;
  padding: 1em;

  &:nth-child(odd) {
    background: #efefef;
  }
`;

const spin = keyframes`
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
`;

export const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 15px solid #333;
  border-right-color: gold;
  border-left-color: gold;
  animation: ${spin} 0.5s linear infinite;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


export const PostContent = styled.div`
  margin-bottom: 10px;
`;
