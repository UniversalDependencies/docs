---
layout: base
title:  'Features'
generated: 'true'
permalink: en/feat/index.html
---

# Features

{% include en-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.en-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
