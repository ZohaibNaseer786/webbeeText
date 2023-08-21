export interface ICategorySlice {
  isAuth: boolean;
  categoryList: ICategory[];
  subCategoryList: IField[] | null;
  setCategoryList: (categoryList: ICategory) => void;
  setIsAuth: (isAuth: boolean) => void;
  setNewField: (field: IField, categoryIndex: number) => void;
  removeField: (fieldIndex: number, categoryIndex: number) => void;
  updateFieldName: (
    fieldIndex: number,
    categoryIndex: number,
    newName: string,
    newType: string,
  ) => void;
  updateFieldValue: (
    fieldIndex: number,
    categoryIndex: number,
    newValue: string,
  ) => void;
  setSelectedField: (newField: IField, categoryIndex: number) => void;
  updateCategoryName: (categoryIndex: number, newName: string) => void;
  deleteCategory: (categoryIndex: number) => void;
  createNewCategory: () => void;
  createNewSubCategory: (categoryIndex: number) => void;
}

export interface ICategory {
  fields: IField[];
  id: string;
  selectedField: IField | null;
  name: string;
  children: IChildren[] | null;
}

export interface IField {
  id: string;
  CategoryId: string | null;
  name: string | null;
  type: string | null;
  value: string | number | boolean | null;
}

export interface IChildren {
  id: string;
  child: IChild;
}

export interface IChild {
  id: string;
  type: string | null;
  name: string | null;
  value: string | number | boolean | null;
  fieldId: string;
  CategoryId: string;
}
