---
layout: base
title:  'Features'
generated: 'true'
permalink: fr/feat/index.html
---

# Features

{% include fr-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.fr-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
