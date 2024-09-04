import React, { useState } from 'react';
import { v4 as Uuid } from 'uuid';
import {
  Button,
  Check,
  Conteiner,
  Div,
  Input,
  ListItem,
  Trash,
} from './styles/style';

export const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const modification = (e) => {
    setInput(e.target.value);
    console.log(setInput);
  };

  const Clique = () => {
    if (input) {
      setList([...list, { id: Uuid(), task: input, finished: false }]);
    }
  };

  const finalTask = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item,
    );
    setList(newList);
  };

  const deletTask = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  return (
    <Div>
      <Conteiner>
        <Input
          onChange={modification}
          type="text"
          placeholder="digite o que tenho para fazer"
        />
        <Button onClick={Clique}>Adicionar</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletTask(item.id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não ha itens na lista</h3>
          )}
        </ul>
      </Conteiner>
    </Div>
  );
};
