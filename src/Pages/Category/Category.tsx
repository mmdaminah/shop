import React, { useState, useEffect } from 'react'
import { Button, Pagination } from 'react-bootstrap'
import { RouteComponentProps,useLocation } from 'react-router'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useParams, useHistory } from 'react-router-dom'
import IProduct from '../../Interfaces/ProductInterface'
import { FiFilter } from "react-icons/fi";
import { MdClose } from "react-icons/md";
export const Category = (props: RouteComponentProps) => {
    const [pagination, setpagination] = useState(0)
    const [items, setItems] = useState<IProduct[]>([])
    const [windowWidth, setWindowWith] = useState(window.innerWidth)
    const { name } = useParams<{ name: string }>()
    const history = useHistory()
    const filterParams = (history.location.search.slice(1,history.location.search.length))
    const parsedFilters = filterParams && JSON.parse(filterParams)
    
    const request = () => {
        fetch("/" + name)
            .then(response => response.json())
            .then(result => {
                setItems(result.products)
            })
    }
    useEffect(() => {
        request();
    }, [name])
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWith(window.innerWidth)
        })
        console.log(parsedFilters)
        const filteredProducts:any = []
        for(let key in parsedFilters){
            if(parsedFilters[key].length){
                parsedFilters[key].map((item:any)=>{
                    items.map((product:any)=> {
                        if(product[key]===item){
                            filteredProducts.push(product)
                        }
                    })
                })
            }
        }
        console.log(filteredProducts)
    })
    const handlePaginationClick = (event: React.MouseEvent) => {
        const data = event.target as HTMLElement
        console.log(data.id)
        setpagination(+data.id * 4)
    }
    const handlePriceButton = (order: string) => {
        switch (order) {
            case "fromCheap":
                setItems([...items.sort((a, b) => +a.price - +b.price)])
                break;
            case "fromExpensive":
                setItems([...items.sort((a, b) => +b.price - +a.price)])
                break;
            case "fromNewest":
                setItems([...items.sort((a, b) => +b.id - +a.id)])
                break;
        }
    }
    interface IFilter {
        brand: String[]
        rom: String[]
        display: String[]
        connection: String[]
    }
    const [showFilter, setShowFilter] = useState(false)
    const [filter, setFilter] = useState<IFilter>({
        brand: [],
        rom: [],
        display: [],
        connection: []
    })
    const handleFilter = (event: React.ChangeEvent) => {
        const data = event.target as HTMLInputElement
        console.log(data.name, data.value, data.checked)
        if (data.checked)
            setFilter({
                ...filter,
                [data.name]: [...filter[data.name as keyof IFilter], data.value]
            })
        else {
            setFilter({
                ...filter,
                [data.name]: [...filter[data.name as keyof IFilter].filter((item)=>item !== data.value)]
            })
        }
    }
    const fitlerButtonClick = ()=>{
        let filterParam = "?"
        // for (let key in filter){
        //     (filter[key as keyof IFilter]).map((item,index)=>filterParam+=`${key}[${index}]=${item}&&`)
        // }
        // console.log(filterParam)
        // history.push(`${history.location.pathname}${filterParam}`)
        history.push(`${history.location.pathname}?${JSON.stringify(filter)}`)
    }
    return (
        <div className="bg-light" style={{ marginTop: `${windowWidth < 992 ? "3rem" : "5rem"}` }}>
            {windowWidth < 500 &&
                <div
                    onClick={() => setShowFilter(!showFilter)}
                    className="p-3"
                    style={{ backgroundColor: "#019CA7", position: "fixed", bottom: "14%", right: "5%", borderRadius: "50%" }}>
                    <FiFilter style={{ width: "35px", height: "35px" }} className="" />
                </div>
            }
            {showFilter &&
                <div className="w-100 h-100 bg-light" style={{ position: "fixed", bottom: "0", overflowY: "scroll", zIndex: 20 }}>
                    <div className="d-flex justify-content-between mt-5 pt-5">
                        <h1>فیلترها</h1>
                        <MdClose
                            onClick={() => setShowFilter(!showFilter)}
                            style={{ width: "40px", height: "40px" }} />
                    </div>
                    <div className="px-5" >
                        <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                            <div><strong>برند</strong></div>
                            <div>
                                {name === "mobile" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="brand" value="apple"   id="" />Apple</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="brand" value="samsung" id="" />Samsung</li>
                                    </ul>
                                }
                                {name === "tablet" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />Apple</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />Samsung</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />Microsoft</li>
                                    </ul>
                                }
                                {name === "laptop" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />Asus</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />Acer</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />MSI</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                            <div><strong>حافظه داخلی</strong></div>
                            <div>
                                {(name === "mobile" || name === "tablet") &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="16"  id="" />16GB</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="32"  id="" />32GB</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="64"  id="" />64GB</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="128" id="" />128GB</li>
                                    </ul>

                                }
                                {name === "laptop" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />256GB</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />512GB</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />1TB</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />1TB + 128 ssd</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                            <div><strong>اندازه صفحه نمایش</strong></div>
                            <div>
                                {name === "mobile" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="5"   id="" />5 inch</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="5.5" id="" />5.5 inch</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="6"   id="" />6 inch</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="6.5" id="" />6.5 inch</li>
                                    </ul>
                                }
                                {name === "tablet" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />8 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />9 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />10 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />12 inch</li>
                                    </ul>
                                }
                                {name === "laptop" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />12 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />13 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />15 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />17 inch</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        {(name === "mobile" || name === "tablet") &&
                            <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                                <div><strong>شبکه ارتباطی</strong></div>
                                <div>
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="2G" id="" />2G</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="3G" id="" />3G</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="4G" id="" />4G</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="5G" id="" />5G</li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <div className="w-100" style={{ minHeight: "120px" }}>
                            <button className="btn w-100 text-white" style={{ backgroundColor: "#3bc9a7" }}>اعمال فیلتر</button>
                        </div>
                    </div>
                </div>
            }
            <div className="container p-3 p-lg-0">
                <span>{name}</span>
                <span style={{ cursor: "pointer" }} onClick={() => history.push("/homepage")}> &lt; home</span>
            </div>
            <div className="container my-3">
                <span>مرتب سازی به صورت:</span>
                <Button onClick={() => handlePriceButton("fromCheap")} className="mx-2" variant="outline-secondary">ارزانترین</Button>
                <Button onClick={() => handlePriceButton("fromExpensive")} className="mx-2" variant="outline-secondary">گرانترین</Button>
                <Button onClick={() => handlePriceButton("fromNewest")} className="mx-2" variant="outline-secondary">جدیدترین</Button>
            </div>
            <div className="container d-flex my-5">
                {windowWidth > 500 &&
                    <div className="" >
                        <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                            <div><strong>برند</strong></div>
                            <div>
                                {name === "mobile" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="brand" value="apple"   id="" />Apple</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="brand" value="samsung" id="" />Samsung</li>
                                    </ul>
                                }
                                {name === "tablet" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="apple"     id="" />Apple</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="samsung"   id="" />Samsung</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="microsoft" id="" />Microsoft</li>
                                    </ul>
                                }
                                {name === "laptop" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="Asus" id="" />Asus</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="Acer" id="" />Acer</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="MSI" id="" />MSI</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                            <div><strong>حافظه داخلی</strong></div>
                            <div>
                                {(name === "mobile" || name === "tablet") &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="16"  id="" />16GB</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="32"  id="" />32GB</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="64"  id="" />64GB</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="rom" value="128" id="" />128GB</li>
                                    </ul>

                                }
                                {name === "laptop" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />256GB</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />512GB</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />1TB</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />1TB + 128 ssd</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                            <div><strong>اندازه صفحه نمایش</strong></div>
                            <div>
                                {name === "mobile" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="5"   id="" />5 inch</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="5.5" id="" />5.5 inch</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="6"   id="" />6 inch</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="display" value="6.5" id="" />6.5 inch</li>
                                    </ul>
                                }
                                {name === "tablet" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />8 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />9 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />10 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />12 inch</li>
                                    </ul>
                                }
                                {name === "laptop" &&
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />12 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />13 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />15 inch</li>
                                        <li style={{ listStyle: "none" }}><input className="mx-1" type="checkbox" name="" id="" />17 inch</li>
                                    </ul>
                                }
                            </div>
                        </div>
                        {(name === "mobile" || name === "tablet") &&
                            <div className="p-2 mb-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                                <div><strong>شبکه ارتباطی</strong></div>
                                <div>
                                    <ul>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="2G" id="" />2G</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="3G" id="" />3G</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="4G" id="" />4G</li>
                                        <li style={{ listStyle: "none" }}><input onChange={handleFilter} className="mx-1" type="checkbox" name="connection" value="5G" id="" />5G</li>
                                    </ul>
                                </div>
                            </div>
                        }
                        <button onClick={fitlerButtonClick} className="btn w-100 text-white" style={{ backgroundColor: "#3bc9a7" }}>اعمال فیلتر</button>
                    </div>
                }
                <div className="d-flex justify-content-center flex-wrap w-75 mx-auto p-3 bg-white" style={{ boxShadow: "rgb(0 0 0 / 10%) -1px 7px 12px 7px", borderRadius: "8px" }}>
                    {
                        items.map(((item, index) => {
                            if (index >= pagination && index <= pagination + Math.ceil(items.length / 4))
                                return (
                                    <div
                                        onClick={() => history.push(`/productdetails${item.id}?category=${item.category}`)}
                                        key={item.id + Math.random()}
                                        className={windowWidth < 500 ? "w-100" : "w-25 h-50"}>
                                        <ProductCard
                                            id={item.id}
                                            image={item.image}
                                            model={item.model}
                                            category={item.category}
                                            price={item.price}
                                        />
                                    </div>
                                )
                        }))
                    }
                </div>
            </div>
            <Pagination className="d-flex justify-content-center flex-row-reverse">
                <Pagination.Next />
                <Pagination.Last />
                {
                    items.map((item, index) => {
                        if (index % 4 === 0)
                            return (
                                <Pagination.Item key={Math.random()} id={`${index / 4}`} onClick={handlePaginationClick}>{index / 4 + 1}</Pagination.Item>
                            )
                    })
                }
                <Pagination.First />
                <Pagination.Prev />
            </Pagination>
        </div>
    )
}
export default Category;