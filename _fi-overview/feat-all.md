---
layout: base
title:  'Features'
generated: 'true'
permalink: fi/feat/all.html
---

# Features

{% include fi-feat-table.html %}

----------

{% for p in site.fi-feat %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_fi-feat/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
