import { enableMapSet } from 'immer';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { immer } from 'zustand/middleware/immer';

import { TodoSlice, createTodoSlice } from './todos-slice';

enableMapSet();

export const useAppStore = create<TodoSlice>()(
  persist(
    immer((...a) => ({
      ...createTodoSlice(...a),
    })),
    {
      name: '@todos:store',
      storage: createJSONStorage(() => AsyncStorage),

      onRehydrateStorage: () => () => {
        useAppStore.setState({ isHydrated: true });
      },
    },
  ),
);
