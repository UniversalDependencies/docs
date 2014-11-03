---
layout: base
title:  'Features'
generated: 'true'
permalink: fa/feat/index.html
---

# Features

{% include fa-feat-table.html %}

----------

Alphabetical listing

{% for p in site.fa-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
