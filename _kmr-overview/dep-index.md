---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: kmr/dep/index.html
---

# Dependencies

{% include kmr-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.kmr-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
