import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP')

    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleAddProduct = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        brand: data.brand,
                        name: data.name,
                        email: data.email,
                        image: imgData.data.url,
                        productName: data.productName,
                        condition: data.condition,
                        purchasePrice: data.purchasePrice,
                        mobile: data.mobile,
                        purchaseTime: data.purchaseTime,
                        deliveryLocation: data.deliveryLocation,
                        expectedPrice: data.expectedPrice,
                        postDate: data.postDate,
                        description: data.description
                    }
                    
                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(product)
                    })
                    .then(res => res.json())
                    .then(result =>{
                        console.log(result);
                    })
                }
            })

    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="hidden">
                        <DayPicker
                            mode='single'
                            seleted={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(handleAddProduct)}>
                                <div className="form-control">
                                    <input type="text" value={date} {...register("postDate")} className="input input-bordered" />
                                    {errors.postDate && <p className='text-red-500'>{errors.postDate.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" defaultValue={user?.displayName} {...register("name", {
                                        required: "Seller Name is Required"
                                    })} placeholder="Seller Name" className="input input-bordered" />
                                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="email" defaultValue={user?.email} {...register("email", {
                                        required: "Email Address is required"
                                    })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" {...register("productName", {
                                        required: "Product Name is Required"
                                    })} placeholder="Product Name" className="input input-bordered" />
                                    {errors.productName && <p className='text-red-500'>{errors.productName.message}</p>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Laptop Category</span>
                                    </label>
                                    <select {...register("brand", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option value="Apple">Apple</option>
                                        <option value="Asus">Asus</option>
                                        <option value="Hp">Hp</option>
                                        <option value="Dell">Dell</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Poduct Condition</span>
                                    </label>
                                    <select {...register("condition", { required: true })} className="select select-bordered w-full max-w-xs">
                                        <option value="Excellent">Excellent</option>
                                        <option value="Good">Good</option>
                                        <option value="Fair">Fair</option>
                                    </select>
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" {...register("purchasePrice", {
                                        required: "Purchase Price is Required"
                                    })} placeholder="Purchase Price" className="input input-bordered" />
                                    {errors.purchasePrice && <p className='text-red-500'>{errors.purchasePrice.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" {...register("mobile", {
                                        required: "Mobile Number is Required"
                                    })} placeholder="Mobile Number" className="input input-bordered" />
                                    {errors.mobile && <p className='text-red-500'>{errors.mobile.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" {...register("purchaseTime", {
                                        required: "Purchase Time is Required"
                                    })} placeholder="Month & Year of purchase time" className="input input-bordered" />
                                    {errors.purchaseTime && <p className='text-red-500'>{errors.purchaseTime.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" {...register("deliveryLocation", {
                                        required: "Delivery Location is Required"
                                    })} placeholder="Delivery Location" className="input input-bordered" />
                                    {errors.deliveryLocation && <p className='text-red-500'>{errors.deliveryLocation.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" {...register("expectedPrice", {
                                        required: "Expected Price is Required"
                                    })} placeholder="Expected Price" className="input input-bordered" />
                                    {errors.expectedPrice && <p className='text-red-500'>{errors.expectedPrice.message}</p>}
                                </div>
                                <div className="form-control mt-2">
                                    <textarea className="textarea textarea-bordered" {...register("description", {
                                        required: "Product Description is Required"
                                    })} placeholder="Product Description"></textarea>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Photo</span>
                                    </label>
                                    <input type="file" {...register("image", {
                                        required: "Product Photo is Required"
                                    })} placeholder="name" className="input input-bordered" />
                                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                                </div>
                                <div className="form-control mt-6">
                                    <input className='btn btn-primary w-full' value="Add Product" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;