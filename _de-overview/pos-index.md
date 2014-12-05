---
layout: base
title:  'POS tags'
generated: 'true'
permalink: de/pos/index.html
---

# POS tags

{% include de-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.de-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
