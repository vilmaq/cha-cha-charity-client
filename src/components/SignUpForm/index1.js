import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import loginImg from "../icons/logo_re_uo4w.svg";

import { SIGNUP } from "../../graphql/mutations";
import ErrorModal from "../ErrorModal";

const SignUpForm = () => {
  let history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signUp, { error }] = useMutation(SIGNUP, {
    onCompleted: () => {
      history.push("/login");
    },
    onError: () => {
      handleShow();
    },
  });

  const onSubmit = async (formData) => {
    await signUp({
      variables: {
        signUpInput: formData,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="image">
        <img src={loginImg} alt="" />
      </div>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter full name"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && (
          <Form.Text className="text-danger">
            Please enter your first name.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <Form.Text className="text-danger">
            Please enter an email address.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <Form.Text className="text-danger">
            Please enter a password.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your phone number"
          {...register("phone number", { required: true })}
        />
        {errors.phoneNumber && (
          <Form.Text className="text-danger">
            Please enter your first name.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter your street address"
          {...register("phone number", { required: true })}
        />
        {errors.street && (
          <Form.Text className="text-danger">
            Please enter your first name.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter postcode "
          {...register("postcode ", { required: true })}
        />
        {errors.postcode && (
          <Form.Text className="text-danger">
            Please enter your first name.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter city"
          {...register("city", { required: true })}
        />
        {errors.city && (
          <Form.Text className="text-danger">
            Please enter your first name.
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter country"
          {...register("country", { required: true })}
        />
        {errors.country && (
          <Form.Text className="text-danger">
            Please enter your first name.
          </Form.Text>
        )}
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </div>
      {error && (
        <ErrorModal
          show={show}
          handleClose={handleClose}
          title="Sign Up Failed"
          message="We are sorry for the inconvenience. Please try again."
        />
      )}
    </Form>
  );
};

export default SignUpForm;
