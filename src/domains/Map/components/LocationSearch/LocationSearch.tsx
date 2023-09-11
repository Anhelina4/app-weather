const LocationSearch = () => {
  return (
    <div>
      <div className="rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full border-0 py-1.5 px-4   ring-inset 
          ring-gray-300 focus:ring-1 focus:ring-inset bg-gray-700
           focus:ring-white sm:text-sm sm:leading-6"
          placeholder="Search by location..."
        />
      </div>
    </div>
  )
}

export default LocationSearch
