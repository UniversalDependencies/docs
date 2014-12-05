---
layout: base
title:  'POS tags'
generated: 'true'
permalink: eu/pos/index.html
---

# POS tags

{% include eu-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.eu-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
