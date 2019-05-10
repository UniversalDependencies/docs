---
layout: base
title:  'Statistics of goeswith in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `goeswith`

This relation is universal.

41 nodes (0%) are attached to their parents as `goeswith`.

41 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 12 pairs of parts of speech are connected with `goeswith`: <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (18; 44% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (12; 29% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Kannatamme	kannattaa	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	Ukrainan	Ukraina	PROPN	N	Case=Gen|Number=Sing	3	nmod:gobj	3:nmod:gobj	_
3	ottamista	ottaminen	NOUN	N	Case=Par|Derivation=Minen|Number=Sing	1	obj	1:obj	_
4	WTO:	WTO	NOUN	N	Abbr=Yes|Case=Ill|Number=Sing	3	nmod	3:nmod	_
5	hon	hon	NOUN	N	Case=Ill|Number=Sing|Typo=Yes	4	goeswith	4:goeswith	SpaceAfter=No
6	,	,	PUNCT	Punct	_	9	punct	9:punct	_
7	se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	9	nsubj:cop	9:nsubj:cop	_
8	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	selvä	selvä	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	1	conj	1:conj	SpaceAfter=No
10	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Kysymys	kysymys	NOUN	N	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
2	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	3:aux	_
3	kuulu	kuulua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	EU:	EU	PROPN	N	Abbr=Yes|Case=All|Number=Sing	3	obl	3:obl	_
5	lle	lle	NOUN	N	Case=All|Number=Sing|Typo=Yes	4	goeswith	4:goeswith	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 goeswith	color:blue
1	Komissio	komissio	NOUN	N	Case=Nom|Number=Sing	2	nsubj	2:nsubj|3:nsubj	_
2	halusi	haluta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	korvata	korvata	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	hintojen	hinta	NOUN	N	Case=Gen|Number=Plur	5	nmod:poss	5:nmod:poss	_
5	laskun	lasku	NOUN	N	Case=Gen|Derivation=U|Number=Sing	3	obj	3:obj	_
6	vain	vain	ADV	Adv	_	7	advmod	7:advmod	_
7	44	44	NUM	Num	NumType=Card	8	nummod	8:nummod	_
8	%:	%	SYM	Punct	_	3	obl	3:obl	_
9	lla	lla	NOUN	N	Case=Ade|Number=Sing|Typo=Yes	8	goeswith	8:goeswith	SpaceAfter=No
10	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


