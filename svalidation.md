---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
udver:  '2'
---

Regenerated <time class="timeago" datetime="2017-02-16T11:29:09Z">2017-02-16T11:29:09 zulu</time>

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
<tr><th/> <th>ADP</th><th>AUX</th><th>VERB</th> </tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Caux+%28_+%3Caux+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux+%28_+%3Caux+_%29&db=UD_Basque-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux+%28_+%3Caux+_%29&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Caux+%28_+%3Caux+_%29&db=UD_Galician-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux+%28_+%3Caux+_%29&db=UD_Galician-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux+%28_+%3Caux+_%29&db=UD_Galician-dev">10</a></td>
</tr>
<tr><td>UD_Japanese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Caux+%28_+%3Caux+_%29&db=UD_Japanese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux+%28_+%3Caux+_%29&db=UD_Japanese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux+%28_+%3Caux+_%29&db=UD_Japanese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Caux+%28_+%3Caux+_%29&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux+%28_+%3Caux+_%29&db=UD_Persian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux+%28_+%3Caux+_%29&db=UD_Persian-dev">1</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Caux+%28_+%3Caux+_%29&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux+%28_+%3Caux+_%29&db=UD_Urdu-dev">2340</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux+%28_+%3Caux+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Japanese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">2341 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Urdu-dev">Go to search</a><p/>
</div>
</div>


# Flat is right-headed

Flat relations should be left-headed, not right.

Search expression: `_ <flat@R _`

Correct example:

~~~ sdparse

Carl XVI Gustaf
flat(Carl, XVI)
flat(Carl, Gustaf)

~~~


Incorrect example:

~~~ sdparse

Carl XVI Gustaf
flat(Gustaf, XVI)
flat(Gustaf, Carl)

~~~


<a href="http://universaldependencies.org/u/dep/flat.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>NOUN</th><th>NUM</th><th>PROPN</th><th>VERB</th> </tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cflat%40R+_&db=UD_Romanian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cflat%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cflat%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cflat%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cflat%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cflat%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cflat%40R+_&db=UD_Turkish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cflat%40R+_&db=UD_Turkish-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cflat%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cflat%40R+_&db=UD_Turkish-dev">1</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cflat%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cflat%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
</div>


# Fixed is right-headed

Fixed expressions should be left-headed, not right.

Search expression: `_ <fixed@R _`

Correct example:

~~~ sdparse

He cried because of you
fixed(because, of)

~~~


Incorrect example:

~~~ sdparse

He cried because of you
fixed(of, because)

~~~


<a href="http://universaldependencies.org/u/dep/fixed.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>SCONJ</th><th>VERB</th> </tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed%40R+_&db=UD_French-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed%40R+_&db=UD_French-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Portuguese-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed%40R+_&db=UD_Portuguese-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Portuguese-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed%40R+_&db=UD_Portuguese-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Portuguese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Portuguese-dev">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cfixed%40R+_&db=UD_Portuguese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed%40R+_&db=UD_Portuguese-dev">4</a></td>
</tr>
<tr><td>UD_Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed%40R+_&db=UD_Romanian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Romanian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed%40R+_&db=UD_Romanian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Romanian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cfixed%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Turkish-dev">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">143 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
</div>


# Fixed chain

Fixed dependencies should not be chained. All dependents should be attached directly to the first one.

Search expression: `_ <fixed (_ <fixed _)`

<a href="http://universaldependencies.org/u/dep/fixed.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>PRON</th><th>VERB</th> </tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">13</a></td>
</tr>
<tr><td>UD_Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">79</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Russian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">117 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
</div>


# Conj is right-headed

Coordination dependencies should be left-headed, not right.

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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Croatian-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Croatian-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Danish-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Danish-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Danish-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Danish-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Danish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Danish-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Danish-dev">1</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_English-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_English-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_English-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_English-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_English-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_English-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_English-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Finnish-FTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">116</a></td>
</tr>
<tr><td>UD_French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_French-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_French-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_French-Sequoia</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_French-Sequoia-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_French-Sequoia-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_French-Sequoia-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-TreeGal</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Gothic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Gothic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Hungarian-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Hungarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Hungarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Hungarian-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Hungarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Hungarian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Hungarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Portuguese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Portuguese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Portuguese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Portuguese-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Portuguese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Romanian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Russian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Russian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Turkish-dev">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Turkish-dev">82</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Turkish-dev">143</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Turkish-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Turkish-dev">88</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Turkish-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Turkish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Turkish-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Turkish-dev">106</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Turkish-dev">141</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">77 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">91 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">31 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">141 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French-Sequoia</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_French-Sequoia-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-TreeGal</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Galician-TreeGal-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">632 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
</div>


# Appos is right-headed

Apposition dependencies should be left-headed, not right.

Search expression: `_ <appos@R _`

Correct example:

~~~ sdparse

Sam , my brother , arrived
appos(Sam, brother)

~~~


Incorrect example:

~~~ sdparse

Sam , my brother , arrived
appos(brother, Sam)

~~~


