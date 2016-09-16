---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fa/pos/index.html
---

# POS tags

{% include fa-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fa-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
