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

Individual languages may define more specific relations as subtypes of the universal types defined here.
A subtyped relation always starts with the basic type, followed by a colon and the subtype string.
In general, subtypes are language-specific and optional. However, some subtypes are assumed to apply
to many languages and they should be considered semi-mandatory: If the language has the phenomenon that
the subtype focuses on, then the subtype should be used. Examples of subtypes that should be used this
way include but are not limited to the following:

* [acl:relcl]() for relative adnominal clauses
* [aux:pass]() for the passive auxiliary
* [csubj:pass]() for clausal subjects of passive clauses
* [expl:impers]() for reflexive markers of impersonal clauses
* [expl:pass]() for reflexive markers of middle or passive clauses
* [expl:pv]() for reflexive clitics with inherently reflexive verbs
* [nsubj:pass]() for nominal subjects of passive clauses
* [obl:agent]() for demoted agents in passive clauses

The [enhanced dependency representation](/u/overview/enhanced-syntax.html) defines further extensions
of the dependency types.

----------

Alphabetical listing

{% assign sorted = site.u-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
