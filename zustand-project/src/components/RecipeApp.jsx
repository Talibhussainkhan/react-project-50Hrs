import { useState } from "react";
import { useStore } from "../store/store";

const RecipeApp = () => {
  const { recipes, addRecipe, removeRecipe } = useStore();
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instruction, setInstruction] = useState("");
  const [editingRecipe, setEditingRecipe] = useState(null);

  const handleAddRecipe = () =>{
    if( name.trim() === '' || ingredients.trim() === '' || instruction.trim() === ''  ) return
    addRecipe({
      id : Date.now(),
      name ,
      ingredients : ingredients.split(',').map(ingredient => ingredient.trim()),
      instruction
    });
    setName('');
    setIngredients('');
    setInstruction('')
  }

  const handleRecipeEdit = (recipe) =>{
    setEditingRecipe(recipe);
    setName(recipe.name);
    setIngredients(recipe.ingredients.join(','));
    setInstruction(recipe.instruction);
  }

  const handleCancelEdit = () =>{
     setEditingRecipe(null);
     setName('');
    setIngredients('');
    setInstruction('');
  }

  const handleAddEditedRecipe = () => {
    if( name.trim() === '' || ingredients.trim() === '' || instruction.trim() === ''  ) return;
    if(editingRecipe){
      removeRecipe(editingRecipe.id);
      addRecipe({
      id : Date.now(),
      name ,
      ingredients : ingredients.split(',').map(ingredient => ingredient.trim()),
      instruction
    });
    setName('');
    setIngredients('');
    setInstruction('');
    };
    setEditingRecipe(null)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-green-800">
          Recipe Book
        </h1>

        <div className="space-y-6 mb-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Recipe Name"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="Ingredients ( coma seperated )"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder="Instruction"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
          />

         <div className="flex justify-between">
          { editingRecipe ? (
            <>
              <button
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-200"
              onClick={handleAddEditedRecipe}
              >
                Update Recipe
              </button>
              <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200"
              onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </> 
          ) : (
             <>
             <button
             onClick={handleAddRecipe}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-200"
              >
                Add Recipe
              </button>
             </>
          ) }
         </div>

        </div>

        <ul className="space-y-3">
          { recipes.map((recipe)=>(
            <li key={recipe.id} className="p-4 bg-green-50 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                { recipe.name }
              </h2>
              <p className="text-gray-700 mb-2">
                <strong>Ingredients:</strong> { recipe.ingredients.join(', ') }
              </p>
              <div className="flex justify-between">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-200" onClick={()=>handleRecipeEdit(recipe)}>Edit</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-200" onClick={() =>removeRecipe(recipe.id)}>Delete</button>
              </div>
            </li>
          )) }
        </ul>
      </div>
    </div>
  );
};

export default RecipeApp;
