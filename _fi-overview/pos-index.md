---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fi/pos/index.html
---

# POS tags

{% include fi-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fi-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
