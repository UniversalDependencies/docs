---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sr/pos/index.html
---

# POS tags

{% include sr-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sr-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
