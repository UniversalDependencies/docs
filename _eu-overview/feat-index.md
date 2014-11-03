---
layout: base
title:  'Features'
generated: 'true'
permalink: eu/feat/index.html
---

# Features

{% include eu-feat-table.html %}

----------

Alphabetical listing

{% for p in site.eu-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
