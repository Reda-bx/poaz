import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>File Upload</h1>
        <p>Try uxsploading multiple files at a time.</p>
        <form action="/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="file" multiple />
          <input type="submit" value="Upload" />
        </form>
      </div>
    )
  }
}
