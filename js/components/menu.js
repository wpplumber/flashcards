const { createApp, ref, computed } = Vue;
const { useRouter, useRoute } = VueRouter
const menu = async () => {
    let template = await fetch("./pages/menu.html")
    template = await template.text()
    return ({
        template: template,
        name: 'FlashcardMenu',
        setup() {
          const router = useRouter();
          const route = useRoute();
          const showMobileMenu = ref(false)
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
            showMobileMenu,
            navigateNext,
            navigateBack,
            currentMenuIndex,
            isMenuSelected,
            msg: 'Message from Home page'
          }
         }
    })
  }

  export { menu }