---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: la_itt/dep/all.html
---

# Dependencies

{% include la_itt-dep-table.html %}

----------

{% assign sorted = site.la_itt-dep | sort: 'title' %}{% for p in sorted %}
<a id="al-la_itt-dep/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
