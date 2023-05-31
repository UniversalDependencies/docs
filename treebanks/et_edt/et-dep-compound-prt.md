---
layout: base
title:  'Statistics of compound:prt in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="et-dep-compound.html">compound</a></tt>.

1478 nodes (1%) are attached to their parents as `compound:prt`.

935 instances of `compound:prt` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.92354533152909.

The following 8 pairs of parts of speech are connected with `compound:prt`: <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1442; 98% instances), <tt><a href="et-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (24; 2% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (6; 0% instances), <tt><a href="et-pos-PRON.html">PRON</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:prt	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	SpaceAfter=No
2	Ära	ära	ADV	D	_	3	compound:prt	_	_
3	väsisin	väsima	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Z	_	3	punct	_	SpaceAfter=No
5	"	"	PUNCT	Z	_	3	punct	_	_
6	valetas	valetama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	parataxis	_	_
7	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 compound:prt	color:blue
1	Ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj:cop	_	_
2	nägi	nägema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
3	välja	välja	ADV	D	_	6	compound:prt	_	_
4	nii	nii	ADV	D	_	6	advmod	_	_
5	...	...	PUNCT	Z	_	6	punct	_	_
6	ebainimlik	eba_inimlik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	_	_
8	kahvatu	kahvatu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	conj	_	SpaceAfter=No
9	,	,	PUNCT	Z	_	11	punct	_	_
10	peaaegu	pea_aegu	ADV	D	_	11	advmod	_	_
11	läbipaistev	läbi_paistev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	Z	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:prt	color:blue
1	Ukse	uks	NOUN	S	Case=Gen|Number=Sing	3	nmod	_	_
2	lahti	lahti	ADV	D	_	3	compound:prt	_	_
3	tegemine	tegemine	NOUN	S	Case=Nom|Number=Sing	5	nsubj:cop	_	_
4	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	_
5	viga	viga	NOUN	S	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Z	_	5	punct	_	_

~~~


