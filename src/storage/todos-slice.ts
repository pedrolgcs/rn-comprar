import 'react-native-get-random-values';
import { v7 } from 'uuid';
import { type StateCreator } from 'zustand';

import { Todo, TodoStatus } from '@/entities/todo';

type State = {
  todos: Todo[];
  isHydrated: boolean;
};

type Actions = {
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearTodos: () => void;
};

export type TodoSlice = State & Actions;

const defaultState: State = {
  todos: [],
  isHydrated: false,
};

export const createTodoSlice: StateCreator<
  TodoSlice,
  [['zustand/immer', never]],
  [],
  TodoSlice
> = set => ({
  ...defaultState,

  addTodo: title => {
    set(state => {
      state.todos.push({
        id: v7(),
        title,
        status: TodoStatus.PENDING,
      });
    });
  },

  removeTodo: id => {
    set(state => {
      const todoIndex = state.todos.findIndex(item => item.id === id);
      if (todoIndex >= 0) {
        state.todos.splice(todoIndex, 1);
      }
    });
  },

  toggleTodo: id => {
    set(state => {
      const todo = state.todos.find(item => item.id === id);
      if (todo) {
        todo.status =
          todo.status === TodoStatus.PENDING
            ? TodoStatus.DONE
            : TodoStatus.PENDING;
      }
    });
  },

  clearTodos: () => {
    set(state => {
      state.todos = [];
    });
  },
});
