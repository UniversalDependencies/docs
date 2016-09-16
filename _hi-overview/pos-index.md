---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hi/pos/index.html
---

# POS tags

{% include hi-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hi-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
