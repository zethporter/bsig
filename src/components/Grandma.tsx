const Grandma = () => {
  return (
    <div className="w-full p-1 sm:w-full">
      <div className="sm:px-auto carousel-item m-2 sm:my-10">
        <img
          className="rounded-box mx-auto w-full sm:h-screen sm:w-auto"
          src={`https://bsig.s3.us-east-2.amazonaws.com/default/grandma.jpg`}
          alt={"Grandma"}
        />
      </div>
    </div>
  );
};

export default Grandma;
