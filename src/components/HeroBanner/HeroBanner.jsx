import { Button } from "../Buttons/Button";
import styles from "./HeroBanner.module.css";
import { MdChat } from "react-icons/md";
import { IoCall, IoMail } from "react-icons/io5";
import { PiRocketLaunchFill } from "react-icons/pi";
import { useState } from "react";

export const HeroBanner = () => {
  const [name, setName] = useState("skumar");
  const [email, setEmail] = useState("test@test.com");
  const [message, setMessage] = useState("message...");

  const submitContactForm = (event) => {
    event.preventDefault();
    setName(event.target.name.value);
    setEmail(event.target.email.value);
    setMessage(event.target.message.value);
  };

  return (
    <div>
      <section className={styles.hero_banner_section}>
        <div className="container">
          <div className={styles.inner_container}>
            <div className={styles.section_heading}>
              <h1 className={styles.hero_heading}>Contact Us.</h1>
              <p className={styles.hero_para}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Molestias maxime possimus unde maiores, exercitationem
                doloribus. Delectus ducimus nam libero maiores rem expedita quam
                sunt dolorem hic vitae, labore eos quibusdam.
              </p>
            </div>
            <div className={styles.hero_content_wrapper}>
              <div className={styles.button_wrapper}>
                <Button value={"Via Chat"} icon={<MdChat />} />
                <Button value={"Via Call"} icon={<IoCall />} />
                <Button
                  value={"Via Email"}
                  icon={<IoMail />}
                  secondary={true}
                />
              </div>
              <form
                onSubmit={submitContactForm}
                className={styles.contact_form}
              >
                <div className={styles.form_group}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
                <div className={styles.form_group}>
                  <label htmlFor="message">Message</label>
                  <textarea rows={8} type="text" name="message" id="message" />
                </div>
                <div className={`${styles.button_wrapper} flex-end`}>
                    <Button value={"Submit"} icon={<PiRocketLaunchFill />} />
                </div>
              </form>
              <div className="user_data">
                <p>name = {name}</p>
                <p>email = {email}</p>
                <p>message = {message}</p>
              </div>
            </div>
            <figure className={styles.hero_image}>
              <img src="download_the_app_swr.png" alt="Brand" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
};
