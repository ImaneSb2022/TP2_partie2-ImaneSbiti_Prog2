import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import RecettesCategoriesService from '../service/recettesService'
import FetchState from '../../components/FetchState/FetchState'
import './style/MealDBStyle.css'
import { Link } from 'react-router-dom'


import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateRecette } from "../store/recetteSlice";
import FavoriteButton from "../../favorites/components/FavortieButton/FavoriteButton";




/*bootstrap*/
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const recettesCategoriesService = new RecettesCategoriesService();



const RecetteByCategorie = () => {

	const params = useParams();

	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["meals", params.name],
		queryFn: () => recettesCategoriesService.getRecetteByCategorie(params.name),
	});
	
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(updateRecette(data));
	}, [dispatch, data]);
	

	return (
		<Container fluid className='min-vh-100 d-grid'>

			<FetchState isLoading={isLoading} isError={isError} error={error}>

				<Container className=' p-5'>
					<div className="d-flex justify-content-between">
						<Link to={`/`}>
							<h6 className='btn btn-dark'> Home  - Categories</h6>
						</Link>
						<Link to={`/favories`}>
							<h6 className='btn btn-dark'>Liste des favories</h6>
						</Link>
					</div>

				<h2 className='text-success pb-5'> - {params.name} Category - </h2>

					<Row>

						{data && data.map((meals) => (
							<Col className='meals border border-secondary rounded-3 m-3 p-3'  key={meals.idMeal} xs={12} sm={6} md={4} lg={3} xl={2}>
								
								<img src={meals.strMealThumb} alt="" className='img-thumbnail'/>
								
                                <Link className='meals-title_link' to={`/meals/${meals.idMeal}`} key={meals.idMeal}>
									<h5 className='text-center my-3'>{meals.strMeal}</h5>
								</Link>
								
								<FavoriteButton recette={meals} />
							</Col>

						))}

					</Row>

				</Container>

			</FetchState>

		</Container>

	)

}

export default RecetteByCategorie;
