---
layout: base
title:  'POS tags'
generated: 'true'
permalink: lv/pos/index.html
---

# POS tags

{% include lv-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.lv-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
