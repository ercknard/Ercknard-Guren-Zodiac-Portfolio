import React, { Component } from "react";
import PageSigns from "@/components/PageSigns";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import Link from "next/link";

type Props = {};

type State = {};

export default class Medias extends Component<Props, State> {
  state = {};

  render() {
    return (
      <>
        <div
          data-aos="fade-down"
          data-aos-duration="1200"
          className="page-title text-effect"
        >
          Contact me
        </div>
        <PageSigns />
        <div
          data-aos="fade"
          data-aos-duration="1500"
          className="head-profile"
        />
        <div
          data-aos="fade"
          data-aos-duration="3000"
          className="to-flex socials"
        >
          <Link target="_blank" href="https://fb.com" rel="noopener noreferrer">
            <div className="social-icons">
              <FacebookIcon className="to-color" />{" "}
              <span className="to-hide  social-links">Facebook</span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://twitter.com"
            rel="noopener noreferrer"
          >
            <div className="social-icons">
              <TwitterIcon className="to-color" />{" "}
              <span className="to-hide  social-links">Twitter</span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://discord.com"
            rel="noopener noreferrer"
          >
            <div className="social-icons">
              <MarkEmailReadIcon className="to-color" />{" "}
              <span className="to-hide social-links">Discord</span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://github.com"
            rel="noopener noreferrer"
          >
            <div className="social-icons">
              <GitHubIcon className="to-color" />{" "}
              <span className="to-hide  social-links">Github</span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://linkedin.com"
            rel="noopener noreferrer"
          >
            <div className="social-icons">
              <LinkedInIcon className="to-color" />{" "}
              <span className="to-hide social-links">Linkedin</span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="https://indeed.com"
            rel="noopener noreferrer"
          >
            <div className="social-icons">
              <DeviceHubIcon className="to-color" />{" "}
              <span className="to-hide social-links">Indeed</span>
            </div>
          </Link>
          <Link
            target="_blank"
            href="mailto:email@example.com"
            rel="noopener noreferrer"
          >
            <div className="social-icons">
              <AlternateEmailIcon className="to-color" />{" "}
              <span className="to-hide  social-links">Email</span>
            </div>
          </Link>
        </div>
      </>
    );
  }
}
