---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fro/pos/index.html
---

# POS tags

{% include fro-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fro-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
