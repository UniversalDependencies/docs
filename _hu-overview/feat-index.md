---
layout: base
title:  'Features'
generated: 'true'
permalink: hu/feat/index.html
---

# Features

{% include hu-feat-table.html %}

----------

Alphabetical listing

{% for p in site.hu-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
