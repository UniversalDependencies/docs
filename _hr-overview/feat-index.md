---
layout: base
title:  'Features'
generated: 'true'
permalink: hr/feat/index.html
---

# Features

{% include hr-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.hr-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
