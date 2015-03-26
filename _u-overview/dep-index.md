---
layout: base
title:  'Universal Dependencies'
generated: 'true'
permalink: u/dep/index.html
---

# Universal Dependencies

The idea of universal dependencies is to propose a set of universal grammatical relations which can be used with relative fidelity to capture any dependency relation between words in any language. Each dependency relation should be typed with one of the relations in the table below.

The table is adapted from [*Universal Stanford Dependencies:
A cross-linguistic typology*](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf) (de Marneffe *et al.* 2014). There have been modifications in the relations: we now have 40 universal relations (instead of the 42 ones proposed in the paper).

{% include u-dep-table.html %}

----------

Alphabetical listing

{% assign sorted = site.u-dep | sort: 'title' %}{% for p in sorted %}
* [{{ p.title }}](): {{ p.shortdef }}{% endfor %}
