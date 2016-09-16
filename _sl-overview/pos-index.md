---
layout: base
title:  'POS tags'
generated: 'true'
permalink: sl/pos/index.html
---

# POS tags

{% include sl-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sl-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
