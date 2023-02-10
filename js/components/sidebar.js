const sidebar = async () => {
    let template = await fetch("./pages/sidebar.html")
    template = await template.text()
    return ({
        template: template,
        name: 'FlashcardSidebar',
        setup() {
  
          return {
            currentYear: new Date().getFullYear()
          }
         }
    })
  }

  export { sidebar }