---
layout: base
title:  'Features'
generated: 'true'
permalink: fr/feat/index.html
---

# Features

{% include fr-feat-table.html %}

----------

Alphabetical listing

{% for p in site.fr-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
