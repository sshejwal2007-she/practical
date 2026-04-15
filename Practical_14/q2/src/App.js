import React, { useState } from "react";

function App() {

const [formData, setFormData] = useState({
name: "",
email: "",
password: ""
});

const [submitted, setSubmitted] = useState(null);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(formData);

// Clear form
setFormData({
name: "",
email: "",
password: ""
});
};

return (
<div style={{ padding: "30px" }}>
<h2>React Dynamic Form</h2>

<form onSubmit={handleSubmit}>
<input
type="text"
name="name"
placeholder="Name"
value={formData.name}
onChange={handleChange}
required
/><br /><br />

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
required
/><br /><br />

<input
type="password"
name="password"
placeholder="Password"
value={formData.password}
onChange={handleChange}
required
/><br /><br />

<button type="submit">Submit</button>
</form>

<hr />

{submitted && (
<div>
<h3>Submitted Data</h3>
<p><b>Name:</b> {submitted.name}</p>
<p><b>Email:</b> {submitted.email}</p>
<p><b>Password:</b> {submitted.password}</p>
</div>
)}
</div>
);
}

export default App;