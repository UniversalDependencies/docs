---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hu/pos/index.html
---

# POS tags

{% include hu-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hu-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
