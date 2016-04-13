---
layout: base
title:  'UD Contributors'
---

# Contributors

## Universal Guidelines

## Language-Specific Guidelines and Treebanks 

This is the list of UD contributors gathered from the repository README files. See [here](language_metadata.html) for instructions on how to list contributors for your language.

{% for l in site.data.ldata %}

* **{{l.lang_name}}**: {{ l.contributors | map: 'full' | join:', ' }}

{% endfor %}
