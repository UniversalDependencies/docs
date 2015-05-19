---
layout: base
title:  'POS tags'
generated: 'true'
permalink: am/pos/index.html
---

# POS tags

{% include am-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.am-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
