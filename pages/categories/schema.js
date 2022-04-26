import { gql } from "@apollo/client";

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query getCategoryProducts($categoryId: Int!) {
    category(id: $categoryId){
      id
      name
      url_key
      products{
        items{
          id
          name
        }
        total_count
      }
    }
  }
`