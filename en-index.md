---
layout: base
title:  'English grammatical relations'
generated: 'true'
---

This is a placeholder for the entry page for the documentation for
English grammatical relations. Introductory content TODO.

The following pages contain documentation and examples converted from
Section 2 of *[Stanford typed dependencies
manual](http://nlp.stanford.edu/software/dependencies_manual.pdf)* (de
Marneffe and Manning 2008).

<ul>
{% for p in site.en %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
