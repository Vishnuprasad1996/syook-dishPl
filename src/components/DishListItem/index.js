import "./index.css";

const DishListItem = (props) => {
  const { dishDetails } = props;
  console.log(dishDetails);
  const { dishName, description, image } = dishDetails;

  return (
    <li className="dishItem">
      <img src={image} alt={dishName} />
      <p className="name">Name : {dishName}</p>
      <p className="desc">{description}</p>
    </li>
  );
};

export default DishListItem;
