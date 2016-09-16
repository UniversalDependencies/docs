---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: da/dep/index.html
---

# Dependencies

{% include da-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.da-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
