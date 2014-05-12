---
layout: base
title:  'Universal Stanford Dependencies'
generated: 'true'
---

This is a placeholder for the entry page for the documentation for
Universal Stanford Dependencies. Introductory content TODO.

<ul>
{% for p in site.usd %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
