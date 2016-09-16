---
layout: base
title:  'POS tags'
generated: 'true'
permalink: urj/pos/index.html
---

# POS tags

{% include urj-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.urj-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
