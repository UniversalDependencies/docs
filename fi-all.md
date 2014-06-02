---
layout: base
title:  'Finnish grammatical relations'
generated: 'true'
---

Note: This document is a draft. Not all relations have been converted to USD-compatible description yet.

{% include fi-table.html %}

----------

{% for p in site.fi %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_fi/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
