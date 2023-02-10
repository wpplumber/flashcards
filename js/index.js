/**
 * @file Manages the functionalities of app.
 * @author Tarik Rital <mail.tarik.rital@gmail.com>
 * @version 1.0.0
 */
import { sidebar } from './components/sidebar.js'
import { menu } from './components/menu.js'
import { home } from './components/home.js'
import { about } from './components/about.js'
import { resume } from './components/resume.js'
import { portfolio } from './components/portfolio.js'
import { blog } from './components/blog.js'
import { post } from './components/post.js'
import { contact } from './components/contact.js'

const app = async () => {
  return ({
      template: '',
      components: {
          "FlashcardMenu" : await menu(),
          "FlashcardSidebar": await sidebar()
      },
      setup() {/*...*/ }
  })
}

const init = async () => {
  const index = Vue.createApp(await app());       
  const routings = VueRouter.createRouter({
  history : VueRouter.createWebHashHistory(),
      routes : [
          {path:'/', component: await home(), name: 'home'},
          {path:'/about', component: await about(), name: 'about'}
          , {path:'/resume', component: await resume(), name: 'resume'}
          , {path:'/portfolio', component: await portfolio(), name: 'portfolio'}
          , {path:'/blog', component: await blog(), name: 'blog'}
          , {path:'/blog/post', component: await post(), name: 'post'}
          , {path:'/contact', component: await contact(), name: 'contact'}
      ]
  })
  index.use(routings)
  index.mount("#flashcard-app")
}

init()