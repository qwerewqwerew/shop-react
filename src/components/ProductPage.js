import { API_URL } from "../config/constants";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductPage.css";
import axios from "axios";

const ProductPage = () => {
	const { id } = useParams();
	let [product, setProduct] = useState(null);
	useEffect(() => {
		axios
			.get(`${API_URL}/products/${id}`)
			.then((res) => {
				console.log(res);
				product = res.data.product;
				setProduct(product);
			})
			.catch((err) => {
				return console.log(err);
			});
	}, []);

	if (product === null) {
		return <h1> 상품정보를 받고있습니다.</h1>;
	}

	return (
		<>
			<div id="image-box">
				<img
					src={`/${product.imageUrl}`}
					alt={product.name}
				/>
			</div>
			<div id="profile-box">
				<img
					src="/images/icons/avatar.png"
					alt={product.seller}
				/>
				<span className="product-seller">{product.seller}</span>
			</div>
			<div id="content-box">
				<div id="name">{product.name}</div>
				<div id="price">{product.price} 원</div>
				<div id="createAt">2022.01.05</div>
				<div id="desc">{product.desc}</div>
			</div>
		</>
	);
};
export default ProductPage;
