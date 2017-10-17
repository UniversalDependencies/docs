---
layout: base
title:  'POS tags'
generated: 'true'
permalink: te/pos/index.html
udver: '2'
---

# POS tags

{% include te-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.te-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
