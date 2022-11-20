---
layout: base
title:  'Statistics of obj in UD_Finnish-TDT'
udver: '2'
---

## Treebank Statistics: UD_Finnish-TDT: Relations: `obj`

This relation is universal.

11310 nodes (6%) are attached to their parents as `obj`.

7908 instances of `obj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26100795755968.

The following 14 pairs of parts of speech are connected with `obj`: <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (9012; 80% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (1740; 15% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-PROPN.html">PROPN</a></tt> (346; 3% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt> (123; 1% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-SYM.html">SYM</a></tt> (30; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-NUM.html">NUM</a></tt> (17; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (10; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="fi_tdt-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fi_tdt-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fi_tdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_tdt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_tdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Lopulta	lopulta	ADV	Adv	_	2	advmod	2:advmod	_
2	saatiin	saada	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	halikuva	hali#kuva	NOUN	N	Case=Nom|Number=Sing	4	obj	4:obj	_
4	otettua	ottaa	VERB	V	Case=Par|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	xcomp	2:xcomp	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj	color:blue
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


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Pronssiottelussa	pronssi#ottelu	NOUN	N	Case=Ine|Derivation=U|Number=Sing	3	obl	3:obl	_
2	Kroatia	Kroatia	PROPN	N	Case=Nom|Number=Sing	3	nsubj	3:nsubj	_
3	voitti	voittaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	Alankomaat	Alankomaat	PROPN	N	Case=Nom|Number=Plur	3	obj	3:obj	_
5	2–1	2–1	NUM	Num	NumType=Card	3	obl	3:obl	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	3:punct	_

~~~


