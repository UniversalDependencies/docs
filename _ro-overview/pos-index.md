---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ro/pos/index.html
---

# POS tags

{% include ro-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ro-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
