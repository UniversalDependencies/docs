---
layout: base
title:  'Features'
generated: 'true'
permalink: am/feat/all.html
---

# Features

{% include am-feat-table.html %}

----------

{% assign sorted = site.am-feat | sort: 'title' %}{% for p in sorted %}
<a id="al-am-feat/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