<a href="http://universaldependencies.org/u/dep/appos.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>CONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">60</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Arabic-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Arabic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Arabic-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Arabic-dev">126</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Arabic-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Arabic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Arabic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Arabic-dev">20</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Bulgarian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Catalan-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Chinese-dev">455</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Chinese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Chinese-dev">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Chinese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Chinese-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Chinese-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Chinese-dev">2</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Croatian-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Croatian-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Czech-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Czech-CAC-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Danish-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_English-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_English-dev">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_English-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_English-dev">2</a></td>
</tr>
<tr><td>UD_English-ESL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_English-ESL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_English-ESL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_French-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_French-dev">119</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_French-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_French-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_French-dev">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_French-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_French-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_French-dev">2</a></td>
</tr>
<tr><td>UD_French-Sequoia</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_French-Sequoia-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_German-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_German-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_German-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_German-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_German-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_German-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_German-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_German-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_German-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_German-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_German-dev">2</a></td>
</tr>
<tr><td>UD_Gothic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Gothic-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Gothic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Gothic-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Gothic-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Gothic-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Gothic-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Gothic-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Gothic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Hebrew-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Hebrew-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Hebrew-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Hungarian-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Hungarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Indonesian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Indonesian-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Indonesian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Indonesian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Indonesian-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Indonesian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Indonesian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Indonesian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Japanese-KTC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">430</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">110</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Korean</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Korean-dev">148</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Korean-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Korean-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Korean-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latin-ITTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">69</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">44</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">1</a></td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Persian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Persian-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Persian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Persian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Portuguese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Portuguese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Portuguese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-BR</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Romanian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Romanian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Romanian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Romanian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Russian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Russian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Russian-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Russian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Russian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Russian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Spanish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Spanish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Spanish-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Spanish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Spanish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Spanish-dev">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Spanish-dev">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Spanish-dev">6</a></td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Turkish-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Turkish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Uyghur-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CONJ+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">180 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">173 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">31 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">554 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">31 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">47 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">163 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French-Sequoia</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_French-Sequoia-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">81 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">50 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">40 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">551 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">164 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">158 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">40 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">125 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">59 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Copula is not AUX

Verbal copulas should be tagged AUX, not VERB. Pronouns can also serve as copulas. Punctuation (dashes) and nouns are not copulas.

Search expression: `(!(AUX|PRON)) <cop _`

<a href="http://universaldependencies.org/docs/u/dep/cop.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Ancient_Greek-dev">1582</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">3092</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Arabic-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Arabic-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Arabic-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Arabic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Arabic-dev">96</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Arabic-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Arabic-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Arabic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Arabic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Arabic-dev">30</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Belarusian-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Catalan-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Catalan-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Catalan-dev">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Chinese-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Czech-CAC-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Czech-CAC-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Czech-CAC-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Dutch-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Dutch-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Dutch-dev">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Dutch-dev">3</a></td>
</tr>
<tr><td>UD_English</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_English-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_English-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_English-ESL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_English-ESL-dev">2547</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_English-ESL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Finnish-FTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Finnish-FTB-dev">3425</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Finnish-FTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Finnish-FTB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_French</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_French-dev">4780</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_French-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_French-Sequoia</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_French-Sequoia-dev">596</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_French-Sequoia-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Galician-dev">643</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Galician-dev">134</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Galician-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Galician-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Galician-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Galician-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Galician-dev">461</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Galician-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Galician-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Galician-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Galician-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Galician-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Galician-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Galician-dev">397</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Galician-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-TreeGal</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Galician-TreeGal-dev">252</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Galician-TreeGal-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_German</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_German-dev">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_German-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_German-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_German-dev">81</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_German-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_German-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_German-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_German-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_German-dev">4518</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_German-dev">2</a></td>
</tr>
<tr><td>UD_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Greek-dev">437</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Hebrew</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Hebrew-dev">367</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Hebrew-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Hindi</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Hindi-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Hindi-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Hungarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Hungarian-dev">153</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Hungarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Irish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Irish-dev">291</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Irish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latin</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Latin-dev">208</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Latin-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latin-ITTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Latin-ITTB-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Latin-ITTB-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Latin-ITTB-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Latin-ITTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Latin-ITTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Latin-ITTB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Latin-PROIEL-dev">3468</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Latin-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Latvian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Latvian-dev">546</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Latvian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Persian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Persian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Persian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Polish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Polish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Polish-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Polish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-BR</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Portuguese-BR-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Portuguese-BR-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Portuguese-BR-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Portuguese-BR-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Portuguese-BR-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Portuguese-BR-dev">1951</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Portuguese-BR-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Sanskrit</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Sanskrit-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Sanskrit-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Spanish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Spanish-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Spanish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Spanish-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Spanish-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Spanish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Spanish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Spanish-dev">6084</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Spanish-dev">5</a></td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Spanish-AnCora-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Spanish-AnCora-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Spanish-AnCora-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Spanish-AnCora-dev">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Spanish-AnCora-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Spanish-AnCora-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Spanish-AnCora-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Swedish-LinES</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Swedish-LinES-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Swedish-LinES-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Turkish-dev">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ukrainian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Ukrainian-dev">142</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Ukrainian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Uyghur-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Vietnamese-dev">280</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Vietnamese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">1582 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">3092 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">205 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">38 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">47 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">94 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">2547 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">3427 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">4780 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French-Sequoia</span>
<span class="widespan">596 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_French-Sequoia-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">1681 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-TreeGal</span>
<span class="widespan">252 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Galician-TreeGal-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">4691 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">437 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">367 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">153 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">291 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">208 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">39 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">3468 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">546 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">1971 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">6149 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">54 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Swedish_Sign_Language-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">51 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">142 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">282 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


Traceback (most recent call last):
  File "docs-pages-source/gen_index/syn_validation_run.py", line 271, in <module>
    main(tests,test_cache,languages)
  File "docs-pages-source/gen_index/syn_validation_run.py", line 165, in main
    test_cache.setdefault(t["expr"],{})[l]=run_test(l,t["expr"])
  File "docs-pages-source/gen_index/syn_validation_run.py", line 127, in run_test
    assert hits
AssertionError
