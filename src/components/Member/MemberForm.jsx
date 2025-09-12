import { useState } from "react";
import { Mail, User, Lock } from "lucide-react";
import InputField from "../common/InputField";
import { showErrorToast, showSuccessToast } from "../../utils/toast";
import { useApiMutation } from "../../hooks/useApiMutation";

const MemberForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { trigger: submitTrigger } = useApiMutation();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = validate();

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //   } else {
  //     console.log("Form submitted:", formData);
  //     // showSuccessToast("Member created successfully!");
  //     showErrorToast("Something went wrong");
  //   }
  // };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const email = encodeURIComponent(formData.email);
    const password = encodeURIComponent(formData.password);

    // Redirect with params
    window.location.href = `http://localhost:5173/login?email=${email}&password=${password}`;
  } catch (error) {
    showErrorToast("Something went wrong");
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md my-6 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Member Area</h2>

      <InputField
        label="Email"
        // type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        startIcon={<Mail size={18} />}
        error={errors.email}
      />

      <InputField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        startIcon={<Lock size={18} />}
        error={errors.password}
      />

      <button
        type="submit"
        className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        Submit
      </button>
    </form>
  );
};

export default MemberForm;
