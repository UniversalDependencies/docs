---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: hu/dep/index.html
---

# Dependencies

{% include hu-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hu-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
