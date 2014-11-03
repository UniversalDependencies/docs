---
layout: base
title:  'English grammatical relations'
generated: 'true'
permalink: en/dep/index.html
---

{% include en-dep-table.html %}

----------

Alphabetical listing

{% for p in site.en-dep %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
