'use client';
import React from "react";
import "./profile-card.css";
import { cn } from "@/lib/utils";

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
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard;
