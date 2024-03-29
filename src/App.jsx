
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Banner from './components/banner/Banner'
import { useEffect } from 'react';
import Recipe from './components/Recipe/Recipe';

function App() {
  const [recipes,setRecipes] = useState([]);
  const [cookRecipes,setCookRecipes] = useState([]);
  const [preparingRecipes,setPreparingRecipes] = useState([])
  useEffect(()=>{
    fetch('recepies.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])
  const handleWantToCook = (recipe) => {
    const isExist = cookRecipes.find(item => item.id == recipe.id);
    if(!isExist){
      const newCookRecipes = [...cookRecipes,recipe];
    setCookRecipes(newCookRecipes);
    }
    else{
      alert('Recipe already exists')
    }
  };
  const handlePreparing = cooking => {
    const setCookingRecipes = cookRecipes.filter(item => item.id != cooking.id );
    setCookRecipes(setCookingRecipes);
    const newPreparingRecipes = [...preparingRecipes,cooking];
    setPreparingRecipes(newPreparingRecipes);
  }

  return (
    <>

      <main>
        <Header></Header>
        <Banner></Banner>
        <section className='mt-24'>
          <div className='text-center'>
            <h1 className='text-5xl font-bold mb-7'>Our Recipes</h1>
            <p >Explore our diverse recipes section featuring delicious dishes from around the world,<br /> ranging from comforting recipes to innovative creations. </p>

          </div>
          <div className='mt-12 flex gap-10'>
            <div className='grid grid-cols-2 gap-6'>
            {
              recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>)
            }
            </div>
            <div className='border-4 border-gray-100 px-5 pt-5 text-center rounded-2xl space-y-2 w-[514px]'>
              <h1 className='text-2xl font-bold underline'>Want to cook: {cookRecipes.length}</h1>
              <table className='table font-light'>
                <tr className='justify-between '>
                  <th>sl.</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
                
                 {
                  cookRecipes.map((recipe,idx) => <tr className='space-y-2 space-x-5 gap-3' key={idx}>
                    <th>{idx+1}</th>
                    <th>{recipe.name}</th>
                    <th>{recipe.preparing_time}</th>
                    <th>{recipe.calories}</th>
                    <button onClick={()=>handlePreparing(recipe)} className='p-1 font-semibold bg-green-400 rounded-3xl mr-5 border-0'>Preparing</button>
                  </tr>)
                 }
                
              </table>
              <h1 className='text-2xl font-bold underline mt-10'>Currently Cooking:{preparingRecipes.length}</h1>
              <table className='table font-light'>
                <tr>
                  <th>sl.</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
                
                 {
                  preparingRecipes.map((recipe,idx) => <tr className='space-y-2 space-x-10 gap-3' key={idx}>
                    <th>{idx+1}</th>
                    <th>{recipe.name}</th>
                    <th>{recipe.preparing_time}</th>
                    <th>{recipe.calories}</th>
                  </tr>)
                 }
                
              </table>
              
              



            </div>
          </div>

        </section>
      </main>

    </>
  )
}

export default App
