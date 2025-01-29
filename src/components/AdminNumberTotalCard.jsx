
const AdminNumberTotalCard = ({ name, number }) => {
    return (
        <div className="border border-solid p-5 w-72 rounded-xl">
            <div className="text-xl text-blue-800">
                {name}
            </div>
            <div className="mt-2 text-5xl float-right font-bold text-blue-500">
                {number}
            </div>
        </div>
    )
}
10
export default AdminNumberTotalCard
