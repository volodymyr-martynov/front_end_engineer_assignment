export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative flex items-center justify-center w-16 h-16">
        <div className="absolute w-full h-full border-4 border-gray-800 rounded-full animate-spin border-t-transparent"></div>
        <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  );
}
