import { useEffect, useState } from "react";

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});


    // useEffect(()=>{
    // setIsSubmitted(false);
    // },[name,email,mobileNo,password])
    function onSubmit(e) {
        //// on submit refresh na thay preventdefault   
        e.preventDefault();
        ///
        setUserData({ name, email, mobileNo, password })
        setIsSubmitted(true);
        setName("");
        setEmail("");
        setMobileNo("");
        setPassword("");
    }
    function updateData() {
        if (isSubmitted) {
            setName(userData.name);
            setEmail(userData.email);
            setMobileNo(userData.mobileNo);
            setPassword(userData.password);
        }
    }

    return (
        <div className="user-form">
            <form action="" onSubmit={(e) => onSubmit(e)}>
                <input className="form-control" value={name} name="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Entername" />
                <input className="form-control" value={email} name="email" type="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Enteremail" />
                <input className="form-control" value={mobileNo} name="mobileno" type="number" onChange={(e) => setMobileNo(e.target.value)} placeholder="Enter mobile no" />
                <input className="form-control" value={password} name="password" type="Password" onChange={(e) => setPassword(e.target.value)} placeholder="Enterpassword" />
                <button className="form-btn" type="submit">Submit</button>
                <button onClick={updateData} type="button" className="form-btn">Update</button>
            </form>
            {
                isSubmitted &&
                <div style={{ textAlign: 'left' }}>
                    <div>
                        <label htmlFor="">Username:</label>
                        <span>{userData.name}</span>
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <span>{userData.email}</span>
                    </div>
                    <div>
                        <label htmlFor="">Mobile no:</label>
                        <span>{userData.mobileNo}</span>
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <span>{userData.password}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Form;