import { createRouter, createWebHistory } from 'vue-router'

import PoolHostingData from '../Components/PoolHostingData.vue'
import PoolHostingDashboard from '../Components/PoolHostingDashboard.vue'
import PoolHostingGanancias from '../Components/PoolHostingGanancias.vue'
import PoolHostingMineros from '../Components/PoolHostingMineros.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: PoolHostingDashboard
    },
    {
      path: '/pool',
      name: 'Pool',
      component: PoolHostingData
    },
    {
      path: '/ganancias',
      name: 'Ganancias',
      component: PoolHostingGanancias
    },
    {
      path: '/mineros',
      name: 'Mineros',
      component: PoolHostingMineros
    }
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  export default router