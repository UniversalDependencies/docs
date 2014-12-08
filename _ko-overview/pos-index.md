---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ko/pos/index.html
---

# POS tags

{% include ko-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ko-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
