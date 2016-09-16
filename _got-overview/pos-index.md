---
layout: base
title:  'POS tags'
generated: 'true'
permalink: got/pos/index.html
---

# POS tags

{% include got-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.got-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
