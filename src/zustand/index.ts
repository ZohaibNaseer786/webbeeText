import zustandFlipper from 'react-native-flipper-zustand';
import { MMKVLoader } from 'react-native-mmkv-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { StateStorage } from 'zustand/middleware';
import { ICategorySlice } from '~modules/category/types/Types';
import { createCategorySlice } from '~modules/category/zustand/CreateCategorySlice';

import { PersistStateArray } from './PersistState';

interface IStore extends ICategorySlice {}

const MMKV = new MMKVLoader().withInstanceID('zustand').initialize();

export const useStore = create<IStore>()(
  zustandFlipper(
    persist(
      (set, get, api) => ({
        ...createCategorySlice(set, get, api),
      }),
      {
        name: 'ConstructionMachineManagemen',
        version: 1,
        storage: createJSONStorage(() => MMKV as unknown as StateStorage),
        partialize: state =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) =>
              PersistStateArray.includes(key),
            ),
          ),
      },
    ),
  ),
);
