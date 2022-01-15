export type Reducer<State> = (
  state: ProductState[],
  action: ProductAction
) => State;

export const initialState: ProductState[] = [{
  id: 0,
  title: "",
  image: "",
  price: 0,
  count: 0,
}];

export interface ProductState {
  id: number;
  title: string;
  image: string;
  price: number;
  count: number;
}

export type ProductAction =
  | {
      type: "init_stored";
      id: number;
      title: string;
      image: string;
      price: number;
      count: number;
    }
  | {
      type: "add_product";
      id: number;
      title: string;
      image: string;
      price: number;
      count: number;
    };

export const AppReducer = (state: ProductState[], action: ProductAction): ProductState[] => {
  switch (action.type) {
    case "init_stored": {
      return [{
        id: action.id,
        title: action.title,
        image: action.image,
        price: action.price,
        count: action.count
      }];
    }
    case "add_product": {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          image: action.image,
          price: action.price,
          count: action.count,
        },
      ];
    }

    default:
      return state;
  }
};
