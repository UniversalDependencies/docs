---
layout: base
title:  'POS tags'
generated: 'true'
permalink: la_itt/pos/index.html
---

# POS tags

{% include la_itt-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.la_itt-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
