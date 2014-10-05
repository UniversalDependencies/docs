---
layout: base
title:  'POS tags'
generated: 'true'
permalink: cs/pos/index.html
---

# POS tags

{% include cs-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.cs-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
