import React from "react";

export default ({ profile }) => {
  const renderSocial = profile.social && (
    <span>
      {profile.social.twitter && (
        <a className="text-white p-2" href="#">
          <i className="fab fa-twitter fa-2x" />
        </a>
      )}
      {profile.social.facebook && (
        <a className="text-white p-2" href="#">
          <i className="fab fa-facebook fa-2x" />
        </a>
      )}
      {profile.social.linkedin && (
        <a className="text-white p-2" href="#">
          <i className="fab fa-linkedin fa-2x" />
        </a>
      )}
      {profile.social.instagram && (
        <a className="text-white p-2" href="#">
          <i className="fab fa-instagram fa-2x" />
        </a>
      )}
    </span>
  );
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-info text-white mb-3">
          <div className="row">
            <div className="col-4 col-md-3 m-auto">
              <img
                className="rounded-circle"
                src={profile.user.avatar}
                alt=""
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="display-4 text-center">{profile.user.name}</h1>
            <p className="lead text-center">
              {profile.status && profile.status}
            </p>
            <p>{profile.location && profile.location}</p>

            <p>
              {profile.website && (
                <a className="text-white p-2" href="#">
                  <i className="fas fa-globe fa-2x" />
                </a>
              )}
              {renderSocial}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
