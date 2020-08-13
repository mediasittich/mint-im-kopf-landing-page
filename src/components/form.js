import React from "react"

const Form = ({ data }) => {
  return (
    <form action={`${data.strapiKontakt.form_url}`} method="POST">
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputLastName">Name</label>
          <input
            type="text"
            name="lastname"
            id="inputLastName"
            className="form-control"
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputFirstName">Vorname</label>
          <input
            type="text"
            name="firstname"
            id="inputFirstName"
            className="form-control"
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
  )
}

export default Form
