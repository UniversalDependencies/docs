---
layout: base
title:  'Statistics of amod in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `amod`

This relation is universal.

157 nodes (5%) are attached to their parents as `amod`.

156 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12738853503185.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (150; 96% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="krl_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kirkaš	kirkaš	ADJ	ADJ	Case=Nom|Number=Sing	3	amod	_	_
3	huomeneš	huomeneš	NOUN	NOUN	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 amod	color:blue
1	Aktijon	aktijo	NOUN	NOUN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	aikana	aika	NOUN	NOUN	Case=Ess|Number=Sing	3	obl	_	_
3	pitäy	piteä	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	tunniksi	tunti	NOUN	NOUN	Case=Tra|Number=Sing	5	obl	_	_
5	šammuttua	šammuttua	VERB	VERB	VerbForm=Inf	3	xcomp	_	_
6	valot	valo	NOUN	NOUN	Case=Nom|Number=Plur	5	obj	_	_
7	ta	ta	CCONJ	CCONJ	_	8	cc	_	_
8	muut	muu	PRON	PRON	Case=Nom|Number=Plur|PronType=Ind	9	amod	_	_
9	šähkölaittehet	šähkö#laiteh	NOUN	NOUN	Case=Nom|Number=Plur	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 amod	color:blue
1	Piiplijašša	piiplija	NOUN	NOUN	Case=Ine|Number=Sing	3	obl	_	_
2	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	šanottu	šanoa	VERB	VERB	Case=Nom|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	6	punct	_	_
5	jotta	jotta	SCONJ	SCONJ	_	6	mark	_	_
6	šuvaiče	šuvaija	VERB	VERB	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	3	ccomp	_	_
7	läššäolijie	läššä#olija	NOUN	NOUN	Case=Par|Number=Plur	6	obj	_	_
8	kuin	kuin	SCONJ	SCONJ	_	10	mark	_	_
9	omua	oma	ADJ	ADJ	Case=Par|Number=Sing	10	amod	_	_
10	iččie	iče	PRON	PRON	Case=Par|Number=Sing|Reflex=Yes	7	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


