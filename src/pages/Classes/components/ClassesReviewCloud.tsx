import React from 'react';
import './ClassesReviewCloud.scss';

export interface ClassesReviewCloudProps {
  /** Review title (e.g. name, age, role) */
  title: React.ReactNode;
  /** Subtitle (e.g. location, period) */
  subtitle: React.ReactNode;
  /** Review description / quote */
  description: React.ReactNode;
  /** Use full-width cloud variant */
  full?: boolean;
}

const ClassesReviewCloud: React.FC<ClassesReviewCloudProps> = ({
  title,
  subtitle,
  description,
  full = false,
}) => (
  <div
    className={
      full ? 'classes-revievs-cloud classes-revievs-cloud-full' : 'classes-revievs-cloud'
    }
  >
    <div className="classes-reviews-cloud-title">{title}</div>
    <div className="classes-reviews-cloud-subtitle">{subtitle}</div>
    <div className="classes-reivews-cloud-line" />
    <div className="classes-reviews-cloud-description">{description}</div>
  </div>
);

export default ClassesReviewCloud;
