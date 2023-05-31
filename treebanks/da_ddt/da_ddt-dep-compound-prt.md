---
layout: base
title:  'Statistics of compound:prt in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="da_ddt-dep-compound.html">compound</a></tt>.

394 nodes (0%) are attached to their parents as `compound:prt`.

332 instances of `compound:prt` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.9492385786802.

The following 10 pairs of parts of speech are connected with `compound:prt`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (249; 63% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (42; 11% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (40; 10% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (32; 8% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (10; 3% instances), <tt><a href="da_ddt-pos-ADP.html">ADP</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (8; 2% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (4; 1% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:prt	color:blue
1	Flippen	flip	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	strammer	stramme	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	til	til	ADV	_	_	2	compound:prt	_	_
4	om	om	ADP	_	AdpType=Prep	6	case	_	_
5	Peters	Peter	PROPN	_	Case=Gen	6	nmod:poss	_	_
6	hals	hals	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 compound:prt	color:blue
1	Bare	bare	ADV	_	_	2	advmod	_	_
2	ikke	ikke	ADV	_	_	3	advmod	_	_
3	i	i	ADP	_	AdpType=Prep	6	compound:prt	_	_
4	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	fixed	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	advarer	advare	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	lægerne	læge	NOUN	_	Definite=Def|Gender=Com|Number=Plur	6	nsubj	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Stakken	stak	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	blev	blive	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	tæt	tæt	ADV	_	Degree=Pos	6	advmod	_	_
4	på	på	ADP	_	AdpType=Prep	3	compound:prt	_	_
5	2	2	NUM	_	NumType=Card	6	nummod	_	_
6	meter	meter	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	2	obl	_	_
7	høj	høj	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	2	xcomp	_	_
8	og	og	CCONJ	_	_	9	cc	_	_
9	vejede	veje	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	_
10	43,5	43,5	NUM	_	NumType=Card	11	nummod	_	_
11	kg.	kilo	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


