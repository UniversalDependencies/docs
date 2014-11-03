---
layout: base
title:  'Features'
generated: 'true'
permalink: ga/feat/index.html
---

# Features

{% include ga-feat-table.html %}

----------

Alphabetical listing

{% for p in site.ga-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
