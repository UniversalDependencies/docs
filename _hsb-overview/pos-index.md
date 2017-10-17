---
layout: base
title:  'POS tags'
generated: 'true'
permalink: hsb/pos/index.html
---

# POS tags

{% include hsb-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hsb-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
