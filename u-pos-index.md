---
layout: base
title:  'Universal POS tags'
generated: 'true'
permalink: u/pos/index.html
---

# Universal POS tags

{% include u-pos-table.html %}

Alphabetical listing

<ul>
{% for p in site.u-pos %}
  <li><a>{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
