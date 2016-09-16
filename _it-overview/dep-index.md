---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: it/dep/index.html
---

# Dependencies

{% include it-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.it-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
