---
layout: base
title:  'Features'
generated: 'true'
permalink: he/feat/index.html
---

# Features

{% include he-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.he-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
