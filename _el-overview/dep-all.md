---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: el/dep/all.html
---

# Dependencies

{% include el-dep-table.html %}

----------

{% for p in site.el-dep %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_el-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
