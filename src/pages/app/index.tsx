import React, {
  useState,
  useRef,
} from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import {
  Main,
  Content,
  Form,
  Input,
  Select,
  Button,
  TodoList,
  TodoStyled,
  TodoDelete,
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
  const [todos, setTodos] = useState<Todo[]>([]);
  const [form, setForm] = useState<Todo>();

  const handleAddTodo = (event: React.FormEvent) => {
    event.preventDefault();
    const newTodos: Todo[] = [...todos, form!];
    const elements: FormElements = formRef.current!.elements as FormElements;
    formRef.current!.reset();
    elements.title.focus();
    setTodos(newTodos);
  }

  const handleRemoveTodo = (todoIndex: number) => {
    const newTodos: Todo[] = [...todos];
    newTodos.splice(todoIndex, 1);
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
    <>
      <Header sizeTodos={todos.length} />
      <Main>
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
              todos.map((todo, index) => (
                <TodoStyled key={index}>
                  <TodoDelete onClick={() => handleRemoveTodo(index)}>×</TodoDelete>
                  <TodoTitle>{todo.title}</TodoTitle>
                  <TodoPriority><span>{PrioritiesName[todo.priority || 1]}</span></TodoPriority>
                  <TodoDescription>{todo.description}</TodoDescription>
                </TodoStyled>
              ))
            }
          </TodoList>
        </Content>
      </Main>
      <Footer />
    </>
  )
}

export default App;
