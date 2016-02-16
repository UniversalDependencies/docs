---
layout: base
title:  'Features'
generated: 'true'
permalink: no/feat/index.html
---

# Features

{% include no-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.no-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
