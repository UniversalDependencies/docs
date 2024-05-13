---
layout: base
title:  'Statistics of advmod:que in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `advmod:que`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="hu_szeged-dep-advmod-locy.html">advmod:locy</a></tt>, <tt><a href="hu_szeged-dep-advmod-mode.html">advmod:mode</a></tt>, <tt><a href="hu_szeged-dep-advmod-tfrom.html">advmod:tfrom</a></tt>, <tt><a href="hu_szeged-dep-advmod-tlocy.html">advmod:tlocy</a></tt>, <tt><a href="hu_szeged-dep-advmod-to.html">advmod:to</a></tt>, <tt><a href="hu_szeged-dep-advmod-tto.html">advmod:tto</a></tt>.

22 nodes (0%) are attached to their parents as `advmod:que`.

19 instances of `advmod:que` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31818181818182.

The following 2 pairs of parts of speech are connected with `advmod:que`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (20; 91% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (2; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:que	color:blue
1	Felvetődik	fel+vetődik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	a	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
3	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing	1	nsubj	_	SpaceAfter=No
4	:	:	PUNCT	_	_	7	punct	_	_
5	vajon	vajon	ADV	_	PronType=Int	7	advmod:que	_	_
6	végtelenné	végtelen	ADJ	_	Case=Tra|Degree=Pos|Number=Sing	7	obl	_	_
7	válik	válik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	SpaceAfter=No
8	?	?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 advmod:que	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	támadásokkal	támadás	NOUN	_	Case=Ins|Number=Plur	4	obl	_	_
3	párhuzamosan	párhuzamos	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	4	obl	_	_
4	folytatódik	folytatódik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
6	"	"	PUNCT	_	_	7	punct	_	SpaceAfter=No
7	rábeszélés	rábeszélés	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	SpaceAfter=No
8	"	"	PUNCT	_	_	7	punct	_	_
9	is	is	CCONJ	_	_	4	cc	_	SpaceAfter=No|ToDo=cc-in-coord
10	:	:	PUNCT	_	_	14	punct	_	_
11	az	az	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	albánok	albán	NOUN	_	Case=Nom|Number=Plur	14	nsubj	_	_
13	számtalanszor	számtalan	NUM	_	Case=Nom|Number=Sing|NumType=Card	14	obl	_	_
14	érdeklődnek	érdeklődik	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	_
15	szerb	szerb	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	16	amod:att	_	_
16	szomszédaiknál	szomszéd	NOUN	_	Case=Ade|Number=Plur|Number[psor]=Plur|Person[psor]=3	14	obl	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	eladó	eladó	ADJ	_	Case=Nom|Degree=Pos|Number=Sing|VerbForm=PartPres	14	ccomp:obl	_	_
19	-e	-e	ADV	_	PronType=Int	18	advmod:que	_	_
20	az	az	DET	_	Definite=Def|PronType=Art	21	det	_	_
21	ingatlan	ingatlan	NOUN	_	Case=Nom|Number=Sing	18	nsubj	_	SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	_	_

~~~


