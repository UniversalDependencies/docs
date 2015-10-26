---
layout: base
title:  'UD Contributors'
---

# Contributors

This is the list of UD contributors gathered from the corpus readme files. See [here](language_metadata.html) for instructions on how to list contributors for your language.

{% for l in site.data.ldata %}

* **{{l.lang_name}}**: {{ l.contributors | map: 'full' | join:', ' }}

{% endfor %}
