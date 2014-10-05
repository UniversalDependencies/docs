---
layout: base
title:  'POS tags'
generated: 'true'
permalink: el/pos/index.html
---

# POS tags

{% include el-pos-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.el-pos %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
