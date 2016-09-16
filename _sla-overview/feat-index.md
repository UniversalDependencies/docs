---
layout: base
title:  'Features'
generated: 'true'
permalink: sla/feat/index.html
---

# Features

{% include sla-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sla-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
