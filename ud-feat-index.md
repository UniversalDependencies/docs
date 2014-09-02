---
layout: base
title:  'Universal features'
generated: 'true'
---

# Universal features

Alphabetical listing

<ul>
{% for p in site.ud-feat %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
