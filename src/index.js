import Vue from 'vue';
import MainContent from './views/main-content';
import '../src/styles/main.scss';

let MainComponent = Vue.extend(MainContent);

new MainComponent().$mount("#mainContent");