const API_URL = "http://localhost:5000";

const API_URLS = {
  // ? account
  LOGIN: "/login",
  SIGNUP: "/create_account",
  CHANGE_PASSWORD: "/change_password",
  // ? location
  GET_REGION: "/get_region",
  FILTER_PROVINCE: "/filter_province",
  FILTER_CITY: "/filter_city",
  FILTER_BARANGAY: "/filter_barangay",
  // ? schools
  GET_LEVELS: "/get_levels",
  FILTERED_TRACKS: "/filtered_tracks",
};

export { API_URL, API_URLS };
