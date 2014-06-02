---
layout: base
title:  'Finnish grammatical relations'
generated: 'true'
---

{% for p in site.fi %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_fi/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
