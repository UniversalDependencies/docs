---
layout: base
title:  'POS tags'
generated: 'true'
permalink: tr/pos/index.html
---

# POS tags

{% include tr-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.tr-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
