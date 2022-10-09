import sizeSlugs from "@/common/enums/sizeSlugs";
import sauceSlugs from "@/common/enums/sauceSlugs";
import doughSlugs from "@/common/enums/doughSlugs";
import ingredientSlugs from "@/common/enums/ingredientSlugs";

const normalizeItem = (item, itemSlugs) => {
  return {
    ...item,
    slug: itemSlugs[item.id],
  };
};

export const normalizeDough = (item) => normalizeItem(item, doughSlugs);
export const normalizeSize = (item) => normalizeItem(item, sizeSlugs);
export const normalizeSauce = (item) => normalizeItem(item, sauceSlugs);
export const normalizeIngredient = (item) =>
  normalizeItem(item, ingredientSlugs);
