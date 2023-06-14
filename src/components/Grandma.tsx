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
      <div>
        <p className="mx-auto w-2/3 text-center text-xl sm:w-1/4">
          This page is dedicated to the one and only Grandma. There are
          other&apos;s called grandma. But none are Grandma. She always had a
          way of making you feel great even when she was saying mean things.
        </p>
      </div>
    </div>
  );
};

export default Grandma;
