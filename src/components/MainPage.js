import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const MainPage = () => {
	let [products, setProducts] = React.useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8080/products")
			.then((res) => {
				products = res.data.product;
				setProducts(products);
				console.log(products)
			})
			.catch((err) => {
				return console.log(err);
			});
	}, []);
	if (products === undefined) {
		return <h1>상품정보를 받고 있습니다.</h1>;
	}
	return (
		<>
			<div id="body">
				<div id="banner">
					<img src="images/banners/banner1.png" alt="" />
				</div>
				<h2>Products</h2>
				<div id="product-list">
					{products.map((product, idx) => {
						return (
							<div className="product-card" key={idx}>
								<Link className="product-link" to={`/product/${product.id}`}>
									<div>
										<img className="product-img" src={product.imageUrl} alt={product.name} />
									</div>
									<div className="product-content">
										<span className="product-name">{product.name}</span>
										<span className="product-price">{product.price}원</span>
										<div className="product-footer">
											<div className="product-seller">
												<img className="product-avatar" src="images/icons/avatar.png" alt="" />
												<span>{product.seller}</span>
											</div>
											<span className="product-date">{dayjs(product.createdAt).fromNow()}</span>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default MainPage;
