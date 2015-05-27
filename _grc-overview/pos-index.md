---
layout: base
title:  'POS tags'
generated: 'true'
permalink: template/pos/index.html
---

# POS tags

{% include template-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.template-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
