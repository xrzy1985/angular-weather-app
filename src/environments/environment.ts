// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  WEATHER: {
    WEATHER_API_BASE_URL: 'https://community-open-weather-map.p.rapidapi.com/weather',
    X_RAPID_API_KEY_HEADER: 'X-RapidAPI-Key',
    X_RAPID_API_KEY_VALUE: '8e28ca49e1msha31f25289337b83p10e83ajsn08b67cf216e4',
    X_RAPID_API_HOST_HEADER: 'X-RapidAPI-Host',
    X_RAPID_API_HOST_VALUE: 'community-open-weather-map.p.rapidapi.com'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
