import error from "./../assets/img/error.png";

const Index = () => {
  return (
    <div className="flex items-center justify-center flex-col space-y-5 min-h-fit my-page">
        <img src={error} alt="404 edrror image" className="h-[200px] w-fit" />
        <span className="text-primary">It looks like you found a glitch in the matrix...</span>
    </div>
  );
};

export default Index;
