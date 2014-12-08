---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sv/pos/index.html
---

# POS tags

{% include sv-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sv-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
