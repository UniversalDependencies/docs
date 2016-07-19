---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ug/dep/index.html
---

# Dependencies

{% include ug-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ug-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
