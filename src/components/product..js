const Products = (props) => {
  console.log(props);
  const { id, name, mobileNumber } = props;
  return (
    <div>
      {id},{name},{mobileNumber}
    </div>
  );
};
export default Products;
