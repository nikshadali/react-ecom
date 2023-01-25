import { useParams } from 'react-router-dom'
import List from '../../components/List/List'
import './Products.scss'
import { useState } from 'react';
import useFetch from '../../components/myhook/useFetch';

const Products = () => {
  const catid = parseInt((useParams().id))
  const [mixPrice, setMixPrice] = useState(1000)
  const [sort, setSort] = useState(null)
  const [selectedSubCat, setSelectedSubCat] = useState([])
    const {data, loading, error} = useFetch(
      `/sub-categories?[filters][categories][id][$eq]=${catid}`
    )
    console.log("ali =>", data)
 const changehandler = (e) => {
  const value = e.target.value;
  const isCheck = e.target.checked

  setSelectedSubCat(
    isCheck
    ?[...selectedSubCat, value]
    :selectedSubCat.filter((item) => item !==value)
    )
}
  
    return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
             <div className="inputItem">
             <input type="checkbox" id={item.id} value={item.id}  onChange={changehandler}/>
             <label htmlFor={item.id}>{item.attributes.title}</label>
           </div>
           

          ))}
       
        </div>
        <div className="filterItem">
        <h2>Filter by Price</h2>
        <div className="inputItem">
            <sapn>0</sapn>
           <input type="range" min={0} max={1000} onChange={(e) => setMixPrice(e.target.value)} />
           <sapn>{mixPrice}</sapn>
          </div>
        </div>
        <div className="filterItem">
        <h2>Sort by</h2>
        <div className="inputItem">
            <input type="radio" id="asnc" value="asnc" name='price' onChange={(e) => setSort('asc')}/>
            <label htmlFor="3">Price (Lowest Price)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="dsnc" value="dsnc" name='price'  onChange={(e) => setSort('desc')} />
            <label htmlFor="3">Price (Highest Price)</label>
            
          </div>
        </div>
      </div>
      <div className="right">
      <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catid={catid} mixPrice={mixPrice} sort={sort} subCat={selectedSubCat} />
      </div>
    </div>
  )
}

export default Products