---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
udver:  '2'
---

Regenerated <time class="timeago" datetime="2017-11-27T10:33:42Z">2017-11-27T10:33:42 zulu</time>

# Aux chain

Auxiliary dependencies should not form a chain.

Search expression: `_ <aux|<aux:pass|<cop (_ <aux|<aux:pass|<cop _)`

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
<tr><th/> <th>ADJ</th><th>AUX</th><th>CCONJ</th><th>PART</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-dev">126</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Arabic-NYUAD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Basque-dev">611</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Basque-dev">2</a></td>
</tr>
<tr><td>UD_Cantonese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Cantonese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Cantonese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CAC-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CLTT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">132 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">617 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
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
<tr><th/> <th>NOUN</th><th>NUM</th><th>PROPN</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cflat%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cflat%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cflat%40R+_&db=UD_Afrikaans-dev">20</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">14</a></td>
</tr>
<tr><td>UD_Bambara</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cflat%40R+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cflat%40R+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cflat%40R+_&db=UD_Bambara-dev">1</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cflat%40R+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cflat%40R+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cflat%40R+_&db=UD_Bambara-dev">Go to search</a><p/>
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
<tr><th/> <th>ADP</th><th>DET</th><th>NUM</th><th>PRON</th><th>PUNCT</th> </tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Dutch-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Dutch-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed%40R+_&db=UD_Dutch-dev">1</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cfixed%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cfixed%40R+_&db=UD_Dutch-LassySmall-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cfixed%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed%40R+_&db=UD_Dutch-LassySmall-dev">2</a></td>
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
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>AUX</th><th>NOUN</th><th>PUNCT</th><th>VERB</th> </tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-dev">3</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-LassySmall-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>AUX</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Afrikaans-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Afrikaans-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Afrikaans-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Afrikaans-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Afrikaans-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
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
<tr><td>UD_Cantonese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Cantonese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Cantonese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Croatian-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Croatian-dev">2</a></td>
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
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Danish-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Danish-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Danish-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Danish-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Danish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Danish-dev">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Danish-dev">1</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Dutch-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Afrikaans-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">95 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">64</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Basque-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Bulgarian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Catalan-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Chinese-dev">488</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Chinese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Chinese-dev">84</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Chinese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Chinese-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Chinese-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Chinese-dev">3</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Croatian-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Croatian-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Czech-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Czech-CAC-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Danish-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Danish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">196 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
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
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">597 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">17 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Afrikaans-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Ancient_Greek-dev">1864</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Arabic-PUD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Basque-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Buryat-dev">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Cantonese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Cantonese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Cantonese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Catalan-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Catalan-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Catalan-dev">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Chinese-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Chinese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-HK</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Chinese-HK-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Coptic-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Czech-CAC-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Czech-CAC-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Czech-CAC-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Czech-CLTT-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Ccop+_&db=UD_Czech-CLTT-dev">23</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">28 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">1864 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">78 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">45 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">25 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">48 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">30 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
</div>


# PRON or DET is mark

Pronouns must not be attached using the mark relation. Relative pronouns must not be confused with subordinating conjunctions, even if the word is ambiguous.

Search expression: `(PRON|DET) <mark _`

Correct example:

~~~ sdparse

This is a fact that we cannot ignore . You know that we cannot ignore it .
dobj(ignore-8, that-5)
mark(ignore-15, that-12)

~~~


Incorrect example:

~~~ sdparse

This is a fact that we cannot ignore .
mark(ignore-8, that-5)

~~~


<a href="http://universaldependencies.org/docs/u/dep/mark.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">191 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">177 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Relation det is used for node that is neither DET nor PRON

The det relation is primarily intended for determiners, i.e. words tagged DET. Pronouns are tolerated at least until the borderline between the two classes is better investigated and defined.

Search expression: `(!DET&!PRON) <det _`

