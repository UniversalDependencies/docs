---
layout: base
title:  'POS tags'
generated: 'true'
permalink: gl/pos/index.html
---

# POS tags

{% include gl-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.gl-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
