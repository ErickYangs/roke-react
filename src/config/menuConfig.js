export default [
  {
    title: 'Home',
    key: '/admin/home',
    type: 'wallet'
  },
  {
    title: 'UI', 
    key: '/admin/ui',
    type: 'setting',
    children: [
      {
        title: 'Button',
        key: '/admin/ui/buttons',
        type: 'exception'
      },
      {
        title: 'Dialog',
        key: '/admin/ui/modals',
        type: 'inbox'
      },
      {
        title: 'Loading',
        key: '/admin/ui/loading',
        type: 'key'
      }
    ]
  },
  {
    title: 'Form',
    key: '/admin/from',
    type: 'form',

    children: [
      {
        title: 'Login Form',
        key: '/admin/from/loginform',
        type: 'history'
      },
      {
        title: 'Register Form',
        key: '/admin/from/registerform',
        type: 'man'
      }
    ]
  },
  {
    title: 'Table',
    key: '/admin/table',
    type: 'table',
    children: [
      {
        title: 'Table List',
        key: '/admin/table/tablelist',
        type: 'qrcode'
      },
      {
        title: 'Basic List',
        key: '/admin/table/basiclist',
        type: 'shake'
      },
      {
        title: 'Card List',
        key: '/admin/table/cardlist',
        type: 'pound'
      }
    ]
  },
  {
    title: 'FullPage',
    key: '/admin/fullpage',
    type: 'lock',
    children: [
      {
        title: 'Details',
        key: '/admin/fullpage/detail',
        type: 'global'
      }
    ]
  }
]