<a href="http://universaldependencies.org/docs/u/dep/det.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">869 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">30 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">2996 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">176 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">404 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">126 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Relation punct is used for node that is not PUNCT

Only nodes tagged PUNCT can be attached using the punct relation.

Search expression: `!PUNCT <punct _`

<a href="http://universaldependencies.org/u/dep/punct.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
</div>


# PUNCT is attached as neither punct nor root

Nodes tagged PUNCT can only be attached using the punct relation (and exceptionally, if it is the only node in the sentence, also root).

Search expression: `PUNCT (<!punct&<!root) _`

<a href="http://universaldependencies.org/u/dep/punct.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">175 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">57 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">36 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">71 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# PRON or DET lacks the PronType feature

All pronouns and determiners should be further categorized using the PronType feature. Other POS may or may not have this feature.

Search expression: `(PRON|DET)&!PronType`

<a href="http://universaldependencies.org/docs/u/feat/PronType.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">24464 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">3470 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">6781 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">1466 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">4305 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">81 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">58 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">6598 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">3073 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">886 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">214 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">1065 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">542 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">760 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">24990 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">10915 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# NUM lacks the NumType feature

All numerals should be further categorized using the NumType feature. Other POS may or may not have this feature.

Search expression: `NUM&!NumType`

<a href="http://universaldependencies.org/docs/u/feat/NumType.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">218 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">230 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">1627 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">15108 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">371 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Bambara-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">4053 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">143 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">49 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">3634 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">3547 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# VERB lacks the VerbForm feature

All verbs should be further categorized using the VerbForm feature. Other POS may or may not have this feature. (Note that AUX may include non-verbs, thus we cannot generally extend this test to auxiliaries.)

Search expression: `(VERB)&!VerbForm`

<a href="http://universaldependencies.org/docs/u/feat/VerbForm.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">54841 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">1783 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Bambara-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">6352 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">629 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">120 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">18673 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">1316 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">378 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">3467 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">1410 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">169 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Danish-dev">Go to search</a><p/>
</div>
</div>


# Finite verb is not a verb

Only non-finite VerbForms are expected to appear with non-verb parts of speech (NOUN, ADJ, ADV).

Search expression: `(VerbForm=Fin)&!(VERB|AUX)`

<a href="http://universaldependencies.org/docs/u/feat/VerbForm.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
</div>


# Finite verb lacks the Mood feature

All finite verb forms should be further categorized using the Mood feature.

Search expression: `(VerbForm=Fin)&!Mood`

<a href="http://universaldependencies.org/docs/u/feat/Mood.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">375 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">19344 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">6376 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Degree feature used with a word that is neither adjective nor adverb

The Degree feature is normally associated with (a subset of) adjectives and adverbs. Other tags than ADJ and ADV are probably wrong.

Search expression: `Degree&!ADJ&!ADV`

<a href="http://universaldependencies.org/u/feat/Degree.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">23 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">1152 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">572 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">181 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
</div>


# Maximum one subject

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> No predicate can have more than one subject. Note that subordinate clauses do not head copulas for this reason.

Search expression: `_ >nsubj|>csubj|>nsubj:pass|>csubj:pass _ >nsubj|>csubj|>nsubj:pass|>csubj:pass _`

<a href="http://universaldependencies.org/u/dep/nsubj.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>VERB</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">255</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">17</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">46</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">55</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">212</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">1</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">31</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">1</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">1</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">142</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">84</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">1</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">4</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">2</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">45</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">55</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">14</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">5</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">9</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">159</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">61</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">14</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">257 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">81 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">302 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">218 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">90 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">65 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">68 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">173 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">75 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Maximum one object

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> No predicate can have more than one direct object. Ccomp counts as direct object. (To certain extent xcomp does too, but dobj can co-occur with xcomp in cases of secondary predication, thus this test does not look at xcomp.)

Search expression: `_ >obj|>ccomp _ >obj|>ccomp _`

