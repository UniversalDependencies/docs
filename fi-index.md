---
layout: base
title:  'Finnish grammatical relations'
generated: 'true'
---

This is a placeholder for the entry page for the documentation for
Finnish grammatical relations. Introductory content TODO.

<ul>
{% for p in site.fi %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
