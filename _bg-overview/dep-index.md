---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: bg/dep/index.html
---

# Dependencies

{% include bg-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bg-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
