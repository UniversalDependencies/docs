---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fr/pos/index.html
---

# POS tags

{% include fr-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fr-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
