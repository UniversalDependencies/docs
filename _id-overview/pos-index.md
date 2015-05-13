---
layout: base
title:  'POS tags'
generated: 'true'
permalink: id/pos/index.html
---

# POS tags

{% include id-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.id-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
