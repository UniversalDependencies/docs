---
layout: base
title:  'Dependencies'
generated: 'true'
permalink: fr/dep/all.html
udver: '2'
---

# Dependencies for French corpora

One of the French corpora (French-Spoken) uses a large number of new relations which are not present in other corpora.

We present first the [common list](#common-list) of relations used in most Treebanks and at the end of the page, the [full list](#full-list) (including French-Spoken specific Dependencies)

## Common list

{% include fr-dep-table-common.html %}


## Full list
{% include fr-dep-table.html %}

----------

{% assign sorted = site.fr-dep | sort: 'title' %}{% for p in sorted %}
<a id="al-fr-dep/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
