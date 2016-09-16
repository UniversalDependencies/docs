---
layout: base
title:  'Features'
generated: 'true'
permalink: ca/feat/index.html
---

# Features

{% include ca-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.ca-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
