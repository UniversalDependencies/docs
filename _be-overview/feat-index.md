---
layout: base
title:  'Features'
generated: 'true'
permalink: be/feat/index.html
---

# Features

{% include be-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.be-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
