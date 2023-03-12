/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import axios from 'axios';

axios.defaults.headers.common.Authorization = `token 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`;

AppRegistry.registerComponent(appName, () => App);
