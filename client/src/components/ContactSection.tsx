import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { contactSchema,contactSchemaType } from "../types"
import { emailService } from "../utils/email"
import GenericMotion from "./GenericMotion"
import toast from "react-hot-toast"

const ContactSection = () => {
  const Form = useForm<contactSchemaType>({
    resolver: zodResolver(contactSchema)
  })

  async function handleSubmitForm(data: contactSchemaType) {
    const response =  await emailService(data)
    console.log(response)
    toast(`${response.text}`)
  }
  return (
    <GenericMotion
    >
      <div className="main-text-head1">LET'S WORK</div>
      <div className="main-text-head2">TOGETHER</div>
      <form className="p-5 flex flex-col gap-3" onSubmit={Form.handleSubmit(handleSubmitForm)}>
        <div className="grid grid-cols-2 gap-3 ">
          <label ><span className="text-[#888888] font-bold">Name</span> <br /><input  type="text" {...Form.register("name")} placeholder="Your Name" className="bg-[#353334] rounded-lg py-2 px-3 font-semibold w-full" /></label>
          <label ><span className="text-[#888888] font-bold">Email</span> <br /><input type="text" {...Form.register("email")} placeholder="Your Email" className="bg-[#353334] rounded-lg py-2 px-3 font-semibold w-full" /></label>
        </div>
        <div>
          <label ><span className="text-[#888888] font-bold">Message</span> <br /><textarea {...Form.register("message")} placeholder="Message" className="bg-[#353334] rounded-lg py-2 px-3 font-semibold w-full min-h-36" /></label>
        </div>
        <button type="submit" className="w-full text-center px-5 py-1 bg-orange-700 text-bold text-xl rounded-lg" disabled={Form.formState.isLoading}>
          {Form.formState.isLoading ? "Submitting" : "Submit"}
          </button>
        {Form.formState.errors.name && <p className="text-bold text-2xl font-serif text-orange-600">{Form.formState.errors.name?.message}</p>}
        {Form.formState.errors.email && <p className="text-bold text-2xl font-serif text-orange-600">{Form.formState.errors.email?.message}</p>}
        {Form.formState.errors.message && <p className="text-bold text-2xl font-serif text-orange-600">{Form.formState.errors.message?.message}</p>}
      </form>
    </GenericMotion>
  )
}

export default ContactSection