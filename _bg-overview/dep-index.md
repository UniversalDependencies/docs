---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: bg/dep/index.html
---

# Dependencies

{% include bg-dep-table.html %}

----------

Alphabetical listing

{% for p in site.bg-dep %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
