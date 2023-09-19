import { FaqContainer, Question } from "./Faq.style";

import { data } from "../../faq/data";

import { useState } from "react";

const Faq = () => {
  const [active, setActive] = useState(null);

  // const titleFaq = document.querySelectorAll(".title-faq");
  // const boxFaq = document.querySelectorAll(".box-faq");

  // titleFaq.forEach((faq) => {
  //   faq.addEventListener("click", function () {
  //     const parent = this.parentNode;

  //     const isActive = parent.classList.contains("faq--active");

  //     boxFaq.forEach((box) => {
  //       box.classList.remove("faq--active");
  //       box.classList.add("faq--disabled");
  //     });

  //     if (!isActive) {
  //       parent.classList.add("faq--active");
  //       parent.classList.remove("faq--disabled");
  //     }
  //   });
  // });

  const activeFaq = (index) => {
    if (index === active) {
      return setActive(null)
    }

    setActive(index)

  }

  return (
    <FaqContainer id="faq">
      <h2>
        <span>|</span> FAQ <span>|</span>
      </h2>
      <div>
        {data &&
          data.map((question, index) => (
            <Question key={question.id} onClick={() => activeFaq(index)}>
              <div className="title-faq">
                <p>{question.question}</p>
                
                <span>
                  <i className={active === index ? "bi bi-caret-up-fill " : "bi bi-caret-down-fill"}></i>
                </span>
              </div>
              <div
                className={
                  active === index ? "text-faq active" : "text-faq disable"
                }
              >
                <p>{question.answer}</p>
              </div>
            </Question>
          ))}
      </div>
    </FaqContainer>
  );
};

export default Faq;
