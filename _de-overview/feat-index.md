---
layout: base
title:  'Features'
generated: 'true'
permalink: de/feat/index.html
---

# Features

{% include de-feat-table.html %}

----------

Alphabetical listing

<ul>
{% for p in site.de-feat %}
  <li><a href="{{ p.title }}.html" class="doclabel">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
