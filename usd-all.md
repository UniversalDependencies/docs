---
layout: base
title:  'Universal Stanford Dependencies'
generated: 'true'
---

{% for p in site.usd %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_usd/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
