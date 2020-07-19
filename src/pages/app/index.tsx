import React, {
  useState,
  useRef,
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
  TodoTitle,
  TodoPriority,
  TodoDescription,
} from './style';

import {
  Todo,
  FormElements,
  Priorities,
  PrioritiesName,
} from './types';

const App: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [todos, setTodos] = useState<Todo[]>([{   description: 'x',
    id: 0,
    title: 'y',
    priority: Priorities.medio, }]);
  const [form, setForm] = useState<Todo>();

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodos: Todo[] = [...todos, {...form!, id: todos.length}];
    setTodos(newTodos);
    formRef.current?.reset();
    const elements: FormElements = formRef.current?.elements as FormElements;
    elements.title.focus();
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
        <Form onSubmit={handleAddTodo} ref={formRef}>

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
                <TodoTitle>{todo.title}</TodoTitle>
                <TodoPriority><span>{PrioritiesName[todo.priority || 1]}</span></TodoPriority>
                <TodoDescription>{todo.description}</TodoDescription>
              </TodoStyled>
            ))
          }
        </TodoList>
      </Content>
    </Wrapper>
  )
}

export default App;
