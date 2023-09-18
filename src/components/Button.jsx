import Resume from '../assets/ApataAbdulAzeezCV.pdf'

const Button = () => {
    const openResume = () => {
      window.open(Resume, '_blank');
    };
    return (
      <div>
          <button onClick={openResume}
           className='text-white w-[content] border-[1px] px-4 py-3 my-2 flex items-center hover:bg-[#ccd6f6] hover:text-[black]'>
             View Resume
          </button>
      </div>
    )
  }
  
  export default Button