---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ur/dep/index.html
---

# Dependencies

{% include ur-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ur-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
