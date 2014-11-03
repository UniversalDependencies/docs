---
layout: base
title:  'Features'
generated: 'true'
permalink: cs/feat/index.html
---

# Features

{% include cs-feat-table.html %}

----------

Alphabetical listing

{% for p in site.cs-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
