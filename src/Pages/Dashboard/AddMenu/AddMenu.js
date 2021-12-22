
import React, { useState } from 'react';



const AddMenu = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData= new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('image', image);
        
        fetch('http://localhost:5000/menus',{
            method:'POST',
            body:formData
        }) 
        .then(res=>res.json())       
        .then(data => {
            if (data.insertedId) {
                alert('Menu Added Successfully!');
            }
        })
        .then(error=>{
            console.log('Error', error);
        })
    
    };
    return (
        <div>
            <h3 className='my-4'>Please Add a Menu</h3>
            <form className='mx-auto' onSubmit={handleSubmit}>

            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                <input onChange={e => setName(e.target.value)} className='form-control mb-4' required placeholder='Menu name' type="text" />
                <input onChange={e => setPrice(e.target.value)} className='form-control mb-4' required placeholder='price' type="number" />
                <input onChange={e => setDescription(e.target.value)} className='form-control mb-4' required placeholder='description' type="text" />
                <input onChange={e => setImage(e.target.files[0])} className='form-control mb-4' accept='image/*' required type="file" />
                <input className='btn btn-primary mb-4' type="submit" />
            </div>


                {/* <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <input className='form-control mb-4' placeholder='Product Name' {...register("name", { required: true })} />
                    <input className='form-control mb-4' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <textarea className='form-control mb-4' placeholder='Description' {...register("description", { required: true })} />
                    <input className='form-control mb-4' accept='image/*' type='file' placeholder='Img url' {...register("img", { required: true })} />
                    <input className='btn btn-primary mb-4' type="submit" />
                </div> */}
            </form>
        </div>
    );
};

export default AddMenu;