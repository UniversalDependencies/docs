---
layout: base
title:  'Statistics of nsubj in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="fi_tdt-dep-nsubj-cop.html">nsubj:cop</a></tt>.

11668 nodes (6%) are attached to their parents as `nsubj`.

10298 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87649982859102.

The following 18 pairs of parts of speech are connected with `nsubj`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (6440; 55% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (3044; 26% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (2025; 17% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (58; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (41; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (22; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt> (20; 0% instances), <tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	“	“	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	3	nsubj	_	_
3	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	6	nsubj	_	_
6	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
7	!	!	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
8	”	”	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Minttu	Minttu	PROPN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	muuten	muuten	ADV	Adv	_	3	advmod	_	_
3	väitti	väittää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	aika	aika	ADV	Adv	_	5	advmod	_	_
5	hartaasti	hartaasti	ADV	Adv	Derivation=Sti	3	advmod	_	_
6	tätä	tämä	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	7	det	_	_
7	paitaa	paita	NOUN	N	Case=Par|Number=Sing	3	obj	_	_
8	hameeksi	hame	NOUN	N	Case=Tra|Number=Sing	3	xcomp:ds	_	SpaceAfter=No
9	!	!	PUNCT	Punct	_	3	punct	_	_

~~~


