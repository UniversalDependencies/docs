---
layout: base
title:  'POS tags'
generated: 'true'
permalink: uk/pos/index.html
---

# POS tags

{% include uk-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.uk-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
