---
layout: base
title:  'Features'
generated: 'true'
permalink: it/feat/index.html
---

# Features

{% include it-feat-table.html %}

----------

Alphabetical listing

{% for p in site.it-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
