---
layout: base
title:  'POS tags'
generated: 'true'
permalink: cu/pos/index.html
---

# POS tags

{% include cu-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.cu-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
