import React from 'react'

class UploadPhotosRouteForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      ...props.currentRoute
    }
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleFileSubmit(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () =>
    this.setState({ photoUrl: reader.result, photo: file });

    if (file) {
        reader.readAsDataURL(file);
    } else {
        this.setState({ photoUrl: "", photo: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    Object.keys(this.state).forEach(attribute => {
        formData.append(`route[${attribute}]`, this.state[attribute]);
    });

    this.props.updateRoute(formData)
        .then(() => this.props.closeModal())
        .then(() => window.location.reload());
}

  render () {
    // console.log(this.state)
    return (
      <div>
        <h1>Add Photo</h1>
        <form>
          <input
            type="file"
            onChange={this.handleFileSubmit}
            accept=".jpg,.png"
          />
          <input type="submit" onClick={this.handleSubmit} value="Save photo" />
        </form>
      </div>
    )
  }

}

export default UploadPhotosRouteForm;