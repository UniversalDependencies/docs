---
layout: base
title:  'Universal features'
generated: 'true'
permalink: u/feat/index.html
---

# Universal features

{% include u-feat-table.html %}

----------

Alphabetical listing

{% for p in site.u-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
