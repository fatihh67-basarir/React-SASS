

const Card = ({data}) => {
  return (
    <div className="container">
      {data.map((item) => {
        const {id, img, name, comment, job} = item
        return (
          <div>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="resim" />
            <div>
              <button>Small</button>
              <button>Large</button>
            </div>
          </div>

        )
      })}

    </div>
  )
}

export default Card