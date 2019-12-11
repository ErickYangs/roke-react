export default [
  {
    title: 'Home',
    key: '/home',
    type: 'wallet'
  },
  {
    title: 'UI',
    key: '/ui',
    type: 'setting',
    children: [
      {
        title: 'Button',
        key: '/ui/buttons',
        type: 'exception'
      },
      {
        title: 'Dialog',
        key: '/ui/modals',
        type: 'inbox'
      },
      {
        title: 'Loading',
        key: '/ui/loading',
        type: 'key'
      }
    ]
  },
  {
    title: 'Form',
    key: '/from',
    type: 'form',

    children: [
      {
        title: 'Login Form',
        key: '/from/loginform',
        type: 'history'
      },
      {
        title: 'Register Form',
        key: '/from/registerform',
        type: 'man'
      }
    ]
  },
  {
    title: 'Table',
    key: '/table',
    type: 'table',
    children: [
      {
        title: 'Table List',
        key: '/table/tablelist',
        type: 'qrcode'
      },
      {
        title: 'Basic List',
        key: '/table/basiclist',
        type: 'shake'
      },
      {
        title: 'Card List',
        key: '/table/cardlist',
        type: 'pound'
      }
    ]
  },
  {
    title: 'FullPage',
    key: '/fullpage',
    type: 'lock',
    children: [
      {
        title: 'Details',
        key: '/fullpage/detail',
        type: 'global'
      }
    ]
  },
  {
    title: 'User Rights',
    key: '/rights',
    type: 'deployment-unit'
  }
]
