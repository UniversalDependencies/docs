---
layout: base
title:  'Statistics of cc:preconj in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="fi_tdt-dep-cc.html">cc</a></tt>.

161 nodes (0%) are attached to their parents as `cc:preconj`.

155 instances of `cc:preconj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57142857142857.

The following 14 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (79; 49% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (18; 11% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (18; 11% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (18; 11% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (9; 6% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (7; 4% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Olet	olla	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	joko	joko	CCONJ	C	_	3	cc:preconj	3:cc:preconj	_
3	euron	euro	NOUN	N	Case=Gen|Number=Sing	1	obl	1:obl	_
4	puolesta	puolesta	ADP	Adp	AdpType=Post	3	case	3:case	_
5	tai	tai	CCONJ	C	_	6	cc	6:cc	_
6	sitä	se	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	3	conj	1:obl|3:conj	_
7	vastaan	vastaan	ADP	Adp	AdpType=Post	6	case	6:case	SpaceAfter=No
8	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Olet	olla	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop|5:cop	_
2	joko	joko	CCONJ	C	_	3	cc:preconj	3:cc:preconj	_
3	hyvä	hyvä	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	_
4	tai	tai	CCONJ	C	_	5	cc	5:cc	_
5	huono	huono	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	conj	3:conj	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Me	minä	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	2:nsubj	_
2	olemme	olla	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	sen	se	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	2	obj	2:obj	_
4	velkaa	velka	NOUN	N	Case=Par|Number=Sing	2	obl	2:obl	_
5	sekä	sekä	CCONJ	C	_	6	cc:preconj	6:cc:preconj	_
6	Turkille	Turkki	PROPN	N	Case=All|Number=Sing	2	obl	2:obl	_
7	että	että	CCONJ	C	_	9	cc	9:cc	_
8	omille	oma	ADJ	A	Case=All|Degree=Pos|Number=Plur	9	amod	9:amod	_
9	kansalaisillemme	kansalainen	NOUN	N	Case=All|Derivation=Lainen|Number=Plur|Number[psor]=Plur|Person[psor]=1	6	conj	2:obl|6:conj	SpaceAfter=No
10	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


