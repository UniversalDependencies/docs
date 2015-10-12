---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: pl/dep/index.html
---

# Dependencies

{% include pl-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pl-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
