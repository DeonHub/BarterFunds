import React from "react";
import './Admin.css'
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import { withGlobalState } from '../withGlobalState';





class KycSettings extends React.Component {
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
        <h6 className="page-title">KYC Setting</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row mb-none-30">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header bg--primary d-flex justify-content-between">
              <h5 className="text-white">KYC Form for User</h5>
              <button
                type="button"
                className="btn btn-sm btn-outline-light float-end form-generate-btn"
              >
                <i className="la la-fw la-plus" />
                Add New
              </button>
            </div>
            <div className="card-body">
              <form action="" method="post">
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
                />
                <div className="row addedField">
                  <div className="col-md-4">
                    <div className="card border mb-3" id={0}>
                      <input
                        type="hidden"
                        name="form_generator[is_required][]"
                        defaultValue="required"
                      />
                      <input
                        type="hidden"
                        name="form_generator[extensions][]"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        name="form_generator[options][]"
                        defaultValue=""
                      />
                      <div className="card-body">
                        <div className="form-group">
                          <label>Label</label>
                          <input
                            type="text"
                            name="form_generator[form_label][]"
                            className="form-control"
                            defaultValue="Name"
                            readOnly=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Type</label>
                          <input
                            type="text"
                            name="form_generator[form_type][]"
                            className="form-control"
                            defaultValue="text"
                            readOnly=""
                          />
                        </div>
                        <div className="btn-group w-100">
                          <button
                            type="button"
                            className="btn btn--primary editFormData"
                            data-form_item='{"type":"text","is_required":"required","label":"Name","extensions":[""],"options":[],"old_id":""}'
                            data-update_id={0}
                          >
                            <i className="las la-pen" />
                          </button>
                          <button
                            type="button"
                            className="btn btn--danger removeFormData"
                          >
                            <i className="las la-times" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border mb-3" id={1}>
                      <input
                        type="hidden"
                        name="form_generator[is_required][]"
                        defaultValue="required"
                      />
                      <input
                        type="hidden"
                        name="form_generator[extensions][]"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        name="form_generator[options][]"
                        defaultValue=""
                      />
                      <div className="card-body">
                        <div className="form-group">
                          <label>Label</label>
                          <input
                            type="text"
                            name="form_generator[form_label][]"
                            className="form-control"
                            defaultValue="NID Number"
                            readOnly=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Type</label>
                          <input
                            type="text"
                            name="form_generator[form_type][]"
                            className="form-control"
                            defaultValue="text"
                            readOnly=""
                          />
                        </div>
                        <div className="btn-group w-100">
                          <button
                            type="button"
                            className="btn btn--primary editFormData"
                            data-form_item='{"type":"text","is_required":"required","label":"NID Number","extensions":[""],"options":[],"old_id":""}'
                            data-update_id={1}
                          >
                            <i className="las la-pen" />
                          </button>
                          <button
                            type="button"
                            className="btn btn--danger removeFormData"
                          >
                            <i className="las la-times" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border mb-3" id={2}>
                      <input
                        type="hidden"
                        name="form_generator[is_required][]"
                        defaultValue="required"
                      />
                      <input
                        type="hidden"
                        name="form_generator[extensions][]"
                        defaultValue="jpg,jpeg,png,pdf"
                      />
                      <input
                        type="hidden"
                        name="form_generator[options][]"
                        defaultValue=""
                      />
                      <div className="card-body">
                        <div className="form-group">
                          <label>Label</label>
                          <input
                            type="text"
                            name="form_generator[form_label][]"
                            className="form-control"
                            defaultValue="Front part of NID"
                            readOnly=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Type</label>
                          <input
                            type="text"
                            name="form_generator[form_type][]"
                            className="form-control"
                            defaultValue="file"
                            readOnly=""
                          />
                        </div>
                        <div className="btn-group w-100">
                          <button
                            type="button"
                            className="btn btn--primary editFormData"
                            data-form_item='{"type":"file","is_required":"required","label":"Front part of NID","extensions":["jpg","jpeg","png","pdf"],"options":[],"old_id":""}'
                            data-update_id={2}
                          >
                            <i className="las la-pen" />
                          </button>
                          <button
                            type="button"
                            className="btn btn--danger removeFormData"
                          >
                            <i className="las la-times" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card border mb-3" id={3}>
                      <input
                        type="hidden"
                        name="form_generator[is_required][]"
                        defaultValue="required"
                      />
                      <input
                        type="hidden"
                        name="form_generator[extensions][]"
                        defaultValue=""
                      />
                      <input
                        type="hidden"
                        name="form_generator[options][]"
                        defaultValue=""
                      />
                      <div className="card-body">
                        <div className="form-group">
                          <label>Label</label>
                          <input
                            type="text"
                            name="form_generator[form_label][]"
                            className="form-control"
                            defaultValue="Backpart of NID"
                            readOnly=""
                          />
                        </div>
                        <div className="form-group">
                          <label>Type</label>
                          <input
                            type="text"
                            name="form_generator[form_type][]"
                            className="form-control"
                            defaultValue="text"
                            readOnly=""
                          />
                        </div>
                        <div className="btn-group w-100">
                          <button
                            type="button"
                            className="btn btn--primary editFormData"
                            data-form_item='{"type":"text","is_required":"required","label":"Backpart of NID","extensions":[""],"options":[],"old_id":""}'
                            data-update_id={3}
                          >
                            <i className="las la-pen" />
                          </button>
                          <button
                            type="button"
                            className="btn btn--danger removeFormData"
                          >
                            <i className="las la-times" />
                          </button>
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
      <div className="modal fade" id="formGenerateModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Generate Form</h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="las la-times" />
              </button>
            </div>
            <form className="generate-form">
              <input
                type="hidden"
                name="_token"
                defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
              />
              <div className="modal-body">
                <input type="hidden" name="update_id" defaultValue="" />
                <div className="form-group">
                  <label>Form Type</label>
                  <select name="form_type" className="form-control" required="">
                    <option value="">Select One</option>
                    <option value="text">Text</option>
                    <option value="textarea">Textarea</option>
                    <option value="select">Select</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="radio">Radio</option>
                    <option value="file">File</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Is Required</label>
                  <select
                    name="is_required"
                    className="form-control"
                    required=""
                  >
                    <option value="">Select One</option>
                    <option value="required">Required</option>
                    <option value="optional">Optional</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Form Label</label>
                  <input
                    type="text"
                    name="form_label"
                    className="form-control"
                    required=""
                  />
                </div>
                <div className="form-group extra_area"></div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn--primary w-100 h-45 generatorSubmit"
                >
                  Add
                </button>
              </div>
            </form>
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


export default KycSettings;
