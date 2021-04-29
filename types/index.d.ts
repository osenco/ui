import { DefineComponent, Plugin } from 'vue';

declare const ui: Exclude<Plugin['install'], undefined>;

export default ui;

export const Container: Exclude<Plugin['install'], undefined> | DefineComponent;
export const FormInput: Exclude<Plugin['install'], undefined> | DefineComponent;
