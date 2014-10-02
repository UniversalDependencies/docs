---
layout: base
title:  'Universal features'
generated: 'true'
permalink: u/feat/index.html
---

# Universal features

{% include u-feat-table.html %}

Alphabetical listing

<ul>
{% for p in site.u-feat %}
  <li><a>{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
