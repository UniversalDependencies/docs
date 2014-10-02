---
layout: base
title:  'Universal Dependencies'
generated: 'true'
permalink: u/dep/index.html
---

# Universal Dependencies

The following table is adapted from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014). There have been modifications in the relations: we now have 40 universal relations (instead of the 42 ones proposed in the paper).

{% include u-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.u-dep %}
  <li><a>{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
