---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ca/pos/index.html
---

# POS tags

{% include ca-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ca-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
