---
layout: base
title:  'POS tags'
generated: 'true'
permalink: dar/pos/index.html
---

# POS tags

{% include dar-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.dar-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
