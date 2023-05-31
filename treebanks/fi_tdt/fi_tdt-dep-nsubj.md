---
layout: base
title:  'Statistics of nsubj in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="fi_tdt-dep-nsubj-cop.html">nsubj:cop</a></tt>, <tt><a href="fi_tdt-dep-nsubj-outer.html">nsubj:outer</a></tt>.

11673 nodes (6%) are attached to their parents as `nsubj`.

10300 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8747537051315.

The following 18 pairs of parts of speech are connected with `nsubj`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (6446; 55% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (3049; 26% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (2022; 17% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (60; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (35; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (23; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt> (20; 0% instances), <tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	“	“	PUNCT	Punct	_	3	punct	3:punct	SpaceAfter=No
2	Mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	3	nsubj	3:nsubj	_
3	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	6:punct	_
5	mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	6	nsubj	6:nsubj	_
6	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	3:conj	SpaceAfter=No
7	!	!	PUNCT	Punct	_	3	punct	3:punct	SpaceAfter=No
8	”	”	PUNCT	Punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Minttu	Minttu	PROPN	N	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	muuten	muuten	ADV	Adv	_	3	advmod	3:advmod	_
3	väitti	väittää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	aika	aika	ADV	Adv	_	5	advmod	5:advmod	_
5	hartaasti	hartaasti	ADV	Adv	Derivation=Sti	3	advmod	3:advmod	_
6	tätä	tämä	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	7	det	7:det	_
7	paitaa	paita	NOUN	N	Case=Par|Number=Sing	3	obj	3:obj	_
8	hameeksi	hame	NOUN	N	Case=Tra|Number=Sing	3	xcomp:ds	3:xcomp:ds	SpaceAfter=No
9	!	!	PUNCT	Punct	_	3	punct	3:punct	_

~~~


