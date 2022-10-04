import { globalConstants } from "../constants";

export const addAcadamies = (data) => {
  return {
    type: globalConstants.ADD__ACADEMIES,
    data: data,
  };
};

export const removeAcadamies = (data) => {
  return {
    type: globalConstants.REMOVE__ACADEMIES,
    data: data,
  };
};

export const addInputValues = (data) => {
  return {
    type: globalConstants.EDIT__ACADEMIES,
    data: data,
  };
};

export const updateAcademyDetails = (data) => {
  return {
    type: globalConstants.UPDATE__ACADEMYDETAILS,
    data: data,
  };
};
