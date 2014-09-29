---
layout: base
title:  'Universal Dependencies'
generated: 'true'
permalink: u/dep/index.html
---

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014).

{% include u-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.u-dep %}
  <li><a>{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
