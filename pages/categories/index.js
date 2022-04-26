import Link from 'next/link'
import styles from '../../styles/Home.module.css'

import { useQuery, gql } from '@apollo/client'
// import { GET_CATEGORIES } from './schema'

const GET_CATEGORIES = gql`
  {
    categories(filters:{}) {
      items {
        name
        id
      }
    }
  }
`;

const Categories = () => {
  const response = useQuery(GET_CATEGORIES);

  const { loading, data, error } = response;

  if (loading) {
      return <p>loading</p>;
  }

  if (error) {
    return <p>{error}</p>;
}

  return (
    <div className={styles.container}>
        <div>
            {data.categories.items.map((item, index) => {
                return (
                  <Link href={`categories/${item.id}`} key={index}>
                    <a href="https://nextjs.org/docs">
                        <ul>
                            <li>{item.name}</li>
                        </ul>
                    </a>
                  </Link>
                );
            })}
        </div>
    </div>
  )
}

export default Categories;