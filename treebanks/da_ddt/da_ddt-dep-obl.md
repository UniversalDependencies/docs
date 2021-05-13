---
layout: base
title:  'Statistics of obl in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `obl`

This relation is universal.
There are 2 language-specific subtypes of `obl`: <tt><a href="da_ddt-dep-obl-lmod.html">obl:lmod</a></tt>, <tt><a href="da_ddt-dep-obl-tmod.html">obl:tmod</a></tt>.

6159 nodes (6%) are attached to their parents as `obl`.

5034 instances of `obl` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.89754830329599.

The following 16 pairs of parts of speech are connected with `obl`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (3967; 64% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (650; 11% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (469; 8% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (386; 6% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (310; 5% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (86; 1% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (80; 1% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (67; 1% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-PRON.html">PRON</a></tt> (64; 1% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-PROPN.html">PROPN</a></tt> (36; 1% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (16; 0% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (9; 0% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	flat	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Skrab	skrabe	VERB	_	Mood=Imp	0	root	_	_
2	kernerne	kerne	NOUN	_	Definite=Def|Gender=Com|Number=Plur	1	obj	_	_
3	ud	ud	ADV	_	_	1	advmod:lmod	_	_
4	af	af	ADP	_	AdpType=Prep	5	case	_	_
5	agurk	agurk	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	1	punct	_	_
7	men	men	CCONJ	_	_	1	cc	_	_
8	ikke	ikke	ADV	_	_	1	advmod	_	_
9	af	af	ADP	_	AdpType=Prep	10	case	_	_
10	courgette	courgette	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl	color:blue
1	Kyllingerne	kylling	NOUN	_	Definite=Def|Gender=Com|Number=Plur	3	nsubj	_	_
2	her	her	ADV	_	_	1	advmod	_	_
3	har	have	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	meget	meget	ADV	_	Degree=Pos	3	obj	_	_
5	mere	meget	ADJ	_	Definite=Ind|Degree=Cmp|Number=Sing	4	amod	_	_
6	plads	plads	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


