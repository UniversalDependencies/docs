---
layout: base
title:  'POS tags'
generated: 'true'
permalink: template/pos/index.html
---

# POS tags

{% include template-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.template-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
