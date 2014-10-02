---
layout: base
title:  'POS tags'
generated: 'true'
permalink: en/pos/index.html
---

# POS tags

{% include en-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.en-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
