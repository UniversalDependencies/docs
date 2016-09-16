---
layout: base
title:  'POS tags'
generated: 'true'
permalink: pl/pos/index.html
---

# POS tags

{% include pl-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pl-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
