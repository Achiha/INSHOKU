import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';



const Contact: React.FC = () => {


  const { register, trigger, formState: { errors } } = useForm();




  const onSubmit = async (e: any) => {

    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();

    }






    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(e),
    });
    // reset();
    let result = await response.json();
    alert(result.status);





  };







  return (
    <motion.div
    key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
  >
    <div className=" h-auto pb-36 w-full ">





      <section className=' flex items-center justify-center mt-32 '>


        <div className="container px-6 md:px-12">
        <h1 className='text-center tracking-widest font-sans mt-8 pr-8 text-3xl mb-12'>CONTACT</h1>
          <div className="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,5%,0.7)] shadow-black/20 md:py-16 md:px-12  backdrop-blur-[30px]">

            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
              <form
  target="_blank"
  onSubmit={onSubmit}
  method="POST"
  action="https://formsubmit.co/4168581ca37bb44486b797bee10c991a"
>
  <div className="relative mb-6">
    <input
      type="text"
      className="peer text-black  block min-h-[auto] w-full rounded border-0 bg-beige-1 py-[0.32rem] px-3 leading-[1.6] outline-none "
      placeholder="Name"
      {...register('name', {
        required: true,
        maxLength: 80,
      })}
    />
    {errors.name && (
      <p className="text-orange-2">
        {errors.name.type === 'required' && 'This field is required'}
        {errors.name.type === 'maxLength' && 'Max length is 80 characters'}
      </p>
    )}
  </div>
  <div className="relative mb-6" data-te-input-wrapper-init>
    <input
      type="email"
      className="peer text-bk-black2 bg-beige-1 block min-h-[auto] w-full rounded border-0 bg-beige- py-[0.32rem] px-3 leading-[1.6] outline-none"
      id="InputEmail1"
      placeholder="Email"
      {...register('email', {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      })}
    />
    {errors.email && (
      <p className="text-orange-2">
        {errors.email.type === 'required' && 'This field is required'}
        {errors.email.type === 'pattern' && 'Invalid email address'}
      </p>
    )}

  </div>
  <div className="relative mb-6" data-te-input-wrapper-init>
    <textarea
      className="peer text-bk-black2 block min-h-[auto] w-full rounded border-0 bg-beige-1 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
      id="message"
      rows={5}
      placeholder="Message"
      {...register('message', {
        required: true,
        maxLength: 2000,
      })}
    />
    {errors.message && (
      <p className="text-orange-2">
        {errors.message.type === 'required' && 'This field is required'}
        {errors.message.type === 'maxLength' && 'Max length is 2000 characters'}
      </p>
    )}


  </div>

  <button
    type="submit"
    className="mb-6 inline-block w-2/5 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-beige-1 shadow-[0_4px_9px_-4px_#C3FBC6] transition duration-150 ease-in-out hover:bg-green-1 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] hover:text-black focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow- lg:mb-0"
  >
    Submit
  </button>
</form>


              </div>
              <div className="mt-12 w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 0 0 9.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 0 0 1.5-1.5v-1.148a1.5 1.5 0 0 0-1.175-1.465l-3.223-.716a1.5 1.5 0 0 0-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 0 1-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 0 0 1.052-1.767l-.716-3.223A1.5 1.5 0 0 0 4.648 2H3.5ZM16.72 2.22a.75.75 0 1 1 1.06 1.06L14.56 6.5h2.69a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l3.22-3.22Z" />
</svg>



                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">
                      Phone
                    </p>

                    <p className="text-neutral-500 dark:text-neutral-200">
                      +1 234-567-89
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
</svg>





                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold dark:text-white">Mail</p>
                    <p className="text-neutral-500 dark:text-neutral-200">
                      inshokuorg@gmail.com
                    </p>

                  </div>
                </div>
              </div>

            </div>
          </div>



            </div>
          </div>
        </div>
      </section>
    </div>
    </motion.div>
  );
};

export default Contact;
