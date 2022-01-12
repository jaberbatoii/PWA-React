import React from 'react'

export default function Cantact() {
    return (
        <>
        <section className="py-4 bg-primary text-center">
            <h1 className="text-white">Aboute us</h1>
        </section>
        <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                           
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.3451970091833!2d58.79846771462242!3d36.23110760722706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6d0b9b4e936caf%3A0x6a0d2237d908d901!2z2YHYsdmI2LTar9in2Ycg2KfZgdmCINqp2YjYsdmI2LQ!5e0!3m2!1sen!2s!4v1638460940833!5m2!1sen!2s"
                         width="100%" height="450" 
                         allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        
                        <div className="col-md-4">
                                <h4>Send Your Idia</h4>
                                <div className="underline md-3"></div>
                                <form >
                                    <label>Name</label>
                                    <input type="text" placeholder="Name" className="form-control"/>
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control"/>
                                    <label>Message</label>
                                    <textarea rows="3" className="form-control"></textarea>
                                </form>
                        </div>
                    </div>
                </div>

        </section>
        </>
    )
}
