---
layout: base
title:  'POS tags'
generated: 'true'
permalink: he/pos/index.html
---

# POS tags

{% include he-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.he-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
