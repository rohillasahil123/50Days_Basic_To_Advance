import { useParams } from "react-router-dom";
import ProductSection from "../components/ProductSection";

const CategoryPage = () => {
  const { categoryName } = useParams();

  return <ProductSection selectedCategory={categoryName} />;
};

export default CategoryPage;