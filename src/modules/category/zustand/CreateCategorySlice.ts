import uuid from 'react-native-uuid';
import { StateCreator } from 'zustand';
import { Strings } from '~theme/styles/Strings';

import {
  ICategory,
  ICategorySlice,
  IChild,
  IChildren,
  IField,
} from '../types/Types';

const initialState = {
  isAuth: false,
  subCategoryList: null,
  categoryList: [
    {
      id: uuid.v4()?.toString(),
      name: Strings.NewCategory,
      fields: [
        {
          id: uuid.v4()?.toString(),
          CategoryId: null,
          name: 'Text',
          type: 'string',
          value: null,
        },
      ],
      children: null,
      selectedField: null,
    },
  ],
};

export const createCategorySlice: StateCreator<ICategorySlice> = set => ({
  ...initialState,
  setCategoryList: (categoryList: ICategory): void => {
    set(state => ({
      categoryList: state?.categoryList
        ? [...state.categoryList, categoryList]
        : [categoryList],
    }));
  },
  setIsAuth: (isAuth: boolean): void => {
    set({ isAuth });
  },
  setNewField: (field: IField, categoryIndex: number): void => {
    set(state => {
      if (categoryIndex >= 0 && categoryIndex < state?.categoryList?.length) {
        const updatedCategoryList = [...state?.categoryList];
        const category = { ...updatedCategoryList[categoryIndex] };

        category.fields.push({
          id: uuid.v4()?.toString(),
          CategoryId: field?.CategoryId || null,
          name: field?.name ?? null,
          type: field?.type ?? null,
          value: null,
        });

        updatedCategoryList[categoryIndex] = category;
        return { categoryList: updatedCategoryList };
      }

      return state;
    });
  },
  removeField: (fieldIndex: number, categoryIndex: number): void => {
    set(state => {
      if (
        categoryIndex >= 0 &&
        categoryIndex < state?.categoryList?.length &&
        fieldIndex >= 0 &&
        fieldIndex < state?.categoryList[categoryIndex]?.fields?.length
      ) {
        const updatedCategoryList = [...state?.categoryList];
        const category = { ...updatedCategoryList[categoryIndex] };
        category.fields.splice(fieldIndex, 1);
        updatedCategoryList[categoryIndex] = category;
        return { categoryList: updatedCategoryList };
      }

      return state;
    });
  },
  updateFieldName: (
    fieldIndex: number,
    categoryIndex: number,
    newName: string,
    newType: string,
  ): void => {
    set(state => {
      if (
        categoryIndex >= 0 &&
        categoryIndex < state?.categoryList?.length &&
        fieldIndex >= 0 &&
        fieldIndex < state?.categoryList[categoryIndex]?.fields?.length
      ) {
        const updatedCategoryList = [...state?.categoryList];
        const category = { ...updatedCategoryList[categoryIndex] };
        category.fields[fieldIndex].name = newName;
        category.fields[fieldIndex].type = newType;
        updatedCategoryList[categoryIndex] = category;
        return { categoryList: updatedCategoryList };
      }

      return state;
    });
  },
  updateFieldValue: (
    fieldIndex: number,
    categoryIndex: number,
    newValue: string,
  ): void => {
    set(state => {
      if (
        categoryIndex >= 0 &&
        categoryIndex < state?.categoryList?.length &&
        fieldIndex >= 0 &&
        fieldIndex < state?.categoryList[categoryIndex]?.fields?.length
      ) {
        const updatedCategoryList = [...state?.categoryList];
        const category = { ...updatedCategoryList[categoryIndex] };
        category.fields[fieldIndex].value = newValue;
        updatedCategoryList[categoryIndex] = category;
        return { categoryList: updatedCategoryList };
      }

      return state;
    });
  },
  setSelectedField: (newField: IField, categoryIndex: number): void => {
    set(state => {
      if (
        categoryIndex >= 0 &&
        categoryIndex < state?.categoryList?.length &&
        newField
      ) {
        const updatedCategoryList = [...state?.categoryList];
        const category = { ...updatedCategoryList[categoryIndex] };
        category.selectedField = newField;
        updatedCategoryList[categoryIndex] = category;
        return { categoryList: updatedCategoryList };
      }

      return state;
    });
  },
  updateCategoryName: (categoryIndex: number, newName: string): void => {
    set(state => {
      if (categoryIndex >= 0 && categoryIndex < state?.categoryList?.length) {
        const updatedCategoryList = [...state?.categoryList];
        const category = { ...updatedCategoryList[categoryIndex] };
        category.name = newName;
        updatedCategoryList[categoryIndex] = category;
        return { categoryList: updatedCategoryList };
      }

      return state;
    });
  },
  deleteCategory: (categoryIndex: number): void => {
    set(state => {
      if (categoryIndex >= 0 && categoryIndex < state?.categoryList?.length) {
        const updatedCategoryList = [...state?.categoryList];
        updatedCategoryList.splice(categoryIndex, 1);
        return { categoryList: updatedCategoryList };
      }

      return state;
    });
  },
  createNewCategory: (): void => {
    set(state => {
      const newCategory: ICategory = {
        id: uuid.v4()?.toString(),
        name: Strings.NewCategory,
        fields: [
          {
            id: uuid.v4()?.toString(),
            CategoryId: null,
            name: 'Text',
            type: 'string',
            value: null,
          },
        ],
        selectedField: null,
        children: null,
      };

      const updatedCategoryList = [...state?.categoryList, newCategory];

      return { categoryList: updatedCategoryList };
    });
  },
  createNewSubCategory: (categoryIndex: number): void => {
    set(state => {
      const updatedCategoryList = [...state.categoryList];

      if (categoryIndex >= 0 && categoryIndex < updatedCategoryList.length) {
        const category = { ...updatedCategoryList[categoryIndex] };

        const newSubChildren: IChildren[] = [];
        category.fields.forEach(field => {
          // const newSubChild: IChildren = {
          //   id: uuid.v4().toString(),
          //   child: field, // Use the field as the subchild
          // };
          newSubChildren.push(field);
        });

        const newChild: IChild = {
          id: uuid.v4().toString(),
          child: newSubChildren,
        };

        if (!category.children) {
          category.children = [];
        }
        category.children.push(newChild);
        updatedCategoryList[categoryIndex] = category;
      }

      return { categoryList: updatedCategoryList };
    });
  },
});
