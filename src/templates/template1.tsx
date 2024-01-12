
import React from 'react';

const Resume = ({ data }) => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      background: '#f9f9f9',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
    },
    section: {
      marginBottom: '30px',
      padding: '20px',
      background: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
    },
    heading: {
      color: '#333',
      fontSize: '24px',
      marginBottom: '15px',
    },
    subheading: {
      color: '#555',
      fontSize: '18px',
      marginBottom: '10px',
    },
    list: {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
    },
    listItem: {
      marginBottom: '10px',
      color: '#777',
    },
    link: {
      color: '#3498db',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  const renderProfile = (basics) => {
    if (!basics) {
      return null;
    }

    const { name, email, phone, location = {}, website } = basics;

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{name}</h2>
        {email && <p style={styles.listItem}>Email: {email}</p>}
        {phone && <p style={styles.listItem}>Phone: {phone}</p>}
        {location.address && <p style={styles.listItem}>Location: {location.address}</p>}
        {website && <p style={styles.listItem}>Website: <a href={website} style={styles.link}>{website}</a></p>}
      </div>
    );
  };

  const renderEducation = (education, heading) => {
    if (!education) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || 'Education'}</h2>
        <ul style={styles.list}>
          {education.map((school) => (
            <li key={school.institution} style={styles.listItem}>
              <p style={styles.subheading}>{`${school.studyType || ''} in ${school.area || ''}`}</p>
              <p>{`${school.institution || ''}, ${school.location || ''}`}</p>
              <p>{`${school.startDate || ''} – ${school.endDate || 'Present'}`}</p>
              {school.score && <p style={styles.listItem}>{`GPA: ${school.score}`}</p>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderWork = (work, heading) => {
    if (!work) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || 'Experience'}</h2>
        <ul style={styles.list}>
          {work.map((job) => (
            <li key={job.name} style={styles.listItem}>
              <p style={styles.subheading}>{job.position}</p>
              <p>{`${job.name || ''}, ${job.location || ''}`}</p>
              <p>{`${job.startDate || ''} – ${job.endDate || 'Present'}`}</p>
              {job.highlights && (
                <ul style={styles.list}>
                  {job.highlights.map((duty, index) => (
                    <li key={index} style={styles.listItem}>{duty}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderSkills = (skills, heading) => {
    if (!skills) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || 'Skills'}</h2>
        <ul style={styles.list}>
          {skills.map((skill) => (
            <li key={skill.name} style={styles.listItem}>
              <p>{`${skill.name}: ${skill.keywords.join(', ') || ''}`}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderProjects = (projects, heading) => {
    if (!projects) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || 'Projects'}</h2>
        <ul style={styles.list}>
          {projects.map((project) => (
            <li key={project.name} style={styles.listItem}>
              <p>{project.description || ''}</p>
              <p>{`${project.name || ''}, ${project.keywords.join(', ') || ''}`}</p>
              {project.url && <p style={styles.listItem}><a href={project.url} style={styles.link}>{project.url}</a></p>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const renderAwards = (awards, heading) => {
    if (!awards) {
      return null;
    }

    return (
      <div style={styles.section}>
        <h2 style={styles.heading}>{heading || 'Awards'}</h2>
        <ul style={styles.list}>
          {awards.map((award) => (
            <li key={award.title} style={styles.listItem}>
              <p>{award.title || ''}</p>
              <p>{award.summary || ''}</p>
              <p>{award.awarder || ''}</p>
              <p>{award.date || ''}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {renderProfile(data.basics)}
      {renderEducation(data.education, data.headings.education)}
      {renderWork(data.work, data.headings.work)}
      {renderSkills(data.skills, data.headings.skills)}
      {renderProjects(data.projects, data.headings.projects)}
      {renderAwards(data.awards, data.headings.awards)}
    </div>
  );
};

export default Resume;
