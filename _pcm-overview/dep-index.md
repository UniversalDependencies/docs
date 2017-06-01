---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: pcm/dep/index.html
udver: '2'
---

# Dependencies

The following table lists the syntactic relations used in UD v2 for Naija.

{% include pcm-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.pcm-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
