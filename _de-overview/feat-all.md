---
layout: base
title:  'Features'
generated: 'true'
permalink: de/feat/all.html
---

# Features

{% include de-feat-table.html %}

----------

{% for p in site.de-feat %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_de-feat/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
