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

{% for p in site.de-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
