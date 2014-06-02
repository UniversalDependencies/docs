---
layout: base
title:  'Universal Stanford Dependencies'
generated: 'true'
---

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014).

{% include usd-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.usd %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
