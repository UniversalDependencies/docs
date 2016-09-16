---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ar/pos/index.html
---

# POS tags

{% include ar-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ar-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
