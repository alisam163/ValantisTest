import { useEffect, } from 'react';
import Items from './components/Items/Items'
import Pagination from './components/Pagination/Pagination'
import { getFields, getFilterItem, getItems, getList} from './api/Valantis'
import { useDispatch, useSelector } from 'react-redux';
import { addItems, onLoading, offLoading, setIds } from './redux/slices/itemsSlice'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Filter from './components/Filter/Filter';
import { setArrBrand } from './redux/slices/filterSlice';


const App = () => {
    const offset = useSelector((state) => state.offset.value)
    const limit = useSelector(state => state.limit.value)
    const loading = useSelector(state => state.items.loading)
    const filter = useSelector(state => state.filter.value)
    const text = useSelector(state => state.filter.text)
    const items = useSelector((state) => state.items.value);
    const ids = useSelector((state) => state.items.ids)

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(onLoading())

        const filterBrand = getFields("brand", offset, limit)
        filterBrand.then((res) => {
            try { 
                const filterArray = res.data.result.filter((elem) => {
                    return elem != null
                }) 
                dispatch(setArrBrand(filterArray))
                console.log(filterArray);
            } catch (error) {
                filterBrand()
                console.error(error);
            }

        })

        const res = getList(offset, limit)
        res.then((response) => {
            try { 
                dispatch(setIds(response.data.result))
                console.log(ids);
                const x = getItems(ids)
                x.then((res) => {
                   dispatch(addItems(res.data.result));
                   console.log(res);
                })
                dispatch(offLoading())
            } catch (error) {
                getList(offset, limit)
                console.log(error);
            }
          })

    }, [offset])

    useEffect(() => {
        if(text) {
            const fil = getFilterItem(text)
            fil.then((res) => {
                const items = getItems(res.result)
                items.then((res) => {
                    console.log(res);
                })
            })
        }
    }, [text])


    return (
        <div>
                        {
                loading ? <LoadingSpinner /> : (
                    <>
                        <h1 className="h1-title">Товары: {filter}</h1> 
                        <Filter />
                        <Items items={items}/>
                        <Pagination />
                    </>
                )
            }
        
        </div>
    );
}

export default App;