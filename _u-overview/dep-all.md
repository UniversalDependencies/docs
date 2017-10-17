---
layout: base
title:  'Universal Dependencies'
generated: 'true'
permalink: u/dep/all.html
udver: '2'
---

# Universal Dependencies

The following table lists the 37 universal syntactic relations used in UD v2. It is a revised version of the relations 
originally described in [*Universal Stanford Dependencies: A cross-linguistic typology*](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf) (de Marneffe *et al.* 2014). 

The upper part of the table follows the main organizing principles of the UD taxonomy:

* Rows correspond to functional categories in relation to the head:
    * Core arguments of clausal predicates
    * Non-core dependents of clausal predicates
    * Dependents of nominals
* Columns correspond to structural categories of the dependent:
    * Nominals
    * Clauses
    * Modifier words
    * Function words

The lower part of the table lists relations that are not dependency relations in the narrow sense:

* Relations used to analyze coordination
* Relations used to analyze multiword expressions (MWE)
* Loose joining relations
* Special relations for ellipsis, disfluencies, and orthographic errors
* Special relations for clausal heads, punctuation and other relations

{% include u-dep-table.html %}

----------

{% assign sorted = site.u-dep | sort: 'title' %}{% for p in sorted %}
<a id="al-u-dep/{{ p.title }}" class="al-dest"/>
<h2><code>{{ p.title }}</code>: {{ p.shortdef }}</h2>
{% if p.content contains "<!--details-->" %}    
{{ p.content | split:"<!--details-->" | first }}
<a href="{{ p.title }}" class="al-doc">See details</a>
{% else %}
{{ p.content }}
{% endif %}
<a href="{{ site.git_edit }}/{% if p.collection %}{{ p.relative_path }}{% else %}{{ p.path }}{% endif %}" target="#">edit {{ p.title }}</a>
{% endfor %}
