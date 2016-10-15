---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ckb/pos/index.html
---

# POS tags

{% include ckb-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ckb-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