<a href="http://universaldependencies.org/u/dep/obj.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">119</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">652</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">260</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">1193</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">1</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">54</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">5584</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">242</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-HK</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">82</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">223</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">394</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">158</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">124</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">66</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">1</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">159</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">61</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">129 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">661 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">1510 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">25 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">5779 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">242 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">82 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">232 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">426 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">169 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">130 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">67 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">170 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">66 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# NOUN and case

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> A word marked as a NOUN should not be a case dependency.

Search expression: `NOUN <case _`

<a href="http://universaldependencies.org/docs/u/dep/case.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>NOUN</th> </tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Ancient_Greek-dev">10</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Basque-dev">10</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Belarusian-dev">1</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Catalan-dev">340</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Chinese-CFL-dev">1</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Coptic-dev">2</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Croatian-dev">21</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-dev">645</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-CAC-dev">194</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-CLTT-dev">5</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-FicTree-dev">29</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-PUD-dev">4</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Dutch-dev">3</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">340 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">21 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">645 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">194 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
</div>


# ADP is not leaf

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> By default adposition is a leaf node attached to a nominal as case. Exceptions where adpositions are not leaves involve technical relations such as mwe and conj.

Search expression: `ADP >!conj&>!cc&>!punct&>!fixed _`

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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">251 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">119 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">879 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">92 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">526 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">383 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">244 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">74 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">430 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">39 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">217 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">186 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">88 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Appos chain

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> Apposition dependencies should not be chained. Multiple appositions should all be attached to the head, or they should be coordinated (with the first apposition as the head). Legitimate exceptions do occur, however, in the rare case when an apposition has an apposition of its own, which does not apply to head of the first apposition.

Search expression: `_ <appos (_ <appos _)`

Correct example:

~~~ sdparse

Sam , my brother , John 's cousin , arrived
appos(Sam, brother)
appos(Sam, cousin)

~~~


Incorrect example:

~~~ sdparse

Sam , my brother , John 's cousin , arrived
appos(Sam, brother)
appos(brother, cousin)

~~~


<a href="http://universaldependencies.org/u/dep/appos.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">219</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">69</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">204</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">15</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">50</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">113</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">1</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">1</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">1</a></td>
</tr>
<tr><td>UD_Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">79 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">498 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">73 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">142 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">30 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">63 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">42 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Relation advmod used for node that is not ADV

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> Advmod is intended only for adverbs. Modifiers that are called adverbial in some traditional grammars, but are in fact prepositional or noun phrases, should be attached as nmod.

Search expression: `(!ADV) <advmod _`

<a href="http://universaldependencies.org/docs/u/dep/advmod.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">206 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">16624 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">1643 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">216 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Bambara-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">2585 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">97 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">1466 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">86 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">2496 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">888 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">64 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">131 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">189 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">1275 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">2138 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">1177 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">161 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">1068 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">866 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">2783 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">881 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Heads of an advmod are nominal

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> The heads of an adverbial modifier should normally not be nominal (noun, proper noun, numeral, or pronoun). Exceptions occur in nominal clauses, where a nominal is the main predicate and can therefore take clause adverbials. Example: This is probably an exception.

Search expression: `_ <advmod (NOUN|PROPN|NUM|PRON)`

<a href="http://universaldependencies.org/docs/u/dep/advmod.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">124</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">76</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">1700</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">215</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">217</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">67</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">1324</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">1</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">165</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">963</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">8523</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">72</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bambara</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">1052</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">68</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Cantonese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">172</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">2086</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">1</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">245</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-HK</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">68</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">68</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">1</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">1429</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">116</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">65</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">2</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">2632</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">68</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">819</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">4</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">191</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">71</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">72</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">981</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">38</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">29</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">108</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">470</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">229</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">1</a></td>
</tr>
<tr><td>UD_Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">1621</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">1</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">131 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">3726 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">1132 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">8523 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">114 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bambara-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">71 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">45 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">1212 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">72 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">2404 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">321 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">42 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">75 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">94 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">1717 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">2738 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">885 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">51 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">264 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">38 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">1121 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">593 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">277 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">1622 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Acl not dependent on NOUN/PROPN/PRON/DET

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> Clausal modifiers of nouns should depend on NOUN/PROPN only; those in the following table depend on other parts of speech.

