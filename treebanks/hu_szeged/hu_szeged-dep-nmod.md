---
layout: base
title:  'Statistics of nmod in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `nmod`

This relation is universal.
There are 3 language-specific subtypes of `nmod`: <tt><a href="hu_szeged-dep-nmod-att.html">nmod:att</a></tt>, <tt><a href="hu_szeged-dep-nmod-attlvc.html">nmod:attlvc</a></tt>, <tt><a href="hu_szeged-dep-nmod-obl.html">nmod:obl</a></tt>.

66 nodes (0%) are attached to their parents as `nmod`.

59 instances of `nmod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.

The following 13 pairs of parts of speech are connected with `nmod`: <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (25; 38% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (8; 12% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (7; 11% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (7; 11% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-DET.html">DET</a></tt> (4; 6% instances), <tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hu_szeged-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="hu_szeged-pos-X.html">X</a></tt>-<tt><a href="hu_szeged-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nmod	color:blue
1	Kiszivárogtatott	ki+szivárog	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	2	amod:att	_	_
2	információ	információ	NOUN	_	Case=Nom|Number=Sing	8	nmod	_	ToDo=nmod
3	szerint	szerint	ADP	_	_	2	case	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	6	det	_	_
5	valódi	valódi	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	6	amod:att	_	_
6	ok	ok	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
7	az	az	DET	_	Definite=Def|PronType=Art	8	det	_	_
8	értékesítés	értékesítés	NOUN	_	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	ideiglenes	ideiglenes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	3	amod:att	_	_
3	helyettesítés	helyettesítés	NOUN	_	Case=Nom|Number=Sing	4	nmod:att	_	_
4	dátumáról	dátum	NOUN	_	Case=Del|Number=Sing|Number[psor]=Sing|Person[psor]=3	8	obl	_	_
5	maga	maga	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nmod	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	államfő	államfő	NOUN	_	Case=Nom|Number=Sing	8	nsubj	_	_
8	dönt	dönt	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	írásban	írás	NOUN	_	Case=Ine|Number=Sing	8	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 nmod	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	Starbucks	Starbucks	PROPN	_	Case=Nom|Number=Sing	9	nsubj	_	_
3	ezt	ez	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	obj	_	_
4	követően	követő	ADJ	_	Case=Ess|Degree=Pos|Number=Sing|VerbForm=PartPres	9	nmod	_	ToDo=nmod
5	is	is	CCONJ	_	_	4	cc	_	ToDo=cc-without-conj
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	tőzsde	tőzsde	NOUN	_	Case=Nom|Number=Sing	9	nmod:att	_	_
8	egyik	egyik	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Ind	9	amod:att	_	_
9	kedvence	kedvenc	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	0	root	_	_
10	maradt	marad	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=No
11	,	,	PUNCT	_	_	20	punct	_	_
12	s	s	CCONJ	_	_	20	cc	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	befektetők	befektető	NOUN	_	Case=Nom|Number=Plur	20	nsubj	_	_
15	az	az	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	árfolyam-emelkedéssel	árfolyam-emelkedés	NOUN	_	Case=Ins|Number=Sing	20	obl	_	_
17	a	a	DET	_	Definite=Def|PronType=Art	19	det	_	_
18	lendületes	lendületes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	19	amod:att	_	_
19	terjeszkedést	terjeszkedés	NOUN	_	Case=Acc|Number=Sing	20	obj	_	_
20	honorálták	honorál	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	conj	_	SpaceAfter=No
21	.	.	PUNCT	_	_	9	punct	_	_

~~~


