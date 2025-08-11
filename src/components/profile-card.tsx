'use client';
import React from "react";
import "./profile-card.css";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import { socialLinks } from "@/lib/data";

const ProfileCardComponent = ({
  avatarUrl = "/utkarshjha.jpg",
  className = "",
  name = "Utkarsh Jha",
}: {
  avatarUrl?: string;
  className?: string;
  name?: string;
}) => {
  return (
    <div className={cn('pc-card-wrapper', className)}>
      <section className="pc-card">
        <div className="pc-image-container">
          <img
            className="pc-avatar"
            src={avatarUrl}
            alt={`${name || "User"} avatar`}
            loading="lazy"
            data-ai-hint="person photo"
          />
        </div>
        <div className="pc-details">
          <h3>{name}</h3>
          <div className="pc-social-links">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
