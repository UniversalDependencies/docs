---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: sv/dep/index.html
---

# Dependencies

{% include sv-dep-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.sv-dep %}
  <li><a>{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
