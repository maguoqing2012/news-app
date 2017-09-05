import React from 'react'
import {render} from 'react-dom'
import './index.css'
import App from './components/app'
import {Router,hashHistory,IndexRoute,Route} from 'react-router'
import NewsContainer from './components/news_container'
import NewsDetail from './components/news_detail'
import UserCenter from './components/user_center'

render((
  /* 用于Router组件的history属性
   作用: 为地址url生成?_k=hash, 用于内部保存对应的state*/
  <Router history={hashHistory}>
    {/*指定根目录*/}
  <Route path='/'component={App}>
  <IndexRoute component={NewsContainer}> </IndexRoute>
    <Route path='/news_detail/:id' component={NewsDetail}></Route>
    <Route path='/user_center/:id' component={UserCenter}></Route>
  </Route>
  </Router>
),document.getElementById('root'))


