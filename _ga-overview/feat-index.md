---
layout: base
title:  'Features'
generated: 'true'
permalink: ga/feat/index.html
---

# Features

{% include ga-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.ga-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
