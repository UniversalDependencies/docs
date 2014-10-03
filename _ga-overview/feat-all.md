---
layout: base
title:  'Features'
generated: 'true'
permalink: ga/feat/all.html
---

# Features

{% include ga-feat-table.html %}

----------

{% for p in site.ga-feat %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_ga-feat/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
