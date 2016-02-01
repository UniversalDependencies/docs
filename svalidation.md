---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
---
# Aux chain

Auxiliary dependencies should not form a chain.

Search expression: `_ <aux (_ <aux _)`

Correct example:

~~~ sdparse

Do you think that he will have left when we come ?
aux(think, Do)
aux(left, will)
aux(left, have)

~~~


Incorrect example:

~~~ sdparse

Do you think that he will have left when we come ?
aux(think, Do)
aux(have, will)
aux(left, have)

~~~


<a href="http://universaldependencies.org/u/dep/aux_.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADV</th><th>AUX</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>VERB</th><th>X</th> </tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=Arabic">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=Arabic">1</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=Basque">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=Basque">0</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=Dutch">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=Dutch">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=Dutch">1394</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=Dutch">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=Dutch">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=Dutch">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=Dutch">7</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=German">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=German">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=Persian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=Polish">44</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=Polish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=Polish">0</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=Portuguese">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Caux+%28_+%3Caux+_%29&db=Romanian">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Caux+%28_+%3Caux+_%29&db=Romanian">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">1529 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">28 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Caux+%28_+%3Caux+_%29&db=Romanian">Go to search</a><p/>
</div>
</div>


# Name is right-headed

Name dependencies should be left-headed, not right.

Search expression: `_ <name@R _`

Correct example:

~~~ sdparse

Carl XVI Gustaf
name(Carl, XVI)
name(Carl, Gustaf)

~~~


Incorrect example:

~~~ sdparse

Carl XVI Gustaf
name(Gustaf, XVI)
name(Gustaf, Carl)

~~~


<a href="http://universaldependencies.org/u/dep/name.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Ancient_Greek-PROIEL">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Croatian">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Croatian">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Croatian">1</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Danish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Danish">248</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Danish">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Danish">11</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=English">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=English">1317</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=English">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=French">106</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=French">0</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=German">4663</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Gothic">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Gothic">0</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Hungarian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Hungarian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Hungarian">669</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Hungarian">1</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Indonesian">400</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Indonesian">0</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Irish">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Irish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Irish">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Latin-PROIEL">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Latin-PROIEL">0</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Norwegian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Norwegian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Norwegian">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Norwegian">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Norwegian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Norwegian">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Norwegian">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Norwegian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Norwegian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Norwegian">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Persian">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Slovenian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Slovenian">7</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">49 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">289 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">1325 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">108 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">4663 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">682 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">400 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">132 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Slovenian">Go to search</a><p/>
</div>
</div>


# MWE is right-headed

Multi-word expressions should be left-headed, not right.

Search expression: `_ <mwe@R _`

Correct example:

~~~ sdparse

He cried because of you
mwe(because, of)

~~~


Incorrect example:

~~~ sdparse

He cried because of you
mwe(of, because)

~~~


<a href="http://universaldependencies.org/u/dep/mwe.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>VERB</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Basque">1</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Croatian">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Croatian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Croatian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Croatian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Croatian">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Croatian">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=French">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=French">472</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=French">807</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=French">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=French">72</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=French">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=French">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=French">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=French">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=French">2</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=German">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=German">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Greek">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Indonesian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Indonesian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Indonesian">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Indonesian">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Indonesian">163</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Indonesian">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Indonesian">11</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Italian">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Latin-PROIEL">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Latin-PROIEL">0</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Old_Church_Slavonic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Persian">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Persian">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Romanian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Romanian">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">1445 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">272 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Romanian">Go to search</a><p/>
</div>
</div>


# Conj is right-headed

Conjugation dependencies should be left-headed, not right.

Search expression: `_ <conj@R _`

Correct example:

~~~ sdparse

Bill is big and honest
conj(big, honest)

~~~


Incorrect example:

~~~ sdparse

Bill is big and honest
conj(honest, big)

~~~


<a href="http://universaldependencies.org/u/dep/conj.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Ancient_Greek">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Ancient_Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Ancient_Greek">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Ancient_Greek">247</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Ancient_Greek">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Ancient_Greek">159</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Basque">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Basque">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Basque">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Basque">0</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Croatian">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Danish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Danish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Danish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Danish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Danish">1</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=English">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=English">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=English">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=English">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=English">0</a></td>
</tr>
<tr><td>Finnish-FTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Finnish-FTB">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Finnish-FTB">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Finnish-FTB">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Finnish-FTB">74</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=French">0</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=German">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=German">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=German">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Gothic">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Gothic">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Gothic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Gothic">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Greek">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Greek">0</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Hindi">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Hindi">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Hindi">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Hindi">0</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Hungarian">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Indonesian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Indonesian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Indonesian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Indonesian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Indonesian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Indonesian">1</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Irish">0</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Italian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Italian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Italian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Italian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Italian">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Italian">0</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Latin">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Latin">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Latin">181</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Latin">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Latin">48</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Latin">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Latin-PROIEL">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Latin-PROIEL">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Latin-PROIEL">0</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Norwegian">0</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Old_Church_Slavonic">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Old_Church_Slavonic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Old_Church_Slavonic">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Old_Church_Slavonic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Persian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Persian">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Persian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Persian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Persian">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Romanian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Slovenian">0</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Spanish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Spanish">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Spanish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Spanish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Spanish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Spanish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Spanish">0</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40R+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40R+_&db=Swedish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40R+_&db=Swedish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40R+_&db=Swedish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40R+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40R+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40R+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40R+_&db=Swedish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40R+_&db=Swedish">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">495 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">44 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">91 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">24 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">270 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">25 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">23 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">68 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">47 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40R+_&db=Swedish">Go to search</a><p/>
</div>
</div>


