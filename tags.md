---
layout: base
title:  'Tags'
---

# Tags

## Universal POS tags

|---------------------------------------------------|
| Open class words | Closed class words | Other     |
|---------------------------------------------------|
| [ADJ]()          | [ADP]()            | [PUNCT]() |
| [ADV]()          | [AUX]()            | [SYM]()   |
| [INTJ]()         | [CONJ]()           | [X]()     |
| [NOUN]()         | [DET]()            |           |
| [PROPN]()        | [NUM]()            |           |
| [VERB]()         | [PART]()           |           |
|                  | [PRON]()           |           |
|                  | [SCONJ]()          |           |
|---------------------------------------------------|
{: .typeindex}

Alphabetical listing

<ul>
{% for p in site.ud-pos %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>

## Language-specific documentation

<table id="indextable">
<tr>
  <th>Subset</th>
  <th colspan="2">Documentation</th>
  <th>Status</th>
</tr>
<tr>
  <td class="right">Universal Tags</td>
  <td><a href="ud-pos-index.html">index page</a></td>
  <td><a href="ud-pos-all.html">single document</a></td>
  <td class="partial">Incomplete</td>
</tr>
</table>
