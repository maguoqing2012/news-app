/**
 * 文本新闻列表组件
 */
import React,{Component,PropTypes} from 'react'
import axios from 'axios'
import {Card} from 'antd'
import {Link} from 'react-router'
export  default class NewsBlock extends Component{

      static propTypes = {
        type:PropTypes.string.isRequired,
        count:PropTypes.number.isRequired
      }
      state ={
        newsArr:[]
      }
      componentDidMount(){
        //发送ajax请求 得到新闻数据列表
        const {type,count} = this.props
        const url=`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`
        axios.get(url)
          .then(response => {
            let newsArr=response.data.map(({uniquekey,title})=> ({uniquekey,title} ))

            this.setState({newsArr})
            console.log(this)
          })

      }

      render(){
        const {newsArr}=this.state
        console.log(newsArr)
        const {type} = this.props
        const contentUI = !newsArr
          ?<h2>没有相关新闻内容</h2>
          :(
            <ul>
              {
                newsArr.map((news, index) => (
                  <li key={index}>
                    <Link to={`/news_detail/${news.uniquekey}/${type}`}>{news.title}</Link>
                  </li>
                ))
              }

            </ul>
          )
        return(
          <Card className="topNewsList">
            {
              contentUI

            }
          </Card>
        )
      }
}