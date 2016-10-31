---
layout: base
title:  'POS tags'
generated: 'true'
permalink: yue/pos/index.html
---

# POS tags

{% include yue-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.yue-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
