---
layout: base
title:  'Features'
generated: 'true'
permalink: he/feat/index.html
---

# Features

{% include he-feat-table.html %}

----------

Alphabetical listing

{% for p in site.he-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
