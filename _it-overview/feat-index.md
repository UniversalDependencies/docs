---
layout: base
title:  'Features'
generated: 'true'
permalink: it/feat/index.html
---

# Features

{% include it-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.it-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
