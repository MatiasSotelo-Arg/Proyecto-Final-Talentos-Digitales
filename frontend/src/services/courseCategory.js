import { categories  } from "../data/categories"
 
export const fetchCourse = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        },1000)
    }) 
}
