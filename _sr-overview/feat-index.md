---
layout: base
title:  'Features'
generated: 'true'
permalink: sr/feat/index.html
---

# Features

{% include sr-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.sr-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
