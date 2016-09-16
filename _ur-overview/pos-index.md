---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ur/pos/index.html
---

# POS tags

{% include ur-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ur-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
