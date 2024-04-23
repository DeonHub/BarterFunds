import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class Seo extends React.Component {
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
        <h6 className="page-title">SEO Configuration</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 mb-30">
          <div className="card">
            <div className="card-body">
              <form
                action="../../admin/frontend/frontend-content/seo"
                method="POST"
                encType="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
                />
                <input type="hidden" name="type" defaultValue="data" />
                <input type="hidden" name="seo_image" defaultValue={1} />
                <div className="row">
                  <div className="col-xl-4">
                    <div className="form-group">
                      <div className="image-upload">
                        <div className="thumb">
                          <div className="avatar-preview">
                            <div
                              className="profilePicPreview"
                              style={{
                                backgroundImage:
                                  "url(assets/images/seo/6492d422962e11687344162.png)"
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
                              name="image_input"
                              id="profilePicUpload1"
                              accept=".png, .jpg, .jpeg"
                            />
                            <label
                              htmlFor="profilePicUpload1"
                              className="bg--primary"
                            >
                              Upload Image
                            </label>
                            <small className="mt-2">
                              Supported files:
                              <b>jpeg, jpg, png</b>. Image will be resized into
                              1180x600px.
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8 mt-xl-0 mt-4">
                    <div className="form-group ">
                      <label>Meta Keywords</label>
                      <small className="ms-2 mt-2  ">
                        Separate multiple keywords by
                        <code>,</code>(comma) or
                        <code>enter</code>
                        key
                      </small>
                      <select
                        name="keywords[]"
                        className="form-control select2-auto-tokenize"
                        multiple="multiple"
                        required=""
                      >
                        <option value="exchange platform" selected="">
                          exchange platform
                        </option>
                        <option value="currency exchange platform" selected="">
                          currency exchange platform
                        </option>
                        <option value="BarterFunds" selected="">
                          BarterFunds
                        </option>
                        <option value="usd to GHS" selected="">
                          usd to GHS
                        </option>
                        <option value="currency exchnage" selected="">
                          currency exchnage
                        </option>
                        <option value="easy exchange" selected="">
                          easy exchange
                        </option>
                        <option value="money exhcngae" selected="">
                          money exhcngae
                        </option>
                        <option value="bitcoin to usd" selected="">
                          bitcoin to usd
                        </option>
                        <option value="money exchange" selected="">
                          money exchange
                        </option>
                        <option value="crypto currency exchange" selected="">
                          crypto currency exchange
                        </option>
                        <option value="crypto currency" selected="">
                          crypto currency
                        </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Meta Description</label>
                      <textarea
                        name="description"
                        rows={3}
                        className="form-control"
                        required=""
                        defaultValue={
                          "BarterFunds can\n                                                        be explained as a\n                                                        network of buyers and\n                                                        sellers, who transfer\n                                                        currency between each\n                                                        other or for their own.\n                                                        It is the means by which\n                                                        individuals, and\n                                                        companies convert one\n                                                        currency into another.\n                                                        This Currency Exchange\n                                                        Platform is the most\n                                                        advanced script in\n                                                        Codecanyon. The Currency\n                                                        Exchange Platform is\n                                                        endlessly appealing,\n                                                        feature-loaded,\n                                                        customized, and\n                                                        possesses the remarkable\n                                                        capability of running on\n                                                        all devices and\n                                                        operating\n                                                        systems."
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label>Social Title</label>
                      <input
                        type="text"
                        className="form-control"
                        name="social_title"
                        defaultValue="ChangeLab"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label>Social Description</label>
                      <textarea
                        name="social_description"
                        rows={3}
                        className="form-control"
                        required=""
                        defaultValue={
                          "BarterFunds can\n                                                        be explained as a\n                                                        network of buyers and\n                                                        sellers, who transfer\n                                                        currency between each\n                                                        other or for their own.\n                                                        It is the means by which\n                                                        individuals, companies\n                                                        convert one currency\n                                                        into another. This\n                                                        Currency Exchange\n                                                        Platform is the most\n                                                        advanced script in\n                                                        Codecanyon. The Currency\n                                                        Exchange Platform is\n                                                        endlessly appealing,\n                                                        feature-loaded,\n                                                        customized, and\n                                                        possesses the remarkable\n                                                        capability of running on\n                                                        all devices and\n                                                        operating\n                                                        systems."
                        }
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn--primary w-100 h-45"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
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


export default Seo;
