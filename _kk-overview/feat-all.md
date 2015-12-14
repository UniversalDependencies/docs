---
layout: base
title:  'Features'
generated: 'true'
permalink: kk/feat/all.html
---

# Features

{% include kk-feat-table.html %}

----------

{% assign sorted = site.kk-feat | sort: 'title' %}{% for p in sorted %}
<a id="al-kk-feat/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
