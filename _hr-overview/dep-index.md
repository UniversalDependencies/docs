---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: hr/dep/index.html
---

# Dependencies

{% include hr-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hr-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
