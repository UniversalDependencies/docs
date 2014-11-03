---
layout: base
title:  'Features'
generated: 'true'
permalink: bg/feat/index.html
---

# Features

{% include bg-feat-table.html %}

----------

Alphabetical listing

{% for p in site.bg-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
