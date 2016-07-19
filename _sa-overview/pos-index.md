---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sa/pos/index.html
---

# POS tags

{% include sa-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sa-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
