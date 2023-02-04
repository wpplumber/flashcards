const { createApp, ref, computed } = Vue;
const { useRouter, useRoute } = VueRouter

const sidebar = async () => {
  let template = await fetch("./pages/sidebar.html")
  template = await template.text()
  return ({
      template: template,
      name: 'FlashcardSidebar',
      setup() {

        return {
        }
       }
  })
}

const menu = async () => {
  let template = await fetch("./pages/menu.html")
  template = await template.text()
  return ({
      template: template,
      name: 'FlashcardMenu',
      setup() {
        const router = useRouter();
        const route = useRoute();

        const currentMenuIndex = ref(0)
        const selectedMenuItem = computed(() => {
           return true
        })

        function navigateNext(){
          const currentRoute = route.name;
          switch (currentRoute){
            case 'home':
              router.push({name: 'about'})
              break;
              case 'about':
                router.push({name: 'resume'})
                break;
                case 'resume':
                  router.push({name: 'portfolio'})
                  break;
                  case 'portfolio':
                    router.push({name: 'blog'})
                    break;
                    case 'blog':
                      router.push({name: 'contact'})
                      break;
                      case 'contact':
                        break;
          }
        }

        function navigateBack(){
          const currentRoute = route.name;
          switch (currentRoute){
              case 'home':
              break;
              case 'about':
                router.push({name: 'home'})
                break;
                case 'resume':
                  router.push({name: 'about'})
                  break;
                  case 'portfolio':
                    router.push({name: 'resume'})
                    break;
                    case 'blog':
                      router.push({name: 'portfolio'})
                      break;
                      case 'contact':
                        router.push({name: 'blog'})
                        break;
          }
        }

        function isMenuSelected(item, index){
          currentMenuIndex.value - index;
          const currentRoute = route.name;
          console.log(`currentRoute : ${currentRoute}`)
          if (currentRoute == item) {
            return true
          }
         return false
        }

        return {
          navigateNext,
          navigateBack,
          currentMenuIndex,
          isMenuSelected,
          msg: 'Message from Home page'
        }
       }
  })
}

const home = async () => {
  let template = await fetch("./pages/home.html")
  template = await template.text()
  return ({
      template: template,
      setup() {
        
        return {
          msg: 'Message from Home page'
        }
       }
  })
}

const about = async () => {
  let template = await fetch("./pages/about.html")
  template = await template.text()
  return ({
      template: template,
      setup() {/*...*/ }
  })
}

const resume = async () => {
  let template = await fetch("./pages/resume.html")
  template = await template.text()
  return ({
      template: template,
      setup() {
        
        return {
          knowledges: [
            'Website hosting',
            'iOS and android apps',
            'Create logo design',
            'Design for print',
            'Modern and mobile-ready',
            'Advertising services include',
            'Graphics and animations',
            'Search engine marketing'
          ]
        }
      }
  })
}

const portfolio = async () => {
  let template = await fetch("./pages/portfolio.html")
  template = await template.text()
  return ({
      template: template,
      setup() {
        
        return {
          categories: [
            'Mockup',
            'Mobile',
            'Template',
            'Scripts',
            'Content',
            'SEO'
          ],
          works: [
            {
              title: 'Quasar dashboard',
              image: 'bitcoin.jpg',
              category: ''
            },
            {
              title: 'Adobe reader PDF',
              image: 'annoy.jpg',
              category: ''
            },
            {
              title: 'AI post SEO',
              image: 'cms.jpg',
              category: ''
            },
            {
              title: 'UI kit Tailwind',
              image: 'office.jpg',
              category: ''
            },
            {
              title: 'Translate specs',
              image: 'smartphone.jpg',
              category: ''
            },
            {
              title: 'Quasar dashboard',
              image: 'whiteboard.jpg',
              category: ''
            }
          ]
        }
      }
  })
}

const blog = async () => {
  let template = await fetch("./pages/blog.html")
  template = await template.text()
  return ({
      template: template,
      setup() {
        
        return {
          categories: [
            'Mockup',
            'Mobile',
            'Template',
            'Scripts',
            'Content',
            'SEO'
          ],
          posts: [
            {
              title: 'Quasar dashboard',
              image: 'bitcoin.jpg',
              date: '05 Mar 2022',
              category: 'JS'
            },
            {
              title: 'Adobe reader PDF',
              image: 'annoy.jpg',
              date: '05 Mar 2022',
              category: 'Content writting'
            },
            {
              title: 'AI post SEO',
              image: 'cms.jpg',
              date: '05 Mar 2022',
              category: 'Marketing'
            },
            {
              title: 'UI kit Tailwind',
              image: 'office.jpg',
              date: '05 Mar 2022',
              category: 'UI Style'
            },
            {
              title: 'Translate specs',
              image: 'smartphone.jpg',
              date: '05 Mar 2022',
              category: 'App'
            },
            {
              title: 'Quasar dashboard',
              image: 'whiteboard.jpg',
              date: '05 Mar 2022',
              category: 'Framework'
            }
          ]
        }
      }
  })
}

const post = async () => {
  let template = await fetch("./pages/post.html")
  template = await template.text()
  return ({
      template: template,
      setup() {
        
        return {
          categories: [
            'Mockup',
            'Mobile',
            'Template',
            'Scripts',
            'Content',
            'SEO'
          ],
          relatedPosts: [
            {
              title: 'ChatGPT Won’t Replace Google Search (Yet)',
              image: 'bitcoin.jpg',
              date: '05 Mar 2022',
              category: 'JS'
            },
            {
              title: 'Adobe reader PDF',
              image: 'annoy.jpg',
              date: '05 Mar 2022',
              category: 'Content writting'
            },
            {
              title: `Use SEO to Fuel Your Brand's Community`,
              image: 'cms.jpg',
              date: '05 Mar 2022',
              category: 'Marketing'
            }
          ]
        }
      }
  })
}

const contact = async () => {
  let template = await fetch("./pages/contact.html")
  template = await template.text()
  return ({
      template: template,
      setup() {
        
        return {
          categories: [
            'Mockup',
            'Mobile',
            'Template',
            'Scripts',
            'Content',
            'SEO'
          ],
          relatedPosts: [
            {
              title: 'ChatGPT Won’t Replace Google Search (Yet)',
              image: 'bitcoin.jpg',
              date: '05 Mar 2022',
              category: 'JS'
            },
            {
              title: 'Adobe reader PDF',
              image: 'annoy.jpg',
              date: '05 Mar 2022',
              category: 'Content writting'
            },
            {
              title: `Use SEO to Fuel Your Brand's Community`,
              image: 'cms.jpg',
              date: '05 Mar 2022',
              category: 'Marketing'
            }
          ]
        }
      }
  })
}

const app = async () => {
  // let template = await fetch("index.html")
  // let text = await template.text()
  // console.log('template fetch :' + text)
  // console.dir(template)
  // template = text
  return ({
      template: '',
      components: {
        // FlashcardMenu,
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