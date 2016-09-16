---
layout: base
title:  'POS tags'
generated: 'true'
permalink: vi/pos/index.html
---

# POS tags

{% include vi-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.vi-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
