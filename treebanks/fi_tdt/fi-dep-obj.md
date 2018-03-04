---
layout: base
title:  'Statistics of obj in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `obj`

This relation is universal.

11310 nodes (6%) are attached to their parents as `obj`.

7909 instances of `obj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.26189213085765.

The following 23 pairs of parts of speech are connected with `obj`: <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (8976; 79% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1730; 15% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (346; 3% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (122; 1% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-SYM.html">SYM</a></tt> (29; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (25; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (17; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (15; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (9; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fi-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fi-pos-ADP.html">ADP</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 obj	color:blue
1	Lopulta	lopulta	ADV	Adv	_	2	advmod	_	_
2	saatiin	saada	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	halikuva	hali#kuva	NOUN	N	Case=Nom|Number=Sing	4	obj	_	_
4	otettua	ottaa	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj	color:blue
1	On	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	_	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	_	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	Pronssiottelussa	pronssi#ottelu	NOUN	N	Case=Ine|Derivation=U|Number=Sing	3	obl	_	_
2	Kroatia	Kroatia	PROPN	N	Case=Nom|Number=Sing	3	nsubj	_	_
3	voitti	voittaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Alankomaat	Alankomaat	PROPN	N	Case=Nom|Number=Plur	3	obj	_	_
5	2–1	2–1	NUM	Num	NumType=Card	3	obl	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


