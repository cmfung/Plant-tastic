import axios from 'axios';

function PlantListItem({ setPlant, plant }) {
  const handleClick = (event) => {
    const plant = event.target.lastChild.data.replace(/\s/g, '')
    console.log(plant)
    axios.get(`/plant/${plant}`)
      .then((response) => {
        setPlant(response.data[0]);
      })
      .catch((err) => console.log(err))
  }

  return (
    <div onClick={(e) => handleClick(e)}>
      {plant}
    </div>
  )
}

export default PlantListItem;