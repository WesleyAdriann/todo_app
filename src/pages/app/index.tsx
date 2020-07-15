import React, {
  useState,
} from 'react';

import {
  Wrapper,
  Content,
  Form,
  Input,
  Select,
  Button,
  TodoList,
  TodoStyled,
} from './style';

import {
  Todo,
  Priorities,
} from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [form, setForm] = useState<Todo>();

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(form);
    const newTodos: Todo[] = [...todos, {...form!, id: todos.length}];
    setTodos(newTodos);
  }

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <Wrapper>
      <Content>
        <Form onSubmit={handleAddTodo}>

          <label htmlFor='title'>Titulo</label>
          <Input id='title' onChange={handleFormChange} required />

          <label htmlFor='description'>Descrição</label>
          <Input id='description' onChange={handleFormChange} required />

          <label htmlFor='priority'>Prioridade</label>
          <Select id='priority' onChange={handleFormChange} required defaultValue={Priorities.medio}>
            <option value={Priorities.baixo}> Baixo </option>
            <option value={Priorities.medio}> Médio </option>
            <option value={Priorities.alto}> Alto </option>
          </Select>

          <Button type='submit'> Salvar </Button>
        </Form>
        <TodoList>
          {
            todos.map((todo) => (
              <TodoStyled key={todo.id}>
                <p>{todo.priority}</p>
                <p>{todo.title}</p>
                <p>{todo.description}</p>
              </TodoStyled>
            ))
          }
        </TodoList>
      </Content>
    </Wrapper>
  )
}

export default App;
