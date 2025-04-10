export const getProductInfo = async (message) => {
  if (message.toLowerCase().includes("product")) {
    return "Product details: The latest product is available in multiple colors and sizes.";
  }
  return null;
};
