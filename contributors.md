---
layout: base
title:  'UD Contributors'
---

# Contributors

{% for l in site.data.ldata %}

* **{{l.lang_name}}**: {{ l.contributors | map: 'full' | join:', ' }}

{% endfor %}
