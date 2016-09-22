---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: swl/dep/index.html
---

# Dependencies

{% include swl-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.swl-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
