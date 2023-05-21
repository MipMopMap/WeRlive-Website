import React, { FC } from "react";
import "./terms.css";
import { Button } from "..";

interface TermsInt {
  setTerms: any;
}

const Terms: FC<TermsInt> = ({ setTerms }) => {
  const handleClose = () => {
    setTerms(false);
  };

  return (
    <div className="Terms-Wrapper container section-padding">
      <h2>Terms & conditions</h2>
      <p>
        These terms and conditions (“Agreement”) set forth the general terms and
        conditions of your use of the{" "}
        <a href="http://werlive.co.il">werlive.co.il</a> website (“Website” or
        “Service”) and any of its related products and services (collectively,
        “Services”). This Agreement is legally binding between you (“User”,
        “you” or “your”) and this Website operator (“Operator”, “we”, “us” or
        “our”). If you are entering into this agreement on behalf of a business
        or other legal entity, you represent that you have the authority to bind
        such entity to this agreement, in which case the terms “User”, “you” or
        “your” shall refer to such entity. If you do not have such authority, or
        if you do not agree with the terms of this agreement, you must not
        accept this agreement and may not access and use the Website and
        Services. By accessing and using the Website and Services, you
        acknowledge that you have read, understood, and agree to be bound by the
        terms of this Agreement. You acknowledge that this Agreement is a
        contract between you and the Operator, even though it is electronic and
        is not physically signed by you, and it governs your use of the Website
        and Services.
      </p>
      <div className="wpembed-index">
        <h3>Table of contents</h3>
        <ol className="wpembed-index">
          <li>
            <a href="#links-to-other-resources">Links to other resources</a>
          </li>
          <li>
            <a href="#changes-and-amendments">Changes and amendments</a>
          </li>
          <li>
            <a href="#acceptance-of-these-terms">Acceptance of these terms</a>
          </li>
          <li>
            <a href="#contacting-us">Contacting us</a>
          </li>
        </ol>
      </div>
      <h3 id="links-to-other-resources">Links to other resources</h3>
      <p>
        Although the Website and Services may link to other resources (such as
        websites, mobile applications, etc.), we are not, directly or
        indirectly, implying any approval, association, sponsorship,
        endorsement, or affiliation with any linked resource, unless
        specifically stated herein. We are not responsible for examining or
        evaluating, and we do not warrant the offerings of, any businesses or
        individuals or the content of their resources. We do not assume any
        responsibility or liability for the actions, products, services, and
        content of any other third parties. You should carefully review the
        legal statements and other conditions of use of any resource which you
        access through a link on the Website. Your linking to any other off-site
        resources is at your own risk.
      </p>
      <h3 id="changes-and-amendments">Changes and amendments</h3>
      <p>
        We reserve the right to modify this Agreement or its terms related to
        the Website and Services at any time at our discretion. When we do, we
        will revise the updated date at the bottom of this page. We may also
        provide notice to you in other ways at our discretion, such as through
        the contact information you have provided.
      </p>
      <p>
        An updated version of this Agreement will be effective immediately upon
        the posting of the revised Agreement unless otherwise specified. Your
        continued use of the Website and Services after the effective date of
        the revised Agreement (or such other act specified at that time) will
        constitute your consent to those changes.
      </p>
      <h3 id="acceptance-of-these-terms">Acceptance of these terms</h3>
      <p>
        You acknowledge that you have read this Agreement and agree to all its
        terms and conditions. By accessing and using the Website and Services
        you agree to be bound by this Agreement. If you do not agree to abide by
        the terms of this Agreement, you are not authorized to access or use the
        Website and Services.
      </p>
      <h3 id="contacting-us">Contacting us</h3>
      <p>
        If you have any questions, concerns, or complaints regarding this
        Agreement, we encourage you to contact us using the details below:
      </p>
      <p>
        <a href="/contact">https://werlive.co.il/contact</a>
        <br />
        <a href="&#109;&#097;&#105;&#108;&#116;&#111;&#058;&#83;u&#112;port&#64;golld&#121;.c&#111;&#109;">
          Sup&#112;or&#116;&#64;g&#111;&#108;l&#100;y.co&#109;
        </a>
      </p>
      <div onClick={handleClose} className="Terms-Close">
        <Button text="Close" />
      </div>
      <p>This document was last updated on July 20, 2022</p>
    </div>
  );
};

export default Terms;
