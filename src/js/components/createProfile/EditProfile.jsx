import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import TextFieldBootstrap from "../reuseableComponents/TextFieldBootstrap";
import TextFieldAreaBootstrap from "../reuseableComponents/TextFieldAreaBootstrap";
import TextFieldIcon from "../reuseableComponents/TextFieldIcon";
import SelectFieldBootstrap from "../reuseableComponents/SelectFieldBootstrap";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class CreateProfile extends Component {
  componentWillMount() {
    this.props.getProfile();
  }
  render() {
    const {
      handle,
      skills,
      status,
      website,
      location,
      company,
      githubUsername,
      bio
    } = this.props.profileData;
    const {
      // Actions for onChange
      changeHandle,
      changeStatus,
      changeBio,
      changeCompany,
      changeGithubUsername,
      changeWebsite,
      changeLocation,
      changeYoutube,
      changeTwitter,
      changeLinkedin,
      changeInstagram,
      changeFacebook,
      changeSkills,
      changeDisplaySocial,
      submitData,
      // Input Data for the textfields
      inputProfile,
      createEdit,
      submitErrors
    } = this.props;

    const { youtube, facebook, instagram, linkedin, twitter } = this.props
      .profileData.social
      ? this.props.profileData.social
      : "";

    const { displaySocialInputs } = this.props;

    const { errors } = this.props.inputProfile;

    const options = [
      { label: "*Select Professional Title", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Full Stack Developer", value: "Full Stack Developer" },
      { label: "Student", value: "Student" },
      { label: "Intern", value: "Intern" },
      { label: "other", value: "other" }
    ];

    return (
      <div>
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <Link to="/dashboard" className="btn btn-light">
                  Go Back
                </Link>
                <h1 className="display-4 text-center">
                  {createEdit} Your Profile
                </h1>
                {Object.keys(submitErrors).length ? (
                  <div className="invalid-feedback">{submitErrors.message}</div>
                ) : (
                  ""
                )}
                <p className="lead text-center">
                  Let's get some information to make your profile stand out
                </p>
                <small className="d-block pb-3">* = required field</small>
                <form>
                  <TextFieldBootstrap
                    name="handle"
                    placeholder="*Profile Handle"
                    onChange={e => changeHandle(e.target.value)}
                    error={errors.handle}
                    value={handle}
                    info="A unique handle for your profile URL. Your full name, company name, nickname, etc (This CAN'T be changed later)"
                  />
                  <SelectFieldBootstrap
                    name="status"
                    placeholder="Status"
                    options={options}
                    error={errors.status}
                    onChange={e => changeStatus(e.target.value)}
                    value={status}
                    info="Give us an idea of where you are at in your career"
                  />
                  <TextFieldBootstrap
                    name="company"
                    placeholder="Company"
                    onChange={e => changeCompany(e.target.value)}
                    error={errors.company}
                    value={company}
                    info="Could be your own company or one you work for"
                  />
                  <TextFieldBootstrap
                    name="location"
                    placeholder="Location"
                    onChange={e => changeLocation(e.target.value)}
                    error={errors.location}
                    value={location}
                    info="City & state suggested (eg. Boston, MA)"
                  />
                  <TextFieldBootstrap
                    name="website"
                    placeholder="Website"
                    onChange={e => changeWebsite(e.target.value)}
                    error={errors.website}
                    value={website}
                    info="Could be your own or a company website"
                  />
                  <TextFieldBootstrap
                    name="skills"
                    placeholder="*Skills"
                    onChange={e => changeSkills(e.target.value)}
                    error={errors.skills}
                    value={skills}
                    info="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                  />
                  <TextFieldBootstrap
                    name="githubUsername"
                    placeholder="Github Username"
                    onChange={e => changeGithubUsername(e.target.value)}
                    error={errors.githubUsername}
                    value={githubUsername}
                    info="If you want your latest repos and a Github link, include your username"
                  />
                  <TextFieldAreaBootstrap
                    name="bio"
                    placeholder="A Short Bio of Yourself"
                    onChange={e => changeBio(e.target.value)}
                    error={errors.bio}
                    info="Tell us a little about yourself"
                    value={bio}
                  />
                  <div className="mb-3">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={e => changeDisplaySocial(false)}
                    >
                      Add Social Network Links
                    </button>
                    <span className="text-muted">Optional</span>
                  </div>
                  <TextFieldIcon
                    name="instagram"
                    placeholder="Instagram Profile URL"
                    icon="fab fa-instagram"
                    disabled={displaySocialInputs}
                    value={instagram && instagram}
                    onChange={e => changeInstagram(e.target.value)}
                    error={errors.instagram}
                  />
                  <TextFieldIcon
                    name="youtube"
                    placeholder="Youtube Profile URL"
                    icon="fab fa-youtube"
                    disabled={displaySocialInputs}
                    value={youtube && youtube}
                    onChange={e => changeYoutube(e.target.value)}
                    error={errors.youtube}
                  />
                  <TextFieldIcon
                    name="twitter"
                    placeholder="Twitter Profile URL"
                    icon="fab fa-twitter"
                    disabled={displaySocialInputs}
                    value={twitter && twitter}
                    onChange={e => changeTwitter(e.target.value)}
                    error={errors.twitter}
                  />
                  <TextFieldIcon
                    name="facebook"
                    placeholder="facebook Profile URL"
                    icon="fab fa-facebook"
                    disabled={displaySocialInputs}
                    value={facebook && facebook}
                    onChange={e => changeFacebook(e.target.value)}
                    error={errors.facebook}
                  />
                  <TextFieldIcon
                    name="linkedin"
                    placeholder="Linkedin Profile URL"
                    icon="fab fa-linkedin"
                    disabled={displaySocialInputs}
                    value={linkedin && linkedin}
                    onChange={e => changeLinkedin(e.target.value)}
                    error={errors.linkedin}
                  />
                  <Button
                    variant="raised"
                    className="btn btn-info btn-block mt-4"
                    color="primary"
                    onClick={() => submitData(inputProfile)}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inputProfile: state.inputProfileData,
    submitErrors: state.errors,
    profileData: state.profileData
  };
}

export default connect(
  mapStateToProps,
  {
    changeHandle: actions.changeProfileHandle,
    changeStatus: actions.changeProfileStatus,
    changeLocation: actions.changeProfileLocation,
    changeBio: actions.changeProfileBio,
    changeSkills: actions.changeProfileSkills,
    changeCompany: actions.changeProfileCompany,
    changeGithubUsername: actions.changeProfileGithubUsername,
    changeWebsite: actions.changeProfileWebsite,
    changeYoutube: actions.changeProfileYoutube,
    changeFacebook: actions.changeProfileFacebook,
    changeTwitter: actions.changeProfileTwitter,
    changeInstagram: actions.changeProfileInstagram,
    changeLinkedin: actions.changeProfileLinkedin,
    changeDisplaySocial: actions.changeDisplaySocial,
    submitData: actions.submitProfileData,
    getProfile: actions.getCurrentProfile
  }
)(CreateProfile);
