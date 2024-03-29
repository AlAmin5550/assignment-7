import { RiTimer2Line } from "react-icons/ri";
import { AiOutlineFire } from "react-icons/ai";
import PropTypes from 'prop-types';

const Recipe = ({ recipe,handleWantToCook }) => {
    const {name, image, description, ingredients,preparing_time,calories} = recipe;

    return (
        <div >

            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={image} className="rounded-xl h-[200px]" />
                </figure>
                <div>
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <hr />
                    <h2>Ingredients: {ingredients.length}</h2>
                    <ul className="text-sm font-light text-gray-400">
                        {
                            ingredients.map((ingridient,idx) => <li key={idx}>•{ingridient}</li>)
                        }
                    </ul>
                    <hr />
                    <div className="flex gap-2">
                        <span className="flex"><RiTimer2Line></RiTimer2Line>{preparing_time}</span>
                        <span className="flex"><AiOutlineFire></AiOutlineFire>{calories}</span>

                    </div>
                    <div className="card-actions">
                        <button onClick={()=> handleWantToCook(recipe)} className="btn bg-green-400 text-sm rounded-3xl mr-5 border-0">Want to cook</button>
                    </div>
                </div>
            </div>


        </div>
    );
};
Recipe.propTypes= {
    recipe: PropTypes.object.isRequired,
    handleWantToCook:PropTypes.func

}

export default Recipe;