# Name is left-headed

Correct instances of name dependencies being left-headed.

Search expression: `_ <name@L _`

<a href="http://universaldependencies.org/u/dep/name.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Ancient_Greek-PROIEL">192</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Basque">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Basque">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Basque">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Basque">115</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Basque">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Basque">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Basque">1807</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Basque">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Basque">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Basque">48</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Bulgarian">1150</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Croatian">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Croatian">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Croatian">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Croatian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Croatian">1189</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Croatian">19</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Czech">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Czech">1341</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Danish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Danish">204</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Danish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Danish">1412</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Danish">10</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Dutch">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Dutch">7</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=English">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=English">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Finnish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Finnish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Finnish">528</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Finnish">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Finnish">925</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Finnish">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Finnish">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Finnish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Finnish">16</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=French">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=French">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=French">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=French">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=French">4018</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=French">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=French">25</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=German">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Gothic">134</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Gothic">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Hebrew">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Hebrew">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Hebrew">297</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Hebrew">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Hebrew">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Hebrew">1925</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Hebrew">313</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Hebrew">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Indonesian">11002</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Indonesian">0</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Irish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Irish">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Irish">99</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Irish">4</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Italian">48</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Italian">2318</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Italian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Italian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Italian">0</a></td>
</tr>
<tr><td>Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Japanese-KTC">645</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Japanese-KTC">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Latin-PROIEL">326</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Latin-PROIEL">0</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Norwegian">64</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Norwegian">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Norwegian">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Norwegian">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Norwegian">177</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Norwegian">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Norwegian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Norwegian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Norwegian">2067</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Norwegian">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Norwegian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Norwegian">0</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Old_Church_Slavonic">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Persian">3314</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Persian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Persian">28</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Portuguese">212</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Romanian">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Romanian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Romanian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Romanian">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Romanian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Romanian">66</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Slovenian">684</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Slovenian">4</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Spanish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Spanish">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Spanish">4392</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Spanish">9</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40L+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40L+_&db=Swedish">156</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40L+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40L+_&db=Swedish">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">192 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">2057 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">1150 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">1318 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">1347 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">1643 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">1539 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">4122 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">53 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">134 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">2580 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">11002 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">161 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">2385 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">645 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">326 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">2495 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">3356 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">212 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">117 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">688 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">4424 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">158 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40L+_&db=Swedish">Go to search</a><p/>
</div>
</div>


# MWE is left-headed

Correct instances of multi-word expressions being left-headed.

Search expression: `_ <mwe@L _`

