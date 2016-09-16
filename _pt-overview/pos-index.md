---
layout: base
title:  'POS tags'
generated: 'true'
permalink: pt/pos/index.html
---

# POS tags

{% include pt-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pt-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
