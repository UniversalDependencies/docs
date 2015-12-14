---
layout: base
title:  'POS tags'
generated: 'true'
permalink: kk/pos/index.html
---

# POS tags

{% include kk-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.kk-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
