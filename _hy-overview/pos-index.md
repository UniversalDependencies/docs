---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hy/pos/index.html
---

# POS tags

{% include hy-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hy-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
