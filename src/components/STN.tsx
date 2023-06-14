const STN = () => {
  // https://bsig.s3.us-east-2.amazonaws.com/ftn/freeTheNip1.jpg
  const imageEndings = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];
  return (
    <div className="m-2 p-1">
      <div className="mx-auto mt-2 h-1 w-2/3 rounded-2xl bg-gradient-to-br from-red-400/40 from-20% via-blue-400/40 via-40% to-yellow-400/40"></div>
      <div className="mx-5 my-2 rounded-xl p-2 text-center sm:mx-auto sm:w-1/3">
        <p className="text-xl">
          As a proud gay boy Brayden is a big proponent of the Free the Nipple
          campaign. And it shows in many of his photo shoots. Scroll to the side
          for some examples.
        </p>
      </div>
      <div className="carousel-center carousel w-full p-2">
        {imageEndings.map((ending) => (
          <div className="carousel-item m-2 w-full sm:w-1/4" key={ending}>
            <img
              className="rounded-box object-cover"
              src={`https://bsig.s3.us-east-2.amazonaws.com/ftn/freeTheNip${ending}.jpg`}
              alt={ending}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default STN;
