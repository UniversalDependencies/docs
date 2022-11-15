---
layout: base
title:  'Statistics of obl in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="fr_gsd-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_gsd-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="fr_gsd-dep-obl-mod.html">obl:mod</a></tt>.

19 nodes (0%) are attached to their parents as `obl`.

18 instances of `obl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.57894736842105.

The following 6 pairs of parts of speech are connected with `obl`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (9; 47% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (4; 21% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (3; 16% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=il
2	devient	devenir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	joueur	joueur	NOUN	_	Gender=Masc|Number=Sing	2	xcomp	_	_
4	autonome	autonome	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
5	à	à	ADP	_	_	7	case	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	automne	automne	NOUN	_	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 obl	color:blue
1	Akhmatova	Akhmatova	PROPN	_	_	4	nsubj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	opéra	opéra	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
5	dont	dont	PRON	_	PronType=Rel	7	nmod	_	_
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	création	création	NOUN	_	Gender=Fem|Number=Sing	8	nsubj	_	_
8	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
9	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	8	obj:lvc	_	_
10	à	à	ADP	_	_	12	case	_	_
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	Opéra	Opéra	PROPN	_	Number=Sing	8	obl	_	_
13	Bastille	Bastille	PROPN	_	_	12	flat:name	_	_
14	de	de	ADP	_	_	15	case	_	_
15	Paris	Paris	PROPN	_	_	12	nmod	_	_
16	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	28	28	NUM	_	Number=Sing	8	obl:mod	_	_
18	mars	mars	NOUN	_	Gender=Masc|Number=Sing	17	nmod	_	_
19	2011	2011	NUM	_	Number=Plur	18	nmod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 obl	color:blue
1	Cinq	cinq	NUM	_	Number=Plur	2	nummod	_	wordform=cinq
2	ans	an	NOUN	_	Gender=Masc|Number=Plur	8	obl:mod	_	_
3	plus	plus	ADV	_	_	4	advmod	_	_
4	tard	tard	ADV	_	_	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	en	en	PRON	_	Person=3|PronType=Prs	8	iobj	_	_
8	ressort	ressortir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	diplômé	diplômé	ADJ	_	Gender=Masc|Number=Sing	8	xcomp	_	_
10	en	en	ADP	_	_	11	case	_	_
11	droit	droit	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	_
12	avec	avec	ADP	_	_	13	case	_	_
13	mention	mention	NOUN	_	Gender=Fem|Number=Sing	9	obl	_	_
14	cum	cum	X	_	Foreign=Yes	13	nmod	_	ExtPos=PROPN|Lang=la
15	laude	laude	X	_	Foreign=Yes	14	flat:foreign	_	Lang=la|SpaceAfter=No
16	.	.	PUNCT	_	_	8	punct	_	_

~~~


