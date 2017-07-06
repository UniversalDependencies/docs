---
layout: base
title:  'Universal Dependencies --- Syntactic validation'
udver:  '2'
---

Regenerated <time class="timeago" datetime="2017-07-06T15:58:37Z">2017-07-06T15:58:37 zulu</time>

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
<tr><th/>  </tr>
</table>
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
<tr><th/> <th>NOUN</th><th>NUM</th><th>VERB</th> </tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cflat%40R+_&db=UD_Turkish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cflat%40R+_&db=UD_Turkish-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cflat%40R+_&db=UD_Turkish-dev">1</a></td>
</tr>
</table>
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
<tr><th/> <th>DET</th> </tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cfixed%40R+_&db=UD_Turkish-dev">34</a></td>
</tr>
</table>
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
<tr><th/>  </tr>
</table>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>VERB</th> </tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Turkish-dev">29</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Turkish-dev">82</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Turkish-dev">143</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Turkish-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Turkish-dev">88</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Turkish-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Turkish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Turkish-dev">27</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Turkish-dev">106</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Turkish-dev">141</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Urdu-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cconj%40R+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cconj%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cconj%40R+_&db=UD_Uyghur-dev">1</a></td>
</tr>
</table>
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
<tr><th/> <th>ADJ</th><th>NOUN</th> </tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Turkish-dev">15</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Uyghur-dev">3</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cappos%40R+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos%40R+_&db=UD_Vietnamese-dev">1</a></td>
</tr>
</table>
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
<tr><th/> <th>ADJ</th><th>AUX</th><th>CCONJ</th><th>NOUN</th><th>VERB</th> </tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Turkish-dev">51</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Uyghur-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Uyghur-dev">1</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Ccop+_&db=UD_Vietnamese-dev">280</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Ccop+_&db=UD_Vietnamese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ccop+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">51 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21%28AUX%7CPRON%29%29+%3Ccop+_&db=UD_Turkish-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29+%3Cmark+_&db=UD_Urdu-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">939 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21DET%26%21PRON%29+%3Cdet+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">667 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">117 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21PUNCT+%3Cpunct+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">8 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">126 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">73 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3C%21punct%26%3C%21root%29+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">11 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">2526 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">1205 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">308 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">151 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28PRON%7CDET%29%26%21PronType&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">459 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">28 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">60 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM%26%21NumType&db=UD_Uyghur-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">1096 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">5224 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">2314 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">323 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">6404 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VERB%29%26%21VerbForm&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28VerbForm%3DFin%29%26%21%28VERB%7CAUX%29&db=UD_Urdu-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>VERB</th> </tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">33</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">47</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">48</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">37 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">72 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">57 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_+%3Ensubj%7C%3Ecsubj%7C%3Ensubj%3Apass%7C%3Ecsubj%3Apass+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADV</th><th>NOUN</th><th>NUM</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>VERB</th> </tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">66</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">87</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">88</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">1</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">378</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">66 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">104 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">98 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">386 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Eobj%7C%3Eccomp+_+%3Eobj%7C%3Eccomp+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Coptic-dev">1</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Turkish-dev">2</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Urdu-dev">32</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Uyghur-dev">2</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Vietnamese-dev">1</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Ccase+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">2 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">63 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">313 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">4 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">177 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3E%21conj%26%3E%21cc%26%3E%21punct%26%3E%21fixed+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/> <th>NOUN</th> </tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-dev">1</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cappos+%28_+%3Cappos+_%29&db=UD_Vietnamese-dev">1</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cappos+%28_+%3Cappos+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">1 hits</span>
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
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">145 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">8838 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">89 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21ADV%29+%3Cadvmod+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">2398 hits</span>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">53</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">11</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">314</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">45</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">46</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">183</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">20</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">78</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">68</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">2</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">37</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">204</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">73 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">314 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">467 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">13 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">244 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Cadvmod+%28NOUN%7CPROPN%7CNUM%7CPRON%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>INTJ</th><th>NUM</th><th>PART</th><th>PUNCT</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Coptic-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Coptic-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Coptic-dev">1</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Turkish-dev">100</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Turkish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Turkish-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Eacl+_&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Turkish-dev">7</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Turkish-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Turkish-dev">191</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Turkish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Urdu-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Eacl+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Urdu-dev">366</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Urdu-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Eacl+_&db=UD_Uyghur-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=INTJ+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Eacl+_&db=UD_Uyghur-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Eacl+_&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">312 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">376 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NOUN%26%21PROPN%26%21PRON%26%21DET+%3Eacl+_&db=UD_Uyghur-dev">Go to search</a><p/>
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
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Coptic-dev">23</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Turkish-dev">1146</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Urdu-dev">267</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Uyghur-dev">10</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Vietnamese-dev">49</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">23 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">1146 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">267 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">10 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3C%21nummod%26%3C%21nmod%26%3C%21compound%29+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">49 hits</span>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>NOUN</th><th>PRON</th> </tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Urdu-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Urdu-dev">2</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Cnummod+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3Cnummod+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Cnummod+_&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3Cnummod+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">9 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">1 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21NUM+%3Cnummod+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Coptic-dev">47</a></td>
</tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Turkish-dev">808</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Urdu-dev">1128</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Uyghur-dev">34</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">47 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">808 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">1128 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">34 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%28%3C%21aux%26%3C%21aux%3Apass%29+_&db=UD_Uyghur-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>CCONJ</th><th>DET</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">47</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">25</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">9</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">1</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">14</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=DET+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">361</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">52</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">83 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">32 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">3 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">432 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%21AUX+%28%3Caux%7C%3Caux%3Apass%29+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">80 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">38 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">90 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">5 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">1224 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=%28%21CCONJ%26%21SYM%26%21ADV%29+%3Ccc+_&db=UD_Vietnamese-dev">Go to search</a><p/>
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
<tr><th/> <th>ADJ</th><th>ADP</th><th>ADV</th><th>AUX</th><th>CCONJ</th><th>NOUN</th><th>NUM</th><th>PART</th><th>PRON</th><th>PROPN</th><th>PUNCT</th><th>SCONJ</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Turkish</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">23</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">5</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">8</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Uyghur</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADP+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADV+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PART+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PRON+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PUNCT+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=SCONJ+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">4</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">4</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Turkish</span>
<span class="widespan">45 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Turkish-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">11 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Uyghur</span>
<span class="widespan">6 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Uyghur-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">29 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3C+%28_+%3Ccc+_%29&db=UD_Vietnamese-dev">Go to search</a><p/>
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
</table>
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
</table>
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
</table>
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
<tr><th/> <th>ADJ</th><th>AUX</th><th>CCONJ</th><th>NOUN</th><th>NUM</th><th>PROPN</th><th>VERB</th><th>X</th> </tr>
<tr><td>UD_Coptic</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Coptic-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Coptic-dev">6</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Coptic-dev">65</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Coptic-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Urdu</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Urdu-dev">3</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Urdu-dev">405</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Urdu-dev">&nbsp;</a></td>
</tr>
<tr><td>UD_Vietnamese</td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=ADJ+%3Excomp+_&db=UD_Vietnamese-dev">196</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=AUX+%3Excomp+_&db=UD_Vietnamese-dev">&nbsp;</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=CCONJ+%3Excomp+_&db=UD_Vietnamese-dev">2</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NOUN+%3Excomp+_&db=UD_Vietnamese-dev">1082</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=NUM+%3Excomp+_&db=UD_Vietnamese-dev">1</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=PROPN+%3Excomp+_&db=UD_Vietnamese-dev">12</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=VERB+%3Excomp+_&db=UD_Vietnamese-dev">1206</a></td>
<td><a href="http://bionlp-www.utu.fi/dep_search/query?search=X+%3Excomp+_&db=UD_Vietnamese-dev">2</a></td>
</tr>
</table>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Coptic</span>
<span class="widespan">77 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Coptic-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Urdu</span>
<span class="widespan">408 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Urdu-dev">Go to search</a><p/>
</div>
<div>
<span class="doublewidespan" style="padding-left:3em">UD_Vietnamese</span>
<span class="widespan">2501 hits</span>
</div>
<div>
<a href="http://bionlp-www.utu.fi/dep_search/query?search=_+%3Excomp+_&db=UD_Vietnamese-dev">Go to search</a><p/>
</div>
</div>


