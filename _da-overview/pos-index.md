---
layout: base
title:  'POS tags'
generated: 'true'
permalink: da/pos/index.html
---

# POS tags

{% include da-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.da-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
