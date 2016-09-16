---
layout: base
title:  'Features'
generated: 'true'
permalink: nl/feat/index.html
---

# Features

{% include nl-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.nl-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
