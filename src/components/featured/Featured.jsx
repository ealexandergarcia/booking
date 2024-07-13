import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/653310.jpg?k=ce44ae39520098ec3da816123463d3594f22425a341aeead609469d63ff6042b&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Bofotá</h1>
          <h1>123 Properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/653359.jpg?k=f2d8971a96e210e13df62e485878aa3879d51d5856e6c4cd011136e7a4033528&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Medellín</h1>
          <h1>123 Properties</h1>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf2.bstatic.com/xdata/images/city/600x600/653391.jpg?k=0bc65ed59c5a0672f577c5394e7e31b173fc680205dee2a6a7abdb5ea1a53bee&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitle">
          <h1>Santa Marta</h1>
          <h1>123 Properties</h1>
        </div>
      </div>
    </div>
  );
};

export default Featured;
