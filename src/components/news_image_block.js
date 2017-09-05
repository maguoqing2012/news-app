/**
 * 新闻列表图片组件
 */
import React,{Component,PropTypes} from 'react'
import axios from 'axios'
import {Card} from 'antd'
import {Link} from 'react-router'
export default class NewsImageBlock extends Component{
  static propTypes = {
    cardTitle : PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    cardWidth:PropTypes.string.isRequired,
    imageWidth: PropTypes.string.isRequired

  }
  state={
    newsArr:null
  }
  componentDidMount(){
    const {type,count} = this.props
    const url = `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${type}&count=${count}`
    axios.get(url)
        .then(response => {
          const newsArr = response.data.map(
            ({uniquekey, title, author_name, thumbnail_pic_s}) => ({uniquekey, title, author_name, thumbnail_pic_s} ))
          this.setState({newsArr})
        })

  }
  render(){
    const {cardTitle,cardWidth,imageWidth,type} = this.props
    const {newsArr} =this.state
    //图片样式对象
    const imageStyle = {
      width:imageWidth,
      height:'90px',
      display:'block'
    }
    //标题样式对像
    const titleStyle = {
      width:imageWidth,
      whiteSpace:'nowrap',
      overflow:'hidden',
      textOverflow:'ellipsis'

    }
    const newsList = !newsArr
      ? <h2>没有新闻列表</h2>
      : (
          newsArr.map((news,index) =>(
              <ul key={index} className="imageblock">
                <Link to={`/news_detail/${news.uniquekey}/${type}`}>
                  <div>
                    <img src={news.thumbnail_pic_s} style={imageStyle}/>
                  </div>
                  <h3 style={titleStyle}> { news.title}</h3>
                </Link>
              </ul>
            ))

        )
    return(
      <Card title={cardTitle} style={{width:cardWidth}} className="topNewsList">
        {
          newsList
        }
      </Card>
    )
  }
}
