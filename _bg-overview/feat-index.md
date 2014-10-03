---
layout: base
title:  'Features'
generated: 'true'
permalink: bg/feat/index.html
---

# Features

{% include bg-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.bg-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