Search expression: `!NOUN&!PROPN&!PRON&!DET >acl _`

<a href="http://universaldependencies.org/u/dep/acl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>NUM</th><th>PART</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Ancient_Greek-dev">153</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Ancient_Greek-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Ancient_Greek-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">499</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Arabic-PUD-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Basque-dev">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Basque-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Basque-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Basque-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Basque-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Basque-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Belarusian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Bulgarian-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Bulgarian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Bulgarian-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Buryat-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Buryat-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Catalan-dev">149</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Catalan-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Catalan-dev">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Catalan-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Catalan-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Catalan-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Catalan-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Chinese-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Chinese-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Chinese-dev">261</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Chinese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Chinese-dev">2758</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Chinese-dev">13</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Chinese-CFL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Coptic-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Coptic-dev">1</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Croatian-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Croatian-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Croatian-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Croatian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Croatian-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Croatian-dev">2</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Czech-dev">121</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Czech-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Czech-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Czech-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Czech-dev">42</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Czech-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Czech-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Czech-CAC-dev">44</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Czech-CAC-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Czech-CAC-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Czech-CAC-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Czech-CAC-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Czech-CAC-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Czech-CLTT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Czech-FicTree-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Czech-FicTree-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Czech-FicTree-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Czech-FicTree-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Czech-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Czech-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Czech-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Czech-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Dutch-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Dutch-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Dutch-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Dutch-dev">4</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Dutch-LassySmall-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Dutch-LassySmall-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eacl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Dutch-LassySmall-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eacl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Dutch-LassySmall-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Dutch-LassySmall-dev">3</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">210 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">563 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">95 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">251 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">3082 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">80 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">197 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">108 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">36 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Marked as NUM but not nummod, nmod or compound

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> If a word is marked as a numeral (POS), then it should be marked as being a nummod, compound or nmod dependency. Exceptions occur when the numeral is promoted to a higher function through ellipis. Example: Take five!

Search expression: `NUM (<!nummod&<!nmod&<!compound) _`

<a href="http://universaldependencies.org/docs/u/pos/NUM.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>NUM</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Afrikaans-dev">56</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Ancient_Greek-dev">26</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Ancient_Greek-PROIEL-dev">593</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Arabic-NYUAD-dev">3065</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Arabic-PUD-dev">213</a></td>
</tr>
<tr><td>UD_Bambara</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Bambara-dev">1</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Basque-dev">2305</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Belarusian-dev">86</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Bulgarian-dev">255</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Buryat-dev">8</a></td>
</tr>
<tr><td>UD_Cantonese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Cantonese-dev">4</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Catalan-dev">2254</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-dev">333</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-CFL-dev">7</a></td>
</tr>
<tr><td>UD_Chinese-HK</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-HK-dev">8</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-PUD-dev">55</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Coptic-dev">27</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Croatian-dev">380</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-dev">17703</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-CAC-dev">2684</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-CLTT-dev">93</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-FicTree-dev">571</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-PUD-dev">123</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Danish-dev">112</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Dutch-dev">1583</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Dutch-LassySmall-dev">1639</a></td>
</tr>
<tr><td>UD_Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Estonian-dev">254</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">593 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">3065 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">213 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Bambara-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">2305 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">86 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">255 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">2254 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">333 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">27 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">380 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">17703 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">2684 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">93 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">571 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">123 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">112 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">1583 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">1639 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">254 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Marked as nummod but not NUM

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> If a word is marked as a numeric modifier, it should be marked as a numeral (POS).

Search expression: `!NUM <nummod _`

