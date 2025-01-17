// AllTruckList
const AllTruckList = ({ trucks }) => {
  if (!trucks || trucks.length === 0) {
    return <p>Немає доступних даних</p>;
  }

  return (
    <ul>
      {trucks.map(truck => (
        <li key={truck.id}>
          <h4>{truck.name}</h4>
          <p>Ціна: {truck.price}</p>
          <p>Рейтинг: {truck.rating}</p>
          <p>Локація: {truck.location}</p>
        </li>
      ))}
    </ul>
  );
};

export default AllTruckList;
