---
layout: base
title:  'Universal POS tags'
generated: 'true'
---

# Universal POS tags

{% include pos-table.html %}

----------

{% for p in site.ud-pos %}
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.url | remove_first:'/' }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_ud-pos/{{ p.title }}.md" target="#">edit {{ p.title }}</a>

----------

{% endfor %}
