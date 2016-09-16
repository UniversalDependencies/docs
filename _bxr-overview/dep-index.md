---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: bxr/dep/index.html
---

# Dependencies

{% include bxr-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bxr-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
