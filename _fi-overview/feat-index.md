---
layout: base
title:  'Features'
generated: 'true'
permalink: fi/feat/index.html
---

# Features

{% include fi-feat-table.html %}

----------

Alphabetical listing

{% for p in site.fi-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
