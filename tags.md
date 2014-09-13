---
layout: base
title:  'Tags'
---

# Tags

## Universal POS tags

<table class="typeindex">
  <tr>
    <td>
      <table class="category">
        <tr><td><b>Open class words&nbsp;1</b></td></tr>
        <tr>
          <td><a href="ud-pos/ADJ.html">site.ud-pos/ADJ.html.title</a>:site.ud-pos/ADJ.html.shortdef</td>
        </tr>
      </table>
    </td>
    <td>
      <table class="category">
        <tr><td colspan="3"><b>Closed class words&nbsp;2</b></td></tr>
        <tr>
          <td><a href="ud-feat/ADP.html">site.ud-pos/ADP.html.title</a>:site.ud-pos/ADP.html.shortdef</td>
        </tr>
      </table>
    </td>
  </tr>
</table>
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