<a href="http://universaldependencies.org/u/dep/mwe.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Arabic">104</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Arabic">1</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Basque">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Basque">91</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Basque">131</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Basque">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Basque">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Basque">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Basque">0</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Bulgarian">137</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Bulgarian">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Bulgarian">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Bulgarian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Bulgarian">86</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Bulgarian">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Bulgarian">218</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Bulgarian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Bulgarian">88</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Bulgarian">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Bulgarian">1</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Croatian">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Croatian">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Croatian">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Croatian">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Croatian">87</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Croatian">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Croatian">0</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Czech">173</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Czech">247</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Czech">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Danish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Danish">86</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Danish">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Danish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Danish">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Danish">295</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Danish">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Danish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Danish">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Danish">0</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Dutch">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Dutch">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Dutch">2</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=English">172</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=English">98</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=English">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=English">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=English">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=English">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=English">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=English">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Finnish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Finnish">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Finnish">287</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Finnish">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Finnish">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Finnish">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Finnish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Finnish">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Finnish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Finnish">1</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=French">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=French">374</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=French">44</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=French">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=French">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=French">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=French">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=French">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=French">149</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=French">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=French">1</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=German">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=German">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=German">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=German">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Gothic">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Gothic">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Hebrew">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Hebrew">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Hebrew">196</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Hebrew">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Hebrew">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Hebrew">410</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Hebrew">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Hebrew">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Hebrew">116</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Hebrew">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Hebrew">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Hebrew">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Indonesian">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Indonesian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Indonesian">80</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Indonesian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Indonesian">48</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Indonesian">702</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Indonesian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Indonesian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Indonesian">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Indonesian">60</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Indonesian">0</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Italian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Italian">500</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Italian">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Italian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Italian">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Italian">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Italian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Italian">118</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Italian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Italian">3</a></td>
</tr>
<tr><td>Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Japanese-KTC">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Japanese-KTC">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Japanese-KTC">900</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Japanese-KTC">1706</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Japanese-KTC">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Latin-PROIEL">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Latin-PROIEL">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Persian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Persian">715</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Persian">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Persian">542</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Persian">237</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Persian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Persian">118</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Persian">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Persian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Polish">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Polish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Polish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Polish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Polish">0</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Portuguese">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Romanian">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Romanian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Romanian">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Romanian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Slovenian">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Slovenian">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Slovenian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Slovenian">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Slovenian">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Slovenian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Slovenian">306</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Slovenian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Slovenian">19</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Spanish">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Spanish">946</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Spanish">95</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Spanish">307</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Spanish">162</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Spanish">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Spanish">155</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Spanish">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Spanish">3</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40L+_&db=Swedish">124</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40L+_&db=Swedish">259</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40L+_&db=Swedish">268</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40L+_&db=Swedish">143</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40L+_&db=Swedish">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cmwe%40L+_&db=Swedish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40L+_&db=Swedish">606</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40L+_&db=Swedish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40L+_&db=Swedish">113</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cmwe%40L+_&db=Swedish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40L+_&db=Swedish">135</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cmwe%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40L+_&db=Swedish">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cmwe%40L+_&db=Swedish">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">108 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">289 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">688 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">223 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">424 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">492 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">62 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">343 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">383 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">682 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">76 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">969 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">1022 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">764 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">2645 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">1683 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">452 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">1772 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">1753 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40L+_&db=Swedish">Go to search</a><p/>
</div>
</div>


# Conj is left-headed

Correct instances of conjugation dependencies being left-headed.

Search expression: `_ <conj@L _`

