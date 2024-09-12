/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "glightbox/dist/css/glightbox.min.css";
// import "aos/dist/aos.css";
import "../css/main.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "glightbox/dist/js/glightbox.min.js";
// import "aos/dist/aos.js";
import "../js/main.js";
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from '@adonisjs/inertia/helpers'

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob('../pages/**/*.tsx'),
    )
  },

  setup({ el, App, props }) {
    
    hydrateRoot(el, <App {...props} />)
    
  },
});