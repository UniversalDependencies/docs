---
layout: base
title:  'Features'
generated: 'true'
permalink: dar/feat/index.html
---

# Features

{% include dar-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.dar-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