<a href="http://universaldependencies.org/u/dep/conj.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Ancient_Greek">676</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Ancient_Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Ancient_Greek">110</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Ancient_Greek">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Ancient_Greek">1908</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Ancient_Greek">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Ancient_Greek">87</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Ancient_Greek">3901</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">379</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">1565</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">295</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">3374</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Arabic">1195</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Arabic">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Arabic">55</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Arabic">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Arabic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Arabic">6166</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Arabic">1041</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Arabic">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Arabic">176</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Arabic">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Arabic">3026</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Arabic">1647</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Basque">279</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Basque">91</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Basque">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Basque">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Basque">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Basque">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Basque">1385</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Basque">98</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Basque">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Basque">782</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Basque">2475</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Basque">3</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Bulgarian">358</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Bulgarian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Bulgarian">70</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Bulgarian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Bulgarian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Bulgarian">2106</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Bulgarian">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Bulgarian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Bulgarian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Bulgarian">593</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Bulgarian">1819</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Croatian">408</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Croatian">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Croatian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Croatian">1556</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Croatian">60</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Croatian">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Croatian">551</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Croatian">679</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Croatian">12</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Czech">1168</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Czech">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Czech">365</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Czech">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Czech">3926</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Czech">557</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Czech">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Czech">118</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Czech">711</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Czech">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Czech">2369</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Danish">323</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Danish">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Danish">102</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Danish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Danish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Danish">1062</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Danish">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Danish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Danish">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Danish">314</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Danish">1323</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Danish">40</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Dutch">306</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Dutch">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Dutch">60</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Dutch">223</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Dutch">1228</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Dutch">82</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Dutch">59</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Dutch">362</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Dutch">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Dutch">671</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Dutch">222</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=English">470</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=English">62</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=English">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=English">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=English">1607</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=English">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=English">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=English">55</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=English">702</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=English">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=English">1606</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=English">26</a></td>
</tr>
<tr><td>Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Estonian">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Estonian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Estonian">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Estonian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Estonian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Estonian">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Estonian">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Estonian">1</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Finnish">577</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Finnish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Finnish">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Finnish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Finnish">2818</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Finnish">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Finnish">90</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Finnish">439</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Finnish">2734</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Finnish">8</a></td>
</tr>
<tr><td>Finnish-FTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Finnish-FTB">329</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Finnish-FTB">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Finnish-FTB">107</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Finnish-FTB">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Finnish-FTB">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Finnish-FTB">1008</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Finnish-FTB">61</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Finnish-FTB">110</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Finnish-FTB">220</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Finnish-FTB">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Finnish-FTB">1507</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Finnish-FTB">11</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=French">721</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=French">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=French">44</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=French">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=French">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=French">3670</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=French">246</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=French">107</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=French">1613</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=French">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=French">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=French">2207</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=French">88</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=German">780</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=German">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=German">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=German">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=German">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=German">3075</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=German">242</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=German">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=German">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=German">1580</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=German">1743</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=German">9</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Gothic">189</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Gothic">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Gothic">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Gothic">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Gothic">840</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Gothic">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Gothic">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Gothic">120</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Gothic">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Gothic">1950</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Greek">198</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Greek">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Greek">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Greek">1232</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Greek">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Greek">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Greek">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Greek">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Greek">597</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Greek">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Hebrew">417</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Hebrew">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Hebrew">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Hebrew">119</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Hebrew">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Hebrew">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Hebrew">2329</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Hebrew">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Hebrew">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Hebrew">428</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Hebrew">1961</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Hebrew">1</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Hindi">168</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Hindi">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Hindi">1509</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Hindi">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Hindi">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Hindi">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Hindi">1435</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Hindi">1109</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Hindi">1</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Hungarian">150</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Hungarian">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Hungarian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Hungarian">390</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Hungarian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Hungarian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Hungarian">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Hungarian">471</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Hungarian">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Indonesian">158</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Indonesian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Indonesian">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Indonesian">1890</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Indonesian">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Indonesian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Indonesian">1539</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Indonesian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Indonesian">1110</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Indonesian">1</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Irish">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Irish">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Irish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Irish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Irish">393</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Irish">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Irish">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Irish">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Irish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Irish">160</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Irish">8</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Italian">729</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Italian">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Italian">3510</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Italian">127</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Italian">150</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Italian">552</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Italian">1873</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Italian">4</a></td>
</tr>
<tr><td>Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Japanese-KTC">103</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Japanese-KTC">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Japanese-KTC">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Japanese-KTC">3195</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Japanese-KTC">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Japanese-KTC">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Japanese-KTC">399</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Japanese-KTC">299</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Japanese-KTC">0</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Latin">240</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Latin">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Latin">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Latin">1080</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Latin">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Latin">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Latin">1794</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Latin">0</a></td>
</tr>
<tr><td>Latin-ITT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Latin-ITT">766</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Latin-ITT">144</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Latin-ITT">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Latin-ITT">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Latin-ITT">1799</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Latin-ITT">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Latin-ITT">252</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Latin-ITT">1336</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Latin-ITT">4</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Latin-PROIEL">370</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Latin-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Latin-PROIEL">89</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Latin-PROIEL">1592</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Latin-PROIEL">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Latin-PROIEL">124</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Latin-PROIEL">274</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Latin-PROIEL">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Latin-PROIEL">3159</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Latin-PROIEL">21</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Norwegian">733</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Norwegian">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Norwegian">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Norwegian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Norwegian">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Norwegian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Norwegian">2254</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Norwegian">63</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Norwegian">61</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Norwegian">636</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Norwegian">2027</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Norwegian">2</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Old_Church_Slavonic">87</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Old_Church_Slavonic">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Old_Church_Slavonic">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Old_Church_Slavonic">658</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Old_Church_Slavonic">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Old_Church_Slavonic">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Old_Church_Slavonic">109</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Old_Church_Slavonic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Old_Church_Slavonic">2293</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Persian">1279</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Persian">83</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Persian">4812</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Persian">188</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Persian">62</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Persian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Persian">2257</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Persian">5</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Polish">234</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Polish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Polish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Polish">980</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Polish">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Polish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Polish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Polish">1425</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Polish">4</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Portuguese">532</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Portuguese">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Portuguese">141</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Portuguese">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Portuguese">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Portuguese">2556</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Portuguese">131</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Portuguese">109</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Portuguese">1269</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Portuguese">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Portuguese">1785</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Portuguese">1</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Romanian">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Romanian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Romanian">219</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Romanian">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Romanian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Romanian">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Romanian">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Slovenian">814</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Slovenian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Slovenian">99</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Slovenian">2287</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Slovenian">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Slovenian">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Slovenian">361</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Slovenian">1557</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Slovenian">4</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Spanish">943</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Spanish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Spanish">117</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Spanish">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Spanish">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Spanish">4287</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Spanish">262</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Spanish">123</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Spanish">1987</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Spanish">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Spanish">2681</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Spanish">119</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Swedish">501</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Swedish">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Swedish">136</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Swedish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Swedish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Swedish">2177</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Swedish">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Swedish">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Swedish">249</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Swedish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Swedish">953</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Swedish">0</a></td>
</tr>
<tr><td>Tamil</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cconj%40L+_&db=Tamil">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cconj%40L+_&db=Tamil">113</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cconj%40L+_&db=Tamil">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cconj%40L+_&db=Tamil">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cconj%40L+_&db=Tamil">84</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cconj%40L+_&db=Tamil">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cconj%40L+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cconj%40L+_&db=Tamil">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cconj%40L+_&db=Tamil">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">6714 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">5798 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">13386 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">5192 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">5000 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">3335 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">9253 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">3253 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">3227 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">4625 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">143 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">6853 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">3398 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">8781 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">7570 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">3190 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">2153 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">5432 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">4270 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">1171 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">4782 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">736 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">7029 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">4027 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">3195 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">4345 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">5665 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">5886 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">3213 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">8705 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">2681 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">6575 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">485 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">5267 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">10604 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">4130 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">228 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cconj%40L+_&db=Tamil">Go to search</a><p/>
</div>
</div>


