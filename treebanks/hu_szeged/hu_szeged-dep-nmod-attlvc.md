---
layout: base
title:  'Statistics of nmod:attlvc in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `nmod:attlvc`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="hu_szeged-dep-nmod-att.html">nmod:att</a></tt>, <tt><a href="hu_szeged-dep-nmod-obl.html">nmod:obl</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:attlvc`.

1 instances of `nmod:attlvc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:attlvc`: <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:attlvc	color:blue
1	Ezért	ezért	ADV	_	PronType=Dem	2	advmod:mode	_	_
2	siettették	siet	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Cau	0	root	_	_
3	az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
4	ítélet	ítélet	NOUN	_	Case=Nom|Number=Sing	5	nmod:attlvc	_	_
5	meghozatalával	meghozatal	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obl	_	_
6	az	az	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	ügy	ügy	NOUN	_	Case=Nom|Number=Sing	8	nmod:att	_	_
8	lezárását	lezárás	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	2	obj	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	és	és	CCONJ	_	_	13	cc	_	_
11	arra	az	PRON	_	Case=Sub|Number=Sing|Person=3|PronType=Dem	13	obl	_	_
12	is	is	CCONJ	_	_	11	cc	_	ToDo=cc-without-conj
13	számíthattak	számít	VERB	_	Definite=Ind|Mood=Pot|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
14	:	:	PUNCT	_	_	22	punct	_	_
15	az	az	DET	_	Definite=Def|PronType=Art	17	det	_	_
16	önálló	önálló	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	17	amod:att	_	_
17	Szlovákia	Szlovákia	PROPN	_	Case=Nom|Number=Sing	18	nmod:att	_	_
18	megteremtésének	megteremtés	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nmod:att	_	_
19	láza	láz	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	22	nsubj	_	_
20	el	el	ADV	_	_	22	compound:preverb	_	_
21	is	is	ADV	_	_	22	advmod:mode	_	_
22	tereli	terel	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	13	ccomp:obl	_	_
23	a	a	DET	_	Definite=Def|PronType=Art	24	det	_	_
24	figyelmet	figyelem	NOUN	_	Case=Acc|Number=Sing	22	obj	_	_
25	a	a	DET	_	Definite=Def|PronType=Art	27	det	_	_
26	gyanús	gyanús	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	27	amod:att	_	_
27	körülményekről	körülmény	NOUN	_	Case=Del|Number=Plur	22	obl	_	SpaceAfter=No
28	.	.	PUNCT	_	_	2	punct	_	_

~~~


