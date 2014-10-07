---
layout: base
title:  'Features'
generated: 'true'
permalink: eu/feat/index.html
---

# Features

{% include eu-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.eu-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
