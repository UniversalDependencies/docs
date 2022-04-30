---
layout: base
title:  'Statistics of parataxis in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `parataxis`

This relation is universal.
There are 2 language-specific subtypes of `parataxis`: <tt><a href="fr_rhapsodie-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_rhapsodie-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

23 nodes (0%) are attached to their parents as `parataxis`.

23 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.1304347826087.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt> (14; 61% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt> (2; 9% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	me	lui	PRON	_	Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
3	disais	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	SpaceAfter=No
6	irai	aller	VERB	ETRE	Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	3	parataxis	_	_
7	peut-être	peut-être	ADV	_	_	6	advmod	_	_
8	à	à	ADP	_	_	9	case	_	_
9	Vire	Vire	PROPN	_	Gender=Fem|Number=Sing	6	obl:arg	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 parataxis	color:blue
1	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	_
2	t'	lui	PRON	_	Number=Sing|Person=2|PronType=Prs	5	iobj	_	SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	déjà	déjà	ADV	_	_	5	advmod	_	_
5	arrivé	arriver	VERB	ETRE	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	de	de	ADP	_	_	7	mark	_	_
7	dire	dire	VERB	_	VerbForm=Inf	5	xcomp	_	_
8	ciel	ciel	NOUN	_	Gender=Masc|Number=Sing	7	discourse	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	11	det	_	_
11	mari	mari	NOUN	_	Gender=Masc|Number=Sing	7	parataxis	_	Reported=Yes|SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	_	_
13	toi	lui	PRON	_	Number=Sing|Person=2|PronType=Prs	5	dislocated	_	_
14	en	en	ADP	_	_	15	mark	_	_
15	entendant	entendre	VERB	_	Tense=Pres|VerbForm=Part	5	advcl	_	_
16	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	porte	porte	NOUN	_	Gender=Fem|Number=Sing	15	obj	_	_
18	que	que	PRON	_	PronType=Rel	17	acl:relcl	_	SpaceAfter=No
19	…	…	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	2	nsubj	_	_
2	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
3	mais	mais	CCONJ	_	_	6	cc	_	_
4	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	Reported=Yes
6	con	con	ADJ	_	Gender=Masc|Number=Sing	2	parataxis	_	_
7	ou	ou	CCONJ	_	_	8	cc	_	_
8	quoi	quoi	PRON	_	Person=3|PronType=Ind	6	conj	_	_
9	?	?	PUNCT	_	_	2	punct	_	_

~~~


