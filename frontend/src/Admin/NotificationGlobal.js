import React from "react";
import './Admin.css'
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";





class NotificationGlobal extends React.Component {
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
        <h6 className="page-title">Global Template for Notification</h6>
        <div className="d-flex flex-wrap justify-content-end gap-2 align-items-center breadcrumb-plugins"></div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive table-responsive--sm">
                <table className=" table align-items-center table--light">
                  <thead>
                    <tr>
                      <th>Short Code </th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <td>
                        <span className="short-codes">
                          {"{"}
                          {"{"}fullname{"}"}
                          {"}"}
                        </span>
                      </td>
                      <td>Full Name of User</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="short-codes">
                          {"{"}
                          {"{"}username{"}"}
                          {"}"}
                        </span>
                      </td>
                      <td>Username of User</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="short-codes">
                          {"{"}
                          {"{"}message{"}"}
                          {"}"}
                        </span>
                      </td>
                      <td>Message</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h6 className="mt-4 mb-2">Global Short Codes</h6>
          <div className="card overflow-hidden">
            <div className="card-body p-0">
              <div className="table-responsive table-responsive--sm">
                <table className=" table align-items-center table--light">
                  <thead>
                    <tr>
                      <th>Short Code </th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                    <tr>
                      <td>
                        <span className="short-codes">
                          {"{"}
                          {"{"}site_name{"}"}
                          {"}"}
                        </span>
                      </td>
                      <td>Name of your site</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="short-codes">
                          {"{"}
                          {"{"}site_currency{"}"}
                          {"}"}
                        </span>
                      </td>
                      <td>Currency of your site</td>
                    </tr>
                    <tr>
                      <td>
                        <span className="short-codes">
                          {"{"}
                          {"{"}currency_symbol{"}"}
                          {"}"}
                        </span>
                      </td>
                      <td>Symbol of currency</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="card mt-5">
            <div className="card-body">
              <form
                action="../../admin/notification/global/update"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_token"
                  defaultValue="H4ATodCIq10Ilj4glleG1Id1azCiq1obuuZmDmjX"
                />
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Email Sent From</label>
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Email address"
                        name="email_from"
                        defaultValue="info@viserlab.com"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Email Body </label>
                      <textarea
                        name="email_template"
                        rows={10}
                        className="form-control  nicEdit"
                        placeholder="Your email template"
                        defaultValue={
                          '<meta\n                                                        http-equiv="Content-Type"\n                                                        content="text/html;\n                                                        charset=utf-8">\n                                                        <!--[if\n                                                        !mso]><!-->\n                                                        <meta\n                                                        http-equiv="X-UA-Compatible"\n                                                        content="IE=edge">\n                                                        <!--<![endif]-->\n                                                        <meta\n                                                        name="viewport"\n                                                        content="width=device-width,\n                                                        initial-scale=1.0">\n                                                        <title></title>\n                                                        <style\n                                                        type="text/css">\n                                                        .ReadMsgBody { width:\n                                                        100%; background-color:\n                                                        #ffffff; }\n                                                        .ExternalClass { width:\n                                                        100%; background-color:\n                                                        #ffffff; }\n                                                        .ExternalClass,\n                                                        .ExternalClass p,\n                                                        .ExternalClass span,\n                                                        .ExternalClass font,\n                                                        .ExternalClass td,\n                                                        .ExternalClass div {\n                                                        line-height: 100%; }\n                                                        html { width: 100%; }\n                                                        body {\n                                                        -webkit-text-size-adjust:\n                                                        none;\n                                                        -ms-text-size-adjust:\n                                                        none; margin: 0;\n                                                        padding: 0; }\n                                                        table { border-spacing:\n                                                        0; table-layout: fixed;\n                                                        margin: 0\n                                                        auto;border-collapse:\n                                                        collapse; }\n                                                        table table table {\n                                                        table-layout: auto; }\n                                                        .yshortcuts a {\n                                                        border-bottom: none\n                                                        !important; }\n                                                        img:hover { opacity: 0.9\n                                                        !important; }\n                                                        a { color: #0087ff;\n                                                        text-decoration: none; }\n                                                        .textbutton a {\n                                                        font-family: \'open\n                                                        sans\', arial,\n                                                        sans-serif !important;}\n                                                        .btn-link a {\n                                                        color:#FFFFFF\n                                                        !important;}\n\n                                                        @media only screen and\n                                                        (max-width: 480px) {\n                                                        body { width: auto\n                                                        !important; }\n                                                        *[class="table-inner"]\n                                                        { width: 90% !important;\n                                                        text-align: center\n                                                        !important; }\n                                                        *[class="table-full"]\n                                                        { width: 100%\n                                                        !important; text-align:\n                                                        center !important; }\n                                                        /* image */\n                                                        img[class="img1"]\n                                                        { width: 100%\n                                                        !important; height: auto\n                                                        !important; }\n                                                        }\n                                                        </style>\n\n                                                        <table\n                                                        bgcolor="#414a51"\n                                                        width="100%"\n                                                        border="0"\n                                                        align="center"\n                                                        cellpadding="0"\n                                                        cellspacing="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        height="50"></td>\n                                                        </tr>\n                                                        <tr>\n                                                        <td\n                                                        align="center"\n                                                        style="text-align:center;vertical-align:top;font-size:0;">\n                                                        <table\n                                                        align="center"\n                                                        border="0"\n                                                        cellpadding="0"\n                                                        cellspacing="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        align="center"\n                                                        width="600">\n                                                        <!--header-->\n                                                        <table\n                                                        class="table-inner"\n                                                        width="95%"\n                                                        border="0"\n                                                        align="center"\n                                                        cellpadding="0"\n                                                        cellspacing="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        bgcolor="#0087ff"\n                                                        style="border-top-left-radius:6px;\n                                                        border-top-right-radius:6px;text-align:center;vertical-align:top;font-size:0;"\n                                                        align="center">\n                                                        <table\n                                                        width="90%"\n                                                        border="0"\n                                                        align="center"\n                                                        cellpadding="0"\n                                                        cellspacing="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        height="20"></td>\n                                                        </tr>\n                                                        <tr>\n                                                        <td\n                                                        align="center"\n                                                        style="font-family:\n                                                        \'Open sans\',\n                                                        Arial, sans-serif;\n                                                        color:#FFFFFF;\n                                                        font-size:16px;\n                                                        font-weight:\n                                                        bold;">This is a\n                                                        System Generated\n                                                        Email</td>\n                                                        </tr>\n                                                        <tr>\n                                                        <td\n                                                        height="20"></td>\n                                                        </tr>\n                                                        </tbody></table>\n                                                        </td>\n                                                        </tr>\n                                                        </tbody></table>\n                                                        <!--end header-->\n                                                        <table\n                                                        class="table-inner"\n                                                        width="95%"\n                                                        border="0"\n                                                        cellspacing="0"\n                                                        cellpadding="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        bgcolor="#FFFFFF"\n                                                        align="center"\n                                                        style="text-align:center;vertical-align:top;font-size:0;">\n                                                        <table\n                                                        align="center"\n                                                        width="90%"\n                                                        border="0"\n                                                        cellspacing="0"\n                                                        cellpadding="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        height="35"></td>\n                                                        </tr>\n                                                        <!--logo-->\n                                                        <tr>\n                                                        <td\n                                                        align="center"\n                                                        style="vertical-align:top;font-size:0;">\n                                                        <a\n                                                        href="#">\n                                                        <img\n                                                        style="display:block;\n                                                        line-height:0px;\n                                                        font-size:0px;\n                                                        border:0px;"\n                                                        src="https://i.imgur.com/Z1qtvtV.png"\n                                                        alt="img">\n                                                        </a>\n                                                        </td>\n                                                        </tr>\n                                                        <!--end logo-->\n                                                        <tr>\n                                                        <td\n                                                        height="40"></td>\n                                                        </tr>\n                                                        <!--headline-->\n                                                        <tr>\n                                                        <td\n                                                        align="center"\n                                                        style="font-family:\n                                                        \'Open Sans\',\n                                                        Arial, sans-serif;\n                                                        font-size:\n                                                        22px;color:#414a51;font-weight:\n                                                        bold;">Hello\n                                                        {{fullname}}\n                                                        ({{username}})</td>\n                                                        </tr>\n                                                        <!--end\n                                                        headline-->\n                                                        <tr>\n                                                        <td\n                                                        align="center"\n                                                        style="text-align:center;vertical-align:top;font-size:0;">\n                                                        <table\n                                                        width="40"\n                                                        border="0"\n                                                        align="center"\n                                                        cellpadding="0"\n                                                        cellspacing="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        height="20"\n                                                        style="\n                                                        border-bottom:3px solid\n                                                        #0087ff;"></td>\n                                                        </tr>\n                                                        </tbody></table>\n                                                        </td>\n                                                        </tr>\n                                                        <tr>\n                                                        <td\n                                                        height="20"></td>\n                                                        </tr>\n                                                        <!--content-->\n                                                        <tr>\n                                                        <td\n                                                        align="left"\n                                                        style="font-family:\n                                                        \'Open sans\',\n                                                        Arial, sans-serif;\n                                                        color:#7f8c8d;\n                                                        font-size:16px;\n                                                        line-height:\n                                                        28px;">{{message}}</td>\n                                                        </tr>\n                                                        <!--end content-->\n                                                        <tr>\n                                                        <td\n                                                        height="40"></td>\n                                                        </tr>\n\n                                                        </tbody></table>\n                                                        </td>\n                                                        </tr>\n                                                        <tr>\n                                                        <td\n                                                        height="45"\n                                                        align="center"\n                                                        bgcolor="#f4f4f4"\n                                                        style="border-bottom-left-radius:6px;border-bottom-right-radius:6px;">\n                                                        <table\n                                                        align="center"\n                                                        width="90%"\n                                                        border="0"\n                                                        cellspacing="0"\n                                                        cellpadding="0">\n                                                        <tbody><tr>\n                                                        <td\n                                                        height="10"></td>\n                                                        </tr>\n                                                        <!--preference-->\n                                                        <tr>\n                                                        <td\n                                                        class="preference-link"\n                                                        align="center"\n                                                        style="font-family:\n                                                        \'Open sans\',\n                                                        Arial, sans-serif;\n                                                        color:#95a5a6;\n                                                        font-size:14px;">\n                                                        © 2021 <a\n                                                        href="#">{{site_name}}</a>&nbsp;.\n                                                        All Rights Reserved.\n                                                        </td>\n                                                        </tr>\n                                                        <!--end\n                                                        preference-->\n                                                        <tr>\n                                                        <td\n                                                        height="10"></td>\n                                                        </tr>\n                                                        </tbody></table>\n                                                        </td>\n                                                        </tr>\n                                                        </tbody></table>\n                                                        </td>\n                                                        </tr>\n                                                        </tbody></table>\n                                                        </td>\n                                                        </tr>\n                                                        <tr>\n                                                        <td\n                                                        height="60"></td>\n                                                        </tr>\n                                                        </tbody></table>'
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>SMS Sent From</label>
                      <input
                        className="form-control"
                        placeholder="SMS Sent From"
                        name="sms_from"
                        defaultValue="ViserAdmin"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>SMS Body </label>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="SMS Body"
                        name="sms_body"
                        required=""
                        defaultValue={
                          "hi {{fullname}}\n                                                        ({{username}}),\n                                                        {{message}}"
                        }
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn w-100 btn--primary h-45">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* card end */}
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


export default NotificationGlobal;
