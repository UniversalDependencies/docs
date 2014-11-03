---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: it/dep/index.html
---

# Dependencies

{% include it-dep-table.html %}

----------

Alphabetical listing

{% for p in site.it-dep %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
