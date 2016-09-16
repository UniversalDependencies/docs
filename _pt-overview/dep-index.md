---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: pt/dep/index.html
---

# Dependencies

{% include pt-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pt-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
