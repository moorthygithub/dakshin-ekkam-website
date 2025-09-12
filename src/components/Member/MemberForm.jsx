import { useState } from "react";
import { Mail, Lock, Loader } from "lucide-react";
import InputField from "../common/InputField";
import { showErrorToast } from "../../utils/toast";
import { useApiMutation } from "../../hooks/useApiMutation";

const MemberForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { trigger: submitTrigger, loading: isApiLoading } = useApiMutation();
  const [errors, setErrors] = useState({});
  const [isRedirecting, setIsRedirecting] = useState(false); // new state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "UserName is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const formDatas = new FormData();
    formDatas.append("username", formData.email);
    formDatas.append("password", formData.password);

    try {
      const res = await submitTrigger({
        url: "/panel-login",
        method: "post",
        data: formDatas,
      });

      const email = encodeURIComponent(formData.email);
      const password = encodeURIComponent(formData.password);

      if (res.code === 200 && res.UserInfo?.token) {
        setIsRedirecting(true); // keep loading while redirecting
        window.location.href = `https://dhakshinekkam-crm.netlify.app/login?email=${email}&password=${password}`;
      } else {
        showErrorToast(res?.message || "Login failed: Unexpected response.");
      }
    } catch (error) {
      showErrorToast(error.response?.data?.message || "Please try again.");
    }
  };

  // button should show loading if API is in progress OR redirecting
  const isLoading = isApiLoading || isRedirecting;

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md my-6 rounded-xl p-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Member Area</h2>

      <InputField
        label="Email"
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
        disabled={isLoading}
        className={`w-full mt-3 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition ${
          isLoading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <>
            <Loader className="h-5 w-5 animate-spin mr-2" />
            {isRedirecting ? "Redirecting..." : "Logging in..."}
          </>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default MemberForm;
