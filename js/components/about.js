const about = async () => {
    let template = await fetch("./pages/about.html")
    template = await template.text()
    return ({
        template: template,
        setup() {/*...*/ }
    })
  }

  export { about }