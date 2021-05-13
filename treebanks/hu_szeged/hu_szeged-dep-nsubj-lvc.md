---
layout: base
title:  'Statistics of nsubj:lvc in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `nsubj:lvc`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-nsubj.html">nsubj</a></tt>.

3 nodes (0%) are attached to their parents as `nsubj:lvc`.

2 instances of `nsubj:lvc` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nsubj:lvc`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 nsubj:lvc	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	C	C	NOUN	_	Case=Nom|Number=Sing	6	nmod:att	_	_
3	és	és	CCONJ	_	_	5	cc	_	_
4	a	a	DET	_	Definite=Def|PronType=Art	5	det	_	_
5	D	D	NOUN	_	Case=Nom|Number=Sing	2	conj	_	_
6	csoport	csoport	NOUN	_	Case=Nom|Number=Sing	7	nmod:att	_	_
7	mérkőzéseire	mérkőzés	NOUN	_	Case=Sub|Number=Plur|Number[psor]=Sing|Person[psor]=3	14	obl	_	_
8	tegnap	tegnap	ADV	_	_	14	advmod:tlocy	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	első	első	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	11	amod:att	_	_
11	kiadásunk	kiadás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	12	nmod:att	_	_
12	zárása	zárás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	14	obl	_	_
13	után	után	ADP	_	_	12	case	_	_
14	került	kerül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
15	sor	sor	NOUN	_	Case=Nom|Number=Sing	14	nsubj:lvc	_	SpaceAfter=No
16	.	.	PUNCT	_	_	14	punct	_	_

~~~


