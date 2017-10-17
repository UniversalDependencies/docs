---
layout: base
title:  'POS tags'
generated: 'true'
permalink: mr/pos/index.html
---

# POS tags

{% include mr-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.mr-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
