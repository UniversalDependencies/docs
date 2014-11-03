---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: fa/dep/index.html
---

# Dependencies

{% include fa-dep-table.html %}

----------

Alphabetical listing

{% for p in site.fa-dep %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
