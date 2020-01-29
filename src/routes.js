const Index = resolve => require(['./components/Index.vue'], resolve) 
let routes = [{
    path: '/',
    component: Index 
  },{
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  }]

export default routes;