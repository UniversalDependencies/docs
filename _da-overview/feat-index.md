---
layout: base
title:  'Features'
generated: 'true'
permalink: da/feat/index.html
---

# Features

{% include da-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.da-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
