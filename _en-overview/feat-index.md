---
layout: base
title:  'Features'
generated: 'true'
permalink: en/feat/index.html
---

# Features

{% include en-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.en-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
