import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 font-heading font-bold text-xl"
            >
              <div className="p-2 bg-gradient-primary rounded-lg text-primary-foreground">
                <GraduationCap size={20} />
              </div>
              <span className="text-gradient">ConnectGermany</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted partner for studying in Germany. We provide
              comprehensive guidance to Indian students for their German
              education journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/connectgermany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/connectgermany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/connect-germany-548992173/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/connectgermany"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/career"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground text-sm">
                  University Selection
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Visa Assistance
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Scholarship Guidance
                </span>
              </li>
              <li>
                <span className="text-muted-foreground text-sm">
                  Career Counseling
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-foreground">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  B52, Street Number 6, Dashrath Puri Dabri Palam Road, New
                  Delhi 110045
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  +91 9560123756, +91 9871318099, +91 9811523756
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  info@connectgermany.in
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 ConnectGermany. All rights reserved. | Privacy Policy | Terms
            of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
