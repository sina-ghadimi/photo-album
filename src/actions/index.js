import unsplash from "../api/unsplash";

export const fetchPics = (formValues) => async (dispatch) => {
  const response = await unsplash.get("/search/photos", {
    params: { query: formValues, per_page: 30 },
  });
  dispatch({ type: "FETCH_PICS", payload: response.data.results });
};
