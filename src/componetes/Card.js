
const Card = ({data}) => {
    const { id, url, width, height } = data;
    console.log(id, url, width, height);
    // data = {id,url,width,height}
  return (
    <div key={id}>
        <img  src={url}></img >
    </div>

  )
}

export default Card
