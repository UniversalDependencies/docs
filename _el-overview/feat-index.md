---
layout: base
title:  'Features'
generated: 'true'
permalink: el/feat/index.html
---

# Features

{% include el-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.el-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
