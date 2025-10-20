import './Cabecalho.css'


export default function Cabecalho() {
  return (
     <header className="bg-white shadow-lg flex justify-between">
        <div className='flex items-center p-2 gap-2'>
            <div className='w-12 h-12 rounded-2xl  bg-gradient-to-r from-[#10ceb2] to-[#ae9ff2]'>
                <img src="aperto-de-mao.png" className='p-2 items-center justify-center'/>            
            </div>
            <div>
                <h1 className="text-2xl font-bold text-gray-800">DoeAqui</h1>
            </div>
        </div>
        <div className='flex justify-around gap-1 p-3 items-center mr-5'>
            <img src="map-pin.png" alt="alfinete de localização" className='w-6'/>
            <p>
                <select id="cidade">
                <option value="pelrs">Pelotas - RS</option>
                <option value="cancucurs">Canguçu - RS</option>
                </select>
            </p>
        </div>
    </header>
  )
}
