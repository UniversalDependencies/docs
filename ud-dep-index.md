---
layout: base
title:  'Universal Dependencies'
generated: 'true'
---

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014).

{% include ud-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.ud-dep %}
  <li><a>{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
