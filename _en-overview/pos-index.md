---
layout: base
title:  'POS tags'
generated: 'true'
permalink: en/pos/index.html
---

# POS tags

{% include en-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.en-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
