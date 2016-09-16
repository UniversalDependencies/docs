---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ca/dep/index.html
---

# Dependencies

{% include ca-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ca-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
