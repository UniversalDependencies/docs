---
layout: base
title:  'POS tags'
generated: 'true'
permalink: cs/pos/index.html
udver: '2'
---

# POS tags

{% include cs-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.cs-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
