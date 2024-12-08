
const ContactSection = () => {
  return (
    <>
            <div className="font-extrabold text-7xl my-2 text-orange-500">LET'S WORK</div>
            <div className="text-[#353334] text-7xl font-extrabold mb-2">TOGETHER</div>
            <form  className="p-5 flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3 ">
                <label ><span className="text-[#888888] font-bold">Name</span> <br /><input type="text" placeholder="Your Name"  className="bg-[#353334] rounded-lg py-2 px-3 font-semibold w-full"/></label>
                <label ><span className="text-[#888888] font-bold">Email</span> <br /><input type="text" placeholder="Your Email"  className="bg-[#353334] rounded-lg py-2 px-3 font-semibold w-full"/></label>
              </div>
              <div>
              <label ><span className="text-[#888888] font-bold">Message</span> <br /><textarea  placeholder="Message"  className="bg-[#353334] rounded-lg py-2 px-3 font-semibold w-full min-h-36"/></label>
              </div>
              <button type="submit" className="w-full text-center px-5 py-1 bg-orange-700 text-bold text-xl rounded-lg">Submit</button>
            </form>
    </>
  )
}

export default ContactSection