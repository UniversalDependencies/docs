---
layout: base
title:  'POS tags'
generated: 'true'
permalink: es/pos/index.html
---

# POS tags

{% include es-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.es-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
