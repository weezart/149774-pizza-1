import sizeValues from "@/common/enums/sizeValues";
import sauceValues from "@/common/enums/sauceValues";
import doughNames from "@/common/enums/doughNames";
import ingredientNames from "@/common/enums/ingredientNames";

export const normalizeDough = (doughItem) => {
  return {
    ...doughItem,
    latinName: doughNames[doughItem.id],
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    value: sizeValues[size.id],
  };
};

export const normalizeSauce = (sauce) => {
  return {
    ...sauce,
    sauce: sauceValues[sauce.id],
  };
};

export const normalizeIngredient = (ingredient) => {
  return {
    ...ingredient,
    latinName: ingredientNames[ingredient.id],
  };
};
