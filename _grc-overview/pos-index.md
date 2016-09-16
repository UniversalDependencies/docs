---
layout: base
title:  'POS tags'
generated: 'true'
permalink: grc/pos/index.html
---

# POS tags

{% include grc-pos-table.html %}

----------

Alphabetical listing

{% assign sorted = site.grc-pos | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
