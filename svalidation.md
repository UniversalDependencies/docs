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
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Ancient_Greek-PROIEL">5</a></td>
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
<tr><td>Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Czech">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Czech">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Czech">0</a></td>
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
<tr><td>Finnish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Finnish">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Finnish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Finnish">0</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=French">107</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=German">4659</a></td>
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
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Hebrew">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Hebrew">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Hebrew">0</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Indonesian">416</a></td>
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
<tr><td>Italian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Italian">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Italian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Italian">0</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Latin-PROIEL">6</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Persian">4</a></td>
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
<tr><td>Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cname%40R+_&db=Spanish">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PUNCT+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SYM+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cname%40R+_&db=Spanish">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=X+%3Cname%40R+_&db=Spanish">0</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Ancient_Greek-PROIEL</span>
<span class="widespan">5 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">Czech</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Czech">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">Finnish</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Finnish">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">French</span>
<span class="widespan">109 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=French">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">German</span>
<span class="widespan">4659 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Hebrew">Go to search</a><p/>
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
<span class="widespan">416 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">Italian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Italian">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Latin-PROIEL</span>
<span class="widespan">6 hits</span>
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
<span class="widespan">5 hits</span>
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
<div>
<span class="doublewidespan" style="padding-left:3em">Spanish</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cname%40R+_&db=Spanish">Go to search</a><p/>
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
<tr><td>Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Hebrew">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Hebrew">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Hebrew">0</a></td>
</tr>
<tr><td>Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Indonesian">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Indonesian">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Indonesian">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Indonesian">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Indonesian">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Indonesian">163</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Indonesian">35</a></td>
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
<tr><td>Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADJ+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADP+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=ADV+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=AUX+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=DET+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NOUN+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=NUM+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PART+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PRON+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=PROPN+%3Cmwe%40R+_&db=Japanese-KTC">0</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=SCONJ+%3Cmwe%40R+_&db=Japanese-KTC">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=VERB+%3Cmwe%40R+_&db=Japanese-KTC">1</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/?search=CONJ+%3Cmwe%40R+_&db=Persian">1</a></td>
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
<span class="doublewidespan" style="padding-left:3em">Hebrew</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Hebrew">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">Indonesian</span>
<span class="widespan">275 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">Japanese-KTC</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/?search=_+%3Cmwe%40R+_&db=Japanese-KTC">Go to search</a><p/>
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
<span class="widespan">14 hits</span>
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

Search expression: `_ expl> _`

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
</table>
</div>
</div>


