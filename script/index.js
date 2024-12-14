src = "https://apps.mypurecloud.jp/widgets/9.0/cxbus.min.js";
onload =
  "javascript:CXBus.configure({debug:false,pluginsPath:'https://apps.mypurecloud.jp/widgets/9.0/plugins/'}); CXBus.loadPlugin('widgets-core');";
function getAdvancedConfig() {
  return {
    form: {
      autoSubmit: false,
      firstname: "Jibran",
      lastname: "Khairy",
      email: "",
      subject: "",
    },
    formJSON: {
      wrapper: "<table></table>",
      inputs: [
        {
          id: "cx_webchat_form_firstname",
          name: "firstname",
          maxlength: "100",
          placeholder: "Required",
          label: "First Name",
        },
        {
          id: "cx_webchat_form_lastname",
          name: "lastname",
          maxlength: "100",
          placeholder: "Required",
          label: "Last Name",
        },
        {
          id: "cx_webchat_form_email",
          name: "email",
          maxlength: "100",
          placeholder: "Optional",
          label: "Email",
        },
        {
          id: "cx_webchat_form_subject",
          name: "subject",
          maxlength: "100",
          placeholder: "Optional",
          label: "Subject",
        },
      ],
    },
  };
}
const customPlugin = CXBus.registerPlugin("Custom");
