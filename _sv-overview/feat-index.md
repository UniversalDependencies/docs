---
layout: base
title:  'Features'
generated: 'true'
permalink: sv/feat/index.html
---

# Features

{% include sv-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sv-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
