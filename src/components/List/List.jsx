import './List.scss'
import Card from '../Card/Card'
import useFetch from '../myhook/useFetch'

const List = ({catid, mixPrice, sort, subCat}) => {
    console.log(mixPrice)

    const {data, loading, error} = useFetch(
        `/products?populate=*&[filters][categories][id]=${catid}${subCat.map(
            (item) => `&[filters][sub_categories][id][$eq]=${item}`
            )}&[filters][price][$lte]=${mixPrice}&sort=price:${sort}`
    )

    
    // const mydata = [
    //     {
    //         id: 1,
    //         img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         img2:"https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:" Long Sleeve Grapich T-shirt",
    //         isNew: true,
    //         OldPrice: 19,
    //         Price: 12
    //     },
    //     {
    //         id: 2,
    //         img:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:" Long Sleeve Grapich T-shirt",
    //         isNew: true,
    //         OldPrice: 19,
    //         Price: 12
    //     },
    //     {
    //         id: 3,
    //         img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //         title:" Long Sleeve Grapich T-shirt",
    //         isNew: false,
    //         OldPrice: 19,
    //         Price: 12
    //     },
    //     {
    //         id: 4,
    //         img:"https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //        title:" Long Sleeve Grapich T-shirt",
    //         isNew: true,
    //         OldPrice: 19,
    //         Price: 12
    //     },
    // ]
   
  return (
    <div className='list'>
        {loading ? "loading..." :data?.map(item =>(
            <Card item={item} key={item.key}/>
        ))}

    </div>
  )
}

export default List