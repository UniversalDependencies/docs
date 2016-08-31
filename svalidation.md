---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
---

Regenerated <time class="timeago" datetime="2016-08-31T10:24:49Z">2016-08-31T10:24:49 zulu</time>

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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux+%28_+%3Caux+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cname%40R+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe%40R+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# MWE chain

MWE dependencies should not be chained. All dependents should be attached directly to the first one.

Search expression: `_ <mwe (_ <mwe _)`

<a href="http://universaldependencies.org/u/dep/mwe.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cmwe+%28_+%3Cmwe+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Foreign is right-headed

Foreign dependencies should be left-headed, not right.

Search expression: `_ <foreign@R _`

<a href="http://universaldependencies.org/u/dep/foreign.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign%40R+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Foreign chain

Foreign dependencies should not be chained. All dependents should be attached directly to the first one. If we wish to annotate real syntactic structure of foreign material, we must not use the foreign relation.

Search expression: `_ <foreign (_ <foreign _)`

<a href="http://universaldependencies.org/u/dep/foreign.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cforeign+%28_+%3Cforeign+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cconj%40R+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Non-passive subject with passive auxiliary

A passive auxiliary implies that the subject is passive, too.

Search expression: `_ >nsubj|>csubj _ >auxpass|>auxpass:refl _`

Correct example:

~~~ sdparse

The reconstruction was finished yesterday .
nsubjpass(finished, reconstruction)
auxpass(finished, was)

~~~


Incorrect example:

~~~ sdparse

The reconstruction was finished yesterday .
nsubj(finished, reconstruction)
auxpass(finished, was)

~~~


<a href="http://universaldependencies.org/docs/u/dep/nsubjpass.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj+_+%3Eauxpass%7C%3Eauxpass%3Arefl+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Passive subject of a NOUN

Nouns may have subjects in copula-like constructions. Copula-like constructions may be passive if the predicate is passive participle. But a combination of the two cases seems too much.

Search expression: `_ <nsubjpass NOUN`

<a href="http://universaldependencies.org/docs/u/dep/nsubjpass.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cnsubjpass+NOUN&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Copula is not VERB

Copulas should always be main verbs. Not auxiliaries, not punctuation (dashes) and definitely not nominals.

Search expression: `(!VERB) <cop _`

<a href="http://universaldependencies.org/docs/u/dep/cop.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21VERB%29+%3Ccop+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# PRON is mark

Pronouns must not be attached using the mark relation. Relative pronouns must not be confused with subordinating conjunctions, even if the word is ambiguous.

Search expression: `PRON <mark _`

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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cmark+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# VERB or AUX lacks the VerbForm feature

All verbs should be further categorized using the VerbForm feature. Other POS may or may not have this feature.

Search expression: `(VERB|AUX)&!VerbForm`

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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%7CAUX%29%26%21VerbForm&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Maximum one subject

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> No predicate can have more than one subject. Note that subordinate clauses do not head copulas for this reason.

Search expression: `_ >nsubj|>csubj|>nsubjpass|>csubjpass _ >nsubj|>csubj|>nsubjpass|>csubjpass _`

<a href="http://universaldependencies.org/u/dep/nsubj.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubjpass%7C%3Ecsubjpass+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Maximum one direct object

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> No predicate can have more than one direct object. Ccomp counts as direct object. (To certain extent xcomp does too, but dobj can co-occur with xcomp in cases of secondary predication, thus this test does not look at xcomp.)

Search expression: `_ >dobj|>ccomp _ >dobj|>ccomp _`

<a href="http://universaldependencies.org/u/dep/dobj.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Edobj%7C%3Eccomp+_+%3Edobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Case not dependent on nmod

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> If a word is marked as having a case dependency, its head should usually be marked as being a nominal modifier. But note that several legitimate exceptions occur, in particular, through coordination (where the head is labeled conj instead of nmod) and in nominal clauses (where the head is the main predicate of a clause). Also, in some languages case can modify also objects and other nominals.

Search expression: `_ <case (_ (<!nmod&<!nmod:agent&<!conj) _)`

