import Header from "@/components/layouts/Header"
import TablePenjualan from "@/components/table/TablePenjualan"

const LaporanPenjualan:React.FC = () => {
  return (
    <div className="bg-white w-full h-200 p-8">
        <Header />
        <TablePenjualan />
    </div>
  )
}

export default LaporanPenjualan