# Parts of speech of expl

The parts of speech of words marked as being expletive dependencies.

Search expression: `_ <expl _`

<a href="http://universaldependencies.org/u/dep/expl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADP</th><th>ADV</th><th>AUX</th><th>DET</th><th>INTJ</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>X</th> </tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Bulgarian">3164</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Croatian">0</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Czech">2127</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Danish">404</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Danish">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Danish">0</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Dutch">320</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Dutch">4</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=English">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=English">404</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=English">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=French">182</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=French">89</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=French">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=French">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=French">197</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=French">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=French">0</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=German">262</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=German">0</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Italian">1638</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Italian">0</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Norwegian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Norwegian">1579</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Norwegian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Polish">1708</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Polish">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Romanian">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Slovenian">2298</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Slovenian">0</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cexpl+_&db=Swedish">490</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cexpl+_&db=Swedish">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">3164 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">2127 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">441 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">325 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">408 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">507 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">263 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">1639 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">1581 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">1708 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">2298 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">490 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cexpl+_&db=Swedish">Go to search</a><p/>
</div>
</div>


# Dependents of expl

The dependents of a word marked as being an expletive dependency. This should be empty.

Search expression: `_ < (_ <expl _)`

<a href="http://universaldependencies.org/u/dep/expl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CONJ</th><th>NOUN</th><th>PRON</th><th>PUNCT</th><th>SCONJ</th><th>VERB</th> </tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">0</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cexpl+_%29&db=English">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cexpl+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cexpl+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cexpl+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cexpl+_%29&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cexpl+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cexpl+_%29&db=French">3</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cexpl+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cexpl+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cexpl+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cexpl+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cexpl+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cexpl+_%29&db=Italian">0</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cexpl+_%29&db=Norwegian">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cexpl+_%29&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cexpl+_%29&db=Romanian">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cexpl+_%29&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cexpl+_%29&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cexpl+_%29&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cexpl+_%29&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cexpl+_%29&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cexpl+_%29&db=Romanian">Go to search</a><p/>
</div>
</div>


# Heads of expl

Parts of speech of words which have an expletive dependency.

Search expression: `_ >expl _`

<a href="http://universaldependencies.org/u/dep/expl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Bulgarian">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Bulgarian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Bulgarian">3085</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Croatian">0</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Czech">89</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Czech">2037</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Danish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Danish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Danish">428</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Danish">1</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Dutch">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Dutch">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Dutch">102</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Dutch">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Dutch">164</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Dutch">1</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=English">75</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=English">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=English">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=English">302</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=English">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=French">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=French">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=French">62</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=French">92</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=French">126</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=French">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=French">176</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=French">0</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=German">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=German">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=German">234</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=German">0</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Italian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Italian">1613</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Italian">0</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Norwegian">296</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Norwegian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Norwegian">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Norwegian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Norwegian">242</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Norwegian">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Norwegian">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Norwegian">920</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Norwegian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Polish">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Polish">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Polish">1666</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Polish">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Romanian">44</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Slovenian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Slovenian">2292</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Slovenian">0</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eexpl+_&db=Swedish">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eexpl+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Eexpl+_&db=Swedish">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eexpl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eexpl+_&db=Swedish">347</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eexpl+_&db=Swedish">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">3143 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">2127 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">440 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">323 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">408 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">504 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">263 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">1624 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">1580 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">1708 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">45 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">2298 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">490 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Eexpl+_&db=Swedish">Go to search</a><p/>
</div>
</div>


# Heads of xcomp

Parts of speech of words which have an open clausal complement dependency.

Search expression: `_ >xcomp _`

