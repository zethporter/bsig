const Cringe = () => {
  return (
    <div className="container mx-auto min-h-screen w-full p-1">
      <div className="m-2 sm:my-10">
        <img
          className="rounded-box mx-auto object-cover"
          src={`https://bsig.s3.us-east-2.amazonaws.com/default/cringe.jpg`}
          alt={"Cringe"}
        />
      </div>
      <div className="mx-auto mt-10">
        <p className="text-center text-xl">
          Even as a young lad Brayden was always into fashion.
        </p>
      </div>
    </div>
  );
};

export default Cringe;
