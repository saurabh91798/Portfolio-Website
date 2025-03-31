import { Files, Minus, Square, X } from 'lucide-react';

const TitleBar = () => {
  return (
    <div className="bg-gray-900 p-2 flex justify-between items-center border-b border-gray-800">
      <div className="flex items-center space-x-2">
        <Files size={16} className="text-gray-400" />
        <span className="text-gray-300 text-sm">VSCode Portfolio</span>
      </div>
      <div className="flex space-x-4">
        <button className="text-gray-400 hover:text-white">
          <Minus size={16} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Square size={16} />
        </button>
        <button className="text-gray-400 hover:text-white">
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default TitleBar;
