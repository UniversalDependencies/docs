---
layout: base
title:  'Features'
generated: 'true'
permalink: de/feat/index.html
---

# Features

{% include de-feat-table.html %}

----------

Alphabetical listing

{% assign sorted = site.de-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
