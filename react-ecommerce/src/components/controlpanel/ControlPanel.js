import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import './controlpanel.css'


const ControlPanel = () => {

	let initialState = {
		name: '',
		description: '',
		price: '',
		url: ''
	}

	const [itemList, setItemList] = useState([])
	const [productForm, setProductForm] = useState(initialState)

	useEffect(() => {
        async function fetchData() {
            var response = await fetch("http://localhost:4200/products");
            var json = await response.json();
            setItemList(json);
		}
		
		fetchData()
		/*
        if(props.results.length === 0){
            fetchData();
        } else {
            setProducts([])
            setProducts(props.results)
        }*/
    }, [/*props.results*/]);

	let handleInput = (event) => {
		let newValue = {[event.target.name] : event.target.value}
		setProductForm(prev => { return {...prev, ...newValue}})
	}

	let onSubmit = (event) =>  {
		event.preventDefault()
		let formData = new FormData()
		let imageInput = document.getElementById('image-input')
		let file = imageInput.files[0]

		formData.append('img', file)
		formData.append('name', productForm.name)
		formData.append('description', productForm.description)
		formData.append('price', productForm.price)
		formData.append('url', productForm.url)

		fetch("http://localhost:4200/products", { method:'POST' , body: formData} )
	}

	let imageUpload = () => {
		const input = document.getElementById('image-input');
		const span = document.getElementById('image-input-span')
		let filename = input.value.split(/(\\|\/)/g).pop()
		span.textContent = filename
		setProductForm(prev => {return {...prev, url: span.textContent}})
	}

	return (
		<>
		<Typography align='center' component="h3" variant="h3">
			Panel de control
		</Typography>
		<img src='http://localhost:4200/uploads/photo4915785049358575848.jpg'/>
		<div className='panel-container'>
			<div id='add-item' className='panel-add-item'>
				<Typography component="h5" variant="h5">
					Agregar producto a la tienda
				</Typography>
				<form id="panel-form" onSubmit={onSubmit}>
					<TextField name="name" onChange={handleInput} margin="normal" required fullWidth label="Nombre" variant="outlined" autoFocus/>
					<TextField name="description" onChange={handleInput} margin="normal" required fullWidth label="Descripcion" variant="outlined"/>
					<TextField name="price" onChange={handleInput} margin="normal" required fullWidth label="Precio" variant="outlined"/>
					<input onChange={imageUpload} name='file' type='file' id='image-input' style={{display:'none'}}/>
					<label htmlFor='image-input'>
						<Button id='image-input-btn' variant="contained" color="primary" component="span">Seleccionar imagen</Button>
						<Typography id='image-input-span' component="span">
							No se selecciono una imagen
						</Typography>
					</label>
					<Button type='submit' variant="contained" color="secondary">Agregar producto</Button>
				</form>
			</div>
			<div className='panel-modify-item'>
				<Typography component="h5" variant="h5">
					Modificar producto de la tienda
				</Typography>
				<div className='item-list'> {
					itemList.map((value) => {
    					var url = require("../../assets/" + value.url);
						return (
							<Card className='panel-card'>
								<div className='panel-modify-container'>
									<div className='panel-image-holder'>
										<CardMedia className='panel-image' image={url}/>
									</div>
									<div className='panel-description-holder'>
										<CardContent>
											<Typography component="h6" variant="h6">
												{value.name}
											</Typography>
											<Typography component="h6" variant="h6" color="textSecondary">
												{value.description}
											</Typography>
											<Typography component="h6" variant="h6" color="textSecondary">
												${value.price}
											</Typography>
										</CardContent>
									</div>
									
  									<Divider orientation="vertical" flexItem />
									<div className='panel-price-holder'>
										<CardContent className='panel-actions'>
											<IconButton>
												<EditIcon color='primary'/>
											</IconButton>
											<IconButton>
												<DeleteIcon color='secondary'/>
											</IconButton>
										</CardContent>
									</div>
								</div>
							</Card>
						)
					})
				}
					
				</div>
			</div>
		</div>
		</>
	)
}

export default ControlPanel