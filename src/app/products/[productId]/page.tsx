export default function ProductDetails({
  params
} : {
  params : { productId : string}
}) {
  return <h1>DETALLEs {params.productId}</h1>
}