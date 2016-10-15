---
layout: base
title:  'POS tags'
generated: 'true'
permalink: kmr/pos/index.html
---

# POS tags

{% include kmr-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.kmr-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
