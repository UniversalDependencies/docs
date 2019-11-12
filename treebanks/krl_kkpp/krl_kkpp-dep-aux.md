---
layout: base
title:  'Statistics of aux in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="krl_kkpp-dep-aux-pass.html">aux:pass</a></tt>.

58 nodes (2%) are attached to their parents as `aux`.

57 instances of `aux` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.27586206896552.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (49; 84% instances), <tt><a href="krl_kkpp-pos-ADP.html">ADP</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (5; 9% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (2; 3% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	–	–	PUNCT	PUNCT	_	4	punct	_	_
2	Myö	myö	PRON	PRON	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
3	emmä	ei	AUX	AUX	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	mäne	männä	VERB	VERB	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
5	kalalla	kala	NOUN	NOUN	Case=Ade|Number=Sing	4	obl	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	kun	ku	SCONJ	SCONJ	_	8	mark	_	PronType=Interr
8	hilloh	hillo	NOUN	NOUN	Case=Ill|Number=Sing	5	conj	_	_
9	šuolla	šuo	NOUN	NOUN	Case=Ade|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Pojan	poika	NOUN	NOUN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	tuatto	tuatto	NOUN	NOUN	Case=Nom|Number=Sing	5	nsubj	_	_
3	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
4	ne	ne	PRON	PRON	Case=Nom|Number=Plur|PronType=Dem	5	obj	_	_
5	ommellun	ommella	ADP	ADP	Voice=Act	0	root	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 aux	color:blue
1	Mie	mie	PRON	PRON	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	olin	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Ainon	Aino	PROPN	PROPN	Case=Gen|Number=Sing	4	nmod:poss	_	PropnType=Ant|Gender=Female
4	roolissa	rooli	NOUN	NOUN	Case=Ine|Number=Sing	9	obl	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	9	punct	_	_
6	ka	ka	CCONJ	CCONJ	_	7	cc	_	_
7	miun	mie	PRON	PRON-	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	nmod:gsubj	_	_
8	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
9	pitän	piteä	VERB	VERB	Connegative=Yes|Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
10	hukkuo	hukkuo	VERB	VERB	VerbForm=Inf	9	xcomp	_	_
11	veteh	vesi	NOUN	NOUN	Case=Ill|Number=Sing	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


