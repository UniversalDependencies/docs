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


# Conj to left

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


# Name to right

This is the correct heading direction for name.

Search expression: `_ <name@L _`

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


# MWE to right

This is the correct heading direction for MWE.

Search expression: `_ <mwe@L _`

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


# Conj to right

This is the correct heading direction for conj.

Search expression: `_ <conj@L _`

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


# POS of expl

The parts of speech of expl.

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


# Dependents of expl

The dependents of a word marked as having an expl dependency. This should be empty.

Search expression: `_ < (_ <expl _)`

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

The heads of an expl dependency relation.

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


# POS of xcomp

The parts of speech of xcomp.

Search expression: `_ <xcomp _`

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Ancient_Greek">841</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Ancient_Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Ancient_Greek">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Ancient_Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Ancient_Greek">558</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Ancient_Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Ancient_Greek">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Ancient_Greek">1995</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Ancient_Greek-PROIEL">229</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Ancient_Greek-PROIEL">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Ancient_Greek-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Ancient_Greek-PROIEL">252</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Ancient_Greek-PROIEL">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Ancient_Greek-PROIEL">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Ancient_Greek-PROIEL">65</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Ancient_Greek-PROIEL">959</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Arabic">579</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Arabic">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Arabic">383</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Arabic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Arabic">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Arabic">663</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Arabic">98</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Basque">108</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Basque">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Basque">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Basque">158</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Basque">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Basque">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Basque">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Basque">1087</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Basque">1</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Bulgarian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Bulgarian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Croatian">144</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Croatian">278</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Croatian">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Croatian">111</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Croatian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Croatian">678</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Croatian">0</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Czech">165</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Czech">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Czech">246</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Czech">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Czech">113</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Czech">1534</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Danish">605</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Danish">0</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Dutch">70</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Dutch">0</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=English">328</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=English">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=English">109</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=English">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=English">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=English">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=English">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=English">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=English">1327</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=English">1</a></td>
</tr>
<tr><td>Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Estonian">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Estonian">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Finnish">354</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Finnish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Finnish">89</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Finnish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Finnish">1538</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Finnish">0</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=French">100</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=French">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=French">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=French">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=French">350</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=French">0</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=German">143</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=German">80</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=German">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=German">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=German">450</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=German">0</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Gothic">491</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Gothic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Gothic">102</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Gothic">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Gothic">557</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Gothic">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Gothic">161</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Gothic">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Gothic">961</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Greek">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Greek">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Greek">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Greek">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Greek">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Hebrew">1747</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Hebrew">0</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Hindi">227</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Hindi">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Hindi">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Hindi">179</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Hindi">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Hindi">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Hindi">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Hindi">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Hindi">0</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Hungarian">193</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Hungarian">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Indonesian">137</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Indonesian">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Indonesian">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Indonesian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Indonesian">1198</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Indonesian">0</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Irish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Irish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Irish">575</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Irish">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Irish">0</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Italian">320</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Italian">205</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Italian">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Italian">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Italian">909</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Italian">2</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Latin">185</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Latin">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Latin">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Latin">112</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Latin">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Latin">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Latin">554</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Latin">1</a></td>
</tr>
<tr><td>Latin-ITT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Latin-ITT">166</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Latin-ITT">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Latin-ITT">268</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Latin-ITT">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Latin-ITT">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Latin-ITT">1736</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Latin-ITT">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Latin-PROIEL">242</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Latin-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Latin-PROIEL">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Latin-PROIEL">159</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Latin-PROIEL">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Latin-PROIEL">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Latin-PROIEL">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Latin-PROIEL">1209</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Latin-PROIEL">21</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Norwegian">673</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Norwegian">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Norwegian">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Norwegian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Norwegian">624</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Norwegian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Norwegian">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Norwegian">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Norwegian">667</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Norwegian">4</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Old_Church_Slavonic">404</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Old_Church_Slavonic">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Old_Church_Slavonic">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Old_Church_Slavonic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Old_Church_Slavonic">512</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Old_Church_Slavonic">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Old_Church_Slavonic">194</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Old_Church_Slavonic">105</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Old_Church_Slavonic">1000</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Persian">372</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Persian">103</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Persian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Persian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Polish">70</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Polish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Polish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Polish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Polish">1034</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Polish">0</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Portuguese">176</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Portuguese">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Portuguese">198</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Portuguese">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Portuguese">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Portuguese">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Portuguese">2387</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Romanian">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Romanian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Romanian">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Romanian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Romanian">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Slovenian">136</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Slovenian">133</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Slovenian">61</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Slovenian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Slovenian">917</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Slovenian">0</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Spanish">186</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Spanish">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Spanish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Spanish">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Spanish">608</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Spanish">0</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Swedish">411</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Swedish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Swedish">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Swedish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Swedish">301</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Swedish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Swedish">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Swedish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Swedish">350</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Swedish">0</a></td>
</tr>
<tr><td>Tamil</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cxcomp+_&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cxcomp+_&db=Tamil">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cxcomp+_&db=Tamil">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">3476 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">1584 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">1747 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">1392 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">1314 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">2071 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">605 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">73 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">1837 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">1990 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">501 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">699 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">2373 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">59 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">1747 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">488 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">195 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">1373 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">610 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">1502 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">862 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">2209 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">1732 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">2100 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">2378 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">492 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">1121 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">2814 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">83 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">1255 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">847 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">1100 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cxcomp+_&db=Tamil">Go to search</a><p/>
</div>
</div>


