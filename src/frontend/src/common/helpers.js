import sizeValues from "@/common/enums/sizeValues";
import doughNames from "@/common/enums/doughNames";

export const normalizeDough = (doughItem) => {
  return {
    ...doughItem,
    latinName: doughNames[doughItem.id],
  };
};

export const normalizeSize = (size) => {
  return {
    ...size,
    value: sizeValues[size.multiplier],
  };
};
