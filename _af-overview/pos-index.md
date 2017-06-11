---
layout: base
title:  'POS tags'
generated: 'true'
permalink: af/pos/index.html
---

# POS tags

{% include af-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.af-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
