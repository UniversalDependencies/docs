---
layout: base
title:  'Features'
generated: 'true'
permalink: kmr/feat/index.html
---

# Features

{% include kmr-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.kmr-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
