import { useEffect, useState } from "react";

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
            setIsSubmitted(false);
        },[name,email,mobileNo,password])
    function onSubmit(e){
        //// on submit refresh na thay preventdefault   
        e.preventDefault();
        ///
        setIsSubmitted(true);
    }
    return (
        <div className="user-form">
            <form action="" onSubmit={(e) => onSubmit(e)}>
                <input className="form-control" name="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Entername" />
                <input className="form-control" name="email" type="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Enteremail" />
                <input className="form-control" name="mobileno" type="number" onChange={(e) => setMobileNo(e.target.value)} placeholder="Enter mobile no" />
                <input className="form-control" name="password" type="Password" onChange={(e) => setPassword(e.target.value)} placeholder="Enterpassword" />
                <button className="form-btn" type="submit">Submit</button>
            </form>
            {
                isSubmitted &&
                <div style={{ textAlign: 'left' }}>
                    <div>
                        <label htmlFor="">Username:</label>
                        <span>{name}</span>
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <span>{email}</span>
                    </div>
                    <div>
                        <label htmlFor="">Mobile no:</label>
                        <span>{mobileNo}</span>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <span>{password}</span>
                    </div>
                </div>
            }
            </div>
    )
}

export default Form;