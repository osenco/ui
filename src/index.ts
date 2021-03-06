/* eslint-disable */
import { App as Application, Plugin } from 'vue';
import * as components from './components';
import { setVueInstance } from './utils/config/index';

const install: Exclude<Plugin['install'], undefined> = (
  instance: Application
) => {
  setVueInstance(instance);
  for (const componentKey in components) {
    instance.use((components as any)[componentKey]);
    //instance.component((components as any)[componentKey], (components as any)[componentKey]);
  }
};

export default install;

export * from './components';
export * from './utilities';