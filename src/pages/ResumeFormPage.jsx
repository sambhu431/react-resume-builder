import { useRef, useState } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { resumeStorage } from "../localstorage/resumeStorage";

export default function ResumeFormPage() {
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const formikRef = useRef(null);
  const [hasResume, setHasResume] = useState(!!resumeStorage.get());
  const [sectionErrors, setSectionErrors] = useState({
    education: "",
    skills: "",
    experience: "",
    project: "",
  });

  const inputClass =
    "w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm outline-none focus:border-black focus:bg-white transition";

  const FormField = ({ name, label, placeholder }) => (
    <div className="flex flex-col">
      {/* LABEL */}
      {label && (
        <label className="mb-1 text-xs font-semibold text-gray-700">
          {label}
        </label>
      )}

      <Field name={name} placeholder={placeholder} className={inputClass} />

      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-xs text-red-500"
      />
    </div>
  );

  const setSectionError = (section, message) => {
    setSectionErrors((prev) => ({
      ...prev,
      [section]: message,
    }));
  };

  const validationSchema = Yup.object({
    personalInfo: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      phone: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      dob: Yup.string(),
      maritalStatus: Yup.string(),
      nationality: Yup.string(),
      languages: Yup.string(),

      linkedin: Yup.string()
        .transform((value) => (value === "" ? null : value))
        .nullable()
        .url("Enter a valid URL")
        .matches(
          /^(https?:\/\/)?([\w]+\.)?linkedin\.com\/.*$/i,
          "Must be a valid LinkedIn URL",
        ),

      github: Yup.string()
        .transform((value) => (value === "" ? null : value))
        .nullable()
        .url("Enter a valid URL")
        .matches(
          /^(https?:\/\/)?([\w]+\.)?github\.com\/.*$/i,
          "Must be a valid GitHub URL",
        )
        .nullable(),
    }),

    careerObjective: Yup.string().required("Required"),

    education: Yup.array()
      .min(1, "At least one education entry is required")
      .of(
        Yup.object({
          course: Yup.string().required("Required"),
          institute: Yup.string().required("Required"),
          passingYear: Yup.string().required("Required"),
          percentage: Yup.string().required("Required"),
        }),
      ),
  });

  const defaultValues = {
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      dob: "",
      maritalStatus: "",
      nationality: "",
      languages: "",
      linkedin: "",
      github: "",
    },

    careerObjective: "",

    education: [
      {
        course: "",
        institute: "",
        passingYear: "",
        percentage: "",
      },
    ],

    skillGroups: [
      {
        category: "",
        skills: [""],
      },
    ],

    experience: [],
    projects: [],
  };

  const savedResume = resumeStorage.get();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur py-2">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-sm text-gray-600 hover:text-black cursor-pointer"
          >
            ← Back
          </button>

          <h1 className="text-sm font-semibold tracking-wide text-gray-800">
            Resume Builder
          </h1>

          <div />
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600">
          Resume form data is stored locally in the browser and will be
          automatically removed after 48 hours. While filling the form Please
          beware of extra spaces and breaking sentences in between.
        </div>

        <div className="text-sm mb-2 font-semibold">
          <button
            className="underline cursor-pointer"
            type="button"
            onClick={() => {
              resumeStorage.clear();
              formikRef.current.resetForm({
                values: defaultValues,
              });
              setHasResume(false);
            }}
          >
            Clear All Fields
          </button>
        </div>

        <Formik
          innerRef={formikRef}
          initialValues={{
            ...defaultValues,
            ...savedResume,
            personalInfo: {
              ...defaultValues.personalInfo,
              ...(savedResume?.personalInfo || {}),
              maritalStatus: "",
            },
          }}
          validationSchema={validationSchema}
          validateOnMount={false}
          onSubmit={(values) => {
            resumeStorage.save(values);
            setFormError("");
          }}
        >
          {({
            values,
            validateForm,
            submitForm,
            setValues,
            setFieldValue,
            setTouched,
          }) => {
            const canAddEducation = values.education.every(
              (e) =>
                e.course?.trim() &&
                e.institute?.trim() &&
                e.passingYear?.trim() &&
                e.percentage?.trim(),
            );

            const canAddSkill = values.skillGroups.every(
              (g) => g.category?.trim() && g.skills?.some((s) => s?.trim()),
            );

            const canAddExperience = values.experience.every(
              (e) => e.company?.trim() && e.role?.trim() && e.startDate?.trim(),
            );

            const canAddProject = values.projects.every(
              (p) => p.name?.trim() && p.description?.trim(),
            );

            return (
              <Form className="space-y-6">
                {/* PERSONAL INFORMATION */}
                <section className="rounded-xl bg-white p-6 shadow-sm border">
                  <h2 className="mb-4 text-sm font-semibold text-gray-700">
                    Personal Information{" "}
                    <span className="text-xl text-red-500 font-bold"> * </span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <FormField
                      name="personalInfo.firstName"
                      label="First Name"
                      placeholder="Enter first name"
                    />

                    <FormField
                      name="personalInfo.lastName"
                      label="Last Name"
                      placeholder="Enter last name"
                    />

                    <FormField
                      name="personalInfo.email"
                      label="Email Address"
                      placeholder="example@gmail.com"
                    />
                    <div className="flex flex-col">
                      <label className="mb-1 text-xs font-semibold text-gray-700">
                        Phone Number
                      </label>

                      <Field
                        name="personalInfo.phone"
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                        onChange={(e) => {
                          const value = e.target.value;
                          formikRef.current.setFieldValue(
                            "personalInfo.phone",
                            e.target.value,
                          );
                        }}
                      />

                      {values.personalInfo.phone &&
                        /[a-zA-Z]/.test(values.personalInfo.phone.trim()) && (
                          <div className="mt-1 text-xs text-yellow-600">
                            Please avoid letters in phone number.
                          </div>
                        )}

                      <ErrorMessage
                        name="personalInfo.phone"
                        component="div"
                        className="mt-1 text-xs text-red-500"
                      />
                    </div>

                    <FormField
                      name="personalInfo.address"
                      label="Address"
                      placeholder="City, State, Country"
                    />

                    <FormField
                      name="personalInfo.dob"
                      label="Date of Birth (Optional)"
                      placeholder="DD/MM/YYYY"
                    />

                    <div className="flex flex-col">
                      <label className="mb-1 text-xs font-semibold text-gray-700">
                        Marital Status (Optional)
                      </label>

                      <Field
                        as="select"
                        name="personalInfo.maritalStatus"
                        className={inputClass}
                      >
                        <option value="">
                          Select marital status (Optional)
                        </option>
                        <option value="UnMarried">UnMarried</option>
                        <option value="Married">Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                      </Field>
                    </div>

                    <FormField
                      name="personalInfo.nationality"
                      label="Nationality (Optional)"
                      placeholder="e.g. Indian"
                    />

                    <FormField
                      name="personalInfo.languages"
                      label="Languages (Optional)"
                      placeholder="English, Hindi, etc."
                    />

                    <FormField
                      name="personalInfo.linkedin"
                      label="LinkedIn Profile (Optional)"
                      placeholder="https://linkedin.com/in/username"
                    />

                    <FormField
                      name="personalInfo.github"
                      label="GitHub Profile (Optional)"
                      placeholder="https://github.com/username"
                    />
                  </div>
                </section>

                {/* CAREER OBJECTIVE */}
                <section className="rounded-xl bg-white p-6 shadow-sm border">
                  <h2 className="mb-3 text-sm font-semibold text-gray-700">
                    Career Objective{" "}
                    <span className="text-xl text-red-500 font-bold"> * </span>
                  </h2>

                  <Field
                    as="textarea"
                    name="careerObjective"
                    placeholder="Write a short professional summary..."
                    className={`${inputClass} min-h-24`}
                  />
                  <ErrorMessage
                    name="careerObjective"
                    component="div"
                    className="mt-1 text-xs text-red-500"
                  />
                </section>

                {/* EDUCATION */}
                <section className="rounded-xl bg-white p-6 shadow-sm border">
                  <h2 className="mb-4 text-sm font-semibold text-gray-700">
                    Education{" "}
                    <span className="text-xl text-red-500 font-bold"> * </span>
                  </h2>

                  <FieldArray name="education">
                    {({ push, remove }) => (
                      <div className="space-y-4">
                        {values.education.map((_, i) => (
                          <div
                            key={i}
                            className="rounded-lg border p-4 space-y-3"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <FormField
                                name={`education.${i}.course`}
                                label="Course / Degree"
                                placeholder="e.g. B.Sc Computer Science"
                              />

                              <FormField
                                name={`education.${i}.institute`}
                                label="Institute / School"
                                placeholder="e.g. XYZ University"
                              />

                              <FormField
                                name={`education.${i}.passingYear`}
                                label="Passing Year"
                                placeholder="e.g. 2024"
                              />

                              <FormField
                                name={`education.${i}.percentage`}
                                label="Percentage / CGPA"
                                placeholder="e.g. 8.5 CGPA or 78%"
                              />
                            </div>

                            {values.education.length > 1 && (
                              <button
                                type="button"
                                onClick={() => remove(i)}
                                className="text-xs text-red-500 hover:text-red-700"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() => {
                            if (!canAddEducation) {
                              setSectionError(
                                "education",
                                "Please fill existing education fields first.",
                              );
                              return;
                            }

                            setSectionError("education", "");

                            push({
                              course: "",
                              institute: "",
                              passingYear: "",
                              percentage: "",
                            });
                          }}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          + Add Education
                        </button>
                        {sectionErrors.education && (
                          <p className="text-xs text-red-500 mt-1">
                            {sectionErrors.education}
                          </p>
                        )}
                      </div>
                    )}
                  </FieldArray>
                </section>

                {/* SKILLS */}
                <section className="rounded-xl bg-white p-6 shadow-sm border">
                  <h2 className="mb-4 text-sm font-semibold text-gray-700">
                    Skills
                  </h2>

                  <FieldArray name="skillGroups">
                    {({ push, remove }) => (
                      <div className="space-y-4">
                        {values.skillGroups.map((group, groupIndex) => (
                          <div
                            key={groupIndex}
                            className="rounded-lg border p-4 space-y-3"
                          >
                            {/* CATEGORY */}
                            <div className="flex flex-col">
                              <label className="mb-1 text-xs font-semibold text-gray-700">
                                Skill Category
                              </label>

                              <Field
                                name={`skillGroups.${groupIndex}.category`}
                                className={inputClass}
                                placeholder="e.g. Technical Skills, Soft Skills"
                              />

                              <ErrorMessage
                                name={`skillGroups.${groupIndex}.category`}
                                component="div"
                                className="mt-1 text-xs text-red-500"
                              />
                            </div>

                            {/* SKILLS (nested array) */}
                            <FieldArray
                              name={`skillGroups.${groupIndex}.skills`}
                            >
                              {({ push: pushSkill, remove: removeSkill }) => (
                                <div className="space-y-2">
                                  <label className="text-xs font-semibold text-gray-700">
                                    Skills
                                  </label>

                                  {group.skills.map((_, skillIndex) => (
                                    <div
                                      key={skillIndex}
                                      className="flex gap-2"
                                    >
                                      <Field
                                        name={`skillGroups.${groupIndex}.skills.${skillIndex}`}
                                        className={inputClass}
                                        placeholder="e.g. React, Leadership, Node.js"
                                      />

                                      <button
                                        type="button"
                                        onClick={() => removeSkill(skillIndex)}
                                        className="text-xs text-red-500 hover:text-red-700"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  ))}

                                  <button
                                    type="button"
                                    onClick={() => pushSkill("")}
                                    className="text-sm text-blue-600 hover:text-blue-800"
                                  >
                                    + Add Skill
                                  </button>
                                </div>
                              )}
                            </FieldArray>

                            {/* REMOVE CATEGORY */}
                            {values.skillGroups.length > 1 && (
                              <button
                                type="button"
                                onClick={() => remove(groupIndex)}
                                className="text-xs text-red-500 hover:text-red-700"
                              >
                                Remove Category
                              </button>
                            )}
                          </div>
                        ))}

                        {/* ADD CATEGORY */}
                        <button
                          type="button"
                          onClick={() => {
                            if (!canAddSkill) {
                              setSectionError(
                                "skills",
                                "Please fill existing skill fields first.",
                              );
                              return;
                            }

                            setSectionError("skills", "");

                            push({
                              category: "",
                              skills: [""],
                            });
                          }}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          + Add Skill Category
                        </button>
                        {sectionErrors.skills && (
                          <p className="text-xs text-red-500 mt-1">
                            {sectionErrors.skills}
                          </p>
                        )}
                      </div>
                    )}
                  </FieldArray>
                </section>

                {/* EXPERIENCE */}
                <section className="rounded-xl bg-white p-6 shadow-sm border">
                  <h2 className="mb-4 text-sm font-semibold text-gray-700">
                    Experience (Optional)
                  </h2>

                  <FieldArray name="experience">
                    {({ push, remove }) => (
                      <div className="space-y-4">
                        {values.experience.map((_, i) => (
                          <div
                            key={i}
                            className="rounded-lg border p-4 space-y-3"
                          >
                            {/* GRID FIELDS */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="flex flex-col">
                                <label className="mb-1 text-xs font-semibold text-gray-700">
                                  Company
                                </label>
                                <Field
                                  name={`experience.${i}.company`}
                                  className={inputClass}
                                  placeholder="e.g. Google, Infosys"
                                />
                              </div>

                              <div className="flex flex-col">
                                <label className="mb-1 text-xs font-semibold text-gray-700">
                                  Role / Position
                                </label>
                                <Field
                                  name={`experience.${i}.role`}
                                  className={inputClass}
                                  placeholder="e.g. Software Engineer"
                                />
                              </div>

                              <div className="flex flex-col">
                                <label className="mb-1 text-xs font-semibold text-gray-700">
                                  Location
                                </label>
                                <Field
                                  name={`experience.${i}.location`}
                                  className={inputClass}
                                  placeholder="e.g. Mumbai, India"
                                />
                              </div>

                              <div className="flex flex-col">
                                <label className="mb-1 text-xs font-semibold text-gray-700">
                                  Start Date
                                </label>
                                <Field
                                  name={`experience.${i}.startDate`}
                                  className={inputClass}
                                  placeholder="e.g. Jan 2022"
                                />
                              </div>

                              <div className="flex flex-col">
                                <label className="mb-1 text-xs font-semibold text-gray-700">
                                  End Date
                                </label>
                                <Field
                                  name={`experience.${i}.endDate`}
                                  className={inputClass}
                                  placeholder="e.g. Present / Dec 2024"
                                />
                              </div>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="flex flex-col">
                              <label className="mb-1 text-xs font-semibold text-gray-700">
                                Description
                              </label>

                              <Field
                                as="textarea"
                                name={`experience.${i}.description`}
                                className={`${inputClass} min-h-20`}
                                placeholder="Describe your responsibilities, achievements, impact..."
                              />
                            </div>

                            {/* REMOVE BUTTON */}
                            <button
                              type="button"
                              onClick={() => remove(i)}
                              className="text-xs text-red-500 hover:text-red-700"
                            >
                              Remove Experience
                            </button>
                          </div>
                        ))}

                        {/* ADD BUTTON */}
                        <button
                          type="button"
                          onClick={() => {
                            if (!canAddExperience) {
                              setSectionError(
                                "experience",
                                "Please fill existing experience fields first.",
                              );
                              return;
                            }

                            setSectionError("experience", "");

                            push({
                              company: "",
                              role: "",
                              location: "",
                              startDate: "",
                              endDate: "",
                              description: "",
                            });
                          }}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          + Add Experience
                        </button>
                        {sectionErrors.experience && (
                          <p className="text-xs text-red-500 mt-1">
                            {sectionErrors.experience}
                          </p>
                        )}
                      </div>
                    )}
                  </FieldArray>
                </section>

                {/* PROJECTS */}
                <section className="rounded-xl bg-white p-6 shadow-sm border">
                  <h2 className="mb-4 text-sm font-semibold text-gray-700">
                    Projects (Optional)
                  </h2>

                  <FieldArray name="projects">
                    {({ push, remove }) => (
                      <div className="space-y-4">
                        {values.projects.map((_, i) => (
                          <div
                            key={i}
                            className="rounded-lg border p-4 space-y-3"
                          >
                            {/* PROJECT NAME + LINK */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-600">
                                  Project Name
                                </label>
                                <Field
                                  name={`projects.${i}.name`}
                                  className={inputClass}
                                  placeholder="e.g. Portfolio Website"
                                />
                              </div>

                              <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium text-gray-600">
                                  Live Link / GitHub
                                </label>
                                <Field
                                  name={`projects.${i}.link`}
                                  className={inputClass}
                                  placeholder="https://..."
                                />
                              </div>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="flex flex-col gap-1">
                              <label className="text-xs font-medium text-gray-600">
                                Description
                              </label>
                              <Field
                                as="textarea"
                                name={`projects.${i}.description`}
                                className={`${inputClass} min-h-20`}
                                placeholder="Explain what the project does..."
                              />
                            </div>

                            {/* TECH STACK */}
                            <div className="flex flex-col gap-1">
                              <label className="text-xs font-medium text-gray-600">
                                Tech Stack
                              </label>
                              <Field
                                name={`projects.${i}.techStack`}
                                className={inputClass}
                                placeholder="React, Node.js, MongoDB..."
                              />
                            </div>

                            {/* REMOVE */}
                            <button
                              type="button"
                              onClick={() => remove(i)}
                              className="text-xs text-red-500 hover:text-red-700"
                            >
                              Remove Project
                            </button>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() => {
                            if (!canAddProject) {
                              setSectionError(
                                "project",
                                "Please fill existing project fields first.",
                              );
                              return;
                            }

                            setSectionError("project", "");
                            push({
                              name: "",
                              description: "",
                              techStack: "",
                              link: "",
                            });
                          }}
                          className="text-sm text-blue-600 hover:text-blue-800"
                        >
                          + Add Project
                        </button>
                        {sectionErrors.project && (
                          <p className="text-xs text-red-500 mt-1">
                            {sectionErrors.project}
                          </p>
                        )}
                      </div>
                    )}
                  </FieldArray>
                </section>

                <div className="flex justify-center">
                  <button
                    type="button"
                    disabled={isSaving}
                    onClick={async () => {
                      setFormError("");

                      setTouched(
                        {
                          personalInfo: {
                            firstName: true,
                            lastName: true,
                            email: true,
                            phone: true,
                            address: true,
                            dob: true,
                          },
                          careerObjective: true,
                          education: values.education.map(() => ({
                            course: true,
                            institute: true,
                            passingYear: true,
                            percentage: true,
                          })),
                        },
                        true,
                      );

                      const errors = await validateForm();

                      if (Object.keys(errors).length > 0) {
                        setFormError("Please fill all required fields.");
                        return;
                      }

                      setIsSaving(true);

                      try {
                        await submitForm();
                        navigate("/templates");
                      } finally {
                        setIsSaving(false);
                      }
                    }}
                    className="rounded-lg bg-black px-10 py-3 text-sm 
    font-medium text-white hover:bg-gray-800 transition cursor-pointer"
                  >
                    {isSaving ? "Saving..." : "Save Resume"}
                  </button>
                  {formError && (
                    <div className="text-center text-red-600 text-sm font-medium">
                      {formError}
                    </div>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