<a href="http://universaldependencies.org/u/dep/case.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ccase+%28_+%28%3C%21nmod%26%3C%21nmod%3Aagent%26%3C%21conj%29+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# ADP is not leaf

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> By default adposition is a leaf node attached to a nominal as case. Exceptions where adpositions are not leaves involve technical relations such as mwe and conj.

Search expression: `ADP >!conj&>!cc&>!punct&>!mwe&>!foreign _`

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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21mwe%26%3E%21foreign+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Acl not dependent on NOUN/PROPN/PRON

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> Clausal modifiers of nouns should depend on NOUN/PROPN only; those in the following table depend on other parts of speech.

Search expression: `!PRON&!NOUN&!PROPN >acl _`

<a href="http://universaldependencies.org/u/dep/acl.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PRON%26%21NOUN%26%21PROPN+%3Eacl+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Marked as AUX but not aux or auxpass

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> If a word is marked as the auxiliary POS, it should be marked as either aux or auxpass dependency.

Search expression: `AUX (<!aux&<!auxpass) _`

<a href="http://universaldependencies.org/docs/u/pos/AUX_.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21auxpass%29+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Marked as aux or auxpass but not AUX

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> If a word is marked as a (passive) auxiliary dependency, it should be marked as the auxiliary POS.

Search expression: `!AUX (<aux|<auxpass) _`

<a href="http://universaldependencies.org/docs/u/dep/aux_.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
<table>
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Cauxpass%29+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Marked as cc but not CONJ, SYM or ADV

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> The relation cc is for coordinating conjunctions, hence the most expected POS tag is CONJ. Symbols such as + may occasionally replace conjunctions, and in some languages some adverbs may take this syntactic function too. However, most other tags are suspicious at least.

Search expression: `!CONJ&!SYM&!ADV <cc _`

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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21CONJ%26%21SYM%26%21ADV+%3Ccc+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


# Marked as neg but not PART or ADV

<b>DEBUGGING TEST. NONZERO HITS DOES NOT MEAN THE DATA IS INVALID.</b> The neg relation is used to attach negating particles (sometimes also tagged as adverbs; but we probably want to choose just one tag), such as English <i>not</i>, to the predicate or phrase they negate. It is not used for negative determiners such as English <i>no</i> in <i>there is no chance</i>, which should be attached as det.

Search expression: `!PART&!ADV <neg _`

<a href="http://universaldependencies.org/docs/u/dep/neg.html">Link to documentation</a>

