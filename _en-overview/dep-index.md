---
layout: base
title:  'English grammatical relations'
generated: 'true'
permalink: en/dep/index.html
---

{% include en-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.en-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
