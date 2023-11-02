const Header = () => {
  return (
    <div className="flex justify-between ">
        <h1 className="text-slate-600 text-md font-semibold self-end">
            Laporan Penjualan
        </h1>
        <div className="flex justify-between gap-8">
            <div className="flex flex-col">
                <label htmlFor="rangeDateForExport">
                    Tanggal
                </label>
                <input type="date" />
            </div>
            <button className="self-end">
                Export
            </button>
        </div>
    </div>
  )
}

export default Header