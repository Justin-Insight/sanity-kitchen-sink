export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61402b486afc6039114a9a24',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-v4efh1m9',
                  apiId: 'fcce2cac-fa85-4c5a-a031-6620624cc63f'
                },
                {
                  buildHookId: '61402b4887b92447db7dcc18',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zeeh73ae',
                  apiId: '324ae421-e1e1-49fe-ba06-bb37e74ed6a5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Justin-Insight/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zeeh73ae.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
