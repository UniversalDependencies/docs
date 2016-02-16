---
layout: base
title:  'POS tags'
generated: 'true'
permalink: nl/pos/index.html
---

# POS tags

{% include nl-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.nl-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
