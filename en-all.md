---
layout: base
title:  'English grammatical relations'
generated: 'true'
---

This page is an automatic merge of the pages with documentation and
examples from Section 2 of *[Stanford typed dependencies
manual](http://nlp.stanford.edu/software/dependencies_manual.pdf)* (de
Marneffe and Manning 2008).

{% for p in site.en-dep %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_en-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
