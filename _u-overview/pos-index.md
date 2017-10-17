---
layout: base
title:  'Universal POS tags'
generated: 'true'
permalink: u/pos/index.html
udver: '2'
---

# Universal POS tags

{% include u-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.u-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