# Dependents of xcomp

The dependents of a word marked as having an xcomp dependency.

Search expression: `_ < (_ <xcomp _)`

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">685</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">704</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">324</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">177</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">1631</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">657</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">728</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">777</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">0</a></td>
</tr>
<tr><td>Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">140</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">119</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">140</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">569</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">360</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">263</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">0</a></td>
</tr>
<tr><td>Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Arabic">266</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Arabic">136</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Arabic">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Arabic">129</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Arabic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Arabic">1483</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Arabic">67</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Arabic">152</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Arabic">202</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Arabic">102</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Arabic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Arabic">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Arabic">349</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Arabic">201</a></td>
</tr>
<tr><td>Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Basque">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Basque">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Basque">168</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Basque">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Basque">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Basque">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Basque">1059</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Basque">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Basque">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Basque">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Basque">135</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Basque">148</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Basque">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Basque">271</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Basque">6</a></td>
</tr>
<tr><td>Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">0</a></td>
</tr>
<tr><td>Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Croatian">174</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Croatian">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Croatian">79</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Croatian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Croatian">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Croatian">971</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Croatian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Croatian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Croatian">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Croatian">83</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Croatian">277</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Croatian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Croatian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Croatian">177</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Croatian">1</a></td>
</tr>
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Czech">162</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Czech">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Czech">319</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Czech">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Czech">103</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Czech">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Czech">1436</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Czech">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Czech">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Czech">532</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Czech">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Czech">161</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Czech">237</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Czech">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Czech">380</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Czech">0</a></td>
</tr>
<tr><td>Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Danish">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Danish">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Danish">95</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Danish">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Danish">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Danish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Danish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Danish">291</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Danish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Danish">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Danish">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Danish">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Danish">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Danish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Danish">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Danish">62</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Danish">3</a></td>
</tr>
<tr><td>Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Dutch">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Dutch">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Dutch">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Dutch">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Dutch">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Dutch">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Dutch">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Dutch">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Dutch">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Dutch">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Dutch">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Dutch">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Dutch">0</a></td>
</tr>
<tr><td>English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=English">116</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=English">84</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=English">258</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=English">67</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=English">99</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=English">97</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=English">1070</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=English">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=English">1192</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=English">182</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=English">199</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=English">213</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=English">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=English">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=English">485</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=English">2</a></td>
</tr>
<tr><td>Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Estonian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Estonian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Estonian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Estonian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Estonian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Estonian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Estonian">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Estonian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Estonian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Estonian">0</a></td>
</tr>
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Finnish">115</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Finnish">367</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Finnish">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Finnish">94</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Finnish">1223</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Finnish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Finnish">213</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Finnish">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Finnish">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Finnish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Finnish">312</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Finnish">1</a></td>
</tr>
<tr><td>French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=French">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=French">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=French">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=French">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=French">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=French">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=French">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=French">370</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=French">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=French">73</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=French">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=French">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=French">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=French">71</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=French">1</a></td>
</tr>
<tr><td>German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=German">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=German">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=German">128</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=German">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=German">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=German">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=German">480</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=German">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=German">236</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=German">125</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=German">93</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=German">74</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=German">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=German">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=German">85</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=German">1</a></td>
</tr>
<tr><td>Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Gothic">201</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Gothic">259</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Gothic">163</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Gothic">146</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Gothic">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Gothic">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Gothic">708</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Gothic">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Gothic">355</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Gothic">74</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Gothic">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Gothic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Gothic">289</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Gothic">0</a></td>
</tr>
<tr><td>Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Greek">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Greek">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Greek">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Greek">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Greek">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Greek">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Greek">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Greek">0</a></td>
</tr>
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">133</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">1608</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">191</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">85</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">146</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">303</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">3</a></td>
</tr>
<tr><td>Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Hindi">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Hindi">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Hindi">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Hindi">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Hindi">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Hindi">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Hindi">83</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Hindi">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Hindi">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Hindi">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Hindi">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Hindi">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Hindi">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Hindi">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Hindi">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Hindi">0</a></td>
</tr>
<tr><td>Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">239</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">832</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">136</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">96</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">998</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">238</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">232</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">0</a></td>
</tr>
<tr><td>Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Irish">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Irish">438</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Irish">59</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Irish">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Irish">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Irish">629</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Irish">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Irish">244</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Irish">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Irish">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Irish">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Irish">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Irish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Irish">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Irish">9</a></td>
</tr>
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Italian">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Italian">733</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Italian">180</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Italian">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Italian">84</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Italian">109</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Italian">931</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Italian">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Italian">208</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Italian">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Italian">250</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Italian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Italian">228</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Italian">6</a></td>
</tr>
<tr><td>Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Latin">62</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Latin">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Latin">98</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Latin">59</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Latin">477</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Latin">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Latin">97</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Latin">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Latin">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Latin">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Latin">165</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Latin">1</a></td>
</tr>
<tr><td>Latin-ITT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">282</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">196</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">171</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">1198</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">468</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">129</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">615</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">0</a></td>
</tr>
<tr><td>Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">153</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">214</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">140</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">686</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">358</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">79</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">353</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">14</a></td>
</tr>
<tr><td>Norwegian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">504</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">516</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">164</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">61</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">106</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">275</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">859</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">492</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">291</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">117</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">185</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">111</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">408</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">5</a></td>
</tr>
<tr><td>Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">197</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">299</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">141</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">135</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">628</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">437</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">276</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">0</a></td>
</tr>
<tr><td>Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Persian">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Persian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Persian">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Persian">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Persian">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Persian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Persian">328</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Persian">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Persian">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Persian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Persian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Persian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Persian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Persian">0</a></td>
</tr>
<tr><td>Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Polish">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Polish">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Polish">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Polish">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Polish">839</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Polish">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Polish">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Polish">284</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Polish">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Polish">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Polish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Polish">154</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Polish">1</a></td>
</tr>
<tr><td>Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">150</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">895</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">799</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">131</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">103</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">2148</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">387</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">240</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">293</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">44</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">857</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">0</a></td>
</tr>
<tr><td>Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Romanian">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Romanian">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Romanian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Romanian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Romanian">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Romanian">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Romanian">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Romanian">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Romanian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Romanian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Romanian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Romanian">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Romanian">0</a></td>
</tr>
<tr><td>Slovenian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">176</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">78</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">239</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">145</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">982</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">353</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">73</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">341</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">1</a></td>
</tr>
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Spanish">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Spanish">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Spanish">88</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Spanish">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Spanish">67</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Spanish">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Spanish">595</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Spanish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Spanish">150</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Spanish">93</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Spanish">59</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Spanish">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Spanish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Spanish">178</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Spanish">3</a></td>
</tr>
<tr><td>Swedish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Swedish">162</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Swedish">63</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Swedish">204</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Swedish">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Swedish">225</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Swedish">119</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Swedish">405</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Swedish">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Swedish">103</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Swedish">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Swedish">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Swedish">118</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Swedish">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Swedish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Swedish">105</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Swedish">0</a></td>
</tr>
<tr><td>Tamil</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3C+%28_+%3Cxcomp+_%29&db=Tamil">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3C+%28_+%3Cxcomp+_%29&db=Tamil">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=INTJ+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3C+%28_+%3Cxcomp+_%29&db=Tamil">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3C+%28_+%3Cxcomp+_%29&db=Tamil">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3C+%28_+%3Cxcomp+_%29&db=Tamil">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3C+%28_+%3Cxcomp+_%29&db=Tamil">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3C+%28_+%3Cxcomp+_%29&db=Tamil">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3C+%28_+%3Cxcomp+_%29&db=Tamil">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3C+%28_+%3Cxcomp+_%29&db=Tamil">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek</span>
<span class="widespan">5828 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">1772 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Ancient_Greek-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Arabic</span>
<span class="widespan">3117 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Arabic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Basque</span>
<span class="widespan">2055 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Basque">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Bulgarian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Bulgarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Croatian</span>
<span class="widespan">1941 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Croatian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">3436 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Czech">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Danish</span>
<span class="widespan">680 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Danish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Dutch</span>
<span class="widespan">186 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Dutch">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">English</span>
<span class="widespan">4104 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=English">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Estonian</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Estonian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">2432 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">755 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">1358 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=German">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Gothic</span>
<span class="widespan">2283 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Gothic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Greek</span>
<span class="widespan">71 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Greek">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">2665 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hindi</span>
<span class="widespan">362 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Hindi">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Hungarian</span>
<span class="widespan">381 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Hungarian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">2792 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Indonesian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Irish</span>
<span class="widespan">1628 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Irish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">3011 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin</span>
<span class="widespan">1037 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Latin">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-ITT</span>
<span class="widespan">3222 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Latin-ITT">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">2043 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Latin-PROIEL">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Norwegian</span>
<span class="widespan">4113 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Norwegian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Old_Church_Slavonic</span>
<span class="widespan">2191 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Old_Church_Slavonic">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Persian</span>
<span class="widespan">549 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Persian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Polish</span>
<span class="widespan">1600 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Polish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Portuguese</span>
<span class="widespan">6101 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Portuguese">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Romanian</span>
<span class="widespan">134 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Romanian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Slovenian</span>
<span class="widespan">2528 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Slovenian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">1343 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Spanish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Swedish</span>
<span class="widespan">1638 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Swedish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Tamil</span>
<span class="widespan">150 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3C+%28_+%3Cxcomp+_%29&db=Tamil">Go to search</a><p/>
</div>
</div>


# Heads of xcomp

The heads of an xcomp dependency relation.

Search expression: `_ >xcomp _`

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


