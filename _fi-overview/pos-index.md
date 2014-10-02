---
layout: base
title:  'POS tags'
generated: 'true'
permalink: fi/pos/index.html
---

# POS tags

{% include fi-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.fi-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
