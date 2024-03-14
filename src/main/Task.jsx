import React, { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { getApii, postData } from '../service/api'
import Select from "react-select"
import { CardSkeleton } from '../components/CardSkeleton'
import { Link } from 'react-router-dom'
export const Task = () => {
    const colorStyles={
        control:(styles,state)=>({...styles,zIndex:99,backgroundColor:'rgb(245,245,245)',border:'0px',borderBottom:'2px solid #d1d5db',borderRadius:'none'
    }),
        option:(styles,{data,isDisabled,isFocused,isSelected})=>{
           return {...styles,backgroundColor:'#d1d5db',     
        }
        },
        multiValue:(styles,{data})=>{
            return{
                ...styles
                ,backgroundColor:'black',
                color:'white',
                padding:'0px'
            }
        },
        multiValueLabel:(styles)=>{
            return{...styles,color:'white'}
        },
        multiValueRemove:(styles,{data})=>{
            return{
                ...styles,
                cursor:'pointer',
                ':hover':{
                    color:'red',
                    backgroundColor:'black'
                }
                
            }
            
        }
    }
    const options = [
        {
            label: 'javascript',
            value: ' OUTPUT BERUPA ACCOUNT, ',
        },
        // {
        //     label: 'tailwind', 
        //     value: 'tailwind',
        // },
        {
            label: 'html',
            value: ' html',
        },
        {
            label: 'css',
            value: 'css ',
        },
        // {
        //     label: 'bootstrap',
        //     value: ' bootstrap',
        // },
        // {
        //     label: 'react',
        //     value: 'react ',
        // },
        // {
        //     label: 'css',
        //     value: 'css, ',
        // },
    ]
    const [dataSelect,setDataSelect]=useState([])
    const handleChangeSelect=(e)=>{
        setDataSelect(e)                
    }
    const [dataPost,setDataPost]=useState({
        title: '',
        description:"",
        language:[],
        date:"",
        link:"",
    })
    function handleChange(e){
        const dataa={...dataPost}
        dataa[e.target.name]=e.target.value
        setDataPost(dataa)        
    }
    const [load,setLoad]=useState(false)
    function handlesubmit(e){
        e.preventDefault()
        setLoad(true)
        setTimeout(()=>{
            setLoad(false)
            
        },2000)
        postData(dataPost,dataSelect)
    }
    
    const data2 = JSON.parse(localStorage.getItem('changeDahsboardProfile'))
    const [data,setData]=useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        getApii().then((a=>setData(a)))
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    }, [])
    let date = new Date();
    let tahun = date.getFullYear();
    let bulan = date.getMonth()
    let tanggal = date.getDate()
    useEffect(()=>{
        
    },[])
    switch(bulan) {
        case 0: bulan = '01'; break;
        case 1: bulan = '02'; break;
        case 2: bulan ='03'; break;
        case 3: bulan = '04'; break;
        case 4: bulan = '05'; break;
        case 5: bulan = '06'; break;
        case 6: bulan = '07'; break;
        case 7: bulan = '08'; break;
        case 8: bulan = '09'; break;
        case 9: bulan = '10'; break;
        case 10: bulan = "11"; break;
        case 11: bulan = "12"; break;
       }
    const tanggalSekarang=`${tahun}-${bulan}-${tanggal}`
    const inputPanjang='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-hitam focus:outline-none focus:ring-0 focus:border-hitam peer'
    const labelPanjang='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-hitam peer-focus:dark:text-hitam peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
    return (
        <div className='w-full'>

            <div className='w-full py-5 rounded-3xl px-7 h-xl bg-abuu'>
                <div className=' sm:w-[80%] md:w-full  lg:w-[80%]  w-full  '>
                    <h1 className='text-2xl font-medium'>Hi Syahreza</h1>
                    <p className='py-3 pb-4 text-gray-600 text-[15px] text-justify '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus odio, at nam earum perferendis sed unde minus a nobis, assumenda impedit voluptates aut ut? Distinctio quis quas nemo architecto cupiditate! </p>
                    <Button>View Details </Button>
                </div>
            </div>
            <div className='w-full mt-9 '>
                <div className='flex items-end justify-between w-full px-5'>
                    <h3 className='font-semibold'>Trending Task</h3>
                    
                    <p className='text-sm text-gray-600 cursor-pointer'>
                        <Link to='/Dashboard.github.io/detail'>View all</Link></p>
                </div>
                <div className='flex flex-wrap justify-between w-full mt-5 gap-7 md:gap-5 xl:gap-0'>
                    {loading ?
                        data.map((a, i) => {
                            if (i < 3) {
                                return (
                                    <div className='w-full sm:w-[47%] md:w-full lg:w-[47%] xl:w-[31%] 'key={i}>

                                    <Card theme={i % 2 == 1} title={a.title} link={a.link} description={a.description} language={a.language} key={i} />
                                     </div>
                                )
                            }
                        })

                        :
                      <>
                            <CardSkeleton ></CardSkeleton>
                            <CardSkeleton ></CardSkeleton>
                            <CardSkeleton ></CardSkeleton>
                      </>
                  
                    }
                </div>
            </div>
            <div className='h-[420px] md:h-[360px] p-6 mt-8 bg-abuu rounded-3xl'>
                <form className="w-full"  >
                    

                <div className='flex justify-between w-full'>
                        <h1 className='text-2xl font-medium'>Add Task</h1>
                        <div className='flex gap-1'>
                        <>
  
  <button
    disabled=""
 
    className="px-4 py-2 text-white bg-hitam rounded-xl active:scale-95 "
    type='submit' onClick={(e)=>handlesubmit(e)}
  >
    {load?
    <span>

    <svg
    aria-hidden="true"
    role="status"
    className="inline w-4 h-4 text-gray-200 me-3 animate-spin dark:text-gray-600"
    viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="#1C64F2"
      />
    </svg>
    Loading...
</span>
:<>Submit</>
}
  </button>
  </>

                            {/* <button className='px-4 py-2 text-white bg-hitam rounded-xl active:scale-95 ' >Submit</button> */}
                            <button className='px-4 py-2 bg-[rgb(235,235,235)] rounded-xl active:scale-95'>Reset</button>
                        </div>

                    </div>
                    <div className="relative z-0 w-full mt-5 mb-6 group">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            className={inputPanjang}
                            placeholder=" "
                            required=""
                            onChange={handleChangeSelect}
                        />
                        <label
                            htmlFor="title"
                            className={labelPanjang}
                        >
                            Add Title
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="description"
                            id="description"
                            className={inputPanjang}
                            placeholder=" "
                            required=""
                            onChange={(e)=>handleChange(e)}
                        />
                        <label
                            htmlFor="description"
                            className={labelPanjang}
                        >
                          Add Description
                        </label>
                    </div>
                    

                    <div className="relative z-50 w-full mb-6 group">
                    <Select 
                      options={options} 
                      isMulti
                      placeholder={''}
                      onChange={(e)=>handleChangeSelect(e)}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                        
                          primary25: 'hotpink',
                          primary: 'black',
                        },
                      })}
                      className='text-sm text-hitam'
                      styles={colorStyles}
                      ></Select>
                         
                
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-6" style={{zIndex:'-99px'}}>
                        <div className="relative z-0 w-full mb-5 group">
                        <input
                                type="text"
                                name="link"
                                id="link"
                                className={inputPanjang}
                                placeholder=" "
                                required=""
                                onChange={(e)=>handleChange(e)}
                            />
                            <label
                                htmlFor="link"
                                className={labelPanjang}
                            >
                                Add link
                            </label>
                 
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className={inputPanjang}
                                placeholder=" "
                                required=""
                                max={tanggalSekarang}
                                onChange={(e)=>handleChange(e)}
                            />
                            <label
                                htmlFor="date"
                                className={labelPanjang}                            >
                              
                            </label>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
