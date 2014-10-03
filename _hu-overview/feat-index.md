---
layout: base
title:  'Features'
generated: 'true'
permalink: hu/feat/index.html
---

# Features

{% include hu-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.hu-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
