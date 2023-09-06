"use client";

import { useState } from "react";
import Select from "@/components/Select";
import { Majors, Grades, Genders, Shirts, Availability } from "@/data/Register";
import Radio from "@/components/Radio";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@/components/Forms/Button";
import toast from "react-hot-toast";
import { Helper } from "@/data/User";
import { Description, Requirements } from "@/data/Volunteers";

const Volunteer = () => {
  const [volunteer, setVolunteer] = useState(Helper);

  const [requirements, setRequirements] = useState(Requirements);

  const handleSubmit = () => {
    if (volunteer.first === "") {
      toast("❌ Please include your first name!");
      return;
    }
    if (volunteer.last === "") {
      toast("❌ Please include last name!");
      return;
    }
    if (volunteer.email == "") {
      toast("❌ Please include your email!");
      return;
    }
    if (volunteer.phone == "") {
      toast("❌ Please include your phone number!");
      return;
    }
    if (volunteer.major == "") {
      toast("❌ Please include major!");
      return;
    }
    if (volunteer.availability == null) {
      toast("❌ Please select your availability!");
      return;
    }
    if (volunteer.shirt == "") {
      toast("❌ Please include shirt size!");
      return;
    }
    if (volunteer.grade == "") {
      toast("❌ Please complete all fields!");
      return;
    }
    if (requirements.inPerson.state == false) {
      toast("❌ Please check all fields!");
      return;
    }
    if (requirements.photography.state == false) {
      toast("❌ Please check all fields!");
      return;
    }
    toast(`✅ Submitted successfully!`);

    console.log(volunteer);
    console.log(requirements);
  };

  const handleRequirementsCheckbox = (key, value) => {
    setRequirements({
      ...requirements,
      [key]: { state: !value.state, text: value.text },
    });
  };

  return (
    <div className="w-full flex flex-col items-center font-poppins py-4">
      <div className="text-xl bg-hackathon-green-300 w-1/3 rounded-t-xl flex items-center justify-center p-3 font-semibold">
        VOLUNTEER APPLICATION
      </div>
      <div className="flex flex-col w-1/3 p-3 bg-white rounded-b-xl">
        <Row className="flex justify-center p-0 m-0">
          <Col xl={12}>
            {Description.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </Col>
          <Col xl={6}>
            <Input
              name="first"
              type="text"
              title="First Name"
              placeholder="John"
              value={volunteer.first}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="last"
              type="text"
              title="Last Name"
              placeholder="Doe"
              value={volunteer.last}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="phone"
              type="phone"
              title="Phone Number"
              placeholder="123 456 7890"
              value={volunteer.phone}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={6}>
            <Input
              name="email"
              type="email"
              title="Email Address"
              placeholder="john_doe@gmail.com"
              value={volunteer.email}
              maxLength={50}
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Major"
              options={Majors}
              field="major"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="Computer Science"
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Availability"
              options={Availability}
              field="availability"
              user={volunteer}
              setUser={setVolunteer}
              multiple={true}
            />
          </Col>
          <Col xl={12}>
            <Select
              title="Grade"
              options={Grades}
              field="grade"
              user={volunteer}
              setUser={setVolunteer}
              placeholder="Undergraduate"
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Gender"
              options={Genders}
              field="gender"
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            <Radio
              text="Shirt Size"
              options={Shirts}
              field="shirt"
              user={volunteer}
              setUser={setVolunteer}
            />
          </Col>
          <Col xl={12}>
            {Object.entries(requirements).map(([key, value], index) => (
              <Checkbox
                className="w-1/2"
                key={index}
                toggle={value.state}
                text={value.text}
                onClick={() => handleRequirementsCheckbox(key, value)}
                color="bg-hackathon-green-300"
              />
            ))}
          </Col>
          <Col xl={12} className="flex justify-center">
            <Button text="Submit" onClick={handleSubmit} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Volunteer;
