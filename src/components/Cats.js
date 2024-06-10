import {useState, useEffect} from "react"
import AnimalPopover from "./AnimalPopover";
const Cats = () => {
    const [catsData, setCatsData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const fetchCats = async () => {
          try {
            const responseCats = await fetch('https://freetestapi.com/api/v1/cats');
            if (!responseCats.ok) {
              throw new Error(`Failed to fetch data: ${responseCats.status}`);
            }
            const data = await responseCats.json();
            setCatsData(data);
          } catch (error) {
            console.error('Error:', error);
          }
        };
    
        fetchCats();
      }, []);
      
      const filteredCats = catsData.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const [selectedAnimal, setSelectedAnimal] = useState(null);
      const [isPopoverOpen, setIsPopoverOpen] = useState(false);
      const openPopover = (animal) => {
        setSelectedAnimal(animal);
        setIsPopoverOpen(true);
      };

      const closePopover = () => {
        setSelectedAnimal(null);
        setIsPopoverOpen(false);
      };
    return(
        <div className="ml-16">
          <div className="flex justify-center p-4">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border border-[#ffb54f] focus:outline-none focus:border-[#ffc477] placeholder:text-slate-400 rounded-md"
            />
        </div>
        
        <div className='flex align-middle gap-3 py-3 px-10'>
          <a role='button' className='button bg-slate-100 hover:bg-slate-200 p-4 rounded-xl' href='/'>Show All</a>
          <a role='button' className='button bg-[#ffb54f] hover:bg-[#ffc477] text-white p-4 rounded-xl' href='/category/cats'>Cats</a>
          <a role='button' className='button bg-slate-100 hover:bg-slate-200 p-4 rounded-xl' href='/category/dogs'>Dogs</a>
          <a role='button' className='button bg-slate-100 hover:bg-slate-200 p-4 rounded-xl' href='/category/birds'>Birds</a>
        </div>

            <div className='flex flex-wrap gap-6 p-5'>
            {filteredCats.map(cat => (
            <div key={cat.id} className='w-60 flex flex-col justify-center bg-slate-100 p-3 rounded-xl'>
                <img src={cat.image} className='h-40 object-cover rounded-xl' alt={cat.name} />
                <div className='p-2'>
                <h2 className='font-bold text-lg'>{cat.name}</h2>
                <p className='text-sm text-gray-600'>{cat.origin}</p>
                </div>
                <div className='m-2'>
                <button 
                onClick={() => openPopover(cat)}
                 className='bg-blue-200 text-blue-900 px-3 py-1 rounded-md'>Learn More</button>
                </div>
                </div>
                ))}
            </div>

            {selectedAnimal && (
              <AnimalPopover
                isOpen={isPopoverOpen}
                closeModal={closePopover}
                animal={selectedAnimal}
              />
            )}
        </div>
    )
}
export default Cats