import React, {useEffect} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {postCharacter, getEpisodes} from "../actions";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
// import swal from "sweetalert";
import("../../styles/createC.css");

export default function CharacterForm() {
  const dispatch = useDispatch();
  const allEpisodes = useSelector((state) => state.episodes);

  // const [file, setFile] = useState(null);

  // const CLOUD_NAME = "CLOUD_NAME";
  // const UPLOAD_PRESET = "UPLOAD_PRESET";

  // const upload = async (e) => {
  //     try {
  //       const files = e.target.files;
  //       const data = new FormData();
  //       data.append("file", files[0]);
  //       data.append("upload_preset", "coffeeStreetData");
  //       const response = await fetch(
  //         "https://api.cloudinary.com/v1_1/db6aq84ze/image/upload",
  //         {
  //           method: "POST",
  //           body: data
  //         }
  //       );
  //       const file = await response.json();
  //       return file.secure_url;
  //     } catch (error) {
  //       return "";
  //     }
  //   };

  useEffect(() => {
    dispatch(getEpisodes());
  }, [dispatch]);

  const initialValues = {
    name: "",
    status: "",
    species: "",
    origin: "",
    episode : [],
    image: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
    species: Yup.string().required("Required"),
    origin: Yup.string().required("Required"),
    episode: Yup.array().required("Required"),
    image: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
    dispatch(postCharacter(values));
  };

  return (
    <div className="contenedorF">
      <div className="form">
        <h2>FORMULARIO DE CREACION</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" />
            </div>
            <div className="form-control">
              <label htmlFor="status">Status</label>
              <Field as="select" id="status" name="status">
                <option value="">Select a status</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">Unknown</option>
              </Field>
              <ErrorMessage name="status" />
            </div>
            <div className="form-control">
              <label htmlFor="species">Species</label>
              <Field as="select" id="species" name="species">
                <option value="">Select a species</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
              </Field>
              <ErrorMessage name="species" />
            </div>
            <div className="form-control">
              <label htmlFor="origin">Origin</label>
              <Field as="select" id="origin" name="origin">
                <option value="">Select a origin</option>
                <option value="Earth (C-137)">Earth (C-137)</option>
                <option value="Abadango">Abadango</option>
                <option value="Citadel of Ricks">Citadel of Ricks</option>
                <option value="Nuptia 4">Nuptia 4</option>
                <option value="unknown">unknown</option>
              </Field>
              <ErrorMessage name="origin" />

            </div>
            <div className="form-control">
              <label htmlFor="episode">Episode</label>
              <Field as="select" id="episode" name="episode" multiple>
                {allEpisodes.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </Field>
              <ErrorMessage name="episode" />
            </div>
            <div className="form-control">
              <label htmlFor="image">Image</label>
              <Field type="file" id="image" name="image" />

              <ErrorMessage name="image" />
            </div>
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
