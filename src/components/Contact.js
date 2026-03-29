const Contact = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-4 m-4 font-sans text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-4xl mb-4 text-[#3d4152]">Contact Us</h1>
        <p className="text-xl text-gray-600 mb-8 font-medium">Hello, I am Varun KUKREJA.</p>
        <form className="flex flex-col gap-4 w-full max-w-[400px]">
            <input type="text" className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff5200] transition-colors" placeholder="Name" />
            <textarea className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#ff5200] transition-colors h-32 resize-none" placeholder="Message" />
            <button className="bg-[#ff5200] text-white font-bold text-lg rounded-xl px-6 py-3 hover:bg-[#e04a00] transition-colors shadow-lg hover:shadow-xl mt-2">Submit</button>
        </form>
    </div>
  );
};

export default Contact;