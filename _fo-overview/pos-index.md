---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fo/pos/index.html
---

# POS tags

{% include fo-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fo-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
