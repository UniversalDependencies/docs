---
layout: base
title:  'Features'
generated: 'true'
permalink: pt/feat/index.html
---

# Features

{% include pt-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pt-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
