import emailjs from 'emailjs-com'

export default () => {
    console.log('email ID - ' + process.env.EMAILJS.USERID)
    // execute form submission!
    //console.log("Submitted!")
    emailjs.sendForm(
        'kaihaan@gmail.com',
        'template_4BTOCbkt_clone',
        event.target,
        process.env.EMAILJS.USERID
    )
    console.log(event.target)
    alert("Thankyou.  I will get back to you as soon as possible.")
}