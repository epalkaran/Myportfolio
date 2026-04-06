package com.palak.portfolio.controller;

import com.palak.portfolio.model.Experience;
import com.palak.portfolio.model.Experience.ExperienceSection;
import com.palak.portfolio.model.Skill;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ResumeController {

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return List.of(
            new Experience(
                "JP Morgan Chase & Co.",
                "Software Engineer (SDE-II)",
                "Bangalore, India",
                "July 2023 – Present",
                List.of(
                    new ExperienceSection("API Management Plane – Platform Ownership", List.of(
                        "Tech lead for API Management Plane, architecting single entry point for 5000+ developers across JPMC's API ecosystem.",
                        "Authored RFCs defining platform architecture and entitlement model; drove alignment across 3 teams and 6+ services.",
                        "Drove migration from Apigee (multi-server Cassandra) to Kong on Kubernetes — consolidated to single-server architecture, reducing infrastructure costs by 50% and codebase complexity."
                    )),
                    new ExperienceSection("Cross-Team Entitlements & Access Control", List.of(
                        "Led cross-team delivery of a unified Entitlement Service defining roles and permissions across API Platform.",
                        "Created reusable Auth Manager, adopted by 6+ services, eliminated redundancy, accelerated secure feature delivery by 40%."
                    )),
                    new ExperienceSection("API Quality & API Designer", List.of(
                        "Built OpenAPI validation platform (Node.js, Spectral) processing 4,000+ API specs; deployed as firm-wide compliance gate.",
                        "Developed API Spec Designer, linting and LLM-powered auto-fix; 3x faster spec editing, 70% faster violation resolution.",
                        "Owned end-to-end rollout from UAT to production; drove adoption across 300+ API teams as mandatory quality checkpoint."
                    )),
                    new ExperienceSection("API Agent", List.of(
                        "Engineered AI agent (LangChain, LangGraph) for automated OpenAPI spec generation and correction — 3x faster API delivery, achieved firm-wide OpenAPI compliance."
                    )),
                    new ExperienceSection("Observability Pipeline with Vector & Splunk", List.of(
                        "Architected K8s-native log pipeline (Vector sidecars → Kafka → Splunk), bypassing legacy FluentD. Reduced latency 40%, resource usage 40%.",
                        "Handles 60 GB/day of logs with schema normalization, enrichment, and built-in failover for resiliency."
                    ))
                )
            ),
            new Experience(
                "JP Morgan Chase & Co.",
                "Software Intern (SEP Intern)",
                "Bangalore, India",
                "Jan 2023 – June 2023",
                List.of(
                    new ExperienceSection("API Store - Subscription & Consumer Platform", List.of(
                        "Designed API Subscription workflow (Spring Boot, Kafka, Cassandra) → 40% faster consumer onboarding, 90% reduction in manual processing."
                    ))
                )
            )
        );
    }

    @GetMapping("/skills")
    public List<Skill> getSkills() {
        return List.of(
            new Skill("Programming Languages", List.of("Java", "JavaScript", "Python", "TypeScript", "SQL")),
            new Skill("Systems", List.of("Kubernetes", "Kafka", "Cassandra", "Elasticsearch", "Redis", "PostgreSQL")),
            new Skill("Full Stack", List.of("React.js", "Next.js", "Spring Boot", "Node.js", "Flask", "REST APIs", "Microservices")),
            new Skill("Cloud & DevOps", List.of("AWS", "Docker", "Terraform", "CI/CD", "GitHub Actions"))
        );
    }

    @GetMapping("/certifications")
    public List<Map<String, String>> getCertifications() {
        return List.of(
            Map.of("title", "CKAD – Certified Kubernetes Application Developer", "type", "certification"),
            Map.of("title", "Amazon Web Services Cloud Practitioner", "type", "certification"),
            Map.of("title", "Rising Star Award – JPMorgan Chase (H2 2024)", "type", "award"),
            Map.of("title", "SEP Recognition Scroll – Leadership Award, JPMorgan Chase (Q2 2024)", "type", "award")
        );
    }
}