<a href="http://universaldependencies.org/docs/u/dep/nummod.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>PRON</th><th>PROPN</th><th>SYM</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Afrikaans-dev">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Afrikaans-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Afrikaans-dev">211</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Afrikaans-dev">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Arabic-PUD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Arabic-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Belarusian-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Buryat-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Buryat-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Catalan-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Catalan-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Catalan-dev">1</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Chinese-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Chinese-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Chinese-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Chinese-dev">5</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Chinese-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Croatian-dev">186</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Croatian-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Croatian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Croatian-dev">118</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Croatian-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Croatian-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Croatian-dev">1</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Czech-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Danish-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Danish-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Danish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Danish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Estonian-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Estonian-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">311 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">23 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">333 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Marked as AUX but not aux or aux:pass

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> If a word is marked as the auxiliary POS, it should be marked as either aux or aux:pass dependency.

Search expression: `AUX (<!aux&<!aux:pass) _`

<a href="http://universaldependencies.org/docs/u/pos/AUX_.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>AUX</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Afrikaans-dev">776</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">3575</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">6905</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Arabic-PUD-dev">153</a></td>
</tr>
<tr><td>UD_Bambara</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Bambara-dev">4</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Basque-dev">2485</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Belarusian-dev">22</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Bulgarian-dev">2577</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Buryat-dev">84</a></td>
</tr>
<tr><td>UD_Cantonese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Cantonese-dev">5</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Catalan-dev">5076</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-dev">1805</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-CFL-dev">75</a></td>
</tr>
<tr><td>UD_Chinese-HK</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-HK-dev">1</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-PUD-dev">251</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Coptic-dev">67</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Croatian-dev">4029</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-dev">20604</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-CAC-dev">8100</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-CLTT-dev">381</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-FicTree-dev">2208</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-PUD-dev">332</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Danish-dev">1760</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Dutch-dev">3975</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Dutch-LassySmall-dev">1366</a></td>
</tr>
<tr><td>UD_Erzya</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Erzya-dev">1</a></td>
</tr>
<tr><td>UD_Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Estonian-dev">2330</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">776 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">3575 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">6905 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">153 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Bambara-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">2485 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">2577 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">84 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">5076 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">1805 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">75 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">251 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">67 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">4029 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">20604 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">8100 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">381 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">2208 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">332 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">1760 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">3975 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">1366 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Erzya</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Erzya-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">2330 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Marked as aux or aux:pass but not AUX

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> If a word is marked as a (passive) auxiliary dependency, it should be marked as the auxiliary POS.

Search expression: `!AUX (<aux|<aux:pass) _`

<a href="http://universaldependencies.org/docs/u/dep/aux_.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">126</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">266</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">4886</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">1</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">94</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bambara</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">369</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">5</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">424</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">398</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">54</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">175</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">2</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">39 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">41 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">5402 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">96 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bambara</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bambara-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">387 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">25 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">424 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">398 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">92 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">236 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
</div>


# Marked as cc but not CCONJ, SYM or ADV

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> The relation cc is for coordinating conjunctions, hence the most expected POS tag is CCONJ. Symbols such as + may occasionally replace conjunctions, and in some languages some adverbs may take this syntactic function too. However, most other tags are suspicious at least.

Search expression: `(!CCONJ&!SYM&!ADV) <cc _`

<a href="http://universaldependencies.org/docs/u/dep/cc.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">54 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">4875 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">48 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">410 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">103 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">323 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">1228 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">1209 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">66 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">132 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">143 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">64 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


# Cc is not leaf

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> Coordinating conjunction should be attached to the first conjunct and it should not have its own dependents.

Search expression: `_ < (_ <cc _)`

<a href="http://universaldependencies.org/docs/u/dep/cc.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">855</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">152</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">429</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">269</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">329</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">110</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">88</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">166</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">69</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">35</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">3</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">48</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">628</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">277</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">130</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">554</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">73</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">151</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">188</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">101</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">71</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">313</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">203</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">12</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">3</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">2396 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">483 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">695 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">1555 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">258 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">336 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">278 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">89 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Parts of speech of expl

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> The parts of speech of words marked as being expletive dependencies.

