import { useLocation } from "react-router-dom"
import UpdateProduct from "../DialogBox/UpdateProduct"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../Redux/action" 
import toast from "react-hot-toast"
const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '₹48',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '₹35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '₹89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '₹35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

export default function Products() {
  const [status,setStatus] = useState(false)
  const {pathname} = useLocation()
  const dispatch = useDispatch()
 

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="product grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}  className="group relative">
              {pathname=="/admin"?<button className="absolute  border border-blue-500 top-2 right-2 bg-white p-1 rounded-full text-gray-400 hover:text-red-500 hover:bg-gray-100 focus:outline-none">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.414 10l3.293-3.293a1 1 0 10-1.414-1.414L10 8.586 6.707 5.293a1 1 0 10-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 001.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10z" clipRule="evenodd" />
                </svg>
              </button>:""}
              {pathname=="/admin"? <button onClick={()=>setStatus(true)} className="absolute top-2 left-2  border border-blue-500 bg-white p-1 rounded-full text-blue-400 hover:text-green-500 hover:bg-gray-100 focus:outline-none">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M15.293 3.293a1 1 0 011.414 1.414l-11 11a1 1 0 01-.622.279l-3 1a1 1 0 01-1.237-1.236l1-3a1 1 0 01.279-.622l11-11zM14 7l-4.332 4.332-1.043.348.348-1.043L14 7z" clipRule="evenodd" />
                </svg>
              </button>:""}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center  "
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              <button onClick={()=>{dispatch(addToCart(product));toast('Product added successfully')}} className="bg-transparent mx-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Add to cart
              </button>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>
      <UpdateProduct status={status} setStatus={setStatus}/>
    </div>
  )
}
