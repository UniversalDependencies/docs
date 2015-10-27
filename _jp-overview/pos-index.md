---
layout: base
title:  'POS tags'
generated: 'true'
permalink: jp/pos/index.html
---

# POS tags

{% include jp-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.jp-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
