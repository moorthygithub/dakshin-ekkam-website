import { useState } from "react";
import { User, Mail, Phone, MapPin, Users } from "lucide-react";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";

const CommunityForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    familyMembers: "",
    gender: "",
    communityType: "",
    occupation: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (!formData.familyMembers) {
      newErrors.familyMembers = "Number of family members is required";
    } else if (isNaN(formData.familyMembers) || formData.familyMembers <= 0) {
      newErrors.familyMembers = "Enter a valid number";
    }

    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.communityType)
      newErrors.communityType = "Please select community type";

    if (!formData.occupation.trim())
      newErrors.occupation = "Occupation is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Community Registration Submitted:", formData);
      alert("Registration Successful 🎉");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto bg-white  my-6  px-6"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Community Registration Form
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          startIcon={<User size={18} />}
          error={errors.fullName}
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          startIcon={<Mail size={18} />}
          error={errors.email}
        />

        <InputField
          label="Phone Number"
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter 10-digit phone"
          startIcon={<Phone size={18} />}
          error={errors.phone}
        />

        <InputField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your address"
          startIcon={<MapPin size={18} />}
          error={errors.address}
        />

        <InputField
          label="Family Members"
          type="number"
          name="familyMembers"
          value={formData.familyMembers}
          onChange={handleChange}
          placeholder="Enter number of family members"
          startIcon={<Users size={18} />}
          error={errors.familyMembers}
        />

        {/* Gender Dropdown */}
        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={["Male", "Female", "Other"]}
          error={errors.gender}
        />

        {/* Community Type Dropdown */}
        <SelectField
          label="Community Type"
          name="communityType"
          value={formData.communityType}
          onChange={handleChange}
          options={["General", "OBC", "SC", "ST", "Other"]}
          error={errors.communityType}
        />

        {/* Occupation */}
        <InputField
          label="Occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          placeholder="Enter your occupation"
          error={errors.occupation}
        />
      </div>

      <button
        type="submit"
        className="w-full mt-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg transition"
      >
        Register
      </button>
    </form>
  );
};

export default CommunityForm;
