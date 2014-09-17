---
layout: base
title:  'Universal features'
generated: 'true'
---

# Universal features

{% include feat-table.html %}

----------

{% for p in site.ud-feat %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_ud-feat/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
