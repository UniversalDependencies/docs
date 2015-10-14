---
layout: base
title:  'POS tags'
generated: 'true'
permalink: no/pos/index.html
---

# POS tags

{% include no-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.no-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
