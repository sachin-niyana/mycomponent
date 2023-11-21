import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Text } from "./Hyper";
const MyAccordion = () => {
  const [activeKey, setActiveKey] = useState("0");
  const handleAccordionToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };
  return (
    <>
      <section>
        <div className="container">
          <div className="bg-color mb_-1">
            <Container className="py-5">
              <div className="d-flex justify-content-center">
                <h3 className="ff_lato fw_700 fs_48px color-brown-2">
                  FAQ
                  <span className="ff_lato fw_700 fs_48px color-white">’s</span>
                </h3>
              </div>
              <Accordion
                activeKey={activeKey}
                onSelect={handleAccordionToggle}
                className="pt-1"
              >
                {Text.map((faq, index) => (
                  <Accordion.Item
                    key={index}
                    eventKey={index.toString()}
                    className="mt-4 accordion_border mx-auto"
                  >
                    <Accordion.Header className="py-2 my-1 ps-sm-5 ff_lato fs_20px fw_500">
                      {faq.heading}
                    </Accordion.Header>
                    <Accordion.Body className="w-700px ff_lato fw_400 text-black mt_-20px ms-sm-3 px-sm-5 px-2">
                      {faq.peragraph}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Container>
          </div>
        </div>
      </section>
    </>
  );
};
export default MyAccordion;
