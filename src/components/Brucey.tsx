const Grandma = () => {
  return (
    <div className="m-2 h-screen w-full p-1 sm:w-full">
      <div className="sm:px-auto m-2 sm:my-10">
        <img
          className="rounded-box mx-auto w-full sm:h-screen sm:w-auto"
          src={`https://bsig.s3.us-east-2.amazonaws.com/default/BruceGay.jpg`}
          alt={"Grandma"}
        />
      </div>
    </div>
  );
};

export default Grandma;
