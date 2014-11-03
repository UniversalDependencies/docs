---
layout: base
title:  'Features'
generated: 'true'
permalink: en/feat/index.html
---

# Features

{% include en-feat-table.html %}

----------

Alphabetical listing

{% for p in site.en-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
