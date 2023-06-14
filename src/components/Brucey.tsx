const Grandma = () => {
  return (
    <div className="m-2 w-full px-1 py-5 sm:w-full">
      <div className="sm:px-auto m-2 sm:my-10">
        <img
          className="rounded-box mx-auto w-full sm:h-screen sm:w-auto"
          src={`https://bsig.s3.us-east-2.amazonaws.com/default/BruceGay.jpg`}
          alt={"IsBruceGay?"}
        />
      </div>
      <div>
        <p className="mx-auto w-2/3 text-center text-xl sm:w-1/4">
          Here is Brayden with his friend Bruce. Experiencing the most gay thing
          Bruce has ever done.
        </p>
      </div>
    </div>
  );
};

export default Grandma;
