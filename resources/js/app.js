import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

 createInertiaApp({
   resolve: (name) => require(`./pages/${name}`),
   setup({el, App, props, plugin}) {
     return createApp({
       render: () => h(App, props),
     }).use(plugin)
       .mount(el)
   },
 })

