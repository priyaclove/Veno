export default function SectionLoader() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-48 bg-gray-200 rounded"></div>
            <div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
