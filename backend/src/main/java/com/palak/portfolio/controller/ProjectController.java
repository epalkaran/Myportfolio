package com.palak.portfolio.controller;

import com.palak.portfolio.model.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @GetMapping
    public List<Project> getProjects() {
        return List.of(
            new Project(1L,
                "API Management Plane",
                "Tech lead for API Management Plane, architecting single entry point for 5000+ developers across JPMC's API ecosystem. Drove migration from Apigee to Kong on Kubernetes, reducing infrastructure costs by 50%.",
                "Java, Spring Boot, Kubernetes, Kong, Cassandra",
                null),
            new Project(2L,
                "API Spec Designer & Quality Platform",
                "Built OpenAPI validation platform processing 4,000+ API specs as firm-wide compliance gate. Developed LLM-powered auto-fix achieving 70% faster violation resolution.",
                "Node.js, Spectral, React, LLM, OpenAPI",
                null),
            new Project(3L,
                "API Agent",
                "Engineered AI agent for automated OpenAPI spec generation and correction, achieving 3x faster API delivery and firm-wide OpenAPI compliance.",
                "Python, LangChain, LangGraph, OpenAPI",
                null),
            new Project(4L,
                "LogLens - AI Log Analyzer",
                "Universal log analysis tool supporting K8s, application, cloud, and database logs. Cross-service correlation engine with AI reasoning agent achieving 85% accuracy on root cause identification.",
                "Python, LangGraph, ChromaDB, FastAPI",
                "https://github.com/palak/loglens"),
            new Project(5L,
                "Observability Pipeline",
                "K8s-native log pipeline (Vector sidecars to Kafka to Splunk) handling 60 GB/day. Reduced latency 40% and resource usage 40% compared to legacy FluentD.",
                "Kubernetes, Vector, Kafka, Splunk",
                null),
            new Project(6L,
                "Unified Entitlement Service",
                "Led cross-team delivery of unified entitlement service with reusable Auth Manager adopted by 6+ services, accelerating secure feature delivery by 40%.",
                "Java, Spring Boot, REST APIs, Microservices",
                null)
        );
    }
}
