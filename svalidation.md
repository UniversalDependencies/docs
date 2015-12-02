---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
---
# Aux chain

Auxes should not form a chain, they should all depend on their head word.

Search expression: `_ <aux (_ <aux _)`

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


# Name to left

Name should not go left since names are left-headed.

Search expression: `_ <name@R _`

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


# MWE to left

Mwe should not go left since mwe's are left-headed.

Search expression: `_ <mwe@R _`

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


# conj to left

Conj should not go left.

Search expression: `_ <conj@R _`

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


# Deps of expl

Expl relation dependents.

Search expression: `_ <expl _`

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


# Heads of expl

Expl relation heads.

Search expression: `_ >expl _`

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


# Acl not dependent on Noun/Propn

Acl relations not governed by a Noun/Propn

Search expression: `!NOUN&!PROPN >acl _`

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


