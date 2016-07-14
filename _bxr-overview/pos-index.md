---
layout: base
title:  'POS tags'
generated: 'true'
permalink: bxr/pos/index.html
---

# POS tags

{% include bxr-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.bxr-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
