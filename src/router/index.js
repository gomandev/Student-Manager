import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import EditStudent from '@/components/EditStudent'
import NewStudent from '@/components/NewStudent'
import ViewStudent from '@/components/ViewStudent'
import AllStudents from '@/components/AllStudents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/edit/:student_id',
      name: 'edit-student',
      component: EditStudent
    },
    {
      path: '/new',
      name: 'new-student',
      component: NewStudent
    },
    {
      path: '/all',
      name: 'all-student',
      component: AllStudents
    },
    {
      path: '/:student_id',
      name: 'view-student',
      component: ViewStudent
    }
  ]
})
