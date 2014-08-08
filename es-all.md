---
layout: base
title:  'Spanish grammatical relations'
generated: 'true'
---

Note: This document is a draft. Not all relations have been converted to USD-compatible description yet.

{% include es-table.html %}

----------

{% for p in site.es %}
{% if p.content contains "<!--details-->" %}
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_usd/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
