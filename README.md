# NASApod

NASApod is a minimalistic app that shows NASA's APODs (Astronomy Picture Of the Day), with the related picture and a description of what the image represents.

Feel free to try it out.

### Prerequisites

In order for the app to work, you must generate your own NASA API key. That can be done in a minute, using the following link: https://api.nasa.gov/

Just fill out the form and you should receive your API key via email.

Once you have done that, create a javascript file named Constants in the Utilities folder, and add the line export const API_KEY = '', where "API_KEY" will contain your API key.

Either do that, or use your own method of importing the API key, just make sure Axios uses it in the request.