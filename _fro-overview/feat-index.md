---
layout: base
title:  'Features'
generated: 'true'
permalink: fro/feat/index.html
---

# Features

{% include fro-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.fro-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
