---
layout: base
title:  'Statistics of compound in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="krl_kkpp-dep-compound-prt.html">compound:prt</a></tt>.

31 nodes (1%) are attached to their parents as `compound`.

17 instances of `compound` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58064516129032.

The following 10 pairs of parts of speech are connected with `compound`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (13; 42% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (4; 13% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt> (3; 10% instances), <tt><a href="krl_kkpp-pos-NUM.html">NUM</a></tt>-<tt><a href="krl_kkpp-pos-NUM.html">NUM</a></tt> (3; 10% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-X.html">X</a></tt> (2; 6% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-ADP.html">ADP</a></tt> (2; 6% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="krl_kkpp-pos-ADV.html">ADV</a></tt>-<tt><a href="krl_kkpp-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	Hiän	hiän	PRON	PRON	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	esitti	esitteä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Kokko	kokko	NOUN	NOUN	Case=Nom|Number=Sing	2	obj	_	_
4	lenti	lenteä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	flat:name	_	_
5	-hiälaulun	-hiä#laulu	NOUN	NOUN	Case=Gen|Number=Sing	3	compound	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Lapšet	lapši	NOUN	NOUN	Case=Nom|Number=Plur	2	nsubj	_	_
2	valmissettih	valmistoa	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	runoja	runo	NOUN	NOUN	Case=Par|Number=Plur	2	obj	_	_
4	Kalevala	Kalevala	PROPN	PROPN	Case=Nom|Number=Sing	2	obl	_	PropnType=Al|SpaceAfter=No
5	-eepossašta	-eepossa	NOUN	NOUN	Case=Ine|Number=Sing	4	compound	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Venäjällä	Venäjä	PROPN	PROPN	Case=Ade|Number=Sing	2	obl	_	PropnType=Top
2	enšimmäisinä	enšimmäini	ADJ	ADJ	Case=Ess|Number=Plur	0	root	_	_
3	oltih	olla	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
4	PetropavlovskKamčatski	PetropavlovskKamčatski	PROPN	PROPN	Case=Nom|Number=Sing	5	compound	_	PropnType=Top
5	-kaupunkin	-kaupunki	NOUN	NOUN	Case=Gen|Number=Sing	6	nmod:poss	_	_
6	eläjät	eläjä	NOUN	NOUN	Case=Nom|Number=Plur	2	nsubj:cop	_	_
7	ta	ta	CCONJ	CCONJ	_	8	cc	_	_
8	viimesinä	viimeni	ADJ	ADJ	Case=Ess|Number=Plur	2	conj	_	_
9	–	–	PUNCT	PUNCT	_	11	punct	_	_
10	Kaliningradin	Kaliningrad	PROPN	PROPN	Case=Gen|Number=Sing	11	nmod:poss	_	PropnType=Top
11	eläjät	eläjä	NOUN	NOUN	Case=Nom|Number=Plur	6	conj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