<a href="http://universaldependencies.org/u/dep/xcomp.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Ancient_Greek">108</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Ancient_Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Ancient_Greek">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Ancient_Greek">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Ancient_Greek">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Ancient_Greek">69</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Ancient_Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Ancient_Greek">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Ancient_Greek">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Ancient_Greek">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Ancient_Greek">3060</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Ancient_Greek-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Ancient_Greek-PROIEL">1582</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Arabic">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Arabic">139</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Arabic">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Arabic">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Arabic">1467</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Arabic">61</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Basque">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Basque">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Basque">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Basque">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Basque">55</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Basque">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Basque">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Basque">1287</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Basque">4</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Bulgarian">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Croatian">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Croatian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Croatian">103</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Croatian">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Croatian">1076</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Croatian">0</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Czech">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Czech">193</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Czech">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Czech">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Czech">92</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Czech">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Czech">1654</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Danish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Danish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Danish">562</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Danish">0</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Dutch">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Dutch">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Dutch">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Dutch">1</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=English">137</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=English">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=English">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=English">1687</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=English">0</a></td>
</tr>
<tr><td>Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Estonian">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Estonian">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Finnish">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Finnish">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Finnish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Finnish">1848</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Finnish">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=French">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=French">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=French">486</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=French">0</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=German">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=German">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=German">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=German">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=German">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=German">622</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Gothic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Gothic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Gothic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Gothic">2370</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Greek">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Greek">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Greek">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Greek">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Hebrew">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Hebrew">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Hebrew">683</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Hebrew">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Hebrew">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Hebrew">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Hebrew">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Hebrew">982</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Hebrew">0</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Hindi">488</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Hindi">0</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Hungarian">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Hungarian">169</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Hungarian">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Indonesian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Indonesian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Indonesian">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Indonesian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Indonesian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Indonesian">1256</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Indonesian">0</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Irish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Irish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Irish">143</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Irish">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Irish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Irish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Irish">391</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Irish">3</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Italian">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Italian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Italian">1433</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Italian">0</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Latin">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Latin">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Latin">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Latin">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Latin">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Latin">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Latin">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Latin">753</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Latin">0</a></td>
</tr>
<tr><td>Latin-ITT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Latin-ITT">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Latin-ITT">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Latin-ITT">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Latin-ITT">112</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Latin-ITT">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Latin-ITT">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Latin-ITT">1996</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Latin-ITT">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Latin-PROIEL">1727</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Latin-PROIEL">4</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Norwegian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Norwegian">91</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Norwegian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Norwegian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Norwegian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Norwegian">1960</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Norwegian">0</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Old_Church_Slavonic">2378</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Persian">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Persian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Persian">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Persian">393</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Persian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Polish">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Polish">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Polish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Polish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Polish">1058</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Polish">0</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Portuguese">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Portuguese">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Portuguese">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Portuguese">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Portuguese">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Portuguese">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Portuguese">2732</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Romanian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Romanian">78</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Slovenian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Slovenian">1213</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Slovenian">0</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Spanish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Spanish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Spanish">835</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Spanish">0</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Swedish">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Swedish">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Swedish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Swedish">1033</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Swedish">0</a></td>
</tr>
<tr><td>Tamil</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Excomp+_&db=Tamil">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Excomp+_&db=Tamil">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Excomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Excomp+_&db=Tamil">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Excomp+_&db=Tamil">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">3410 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">1583 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">1721 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">1385 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">1297 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">2058 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">572 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">73 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">1835 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">1878 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">501 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">696 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">2373 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">59 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">1745 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">488 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">195 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">1321 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">579 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">1494 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">850 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">2205 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">1731 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">2082 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">2378 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">491 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">1121 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">2804 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">83 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">1221 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">844 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">1065 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Excomp+_&db=Tamil">Go to search</a><p/>
</div>
</div>


# Acl not dependent on NOUN/PROPN

Clausal modifiers of nouns should depend on NOUN/PROPN only; those in the following table depend on other parts of speech.

Search expression: `!NOUN&!PROPN >acl _`

