import {
    Select,
  } from 'antd'
  import  React, {useEffect,useState} from "react"
  import {useSelector,useDispatch} from "react-redux"
  import action from "@/store/actions"



export default props=>{
    let list=useSelector(store=>store.good.arr)
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(action.catelist())
    return undefined
    },[])
    return (
        <div>
            <Select
            allowClear
            style={{ width: 200 }}
            placeholder="选择一个品类"
            onChange={val=>props.onChange(val)} 
            value={props.value}
          >
                {props.jj&&<Option value="" key="00">全部</Option>}
              {list.map(res=>(
                  <Option value={res.cate} key={res._id}>{res.cate_zh}</Option>
              ))
                }
          </Select>
        </div>
    )
}