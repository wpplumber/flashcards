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
  export { post }