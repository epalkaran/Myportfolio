package com.palak.portfolio.model;

import java.util.List;

public class Skill {

    private String category;
    private List<String> items;

    public Skill() {}

    public Skill(String category, List<String> items) {
        this.category = category;
        this.items = items;
    }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    public List<String> getItems() { return items; }
    public void setItems(List<String> items) { this.items = items; }
}