Search expression: `_ <expl _`

<a href="http://universaldependencies.org/u/dep/expl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADP</th><th>ADV</th><th>AUX</th><th>DET</th><th>NOUN</th><th>PART</th><th>PRON</th><th>SCONJ</th> </tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Arabic-PUD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Bulgarian-dev">3380</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cexpl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cexpl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Croatian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Croatian-dev">1</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Danish-dev">404</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Danish-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Dutch-dev">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Dutch-dev">291</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">3380 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">441 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">413 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Dependents of expl

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> The dependents of a word marked as being an expletive dependency. This should be empty.

Search expression: `_ < (_ <expl _)`

<a href="http://universaldependencies.org/u/dep/expl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADP</th><th>ADV</th><th>PUNCT</th> </tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Cexpl+_%29&db=UD_Bulgarian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Cexpl+_%29&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=UD_Bulgarian-dev">1</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Cexpl+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Cexpl+_%29&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=UD_Croatian-dev">3</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Cexpl+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Cexpl+_%29&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Cexpl+_%29&db=UD_Dutch-dev">3</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
</div>


# Heads of expl

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> Parts of speech of words which have an expletive dependency.

Search expression: `_ >expl _`

<a href="http://universaldependencies.org/u/dep/expl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Arabic-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Arabic-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Arabic-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Arabic-PUD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eexpl+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Bulgarian-dev">61</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Bulgarian-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eexpl+_&db=UD_Bulgarian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Bulgarian-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eexpl+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Bulgarian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Bulgarian-dev">3272</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eexpl+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eexpl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eexpl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Croatian-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eexpl+_&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Danish-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Danish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Danish-dev">430</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eexpl+_&db=UD_Danish-dev">1</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Dutch-dev">155</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Dutch-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Dutch-dev">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Dutch-dev">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Dutch-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Dutch-dev">196</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eexpl+_&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">3367 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">441 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">413 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
</div>


# Heads of xcomp

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> Parts of speech of words which have an open clausal complement dependency.

Search expression: `_ >xcomp _`

