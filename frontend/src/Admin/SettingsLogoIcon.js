import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class SettingsLogoIcon extends React.Component {
  constructor(props) {
    super(props);

    const currentYear = new Date().getFullYear();

    this.state = {
    currentYear: currentYear,
    };

  }

  render() {

    return (
      <div className="page-wrapper default-version">
        <AdminSidebar />
        <AdminHeader />
        <>
  <div className="body-wrapper">
    <div className="bodywrapper__inner">
      <div className="d-flex mb-30 flex-wrap gap-3 justify-content-between align-items-center">
        <h6 className="page-title">Logo &amp; Favicon</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row mb-none-30">
        <div className="col-md-12 mb-30">
          <div className="card bl--5-primary">
            <div className="card-body">
              <p className="text--primary">
                If the logo and favicon are not changed after you update from
                this page, please{" "}
                <span className="text--danger">clear the cache</span> from your
                browser. As we keep the filename the same after the update, it
                may show the old image for the cache. usually, it works after
                clear the cache but if you still see the old logo or favicon, it
                may be caused by server level or network level caching. Please
                clear them too.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12 mb-30">
          <div className="card">
            <div className="card-body">
              <form action="" method="POST" encType="multipart/form-data">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
                />
                <div className="row justify-content-center">
                  <div className="form-group col-xl-3">
                    <small>Logo for Light Background</small>
                    <div className="image-upload mt-1">
                      <div className="thumb">
                        <div className="avatar-preview">
                          <div
                            className="profilePicPreview logoPicPrev"
                            style={{
                              backgroundImage:
                                "url(../assets/images/logoIcon/logo.png)"
                            }}
                          >
                            <button type="button" className="remove-image">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </div>
                        <div className="avatar-edit">
                          <input
                            type="file"
                            className="profilePicUpload"
                            id="profilePicUpload1"
                            accept=".png, .jpg, .jpeg"
                            name="logo"
                          />
                          <label
                            htmlFor="profilePicUpload1"
                            className="bg--primary"
                          >
                            Select Logo
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-xl-3">
                    <small>Logo for Dark Background</small>
                    <div className="image-upload mt-1">
                      <div className="thumb">
                        <div className="avatar-preview">
                          <div
                            className="profilePicPreview logoPicPrev bg--dark"
                            style={{
                              backgroundImage:
                                "url(../assets/images/logoIcon/logo-dark.png?1690367694)"
                            }}
                          >
                            <button type="button" className="remove-image">
                              <i className="fa fa-times" />
                            </button>
                          </div>
                        </div>
                        <div className="avatar-edit">
                          <input
                            type="file"
                            className="profilePicUpload"
                            id="profilePicUpload2"
                            accept=".png, .jpg, .jpeg"
                            name="logo_dark"
                          />
                          <label
                            htmlFor="profilePicUpload2"
                            className="bg--primary"
                          >
                            Select Logo
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-xl-4">
                    <small>Favicon</small>
                    <div className="image-upload mt-1">
                      <div className="thumb">
                        <div className="avatar-preview">
                          <div className="row">
                            <div className="col-sm-6">
                              <div
                                className="profilePicPreview logoPicPrev"
                                style={{
                                  backgroundImage:
                                    "url(../assets/images/favicon.png?1690367694)"
                                }}
                              >
                                <button type="button" className="remove-image">
                                  <i className="fa fa-times" />
                                </button>
                              </div>
                            </div>
                            <div className="col-sm-6 mt-sm-0 mt-4">
                              <div
                                className="profilePicPreview logoPicPrev bg--dark"
                                style={{
                                  backgroundImage:
                                    "url(../assets/images/favicon.png?1690367694)"
                                }}
                              >
                                <button type="button" className="remove-image">
                                  <i className="fa fa-times" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="avatar-edit">
                          <input
                            type="file"
                            className="profilePicUpload"
                            id="profilePicUpload3"
                            accept=".png"
                            name="favicon"
                          />
                          <label
                            htmlFor="profilePicUpload3"
                            className="bg--primary"
                          >
                            Select Favicon
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn--primary w-100 h-45">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* bodywrapper__inner end */}
  </div>
  {/* body-wrapper end */}
</>

        
        

      </div>

    );
  }
}


export default SettingsLogoIcon;