<div id="accordion" class="jquery-ui-accordion">
<div>
<span class="doublewidespan" style="padding-left:3em">Hit overview</span>
<span class="widespan"> </span>
</div>
<div>
Hits table not produced since the query does not start with the simple token spec '_'. Please add 'expr-pos' to the test which starts with '_' that will be substituted for the various POS in the links
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PART%26%21ADV+%3Cneg+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
<tr><td>UD_Amharic</td>
</tr>
<tr><td>UD_Ancient_Greek</td>
</tr>
<tr><td>UD_Ancient_Greek-PROIEL</td>
</tr>
<tr><td>UD_Arabic</td>
</tr>
<tr><td>UD_Basque</td>
</tr>
<tr><td>UD_Bulgarian</td>
</tr>
<tr><td>UD_Buryat</td>
</tr>
<tr><td>UD_Catalan</td>
</tr>
<tr><td>UD_Chinese</td>
</tr>
<tr><td>UD_Coptic</td>
</tr>
<tr><td>UD_Croatian</td>
</tr>
<tr><td>UD_Czech</td>
</tr>
<tr><td>UD_Czech-CAC</td>
</tr>
<tr><td>UD_Czech-CLTT</td>
</tr>
<tr><td>UD_Danish</td>
</tr>
<tr><td>UD_Dutch</td>
</tr>
<tr><td>UD_Dutch-LassySmall</td>
</tr>
<tr><td>UD_English</td>
</tr>
<tr><td>UD_English-ESL</td>
</tr>
<tr><td>UD_English-LinES</td>
</tr>
<tr><td>UD_Estonian</td>
</tr>
<tr><td>UD_Finnish</td>
</tr>
<tr><td>UD_Finnish-FTB</td>
</tr>
<tr><td>UD_French</td>
</tr>
<tr><td>UD_Galician</td>
</tr>
<tr><td>UD_German</td>
</tr>
<tr><td>UD_Gothic</td>
</tr>
<tr><td>UD_Greek</td>
</tr>
<tr><td>UD_Hebrew</td>
</tr>
<tr><td>UD_Hindi</td>
</tr>
<tr><td>UD_Hungarian</td>
</tr>
<tr><td>UD_Indonesian</td>
</tr>
<tr><td>UD_Irish</td>
</tr>
<tr><td>UD_Italian</td>
</tr>
<tr><td>UD_Japanese-KTC</td>
</tr>
<tr><td>UD_Kazakh</td>
</tr>
<tr><td>UD_Korean</td>
</tr>
<tr><td>UD_Latin</td>
</tr>
<tr><td>UD_Latin-ITTB</td>
</tr>
<tr><td>UD_Latin-PROIEL</td>
</tr>
<tr><td>UD_Latvian</td>
</tr>
<tr><td>UD_Norwegian</td>
</tr>
<tr><td>UD_Old_Church_Slavonic</td>
</tr>
<tr><td>UD_Persian</td>
</tr>
<tr><td>UD_Polish</td>
</tr>
<tr><td>UD_Portuguese</td>
</tr>
<tr><td>UD_Portuguese-BR</td>
</tr>
<tr><td>UD_Romanian</td>
</tr>
<tr><td>UD_Russian</td>
</tr>
<tr><td>UD_Russian-SynTagRus</td>
</tr>
<tr><td>UD_Sanskrit</td>
</tr>
<tr><td>UD_Slovenian</td>
</tr>
<tr><td>UD_Slovenian-SST</td>
</tr>
<tr><td>UD_Spanish</td>
</tr>
<tr><td>UD_Spanish-AnCora</td>
</tr>
<tr><td>UD_Swedish</td>
</tr>
<tr><td>UD_Swedish-LinES</td>
</tr>
<tr><td>UD_Tamil</td>
</tr>
<tr><td>UD_Turkish</td>
</tr>
<tr><td>UD_Ukrainian</td>
</tr>
<tr><td>UD_Uyghur</td>
</tr>
<tr><td>UD_Vietnamese</td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Amharic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Ancient_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ancient_Greek-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Ancient_Greek-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Arabic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Arabic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Basque</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Basque-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Bulgarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Bulgarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Buryat-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Catalan</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Catalan-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Chinese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Croatian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Croatian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CAC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-CAC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Czech-CLTT</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Czech-CLTT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Danish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Danish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Dutch-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Dutch-LassySmall</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Dutch-LassySmall-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_English-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-ESL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_English-ESL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_English-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_English-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Estonian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Estonian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Finnish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Finnish-FTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Finnish-FTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_French</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_French-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Galician-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_German</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_German-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Gothic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Gothic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Greek</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Greek-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hebrew</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Hebrew-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hindi</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Hindi-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Hungarian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Hungarian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Indonesian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Indonesian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Irish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Irish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Italian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Italian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-KTC</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Japanese-KTC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kazakh</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Kazakh-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Korean</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Korean-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Latin-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-ITTB</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Latin-ITTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latin-PROIEL</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Latin-PROIEL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Latvian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Latvian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Norwegian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Norwegian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_Church_Slavonic</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Old_Church_Slavonic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Persian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Persian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Polish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Portuguese-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-BR</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Portuguese-BR-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Romanian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Romanian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Russian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-SynTagRus</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Russian-SynTagRus-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Sanskrit-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Slovenian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Slovenian-SST</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Slovenian-SST-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Spanish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Spanish-AnCora</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Spanish-AnCora-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Swedish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish-LinES</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Swedish-LinES-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tamil</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Tamil-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Ukrainian</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Ukrainian-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">0 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


