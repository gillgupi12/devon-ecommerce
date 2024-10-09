import { Container, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/auth";
import { isRegisterResponse } from "../../utils/responses";
import CustomButton from "../../components/atoms/button/index";

const RegisterPage: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
    },
    validate: {
      username: (value) => {
        if (!value) return "Please input username";
        if (value.length < 6) return "Username must be at least 6 characters long";
        return null;
      },
      password: (value) => {
        if (!value) return "Please input password";
        if (value.length < 6) return "Password must be at least 6 characters long";
        return null;
      },
      firstName: (value) => {
        if (!value) return "Please input first name";
        if (value.length < 2) return "First name must be at least 2 characters long";
        return null;
      },
      lastName: (value) => {
        if (!value) return "Please input last name";
        if (value.length < 2) return "Last name must be at least 2 characters long";
        return null;
      },
      email: (value) => {
        if (!value) return "Please input email";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Please input a valid email address";
        }
        return null;
      },
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    form.validate();
    if (form.isValid()) {
      try {
        const response = await api.register({
          userName: form.getValues().username,
          password: form.getValues().password,
          firstName: form.getValues().firstName,
          lastName: form.getValues().lastName,
          email: form.getValues().email,
        });
        if ("error" in response) {
          setErrorMessage(response.message);
          notifications.show({
            title: "Error",
            message: `${response.message}`,
            position: "top-right",
            color: "red",
          });
        } else if (isRegisterResponse(response)) {
          setErrorMessage(null);
          navigate("/");
          notifications.show({
            title: "Success",
            message: `Welcome ${response.user.userName}!`,
            position: "top-right",
            color: "green",
          });
        }
      } catch (err) {
        console.log(err);
        setErrorMessage("An unexpected error occurred. Please try again later.");
        notifications.show({
          title: "Error",
          message: "An unexpected error occurred. Please try again later.",
          position: "top-right",
          color: "red",
        });
      }
    }
    setLoading(false);
  };
  return (
    <>
      <Container size={"xs"} py={35} bg={"white"} className="border rounded my-6">
        <p className="text-xl font-semibold leading-0">Don't have a devondemo account? Sign Up!</p>
        <p className="text-sm  font-light pb-4 leading-0">Let's get started! </p>
        <form onSubmit={handleSubmit} className="space-y-3 ">
          <TextInput
            label="First name"
            placeholder="First name"
            type="text"
            className="flex-grow"
            {...form.getInputProps("firstName")}
          />
          <TextInput
            label="Last name"
            placeholder="Last name"
            className="flex-grow"
            type="text"
            {...form.getInputProps("lastName")}
          />

          <TextInput
            label="Email"
            placeholder="Email"
            className="flex-grow"
            {...form.getInputProps("email")}
          />
          <TextInput label="Username" placeholder="Username" {...form.getInputProps("username")} />
          <TextInput
            label="Password"
            placeholder="Password"
            type="password"
            {...form.getInputProps("password")}
          />
          <small className="text-red-500">{errorMessage}</small>
          <Group justify="flex-end">
            <CustomButton
              loading={loading}
              disabled={loading}
              type="submit"
              className="w-1/4"
              color={"blue"}
            >
              {" "}
              {loading ? "Registering.." : "Register"}
            </CustomButton>
          </Group>
        </form>
      </Container>
    </>
  );
};

export default RegisterPage;
