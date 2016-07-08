---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ug/pos/index.html
---

# POS tags

{% include ug-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ug-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
