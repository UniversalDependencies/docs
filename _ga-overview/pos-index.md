---
layout: base
title:  'POS tags'
generated: 'true'
permalink: ga/pos/index.html
---

# POS tags

{% include ga-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.ga-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
