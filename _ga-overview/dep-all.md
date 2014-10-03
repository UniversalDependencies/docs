---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: ga/dep/all.html
---

# Dependencies

{% include ga-dep-table.html %}

----------

{% for p in site.ga-dep %}
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/_ga-dep/{{ p.title }}.md" target="#">edit {{ p.title }}</a>
{% endfor %}
