---
layout: base
title:  'Universal Stanford Dependencies'
generated: 'true'
---

The following table is imported from *Universal Stanford Dependencies:
A cross-linguistic typology* (de Marneffe *et al.* 2014).

<table>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Core dependents of clausal predicates</b></td></tr>
<tr>
  <td><i>Nominal dep</i></td>
  <td><i>Predicate dep</i></td>
</tr>
<tr>
  <td><a href="usd/nsubj.html">nsubj</a></td>
  <td><a href="usd/csubj.html">csubj</a></td>
</tr>
<tr>
  <td><a href="usd/nsubjpass.html">nsubjpass</a></td>
  <td><a href="usd/csubjpass.html">csubjpass</a></td>
</tr>
<tr>
  <td><a href="usd/dobj.html">dobj</a></td>
  <td><a href="usd/ccomp.html">ccomp</a></td>
  <td><a href="usd/xcomp.html">xcomp</a></td>
</tr>
<tr>
  <td><a href="usd/iobj.html">iobj</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Non-core dependents of clausal predicates</b></td></tr>
<tr>
  <td><i>Nominal dep</i></td>
  <td><i>Predicate dep</i></td>
  <td><i>Modifier word</i></td>
</tr>
<tr>
  <td>&nbsp;</td>
  <td><a href="usd/advcl.html">advcl</a></td>
  <td><a href="usd/advmod.html">advmod</a></td>
</tr>
<tr>
  <td>&nbsp;</td>
  <td><a href="usd/nfincl.html">nfincl</a></td>
  <td><a href="usd/neg.html">neg</a></td>
</tr>
<tr>
  <td><a href="usd/nmod.html">nmod</a></td>
  <td><a href="usd/ncmod.html">ncmod</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Special clausal dependents</b></td></tr>
<tr>
  <td><i>Nominal dep</i></td>
  <td><i>Auxiliary</i></td>
  <td><i>Other</i></td>
</tr>
<tr>
  <td><a href="usd/vocative.html">vocative</a></td>
  <td><a href="usd/aux.html">aux</a></td>
  <td><a href="usd/mark.html">mark</a></td>
</tr>
<tr>
  <td><a href="usd/discourse.html">discourse</a></td>
  <td><a href="usd/auxpass.html">auxpass</a></td>
  <td><a href="usd/punct.html">punct</a></td>
</tr>
<tr>
  <td><a href="usd/expl.html">expl</a></td>
  <td><a href="usd/cop.html">cop</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Coordination</b></td></tr>
<tr>
  <td><a href="usd/conj.html">conj</a></td>
  <td><a href="usd/cc.html">cc</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Noun dependents</b></td></tr>
<tr>
  <td><i>Nominal dep</i></td>
  <td><i>Predicate dep</i></td>
  <td><i>Modifier word</i></td>
</tr>
<tr>
  <td><a href="usd/nummod.html">nummod</a></td>
  <td><a href="usd/relcl.html">relcl</a></td>
  <td><a href="usd/amod.html">amod</a></td>
</tr>
<tr>
  <td><a href="usd/appos.html">appos</a></td>
  <td><a href="usd/nfincl.html">nfincl</a></td>
  <td><a href="usd/det.html">det</a></td>
</tr>
<tr>
  <td><a href="usd/nmod.html">nmod</a></td>
  <td><a href="usd/ncmod.html">ncmod</a></td>
  <td><a href="usd/neg.html">neg</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Compounding and unanalyzed</b></td></tr>
<tr>
  <td><a href="usd/compound.html">compound</a></td>
  <td><a href="usd/mwe.html">mwe</a></td>
  <td><a href="usd/goeswith.html">goeswith</a></td>
</tr>
<tr>
  <td><a href="usd/name.html">name</a></td>
  <td><a href="usd/foreign.html">foreign</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Case-marking, prepositions, possessive</b></td></tr>
<tr>
  <td><a href="usd/case.html">case</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Loose joining relations</b></td></tr>
<tr>
  <td><a href="usd/list.html">list</a></td>
  <td><a href="usd/parataxis.html">parataxis</a></td>
  <td><a href="usd/remnant.html">remnant</a></td>
</tr>
<tr>
  <td><a href="usd/dislocated.html">dislocated</a></td>
  <td></td><td><a href="usd/reparandum.html">reparandum</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

<tr><td colspan="3"><b>Other</b></td></tr>
<tr>
  <td><i>Sentence head</i></td>
  <td colspan="2"><i>Unspecified dependency</i></td>
</tr>
<tr>
  <td><a href="usd/root.html">root</a></td>
  <td><a href="usd/dep.html">dep</a></td>
</tr>
<tr><td colspan="3"><hr></td></tr>

</table>

Note: <i>nmod</i>, <i>ncmod</i>, <i>nfincl</i>, and <i>neg</i> appear
in two places.


----------

Alphabetical listing

<ul>
{% for p in site.usd %}
  <li><a href="{{ p.url | remove_first:'/' }}">{{ p.title }}</a>: {{ p.shortdef }}</li>
{% endfor %}
</ul>