<a href="http://universaldependencies.org/u/dep/acl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NUM</th><th>PART</th><th>PRON</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Ancient_Greek">127</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Ancient_Greek">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Ancient_Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Ancient_Greek">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Ancient_Greek">98</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Ancient_Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Ancient_Greek">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Ancient_Greek-PROIEL">174</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Ancient_Greek-PROIEL">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Ancient_Greek-PROIEL">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Ancient_Greek-PROIEL">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Ancient_Greek-PROIEL">129</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Ancient_Greek-PROIEL">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Arabic">93</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Arabic">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Arabic">191</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Arabic">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Arabic">479</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Arabic">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Arabic">294</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Basque">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Basque">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Basque">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Basque">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Basque">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Basque">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Basque">0</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Bulgarian">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Bulgarian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Bulgarian">97</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Bulgarian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Bulgarian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Croatian">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Croatian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Croatian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Croatian">85</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Croatian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Croatian">2</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Czech">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Czech">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Czech">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Czech">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Czech">397</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Czech">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Czech">0</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Dutch">97</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Dutch">0</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=English">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=English">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=English">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=English">0</a></td>
</tr>
<tr><td>Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Estonian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Estonian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Estonian">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Finnish">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Finnish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Finnish">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Finnish">1</a></td>
</tr>
<tr><td>Finnish-FTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Finnish-FTB">154</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Finnish-FTB">61</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Finnish-FTB">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Finnish-FTB">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Finnish-FTB">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Finnish-FTB">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Finnish-FTB">1</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=French">132</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=French">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=French">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=French">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=French">147</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=French">1171</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=French">5</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=German">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=German">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=German">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=German">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=German">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=German">85</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=German">154</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Gothic">128</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Gothic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Gothic">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Gothic">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Gothic">139</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Gothic">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Greek">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Greek">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Greek">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Greek">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Hebrew">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Hebrew">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Hebrew">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Hebrew">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Hebrew">1</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Hindi">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Hindi">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Hindi">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Hindi">246</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Hindi">307</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Hindi">0</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Hungarian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Hungarian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Hungarian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Hungarian">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Indonesian">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Indonesian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Indonesian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Indonesian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Indonesian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Indonesian">67</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Indonesian">294</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Indonesian">0</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Italian">96</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Italian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Italian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Italian">100</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Italian">0</a></td>
</tr>
<tr><td>Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Japanese-KTC">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Japanese-KTC">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Japanese-KTC">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Japanese-KTC">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Japanese-KTC">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Japanese-KTC">0</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Latin">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Latin">176</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Latin">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Latin">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Latin">0</a></td>
</tr>
<tr><td>Latin-ITT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Latin-ITT">182</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Latin-ITT">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Latin-ITT">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Latin-ITT">152</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Latin-ITT">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Latin-ITT">1517</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Latin-ITT">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Latin-ITT">160</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Latin-ITT">2</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Latin-PROIEL">275</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Latin-PROIEL">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Latin-PROIEL">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Latin-PROIEL">429</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Latin-PROIEL">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Latin-PROIEL">4</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Norwegian">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Norwegian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Norwegian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Norwegian">104</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Norwegian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Norwegian">0</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Old_Church_Slavonic">107</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Old_Church_Slavonic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Old_Church_Slavonic">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Old_Church_Slavonic">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Old_Church_Slavonic">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Polish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Polish">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Polish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Polish">1</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Portuguese">95</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Portuguese">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Portuguese">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Portuguese">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Portuguese">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Portuguese">254</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Portuguese">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Portuguese">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Romanian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Romanian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Romanian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Romanian">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Slovenian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Slovenian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Slovenian">240</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Slovenian">2</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Spanish">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Spanish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Spanish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Spanish">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Spanish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Spanish">1654</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Spanish">5</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Swedish">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Swedish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Swedish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Swedish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Swedish">62</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Swedish">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Swedish">0</a></td>
</tr>
<tr><td>Tamil</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Eacl+_&db=Tamil">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Eacl+_&db=Tamil">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Eacl+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Eacl+_&db=Tamil">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">293 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">332 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">1196 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">123 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">135 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">133 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">433 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">100 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">287 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">1489 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">281 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">297 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">49 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">572 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">404 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">203 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">42 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">254 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">2065 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">774 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">146 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">222 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">448 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">38 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">267 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">1778 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">137 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NOUN%26%21PROPN+%3Eacl+_&db=Tamil">Go to search</a><p/>
</div>
</div>


# Case not dependent on nmod

If a word is marked as having a case dependency, its head should be marked as being a nominal modifier.

Search expression: `_ <case (_ <!nmod _)`

<a href="http://universaldependencies.org/u/dep/case.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">3466</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">4284</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">13819</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">393</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">363</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">0</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">3555</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">982</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">754</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">7</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">3799</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">763</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">0</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">3463</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">2</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=English">328</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=English">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=English">495</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=English">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=English">0</a></td>
</tr>
<tr><td>Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">161</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">0</a></td>
</tr>
<tr><td>Finnish-FTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">78</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=French">2162</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=French">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=French">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=French">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=French">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=French">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=French">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=French">0</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=German">781</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=German">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=German">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=German">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=German">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">2520</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">1417</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">5814</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">7</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">89</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">9986</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">170</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">181</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">0</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">79</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">1</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">1442</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">0</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">720</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">1</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">2151</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">0</a></td>
</tr>
<tr><td>Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">30600</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">1009</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">0</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">311</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">0</a></td>
</tr>
<tr><td>Latin-ITT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">3890</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">4361</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">0</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">3457</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">0</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">2657</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">1156</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">2552</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">63</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">3175</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">172</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">95</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">51</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">5656</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">538</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">698</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">0</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">3335</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">2</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">1259</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">0</a></td>
</tr>
<tr><td>Tamil</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">3525 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">4284 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">14270 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">368 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">4537 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">809 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">3835 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">766 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">3580 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">834 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">162 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">78 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">2295 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">823 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">2520 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">1469 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">5933 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">10437 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">80 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">1442 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">725 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">2198 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">31636 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">322 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">3900 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">4361 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">3457 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">2657 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">3714 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">3614 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">5682 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">545 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">716 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">3419 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">1293 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">21 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Ccase+%28_+%3C%21nmod+_%29&db=Tamil">Go to search</a><p/>
</div>
</div>


