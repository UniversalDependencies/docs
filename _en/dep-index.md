---
layout: base
title:  'English Dependency Relations'
generated: 'true'
permalink: en/dep/index.html
udver: '2'
---

# English Dependency Relations

The following table lists the 37 universal syntactic relations used in UD v2, but links to English-specific documentation
(if available).

{% include en-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.en-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
