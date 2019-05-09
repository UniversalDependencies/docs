---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
udver:  '2'
---

Regenerated <time class="timeago" datetime="2019-05-09T16:56:12Z">2019-05-09T16:56:12 zulu</time>

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
<tr><th/> <th>ADJ</th><th>AUX</th><th>PART</th><th>VERB</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-AfriBooms-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-AfriBooms-dev">126</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-AfriBooms-dev">4</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Breton-KEB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Faroese-OFT-dev">1</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Galician-CTG-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Galician-CTG-dev">11</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Marathi-UFAL-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Old_French-SRCMF-dev">1</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Uyghur-UDT-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Uyghur-UDT-dev">4</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Vietnamese-VTB-dev">49</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">132 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">49 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+%28_+%3Caux%7C%3Caux%3Apass%7C%3Ccop+_%29&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
</table>
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
<tr><th/>  </tr>
</table>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>AUX</th><th>NOUN</th><th>VERB</th> </tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-BDT-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-BDT-dev">3</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cfixed+%28_+%3Cfixed+_%29&db=UD_Buryat-BDT-dev">Go to search</a><p/>
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
<tr><th/>  </tr>
</table>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">488</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">84</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">3</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">80</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">597 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">23 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">98 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos%40R+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>INTJ</th><th>NOUN</th><th>PART</th><th>PROPN</th><th>PUNCT</th><th>VERB</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Amharic-ATT-dev">1</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Breton-KEB-dev">220</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Buryat-BDT-dev">77</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Chinese-GSD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Faroese-OFT-dev">875</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Marathi-UFAL-dev">1</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Old_French-SRCMF-dev">2961</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Portuguese-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Portuguese-GSD-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Portuguese-GSD-dev">17</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">12</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Uyghur-UDT-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Uyghur-UDT-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Uyghur-UDT-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Uyghur-UDT-dev">31</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Vietnamese-VTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">28 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">220 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">78 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">875 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">2962 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">39 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">75 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">303 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">77 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">30 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">2996 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">1197 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">178 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">886 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">202 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">42 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">30 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">3036 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">1227 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">3073 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">214 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">29819 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">1823 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">420 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">330 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">5269 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">33514 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">3473 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">216 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tagalog-TRG</span>
<span class="widespan">63 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Tagalog-TRG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">1268 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">1864 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">1120 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">691 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Warlpiri-UFAL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Warlpiri-UFAL-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">218 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">216 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">239 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">2362 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">24 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">99 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">31 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">74 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">669 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">1485 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">78 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">629 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">18673 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">1333 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">12983 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">17379 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">27567 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">51 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">648 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tagalog-TRG</span>
<span class="widespan">33 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Tagalog-TRG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">1463 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">2366 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">4262 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">8582 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Warlpiri-UFAL</span>
<span class="widespan">45 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Warlpiri-UFAL-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">375 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">89 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">589 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">27997 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21Mood&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">60 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=Degree%26%21ADJ%26%21ADV&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>VERB</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">254</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">75</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">1</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">1</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">84</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">55</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">570</a></td>
</tr>
<tr><td>UD_Japanese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">21</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">125</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">3</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">1</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">3</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">7</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">261</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">12</a></td>
</tr>
<tr><td>UD_Sanskrit-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">1</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
</tr>
<tr><td>UD_Telugu-MTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">3</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">1</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">21</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">67</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">256 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">78 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">90 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">665 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">181 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">295 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">15 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">80 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>DET</th><th>NOUN</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>VERB</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">119</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">16</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">5</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">242</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">178</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">1930</a></td>
</tr>
<tr><td>UD_Japanese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">22</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">4</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">1</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">6</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">177</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">245</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">46</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">3</a></td>
</tr>
<tr><td>UD_Sanskrit-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">1</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">6</a></td>
</tr>
<tr><td>UD_Telugu-MTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">19</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">25</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">519</a></td>
</tr>
<tr><td>UD_Warlpiri-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">2</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">129 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">242 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">2159 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">177 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">250 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">533 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Warlpiri-UFAL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Warlpiri-UFAL-dev">Go to search</a><p/>
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
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Amharic-ATT-dev">1</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Faroese-OFT-dev">1</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Galician-CTG-dev">120</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Kurmanji-MG-dev">8</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Lithuanian-HSE-dev">1</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Old_French-SRCMF-dev">2</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Portuguese-GSD-dev">34</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Russian-GSD-dev">1</a></td>
</tr>
<tr><td>UD_Telugu-MTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Telugu-MTG-dev">1</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Turkish-GB-dev">6</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Uyghur-UDT-dev">107</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Vietnamese-VTB-dev">1</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">120 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">107 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">251 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">244 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">1150 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">102 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">31 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">156 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tagalog-TRG</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Tagalog-TRG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">72 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">260 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">15</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">84</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">126</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">238</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">4</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">64</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">38</a></td>
</tr>
<tr><td>UD_Upper_Sorbian-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">3</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">464 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">175 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">206 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">369 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">86 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">888 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">668 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">853 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">128 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">58 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">184 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">5531 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">93 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">958 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">36 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tagalog-TRG</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Tagalog-TRG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">2057 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">3332 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Warlpiri-UFAL</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Warlpiri-UFAL-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>INTJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">124</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">131</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">68</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">245</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">58</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">113</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">340</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">64</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Japanese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">245</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">203</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">30</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">223</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">1004</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">132</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">882</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">1772</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">41</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">1</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">292</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">235</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Sanskrit-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Telugu-MTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">62</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Upper_Sorbian-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">34</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">56</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">89</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">94</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">1</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">54</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">315</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">131 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">131 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">72 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">321 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">120 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">410 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">455 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">39 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">223 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">1023 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">1014 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">1834 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">535 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">62 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">35 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">328 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">376 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>NUM</th><th>PART</th><th>PUNCT</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Amharic-ATT-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Breton-KEB-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Breton-KEB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Breton-KEB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Breton-KEB-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Buryat-BDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Buryat-BDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Chinese-GSD-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Chinese-GSD-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Chinese-GSD-dev">261</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Chinese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Chinese-GSD-dev">2758</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Chinese-GSD-dev">13</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Faroese-OFT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Faroese-OFT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Japanese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Japanese-GSD-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Japanese-GSD-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Japanese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Japanese-GSD-dev">40</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Japanese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Kurmanji-MG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Lithuanian-HSE-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Lithuanian-HSE-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Lithuanian-HSE-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Lithuanian-HSE-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Marathi-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_North_Sami-Giella-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_North_Sami-Giella-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Old_French-SRCMF-dev">106</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Old_French-SRCMF-dev">32</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Old_French-SRCMF-dev">181</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Polish-LFG-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Russian-GSD-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Russian-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Russian-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Russian-GSD-dev">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Russian-GSD-dev">7</a></td>
</tr>
<tr><td>UD_Sanskrit-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Turkish-GB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Upper_Sorbian-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Uyghur-UDT-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Eacl+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Uyghur-UDT-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">3082 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">67 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">319 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">67 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">49 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
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
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Afrikaans-AfriBooms-dev">56</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Amharic-ATT-dev">7</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Breton-KEB-dev">94</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Buryat-BDT-dev">8</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-GSD-dev">333</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Faroese-OFT-dev">76</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Galician-CTG-dev">1045</a></td>
</tr>
<tr><td>UD_Japanese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Japanese-GSD-dev">115</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Kurmanji-MG-dev">97</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Lithuanian-HSE-dev">8</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Marathi-UFAL-dev">6</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_North_Sami-Giella-dev">104</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Polish-LFG-dev">88</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Portuguese-GSD-dev">1065</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Russian-GSD-dev">1365</a></td>
</tr>
<tr><td>UD_Sanskrit-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Sanskrit-UFAL-dev">5</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">14</a></td>
</tr>
<tr><td>UD_Telugu-MTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Telugu-MTG-dev">12</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Turkish-GB-dev">63</a></td>
</tr>
<tr><td>UD_Upper_Sorbian-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Upper_Sorbian-UFAL-dev">149</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Uyghur-UDT-dev">214</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Vietnamese-VTB-dev">85</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">94 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">333 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">76 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">1045 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">115 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">97 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">104 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">88 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">1065 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">1365 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">12 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">63 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">149 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">214 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">85 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>PRON</th><th>PROPN</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">52</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">211</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Amharic-ATT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Breton-KEB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Buryat-BDT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Buryat-BDT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Chinese-GSD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Chinese-GSD-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Chinese-GSD-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Chinese-GSD-dev">5</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Faroese-OFT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Faroese-OFT-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Marathi-UFAL-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">133</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">558</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Portuguese-GSD-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Portuguese-GSD-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Portuguese-GSD-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Russian-GSD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Telugu-MTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Telugu-MTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Uyghur-UDT-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Uyghur-UDT-dev">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">311 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">23 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">738 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">46 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">63 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">776</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Amharic-ATT-dev">102</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Buryat-BDT-dev">84</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-GSD-dev">1805</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Galician-CTG-dev">1540</a></td>
</tr>
<tr><td>UD_Japanese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Japanese-GSD-dev">2362</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Kurmanji-MG-dev">295</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">76</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Marathi-UFAL-dev">68</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_North_Sami-Giella-dev">617</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Polish-LFG-dev">3345</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Portuguese-GSD-dev">2146</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Russian-GSD-dev">214</a></td>
</tr>
<tr><td>UD_Sanskrit-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Sanskrit-UFAL-dev">14</a></td>
</tr>
<tr><td>UD_Tagalog-TRG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Tagalog-TRG-dev">1</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Turkish-GB-dev">574</a></td>
</tr>
<tr><td>UD_Upper_Sorbian-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Upper_Sorbian-UFAL-dev">240</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Uyghur-UDT-dev">578</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">412</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">776 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">102 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">84 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">1805 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">1540 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">2362 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">295 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">76 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">68 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">617 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">3345 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">2146 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">214 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">14 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Tagalog-TRG</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Tagalog-TRG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">574 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">240 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">578 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">412 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">39</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">600</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">511</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">424</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">104</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">1345</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">19</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">124</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">947</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">4322</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">15</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">24</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">266</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">500</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">60</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">39 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">1115 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">56 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">424 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">104 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">1364 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">144 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">947 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">4332 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">25 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">287 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">588 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">54 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">8 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">55 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Japanese-GSD</span>
<span class="widespan">628 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Japanese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">22 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">149 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">485 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>SYM</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">2</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">8</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">49</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">94</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">26</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Upper_Sorbian-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">28</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">106</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SYM+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">5</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">48 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">89 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">24 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">49 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">78 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">150 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">26 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">40 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">134 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
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
<tr><th/> <th>ADV</th><th>AUX</th><th>NOUN</th><th>PART</th><th>PRON</th><th>PUNCT</th><th>SCONJ</th> </tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Amharic-ATT-dev">1143</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cexpl+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Breton-KEB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Faroese-OFT-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">1440</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">2</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Cexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cexpl+_&db=UD_Russian-GSD-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Cexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">1147 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">1446 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">25 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cexpl+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>AUX</th><th>DET</th><th>NOUN</th><th>PART</th><th>PRON</th><th>VERB</th> </tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">12</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">7 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">16 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Cexpl+_%29&db=UD_Russian-GSD-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>VERB</th> </tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Amharic-ATT-dev">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Amharic-ATT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Amharic-ATT-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Amharic-ATT-dev">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Amharic-ATT-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Amharic-ATT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Amharic-ATT-dev">837</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Breton-KEB-dev">2</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Faroese-OFT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Faroese-OFT-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Faroese-OFT-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Faroese-OFT-dev">3</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">10</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">1391</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Eexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eexpl+_&db=UD_Russian-GSD-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eexpl+_&db=UD_Russian-GSD-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eexpl+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">931 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">18 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">1446 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">25 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eexpl+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>SCONJ</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Afrikaans-AfriBooms</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">186</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">85</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Amharic-ATT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Amharic-ATT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Amharic-ATT-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Amharic-ATT-dev">122</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Amharic-ATT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Breton-KEB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Breton-KEB-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Breton-KEB-dev">57</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Breton-KEB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Buryat-BDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Buryat-BDT-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Buryat-BDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Buryat-BDT-dev">150</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Buryat-BDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Chinese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Chinese-GSD-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Chinese-GSD-dev">22</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Chinese-GSD-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Chinese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Chinese-GSD-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Chinese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Chinese-GSD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Chinese-GSD-dev">1653</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Chinese-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Faroese-OFT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Faroese-OFT-dev">43</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Faroese-OFT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Galician-CTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Galician-CTG-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Galician-CTG-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Galician-CTG-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Galician-CTG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Galician-CTG-dev">31</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Galician-CTG-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Galician-CTG-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Galician-CTG-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Galician-CTG-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Galician-CTG-dev">501</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Galician-CTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Kurmanji-MG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Kurmanji-MG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Kurmanji-MG-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Kurmanji-MG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Lithuanian-HSE</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Lithuanian-HSE-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Lithuanian-HSE-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Lithuanian-HSE-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Lithuanian-HSE-dev">92</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Lithuanian-HSE-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Marathi-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Marathi-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Marathi-UFAL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Marathi-UFAL-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Marathi-UFAL-dev">16</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Marathi-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_North_Sami-Giella</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_North_Sami-Giella-dev">13</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_North_Sami-Giella-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_North_Sami-Giella-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_North_Sami-Giella-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_North_Sami-Giella-dev">144</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_North_Sami-Giella-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Old_French-SRCMF</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Old_French-SRCMF-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Old_French-SRCMF-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Old_French-SRCMF-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Old_French-SRCMF-dev">2495</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Old_French-SRCMF-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Polish-LFG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Polish-LFG-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Polish-LFG-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Polish-LFG-dev">2211</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Polish-LFG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Portuguese-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Portuguese-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Portuguese-GSD-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Portuguese-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Portuguese-GSD-dev">956</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Portuguese-GSD-dev">1</a></td>
</tr>
<tr><td>UD_Russian-GSD</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Russian-GSD-dev">88</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Russian-GSD-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Russian-GSD-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Russian-GSD-dev">913</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Russian-GSD-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Sanskrit-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">17</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Swedish_Sign_Language-SSLC</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">1</a></td>
</tr>
<tr><td>UD_Telugu-MTG</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Telugu-MTG-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Telugu-MTG-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish-GB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Turkish-GB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Turkish-GB-dev">114</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Turkish-GB-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Upper_Sorbian-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">86</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur-UDT</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Uyghur-UDT-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Uyghur-UDT-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Uyghur-UDT-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese-VTB</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Vietnamese-VTB-dev">248</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Vietnamese-VTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Vietnamese-VTB-dev">1490</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Vietnamese-VTB-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Vietnamese-VTB-dev">18</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Vietnamese-VTB-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Vietnamese-VTB-dev">1583</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Vietnamese-VTB-dev">2</a></td>
</tr>
<tr><td>UD_Warlpiri-UFAL</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Afrikaans-AfriBooms</span>
<span class="widespan">299 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Afrikaans-AfriBooms-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Amharic-ATT</span>
<span class="widespan">136 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Amharic-ATT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Breton-KEB</span>
<span class="widespan">58 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Breton-KEB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Buryat-BDT</span>
<span class="widespan">158 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Buryat-BDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Chinese-GSD</span>
<span class="widespan">1716 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Chinese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Faroese-OFT</span>
<span class="widespan">43 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Faroese-OFT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Galician-CTG</span>
<span class="widespan">608 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Galician-CTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Kurmanji-MG</span>
<span class="widespan">19 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Kurmanji-MG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Lithuanian-HSE</span>
<span class="widespan">109 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Lithuanian-HSE-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Marathi-UFAL</span>
<span class="widespan">20 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Marathi-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_North_Sami-Giella</span>
<span class="widespan">165 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_North_Sami-Giella-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Old_French-SRCMF</span>
<span class="widespan">2522 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Old_French-SRCMF-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Polish-LFG</span>
<span class="widespan">2226 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Polish-LFG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Portuguese-GSD</span>
<span class="widespan">965 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Portuguese-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Russian-GSD</span>
<span class="widespan">1007 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Russian-GSD-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Sanskrit-UFAL</span>
<span class="widespan">17 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Sanskrit-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Swedish_Sign_Language-SSLC</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Swedish_Sign_Language-SSLC-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Telugu-MTG</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Telugu-MTG-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish-GB</span>
<span class="widespan">116 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Turkish-GB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Upper_Sorbian-UFAL</span>
<span class="widespan">94 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Upper_Sorbian-UFAL-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur-UDT</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Uyghur-UDT-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese-VTB</span>
<span class="widespan">3345 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Vietnamese-VTB-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Warlpiri-UFAL</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Warlpiri-UFAL-dev">Go to search</a><p/>
</div>
</div>


