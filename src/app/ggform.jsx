import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";
export const Googleform = () => {
  return (
    <div>
      <FormfacadeEmbed
        formFacadeURL="https://formfacade.com/include/114230891162164615989/form/1FAIpQLSekcSZAQkkrHGYPyuWs66vBWFHcdRhvWQG_WVxvdffTHTmlzA/classic.js/?div=ff-compose"
        onSubmitForm={() => console.log("Form submitted")}
      />
    </div>
  );
};
