---
layout: base
title:  'Features'
generated: 'true'
permalink: es/feat/index.html
---

# Features

{% include es-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.es-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
