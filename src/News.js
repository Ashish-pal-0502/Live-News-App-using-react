export default function News(props){
	
	return(
		<div className="news">
           <div className="news-img">
           {
			props.article.urlToImage!==null?
			<img src={props.article.urlToImage} />
			:
			<img src="https://png.pngtree.com/png-vector/20190820/ourmid/pngtree-no-image-vector-illustration-isolated-png-image_1694547.jpg"/>
		   }

		   </div>
		   <h2>{props.article.title}</h2>
		   <p>{props.article.description?.substring(0,100)}...<a href={props.article.url} target="_blank">Read more</a></p>
		   

		   <div className="source">
			<p>{props.article.author}</p>
			<p>{props.article.source.name}</p>
		   </div>
		   
		</div>
	)

}