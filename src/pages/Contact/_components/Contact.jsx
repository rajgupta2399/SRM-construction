import { useState } from "react";

const initValues = { name: "", email: "", service: "", phone: "", message: "" };
const initState = { isLoading: false, error: "", values: initValues };

export default function ContactPage() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  // Handle blur to mark field as touched
  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  // Handle change to update form field values
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  // Handle form submission
  const onSubmit = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setTouched({});
      setState(initState);
      alert("Message sent successfully!");
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <div className="isolate px-6 py-24 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg">Let's build something great</p>
      </div>

      <form
        className="mx-auto mt-16 max-w-xl sm:mt-12"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {/* Form fields (name, email, phone, service, message) */}
        {["name", "email", "phone", "service", "message"].map((field) => (
          <div className="mb-6" key={field}>
            <label className="block text-sm font-semibold capitalize">{field}</label>
            {field !== "message" ? (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={values[field]}
                onChange={handleChange}
                onBlur={onBlur}
                className={`mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline outline-1 ${
                  touched[field] && !values[field]
                    ? "outline-red-500"
                    : "outline-gray-300"
                } focus:outline-2 focus:outline-indigo-600`}
              />
            ) : (
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
                className={`mt-2.5 block w-full rounded-md px-3.5 py-2 text-base outline outline-1 ${
                  touched.message && !values.message
                    ? "outline-red-500"
                    : "outline-gray-300"
                } focus:outline-2 focus:outline-indigo-600`}
              ></textarea>
            )}
            {touched[field] && !values[field] && (
              <p className="text-red-500 text-sm mt-1">{`${field} is required`}</p>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-md hover:bg-indigo-500 focus:ring focus:ring-indigo-400 focus:ring-offset-2"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}
      </form>
    </div>
  );
}
