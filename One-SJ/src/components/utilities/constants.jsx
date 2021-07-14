import axios from "axios";

// Define any constants that might be needed throughout the app

// Services API Link
export const servicesapiLink = process.env.REACT_APP_SERVICES_API_LINK;

// Categories API Link
export const categoriesapiLink = process.env.REACT_APP_CATEGORIES_API_LINK;

// Google API Key taken from Environment variable
// Make sure to switch to localhost version of api key if working on the code
// The production API key is used before releasing changes to the domain
// If making a production build remember to remove the Localhost API key from the .env file as it can get leaked
export const GoogleAPIKey = process.env.REACT_APP_GOOGLE_API_KEY_PRODUCTION;

/* global gapi */
// Comment above is to tell esLint that gapi is a const and not to throw any errors
// Load the Google API Client and set the API Key
gapi.load("client", async () => {
  await gapi.client.setApiKey(GoogleAPIKey);
});

// Translates texts using Google Translate API
export async function translateTexts(texts, language) {
  const translations = await gapi.client.request({
    path: "https://translation.googleapis.com/language/translate/v2",
    method: "POST",
    body: { source: "en", target: language, q: texts },
  });
  return translations.result.data.translations;
}

// Fetches the data and categories
export async function getDataAndCategories() {
  // Grabbing both the data and categories from the corresponding apis
  const data = await axios.all([
    axios.get(servicesapiLink),
    axios.get(categoriesapiLink),
  ]);
  return [data[0].data.rows, data[1].data.rows];
}
