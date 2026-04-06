package com.palak.portfolio.model;

import java.util.List;

public class Experience {

    private String company;
    private String role;
    private String location;
    private String duration;
    private List<ExperienceSection> sections;

    public Experience() {}

    public Experience(String company, String role, String location, String duration, List<ExperienceSection> sections) {
        this.company = company;
        this.role = role;
        this.location = location;
        this.duration = duration;
        this.sections = sections;
    }

    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }
    public List<ExperienceSection> getSections() { return sections; }
    public void setSections(List<ExperienceSection> sections) { this.sections = sections; }

    public static class ExperienceSection {
        private String title;
        private List<String> points;

        public ExperienceSection() {}

        public ExperienceSection(String title, List<String> points) {
            this.title = title;
            this.points = points;
        }

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }
        public List<String> getPoints() { return points; }
        public void setPoints(List<String> points) { this.points = points; }
    }
}
