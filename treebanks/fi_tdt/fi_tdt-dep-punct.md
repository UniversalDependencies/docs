---
layout: base
title:  'Statistics of punct in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `punct`

This relation is universal.

29607 nodes (15%) are attached to their parents as `punct`.

17150 instances of `punct` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.16567028067687.

The following 14 pairs of parts of speech are connected with `punct`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (17790; 60% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (5753; 19% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (2001; 7% instances), <tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (1373; 5% instances), <tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (889; 3% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (660; 2% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (650; 2% instances), <tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (150; 1% instances), <tt><a href="fi_tdt-pos-X.html">X</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (138; 0% instances), <tt><a href="fi_tdt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (118; 0% instances), <tt><a href="fi_tdt-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (48; 0% instances), <tt><a href="fi_tdt-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (18; 0% instances), <tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="fi_tdt-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_tdt-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 9 punct	color:blue
1	Saavuin	saapua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	siis	siis	ADV	Adv	_	1	advmod	1:advmod	_
3	kaupunkiin	kaupunki	NOUN	N	Case=Ill|Number=Sing	1	obl	1:obl	_
4	kameraryhmäni	kamera#ryhmä	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	obl	1:obl	_
5	kanssa	kanssa	ADP	Adp	AdpType=Post	4	case	4:case	_
6	jo	jo	ADV	Adv	_	8	advmod	8:advmod	_
7	ennen	ennen	ADP	Adp	AdpType=Prep	8	case	8:case	_
8	yhtätoista	yksi#toista	NUM	Num	Case=Par|Number=Sing|NumType=Card	1	obl	1:obl	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 punct	color:blue
1	Bagelit	bagel	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	6:nsubj:cop	_
2	ja	ja	CCONJ	C	_	3	cc	3:cc	_
3	smoothiet	smoothie	NOUN	N	Case=Nom|Number=Plur	1	conj	1:conj|6:nsubj:cop	_
4	olivat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
5	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	6:amod	_
6	tapa	tapa	NOUN	N	Case=Nom|Number=Sing	0	root	0:root	_
7	aloittaa	aloittaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	6	acl	6:acl	_
8	aamu	aamu	NOUN	N	Case=Nom|Number=Sing	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 punct	color:blue
1	On	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	3:cop	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	3:advmod	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	7:punct	_
5	kun	kun	SCONJ	C	_	7	mark	7:mark	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	7:advmod	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	3:csubj:cop	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	3:punct	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	3:discourse	_

~~~


