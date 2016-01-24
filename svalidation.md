---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
---
# Aux chain

Auxiliary dependencies should not form a chain.

Search expression: `_ <aux (_ <aux _)`

Positive (correct) example:

~~~ sdparse

Reagan has died
aux(died-3, has-2)

~~~


Negative (incorrect) example:

~~~ sdparse

Do you think that he will have left when we come ?
aux(think, Do)
aux(left, will)
aux(left, have)

~~~


<a href="http://universaldependencies.github.io/docs/u/dep/aux_.html">Link to documentation</a>

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
Traceback (most recent call last):
  File "syn_validation_run.py", line 187, in <module>
    main(tests)
  File "syn_validation_run.py", line 124, in main
    if len(t["pos_ex"]) > 0:
KeyError: 'pos_ex'