# Marked as NUM but not nummod or nmod

If a word is marked as a numeral (POS), then it should be marked as being an nmod or nummod dependency.

Search expression: `NUM (<!nummod&<!nmod) _`

<a href="http://universaldependencies.org/docs/u/pos/NUM.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">115 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">245 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">3924 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">1847 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">200 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">307 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">2094 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">98 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">918 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">701 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">88 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">526 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">107 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">409 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">612 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">177 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">161 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">966 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">479 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">115 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">264 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">419 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">167 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">53 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">542 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">266 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">315 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">328 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">535 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">739 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">811 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">172 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">337 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">687 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">99 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%28%3C%21nummod%26%3C%21nmod%29+_&db=Tamil">Go to search</a><p/>
</div>
</div>


# Marked as nummod but not NUM

If a word is marked as a numeric modifier, it should be marked as a numeral (POS).

Search expression: `!NUM <nummod _`

<a href="http://universaldependencies.org/docs/u/dep/nummod.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">302 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">42 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">119 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">362 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">88 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">207 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">91 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">106 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">742 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21NUM+%3Cnummod+_&db=Spanish">Go to search</a><p/>
</div>
</div>


# Marked as AUX but not aux or auxpass

If a word is marked as the auxiliary POS, it should be marked as either aux or auxpass dependency.

Search expression: `AUX (<!aux&<!auxpass) _`

<a href="http://universaldependencies.org/docs/u/pos/AUX_.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">68 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">1464 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">1761 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">3559 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">28 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">482 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">5824 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">57 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">28 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">1617 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=Tamil">Go to search</a><p/>
</div>
</div>


# Marked as aux or auxpass but not AUX

If a word is marked as a (passive) auxiliary dependency, it should be marked as the auxiliary POS.

Search expression: `!AUX (<aux|<auxpass) _`

<a href="http://universaldependencies.org/docs/u/dep/aux_.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">1792 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">387 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">3766 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">49 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">664 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">39 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">2754 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">703 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">73 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">2108 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">772 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">512 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">1373 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">217 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">1738 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">186 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">83 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">42 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=Tamil">Go to search</a><p/>
</div>
</div>


# Heads of an advmod are nominal

The heads of an adverbial modifier should not be nominal (noun, proper noun, numeral, or pronoun)

Search expression: `_ <advmod (NOUN|PROPN|NUM|PRON)`

<a href="http://universaldependencies.org/docs/u/dep/advmod.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">506</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">1858</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">102</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">269</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">73</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">399</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">165</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">108</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">221</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">0</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">771</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">486</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">2</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">205</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">71</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">828</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">29</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">350</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">63</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">739</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">24</a></td>
</tr>
<tr><td>Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">2246</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">1</a></td>
</tr>
<tr><td>Finnish-FTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">1231</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">1077</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">1</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">278</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">1911</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">14</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">255</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">268</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">365</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">4</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">635</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">0</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">136</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">1</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">1439</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">2</a></td>
</tr>
<tr><td>Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">299</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">0</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">313</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">234</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">0</a></td>
</tr>
<tr><td>Latin-ITT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">201</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">59</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">3</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">131</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">360</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">2</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">317</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">678</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">0</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">258</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">528</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">105</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">209</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">0</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">516</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">80</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">522</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">65</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">255</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">7</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">1201</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">2</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">901</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">110</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">0</a></td>
</tr>
<tr><td>Tamil</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">2878 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">475 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">528 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">53 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">771 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">528 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">231 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">968 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">605 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">815 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">2291 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">1238 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">1227 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">2249 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">264 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">287 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">527 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">78 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">702 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">230 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">1482 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">308 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">580 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">289 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">497 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">995 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">268 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">874 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">124 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">613 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">92 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">850 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">1328 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">1087 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">30 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=Tamil">Go to search</a><p/>
</div>
</div>


# Copulas are nominal

Copulas should not be marked as nominal (noun, proper noun, numeral, or pronoun)

Search expression: `(NOUN|PROPN|NUM|PRON) <cop _`

<a href="http://universaldependencies.org/docs/u/dep/cop.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">160 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">973 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish-FTB</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Finnish-FTB">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">83 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">28 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=%28NOUN%7CPROPN%7CNUM%7CPRON%29+%3Ccop+_&db=Spanish">Go to search</a><p/>
</div>
</div>


# NOUN and case

A word marked as a NOUN should not be a case dependency.

Search expression: `NOUN <case _`

<a href="http://universaldependencies.org/docs/u/dep/case.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">102 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">88 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">175 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">30 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">166 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Japanese-KTC">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">233 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">51 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Ccase+_&db=Swedish">Go to search</a><p/>
</div>
</div>


