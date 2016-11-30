---
layout: base
title:  'Universal Dependency Relations'
generated: 'true'
permalink: u/dep/index.html
udver: '2'
---

# Universal Dependency Relations

The following table lists the 37 universal syntactic relations used in UD v2. It is a revised version of the relations 
originally described in [*Universal Stanford Dependencies: A cross-linguistic typology*](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf) (de Marneffe *et al.* 2014). 

The upper part of the table follows the main organizing principles of the UD taxonomy such that _rows_ correspond to functional categories in relation to the head (core arguments of clausal predicates, non-core dependents of clausal predicates, and dependents of nominals) while _columns_ correspond to structural categories of the dependent
(nominals, clauses, modifier words, function words).
The lower part of the table lists relations that are not dependency relations in the narrow sense.

<!-- 
* Relations used to analyze coordination
* Relations used to analyze multiword expressions (MWE)
* Loose joining relations
* Special relations for ellipsis, disfluencies, and orthographic errors
* Special relations for clausal heads, punctuation and other relations
-->

{% include u-dep-table.html %}

\* The `advmod` relation is used for modifiers not only of predicates but also of other modifier words.

----------

Alphabetical listing

{% assign sorted = site.u-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
