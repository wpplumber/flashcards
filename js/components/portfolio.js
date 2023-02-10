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

  export { portfolio }