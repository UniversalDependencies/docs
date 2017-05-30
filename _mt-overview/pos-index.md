---
layout: base
title:  'POS tags'
generated: 'true'
permalink: mt/pos/index.html
---

# POS tags

{% include mt-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.mt-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
