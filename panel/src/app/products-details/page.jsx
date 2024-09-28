"use client"
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page() {

  let [category, setCategory] = useState([])
  let [color, setColor] = useState([])
  let [size, setSize] = useState([])
  let [subCat, setSubCat] = useState([]);
  const [thumbnailPre, setThumbnailPrel] = useState(null);
  const [galleryPreview, setGalleryPreview] = useState([]);


  let getCaegory = () => {
    axios.get(`http://localhost:8000/admin/product/category`)
      .then((res) => {
        return res.data
      })
      .then((finalres) => {
        setCategory(finalres.data)
      })
  }

  let getColor = () => {
    axios.get(`http://localhost:8000/admin/product/color`)
      .then((res) => {
        return res.data
      })
      .then((finalres) => {
        setColor(finalres.data)
        console.log(finalres.data)
      })
  }
  let getSize = () => {
    axios.get(`http://localhost:8000/admin/product/size`)
      .then((res) => {
        return res.data
      })
      .then((finalres) => {
        setSize(finalres.data)
      })
  }

  let getSubCategory = (cid) => {
    axios.get(`http://localhost:8000/admin/product/subcategory/${cid}`)
      .then((res) => {
        return res.data
      })
      .then((finalres) => {
        setSubCat(finalres.data)
      })
  }

  useEffect(() => {
    getCaegory()
    getColor()
    getSize()
  }, []);

  const handleThumbnailChange = (e)=>{
    setThumbnailPrel(URL.createObjectURL(e.target.files[0]));
  }

  const handleGalleryPreview = (e)=>{
    setGalleryPreview(Array.from(e.target.files));

  };


  const handleAddProduct = (e) => {
    e.preventDefault();
    let data = new FormData(e.target);

    axios.post(`http://localhost:8000/admin/product/add-product`,data)
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })

  }
  return (
    <div class="p-4 border border-gray-300 shadow-md rounded-lg w-[90%] mx-auto my-5">
      <form action="" method="post" onSubmit={handleAddProduct}>
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold p-[10px] rounded bg-gray-200 w-full">
            Product Details
          </h2>
        </div>

        <h1>Product Name</h1>
        <input
          type="text"
          placeholder="Laptop"
          name="productName"
          className="my-5 border-2 w-[80%] py-2 rounded placeholder:text-black placeholder:pl-[8px]"
        />
        <h1>Product Description</h1>
        <textarea
          type="text"
          placeholder="Product Description"
          name="productDescription"
          className="my-5 border-2 w-[80%] py-2 rounded placeholder:text-black placeholder:pl-[8px]"
        />
        <h1>Product Short Description</h1>
        <input
          type="text"
          placeholder="Product Short Description"
          name="productsortDescription"
          className="my-5 border-2 w-[80%] py-2 rounded placeholder:text-black placeholder:pl-[8px]"
        />
        <h1> Select ParentCategory</h1>
        <select
          name="productPatrentCat"
          id=""
          className="w-[80%] p-2 mb-3 border-gray-300 border-2 rounded"
          onChange={(event) => getSubCategory(event.target.value)}

        >
          <option value="shirt" className="w-full">
            --Select--
          </option>
          {category.map((items, index) => {
            return (
              <option value={items._id} className="w-full">
                {items.categoryName}
              </option>
            )
          })}


        </select>
        <h1> Select Sub-Category</h1>
        <select
          name="productsubPatrentCat"
          id=""
          className="w-[80%] p-2 mb-3 border-gray-300 border-2 rounded"
        >


          <option value="shirt" className="w-full">
            --Select--
          </option>
          {subCat.map((items, index) => {
            return (
              <option value={items._id} className="w-full">
                {items.subcategoryName}
              </option>
            )
          })}

        </select>
        <h1>Thumbnail</h1>
        <input
          type="file"
          placeholder="Category Image"
          name="productImage"
          onChange={handleThumbnailChange}
          className="my-5 border-2 w-[80%] py-2 rounded placeholder:text-black placeholder:pl-[8px]"
        />

        <div>
          {thumbnailPre && (<img src={thumbnailPre} className="w-[100px]" />)}
        </div>

        <h1>Gallery</h1>
        <input
          type="file"
          placeholder="Category Image"
          name="productGallery"
          multiple
          className="my-5 border-2 w-[80%] py-2 rounded placeholder:text-black placeholder:pl-[8px]"
          onChange={handleGalleryPreview}
        />

        <div>
          {galleryPreview && galleryPreview.map((imgPre)=> (<img src={URL.createObjectURL(imgPre)} className="w-[100px]" />))}
        </div>

        <div className="flex flex-col">
          <h1>Price</h1>
          <input
            name="productPrice"
            type="text"
            placeholder="5000"
            className="my-5 border-2 w-[80%] py-2 rounded placeholder:text-black placeholder:pl-[8px]"
          />
          <h1>MRP</h1>
          <input
            type="text"
            placeholder="4000"
            name="productMrp"
            className="my-5 border-2 w-[80%] py-2 rounded placeholder:text-black placeholder:pl-[8px]"
          />
          <div className="grid grid-cols-2 space-x-2 ">
            <div>
              <h1> Select Size</h1>

            
            </div>
            <select
              name="productSize[]"
              id=""
              multiple
              className="w-[30%] p-2 mb-3 border-gray-300 border-2 rounded"
            >
              <option value="shirt" className="w-full">
                --Select--
              </option>
              {size.map((items, index) => {
                return (
                  <option value={items._id} className="w-full">
                    {items.sizeName}
                  </option>
                )
              })}
            </select>
            <div>
              <h1> Select Color</h1>
             
            </div>
            <select
              name="productColor[]"
              id=""
              multiple
              className="w-[30%] p-2 mb-3 border-gray-300 border-2 rounded"
            >
              <option value="shirt" className="w-full">
                --Select--
              </option>
              {color.map((items, index) => {
                return (
                  <option value={items._id} className="w-full">
                    {items.colorName}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="flex space-x-5">
          <h1>Status : </h1>
          <input type="radio" name="status" value={true} />
          <label htmlFor="active">Active</label>
          <input type="radio" name="status" value={false} />
          <label htmlFor="deactive">Deactive</label>
        </div>
        <button className="bg-purple-800 text-white my-[20px] py-2 px-[20px] rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
