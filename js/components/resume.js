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

  export { resume }