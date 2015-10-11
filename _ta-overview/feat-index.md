---
layout: base
title:  'Features'
generated: 'true'
permalink: ta/feat/index.html
---

# Features

{% include ta-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ta-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
