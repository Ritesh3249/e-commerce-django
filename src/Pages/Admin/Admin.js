import React from 'react'
import Products from '../../components/Products.js'

const Admin = () => {
    return (
        <div className='flex'>

            <aside id="default-sidebar" class=" top-0 left-0 z-40 w-64   transition-transform -translate-x-full  sm:translate-x-0" aria-label="Sidebar">
                <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <h1 className="block text-sm font-medium leading-6 text-white ">Add product</h1>
                    <hr className='text-white' />
                    <ul class="space-y-2 font-medium">
                        <li>
                            <div className="flex   flex-1 flex-col justify-center px-6  ">

                                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                   
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-white ">
                                                Name
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex   flex-1 flex-col justify-center px-6  ">

                                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                     
                                        <div>
                                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-white ">
                                                Price
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="price"
                                                    name="price"
                                                    type="text"
                                                    // autoComplete="price"
                                                    required
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="flex   flex-1 flex-col justify-center px-6  ">

                                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
                                    
                                        <div>
                                            <label htmlFor="price" className="block text-sm font-medium leading-6 text-white ">
                                                Image
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="image"
                                                    name="image"
                                                    type="file"
                                                    // autoComplete="image"
                                                    required
                                                    className="block w-full   py-1.5 text-gray-900 shadow-sm    focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                        </li>
                        <button class="bg-transparent mx-2 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  hover:border-transparent rounded">
                Add Product
              </button>
                    </ul>
                </div>
            </aside>
            <div class="w-full">
                <h1 className='font-bold text-5xl'>Products</h1>
                 <Products/>
            </div>


        </div>
    )
}

export default Admin