

const Card = ({ icon, title, description }) => {
    return (
      <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-3">
        <div className="text-orange-400 text-xl">{icon}</div>
        <div>
          <h3 className="text-white font-bold">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    );
  };
  export default Card;