const Headshots = () => {
  return (
    <div className="w-full px-1 py-5">
      <div className="sm:px-auto m-2 sm:my-10">
        <img
          className="rounded-box mx-auto w-full object-cover p-1 sm:w-1/3"
          src={`https://bsig.s3.us-east-2.amazonaws.com/default/oldHeadshot.jpg`}
          alt={"oldHeadshot"}
        />
        <img
          className="rounded-box mx-auto w-full object-cover p-1 sm:w-1/3"
          src={`https://bsig.s3.us-east-2.amazonaws.com/default/bsHeadshot.jpg`}
          alt={"newHeadshot"}
        />
      </div>
      <div>
        <p className="mx-auto w-2/3 text-center text-xl sm:w-1/4">
          From young prebubescent boy. To grown man, he's always kept his skin
          top notch for his headshots.
        </p>
      </div>
    </div>
  );
};

export default Headshots;
