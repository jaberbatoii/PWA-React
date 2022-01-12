import React from 'react';
import Mv from './../../components/pages/includes/Mv'

export default function Aboute() {
    return (
        <>
        <section className="py-4 bg-primary text-center">
            <h1 className="text-white">Aboute us</h1>
        </section>
        <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Aboute our Company</h4>
                            <div className="underline mb-3"></div>
                            <p>
                           این برنامه برای توضیح هر چه بیشتر فروشگاه های افق کوروش می باشد 
                           و درآینده شما میتوانید در همین برنامه خرید کنید 
                           وانتخاب کنید محصول خود را
                            </p>
                            <p>
                           این برنامه توسط جابر بتویی نوشته شده است
                           
                            </p>
                        </div>
                    </div>
                </div>

        </section>
        <Mv/>
        </>
    )
}
