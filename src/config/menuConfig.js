export default [
  {
    title: 'Home',
    key: '/admin/home',
    type: 'wallet',
    children: []
  },
  {
    title: 'UI',
    key: '/admin/ui',
    type: 'setting',
    children: [
      {
        title: 'Button',
        key: '/admin/ui/buttons'
      },
      {
        title: 'Dialog',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loading'
      }
    ]
  },
  {
    title: 'Form',
    key: '/admin/from',
    type: 'form',

    children: [
      {
        title: 'Button',
        key: '/admin/ui/buttons'
      },
      {
        title: 'Dialog',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loading'
      }
    ]
  },
  {
    title: 'Table',
    key: '/admin/table',
    type: 'table',
    children: [
      {
        title: 'Button',
        key: '/admin/ui/buttons'
      },
      {
        title: 'Dialog',
        key: '/admin/ui/modals'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loading'
      }
    ]
  },
  {
    title: 'FullPage',
    key: '/admin/fullpage',
    type: 'lock',
    children: [
      {
        title: 'Button',
        key: '/admin/ui/buttons'
      }
    ]
  }
]
