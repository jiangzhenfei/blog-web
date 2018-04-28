import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import WriteBlog from '@/components/writeBlog'
import BlogDir from '@/components/blogDir'
import Read from '@/components/read'

Vue.use(Router)

export default new Router({
  	routes: [
    	{
      		path: '/',
      		name: 'HelloWorld',
      		component: HelloWorld
		},
		{
			path: '/writeBlog',
			name: 'writeBlog',
			component: WriteBlog
		},
		{
			path: '/blogDir',
			name: 'blogDir',
			component: BlogDir
		},
		{
			path: '/read/:id',
			name: 'read',
			component: Read
		},
		  
  	]
})
