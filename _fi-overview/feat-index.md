---
layout: base
title:  'Features'
generated: 'true'
permalink: fi/feat/index.html
---

# Features

{% include fi-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.fi-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
