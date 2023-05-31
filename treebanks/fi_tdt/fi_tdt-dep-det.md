---
layout: base
title:  'Statistics of det in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `det`

This relation is universal.

3485 nodes (2%) are attached to their parents as `det`.

3434 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36183644189383.

The following 8 pairs of parts of speech are connected with `det`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (3195; 92% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (109; 3% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (94; 3% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (32; 1% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (15; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	3:det	_
2	sisäinen	sisäinen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	3	amod	3:amod	_
3	lapseni	lapsi	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	6:nsubj|7:nsubj	_
4	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
5	vaan	vaan	ADV	Adv	_	6	advmod	6:advmod	_
6	suostu	suostua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	katoamaan	kadota	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	xcomp	6:xcomp	SpaceAfter=No
8	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Tai	tai	CCONJ	C	_	4	cc	4:cc|8:cc	_
2	sitten	sitten	ADV	Adv	_	4	advmod	4:advmod|8:advmod	_
3	kivoja	kiva	ADJ	A	Case=Par|Degree=Pos|Number=Plur	4	amod	4:amod	_
4	kenkiä	kenkä	NOUN	N	Case=Par|Number=Plur	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	Punct	_	8	punct	8:punct	_
6	mutta	mutta	CCONJ	C	_	8	cc	8:cc	_
7	niitä	se	PRON	Pron	Case=Par|Number=Plur|PronType=Dem	8	det	8:det	_
8	samoja	sama	PRON	Pron	Case=Par|Number=Plur|PronType=Ind	4	conj	4:conj	_
9	joka	joka	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	10	det	10:det	_
10	päivä	päivä	NOUN	N	Case=Nom|Number=Sing	8	nmod	8:nmod	SpaceAfter=No
11	.	.	PUNCT	Punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Mallistosta	mallisto	NOUN	N	Case=Ela|Number=Sing	2	obl	2:obl	_
2	löytyi	löytyä	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	4	det	4:det	_
4	kivaa	kiva	ADJ	A	Case=Par|Degree=Pos|Number=Sing	2	nsubj	2:nsubj	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


