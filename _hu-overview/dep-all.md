---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: hu/dep/all.html
---

# Dependencies

{% include hu-dep-table.html %}

----------

{% for p in site.hu-dep %}
<a id="al-hu-dep/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
