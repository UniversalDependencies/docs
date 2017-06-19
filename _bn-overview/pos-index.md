---
layout: base
title:  'POS tags'
generated: 'true'
permalink: bn/pos/index.html
---

# POS tags

{% include bn-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bn-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
