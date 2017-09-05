/*根路由组件*/
import React,{Component} from 'react'
import '../App.css'
import NewsHeader from "../components/news_header";
import NewsFooter from "../components/news_footer";
import '../App.css'
export default class App extends Component{
  render(){
    return (
      <div>
        <NewsHeader />
        {this.props.children}
        <NewsFooter />
      </div>
    )

  }
}
