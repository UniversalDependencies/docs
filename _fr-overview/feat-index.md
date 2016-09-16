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

{% assign sorted = site.fr-feat | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
