import { create } from "zustand";

export const useCounter = create((set)=> ({
count : 0,
    increment : () =>{
        set(state => ({ count : state.count + 1 }))
    },
    decrement : () =>{
        set(state => ({ count : state.count - 1 }))
    }    
})
)

export const useStore = create((set)=>({
    recipes : [],
    addRecipe : (recipe)=> set((state) => ({ recipes : [...state.recipes, recipe] })),
    removeRecipe : (id) => set((state)=> ({ recipes : state.recipes.filter((recipe)=> recipe.id !== id) }))
}))