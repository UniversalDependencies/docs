---
layout: base
title:  'POS tags'
generated: 'true'
permalink: swl/pos/index.html
---

# POS tags

{% include swl-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.swl-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
