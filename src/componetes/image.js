import Card from "./Card";


const Image = ({data}) => {
  
  console.log(data);
    if (!data) {
      return <div>No hay datos disponibles.</div>;
    }
    
  return (
    <div>
        <h2>Imagens</h2>
        {data?.length > 0 &&
        data.map((imag)=> (<Card data={imag}></Card>))
        }
    </div>
  )
}

export default Image

