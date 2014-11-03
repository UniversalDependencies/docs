---
layout: base
title:  'Features'
generated: 'true'
permalink: template/feat/index.html
---

# Features

{% include template-feat-table.html %}

----------

Alphabetical listing

{% for p in site.template-feat %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
