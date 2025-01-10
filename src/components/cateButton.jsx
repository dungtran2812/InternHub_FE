
const CateButton = ({ category }) => {
    return (
        <div>
            <button className='border-solid border-2 border-grown-500 rounded-md px-3 '>
               <div style={{color: "#b3afbe"}}>
               {category}
               </div>
            </button>
        </div>
    )
}

export default CateButton
