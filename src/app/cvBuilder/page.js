"use client"
import { useState, useEffect } from "react";
import styles from './page.module.css';


export default function Page() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
    languages: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div >
   <div className={`${styles.container} flex h-screen bg-gray-100`}>
      {/* Form Section */}
      <div className={`${styles.formSection} w-2/5 bg-white p-6 overflow-y-auto border-r border-gray-300`}>
        <h2 className="text-xl font-bold mb-4">Resume Form</h2>

        {Object.keys(form).map((key) => (
          <div key={key} className="mb-4">
            <label className="block font-semibold mb-1 capitalize">{key}</label>
            {key === "summary" || key === "experience" || key === "education" || key === "skills" || key === "languages" ? (
              <textarea
                name={key}
                value={form[key]}
                onChange={handleChange}
                className={`${styles.mFormField} m-form-field w-full p-2 border border-gray-300 rounded`}
              />
            ) : (
              <input
                name={key}
                type="text"
                value={form[key]}
                onChange={handleChange}
                className={`${styles.mFormField} m-form-field w-full p-2 border border-gray-300 rounded`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Preview Section */}
      <div className={`${styles.previewSection} w-3/5 p-6 overflow-y-auto`}>
        <h2 className="m-resume-prview text-xl font-bold mb-4">Resume Preview</h2>
        <div className="bg-white p-6 border border-gray-300 min-h-[90%]">
          <h1 className="text-3xl font-bold">{form.fullName}</h1>
          <p>{form.email}</p>
          <p>{form.phone}</p>

          <div className="mt-4 font-bold border-b pb-1">Professional Summary</div>
          <p>{form.summary}</p>

          <div className="mt-4 font-bold border-b pb-1">Work Experience</div>
          <p>{form.experience}</p>

          <div className="mt-4 font-bold border-b pb-1">Education</div>
          <p>{form.education}</p>

          <div className="mt-4 font-bold border-b pb-1">Skills</div>
          <p>{form.skills}</p>

          <div className="mt-4 font-bold border-b pb-1">Languages</div>
          <p>{form.languages}</p>
        </div>
      </div>
    </div>
    </div>
  );
}
