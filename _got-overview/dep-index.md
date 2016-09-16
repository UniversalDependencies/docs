---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: got/dep/index.html
---

# Dependencies

{% include got-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.got-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
