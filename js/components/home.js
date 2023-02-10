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

  export { home }