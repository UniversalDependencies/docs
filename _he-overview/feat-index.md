---
layout: base
title:  'Features'
generated: 'true'
permalink: he/feat/index.html
---

# Features

{% include he-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.he-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
