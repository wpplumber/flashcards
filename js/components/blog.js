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

  export { blog }