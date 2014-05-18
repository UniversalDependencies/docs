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
{% endfor %}
