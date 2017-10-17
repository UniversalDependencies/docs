---
layout: base
title:  'POS tags'
generated: 'true'
permalink: be/pos/index.html
---

# POS tags

{% include be-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.be-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
