---
layout: base
title:  'Statistics of advmod:tfrom in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `advmod:tfrom`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-advmod.html">advmod</a></tt>.
There are also 6 other language-specific subtypes of `advmod`: <tt><a href="hu_szeged-dep-advmod-locy.html">advmod:locy</a></tt>, <tt><a href="hu_szeged-dep-advmod-mode.html">advmod:mode</a></tt>, <tt><a href="hu_szeged-dep-advmod-que.html">advmod:que</a></tt>, <tt><a href="hu_szeged-dep-advmod-tlocy.html">advmod:tlocy</a></tt>, <tt><a href="hu_szeged-dep-advmod-to.html">advmod:to</a></tt>, <tt><a href="hu_szeged-dep-advmod-tto.html">advmod:tto</a></tt>.

18 nodes (0%) are attached to their parents as `advmod:tfrom`.

15 instances of `advmod:tfrom` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22222222222222.

The following 5 pairs of parts of speech are connected with `advmod:tfrom`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (11; 61% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (3; 17% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (2; 11% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 advmod:tfrom	color:blue
1	Farkas	Farkas	PROPN	_	Case=Nom|Number=Sing	5	nsubj	_	_
2	Helga	Helga	PROPN	_	Case=Nom|Number=Sing	1	flat:name	_	_
3	azóta	azóta	ADV	_	PronType=Dem	5	advmod:tfrom	_	_
4	nem	nem	ADV	_	PronType=Neg	5	advmod	_	_
5	került	kerül	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	elő	elő	ADV	_	Degree=Pos	5	compound:preverb	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod:tfrom	color:blue
1	Közülük	közül	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	advmod:tfrom	_	_
2	már	már	ADV	_	_	6	advmod:tlocy	_	_
3	csak	csak	ADV	_	_	6	advmod:mode	_	_
4	33	33	NUM	_	Case=Nom|Number=Sing|NumType=Card	5	compound	_	_
5	millióan	millió	NUM	_	Case=Ess|Number=Sing|NumType=Card	6	nsubj	_	_
6	élek	él	VERB	_	Definite=Ind|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod:tfrom	color:blue
1	Az	az	DET	_	Definite=Def|PronType=Art	4	det	_	_
2	azóta	azóta	ADV	_	PronType=Dem	3	advmod:tfrom	_	_
3	eltelt	eltelt	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPast	4	amod:att	_	_
4	évtizedek	évtized	NOUN	_	Case=Nom|Number=Plur	19	obl	_	_
5	alatt	alatt	ADP	_	_	4	case	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	8	det	_	_
7	fiatal	fiatal	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	8	amod:att	_	_
8	baritonistából	baritonista	NOUN	_	Case=Ela|Number=Sing	19	obl	_	_
9	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
10	magyar	magyar	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	amod:att	_	_
11	zenei	zenei	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	12	amod:att	_	_
12	élet	élet	NOUN	_	Case=Nom|Number=Sing	15	nmod:att	_	_
13	egyik	egyik	DET	_	Definite=Def|PronType=Ind	15	det	_	_
14	vezető	vezető	ADJ	_	Case=Nom|Number=Sing|VerbForm=PartPres	15	amod:att	_	_
15	alakja	alak	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	19	nsubj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	élő	élő	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	18	amod:att	_	_
18	legenda	legenda	NOUN	_	Case=Nom|Number=Sing	15	conj	_	_
19	vált	válik	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
20	.	.	PUNCT	_	_	19	punct	_	_

~~~


