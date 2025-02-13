import ImageComponent from "@components/Image";
import RelatedMediaList from "@components/MediaDetail/RelatedMediaList";
import { useLoaderData } from "react-router-dom";

const PeoplePage = () => {
  const GENDER_MAPPING = {
    0: "Not set / not specified",
    1: "Female",
    2: "Male",
    3: "Non-binary",
  };
  const peopleInfo = useLoaderData();

  return (
    <div>
      <div className="container">
        <div className="flex-1">
          <ImageComponent
            className="mb-6"
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleInfo.profile_path}`}
            width={600}
            height={900}
          />
          <div>
            <p className="mb-6 text-lg font-bold">Personal Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Known For</p>
                <p>{peopleInfo.known_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>{GENDER_MAPPING[peopleInfo.gender]}</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{peopleInfo.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Birthday</p>
                <p>{peopleInfo.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-2xl font-bold">{peopleInfo.name}</p>
          <div className="mb-6">
            <p className="mb-4 text-lg font-bold">Biography</p>
            <p className="whitespace-pre-line">{peopleInfo.biography}</p>
          </div>
          <div>
            <RelatedMediaList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
