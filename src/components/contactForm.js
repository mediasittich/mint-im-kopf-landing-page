import React, { useState, useCallback, useMemo, ChangeEvent } from "react"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

// function useInputValue() {
//   const [value, setValue] = useState("")
//   const handleChange = useCallback(event => {
//     console.log(event.target.value)
//     setValue(event.target.value)
//   }, [])
//   return [value, handleChange]
// }

const ContactForm = () => {
  //   const [lastname, setLastname] = useInputValue()
  //   const [firstname, setFirstname] = useInputValue()
  //   const [phone, setPhone] = useInputValue()
  //   const [email, setEmail] = useInputValue()
  //   const [textMessage, setTextMessage] = useInputValue()

  //   const result = useMemo(() => {
  //     return JSON.stringify({
  //       lastname,
  //       firstname,
  //       phone,
  //       email,
  //       textMessage,
  //     })
  //   }, [lastname, firstname, phone, email, textMessage])

  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    phone: "",
    email: "",
    textMessage: "",
  })
  const { lastname, firstname, phone, email, textMessage } = formData

  const handleSubmit = event => {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", ...formData }),
    })
      .then(() => {
        alert("Success!")
        setFormData({
          lastname: "",
          firstname: "",
          phone: "",
          email: "",
          textMessage: "",
        })
      })
      .catch(error => alert(error))
  }

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <div>
      <div className="alert-message alert-message-success">
        <h5 className="card-title">Vielen Dank für Ihre Nachticht!</h5>
        <p>Ich werde mich schnellstmöglich bei Ihnen melden.</p>
      </div>
      <form
        name="contactForm"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p className="d-none">
          <label>
            Do not fill this out if you are human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contactForm" />

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputLastName">Name</label>
            <input
              type="text"
              name="lastname"
              id="inputLastName"
              className="form-control"
              required
              value={lastname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputFirstName">Vorname</label>
            <input
              type="text"
              name="firstname"
              id="inputFirstName"
              className="form-control"
              value={firstname}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputPhone">Telefon</label>
          <input
            type="text"
            name="phone"
            className="form-control"
            id="inputPhone"
            value={phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              className="form-control"
              id="inputEmail"
              type="email"
              name="email"
              required
              value={email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="textMessage">Ihre Nachricht</label>
          <textarea
            name="textMessage"
            className="form-control"
            id="textMessage"
            rows="5"
            required
            value={textMessage}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group row justify-content-center mt-4">
          <div>
            <button className="btn cta" type="submit">
              Anfrage absenden
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
