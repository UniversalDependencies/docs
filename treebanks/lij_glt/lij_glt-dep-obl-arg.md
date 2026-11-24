---
layout: base
title:  'Statistics of obl:arg in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="lij_glt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="lij_glt-dep-obl-agent.html">obl:agent</a></tt>.

75 nodes (1%) are attached to their parents as `obl:arg`.

55 instances of `obl:arg` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.13333333333333.

The following 4 pairs of parts of speech are connected with `obl:arg`: <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (39; 52% instances), <tt><a href="lij_glt-pos-VERB.html">VERB</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (30; 40% instances), <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="lij_glt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lij_glt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 obl:arg	color:blue
1	O	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	commanda	commandâ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	fiña	fiña	ADV	_	_	2	advmod	_	_
4	à	à	ADP	_	_	6	case	_	_
5	i	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	spriti	sprito	NOUN	_	Gender=Masc|Number=Plur	2	obl:arg	_	_
7	sossi	sosso	ADJ	_	Gender=Masc|Number=Plur	6	amod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	e	e	CCONJ	_	_	11	cc	_	_
10	ghe	ghe	PRON	_	Person=3|PronType=Prs	11	iobj	_	_
11	dan	dâ	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	conj	_	_
12	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	mente	mente	NOUN	_	Gender=Fem|Number=Sing	11	obj	_	SpaceAfter=No
14	!	!	PUNCT	_	_	2	punct	_	SpaceAfter=No
15	»	»	PUNCT	_	_	2	punct	_	SpaceAfter=No
16	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 obl:arg	color:blue
1	Ma	ma	CCONJ	_	_	8	cc	_	_
2	à	à	ADP	_	_	4	case	_	_
3	quello	quello	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	ponto	ponto	NOUN	_	Gender=Masc|Number=Sing	8	obl	_	_
5	lì	lì	ADV	_	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	cöse	cöse	PRON	_	PronType=Int	8	obl:arg	_	_
8	serve	servî	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	ciù	ciù	ADV	_	_	8	advmod	_	_
10	cianze	cianze	VERB	_	Tense=Pres|VerbForm=Inf	8	csubj	_	SpaceAfter=No
11	?	?	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 obl:arg	color:blue
1	Ti	ti	PRON	_	Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
2	gh'	ghe	PRON	_	PronType=Dem	4	expl	_	SpaceAfter=No
3	æ	avei	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	visto	vedde	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	che	che	SCONJ	_	_	14	mark	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	bibin	bibin	NOUN	_	Gender=Masc|Number=Sing	14	nsubj	_	_
8	che	che	PRON	_	PronType=Rel	11	obj	_	_
9	t'	ti	PRON	_	Number=Sing|Person=2|PronType=Prs	11	nsubj	_	SpaceAfter=No
10	æ	avei	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	aux	_	_
11	accattou	accattâ	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	_
12	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
13	l'	l'	PART	_	_	14	dep	_	SpaceAfter=No
14	à	avei	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	ccomp	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	göscio	göscio	NOUN	_	Gender=Masc|Number=Sing	14	obj	_	_
17	pin	pin	ADJ	_	Gender=Masc|Number=Sing	16	amod	_	_
18	d'	de	ADP	_	_	19	case	_	SpaceAfter=No
19	ænin	ænin	NOUN	_	Gender=Masc|Number=Sing	17	obl:arg	_	SpaceAfter=No
20	?	?	PUNCT	_	_	4	punct	_	_

~~~