<a href="http://universaldependencies.org/u/dep/xcomp.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Afrikaans-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Afrikaans-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Afrikaans-dev">186</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Afrikaans-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Afrikaans-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Afrikaans-dev">85</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Afrikaans-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Ancient_Greek</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Ancient_Greek-dev">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Ancient_Greek-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Ancient_Greek-dev">676</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Ancient_Greek-dev">568</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Ancient_Greek-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Ancient_Greek-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Ancient_Greek-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Ancient_Greek-dev">4092</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Ancient_Greek-dev">1</a></td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">3491</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Arabic-NYUAD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Arabic-NYUAD-dev">152</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Arabic-NYUAD-dev">439</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Arabic-NYUAD-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Arabic-NYUAD-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Arabic-NYUAD-dev">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Arabic-NYUAD-dev">6009</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Arabic-NYUAD-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Arabic-NYUAD-dev">157</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Arabic-NYUAD-dev">720</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Arabic-NYUAD-dev">505</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Arabic-NYUAD-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Arabic-NYUAD-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Arabic-NYUAD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Arabic-NYUAD-dev">2323</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Arabic-NYUAD-dev">9</a></td>
</tr>
<tr><td>UD_Arabic-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Arabic-PUD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Arabic-PUD-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Arabic-PUD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Arabic-PUD-dev">68</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Arabic-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Basque</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Basque-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Basque-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Basque-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Basque-dev">55</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Basque-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Basque-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Basque-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Basque-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Basque-dev">1287</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Basque-dev">4</a></td>
</tr>
<tr><td>UD_Belarusian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Belarusian-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Belarusian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Belarusian-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Belarusian-dev">77</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Belarusian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Bulgarian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Bulgarian-dev">733</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Bulgarian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Buryat-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Buryat-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Buryat-dev">150</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Buryat-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Cantonese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Cantonese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Cantonese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Catalan</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Catalan-dev">132</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Catalan-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Catalan-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Catalan-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Catalan-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Catalan-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Catalan-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Catalan-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Catalan-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Catalan-dev">2270</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Catalan-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Chinese-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Chinese-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Chinese-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Chinese-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Chinese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Chinese-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Chinese-dev">1653</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Chinese-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-CFL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Chinese-CFL-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Chinese-CFL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Chinese-CFL-dev">123</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Chinese-CFL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-HK</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Chinese-HK-dev">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Chinese-HK-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Chinese-PUD-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Chinese-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Chinese-PUD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Chinese-PUD-dev">424</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Chinese-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Coptic-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Coptic-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Coptic-dev">84</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Croatian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Croatian-dev">135</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Croatian-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Croatian-dev">228</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Croatian-dev">51</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Croatian-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Croatian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Croatian-dev">2471</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Croatian-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Czech-dev">822</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Czech-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Czech-dev">311</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Czech-dev">1420</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Czech-dev">33</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Czech-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Czech-dev">271</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Czech-dev">391</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Czech-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Czech-dev">15046</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Czech-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CAC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Czech-CAC-dev">247</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Czech-CAC-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Czech-CAC-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Czech-CAC-dev">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Czech-CAC-dev">782</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Czech-CAC-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Czech-CAC-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Czech-CAC-dev">97</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Czech-CAC-dev">63</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Czech-CAC-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Czech-CAC-dev">4098</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Czech-CAC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Czech-CLTT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Czech-CLTT-dev">82</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Czech-CLTT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Czech-CLTT-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Czech-CLTT-dev">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Czech-CLTT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Czech-CLTT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Czech-CLTT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Czech-CLTT-dev">135</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Czech-CLTT-dev">3</a></td>
</tr>
<tr><td>UD_Czech-FicTree</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Czech-FicTree-dev">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Czech-FicTree-dev">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Czech-FicTree-dev">164</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Czech-FicTree-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Czech-FicTree-dev">154</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Czech-FicTree-dev">36</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Czech-FicTree-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Czech-FicTree-dev">2512</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Czech-FicTree-dev">1</a></td>
</tr>
<tr><td>UD_Czech-PUD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Czech-PUD-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Czech-PUD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Czech-PUD-dev">234</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Czech-PUD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Danish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Danish-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Danish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Danish-dev">481</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Danish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Dutch-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Dutch-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Dutch-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Dutch-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Dutch-dev">1342</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Dutch-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Dutch-LassySmall-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Dutch-LassySmall-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Dutch-LassySmall-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Dutch-LassySmall-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Dutch-LassySmall-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Dutch-LassySmall-dev">300</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Dutch-LassySmall-dev">1</a></td>
</tr>
<tr><td>UD_Estonian</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Estonian-dev">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Estonian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Estonian-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Estonian-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Estonian-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Estonian-dev">1266</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Estonian-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans</span>
<span class="widespan">299 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Afrikaans-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">5470 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">3492 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-NYUAD</span>
<span class="widespan">10455 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Arabic-NYUAD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic-PUD</span>
<span class="widespan">89 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Arabic-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">1385 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Belarusian</span>
<span class="widespan">109 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Belarusian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">733 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">158 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Cantonese</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Cantonese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">2440 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">1716 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-CFL</span>
<span class="widespan">128 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Chinese-CFL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-HK</span>
<span class="widespan">21 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Chinese-HK-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-PUD</span>
<span class="widespan">458 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Chinese-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">121 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">2926 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">18322 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">5443 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">276 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-FicTree</span>
<span class="widespan">2953 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-FicTree-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-PUD</span>
<span class="widespan">249 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-PUD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">490 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">1382 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">332 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">1321 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
</div>


