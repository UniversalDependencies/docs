---
layout: base
title:  'POS tags'
generated: 'true'
permalink: cop/pos/index.html
---

# POS tags

{% include cop-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.cop-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
