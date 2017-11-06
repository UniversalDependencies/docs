---
layout: base
title:  'Statistics of det in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `det`

This relation is universal.

3477 nodes (2%) are attached to their parents as `det`.

3426 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35893011216566.

The following 13 pairs of parts of speech are connected with `det`: <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (3155; 91% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (128; 4% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (92; 3% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (30; 1% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (23; 1% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (18; 1% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (13; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (12; 0% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	sisäinen	sisäinen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	3	amod	_	_
3	lapseni	lapsi	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	7:nsubj	_
4	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	6	aux	_	_
5	vaan	vaan	ADV	Adv	_	6	advmod	_	_
6	suostu	suostua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	katoamaan	kadota	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Tai	tai	CCONJ	C	_	4	cc	8:cc	_
2	sitten	sitten	ADV	Adv	_	4	advmod	8:advmod	_
3	kivoja	kiva	ADJ	A	Case=Par|Degree=Pos|Number=Plur	4	amod	_	_
4	kenkiä	kenkä	NOUN	N	Case=Par|Number=Plur	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	8	punct	_	_
6	mutta	mutta	CCONJ	C	_	8	cc	_	_
7	niitä	se	PRON	Pron	Case=Par|Number=Plur|PronType=Dem	8	det	_	_
8	samoja	sama	PRON	Pron	Case=Par|Number=Plur|PronType=Ind	4	conj	_	_
9	joka	joka	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	10	det	_	_
10	päivä	päivä	NOUN	N	Case=Nom|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Mallistosta	mallisto	NOUN	N	Case=Ela|Number=Sing	2	obl	_	_
2	löytyi	löytyä	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	4	det	_	_
4	kivaa	kiva	ADJ	A	Case=Par|Degree=Pos|Number=Sing	2	nsubj	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


