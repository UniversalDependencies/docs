---
layout: base
title:  'Statistics of obl:tmod in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="it_old-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="it_old-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="it_old-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="it_old-dep-obl-lmod.html">obl:lmod</a></tt>.

118 nodes (0%) are attached to their parents as `obl:tmod`.

71 instances of `obl:tmod` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.88135593220339.

The following 10 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (92; 78% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (8; 7% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (6; 5% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:tmod	color:blue
1	Di	di	ADP	epskx	_	3	case	_	Canto=19|Verso=54
2	parecchi	parecchio	DET	ai	Gender=Masc|Number=Plur|PronType=Ind	3	det	_	Canto=19|Verso=54
3	anni	anno	NOUN	sm2mp	Gender=Masc|Number=Plur	5	obl:tmod	_	Canto=19|Verso=54
4	mi	mi	PRON	pp1syda	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	5	iobj	_	Canto=19|Verso=54
5	mentì	mentire	VERB	vi3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Canto=19|Verso=54
6	lo	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	Canto=19|Verso=54
7	scritto	scrivere	VERB	vtp2prsm2ms	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	5	nsubj	_	Canto=19|SpaceAfter=No|Verso=54
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 obl:tmod	color:blue
1	E	e	CCONJ	cscc	_	19	cc	_	Canto=17|Verso=76
2	io	io	PRON	pp1slso	Number=Sing|Person=1|PronType=Prs	19	nsubj	_	Canto=17|SpaceAfter=No|Verso=76
3	,	,	PUNCT	_	_	2	punct	_	_
4	temendo	temere	VERB	vta2gp	VerbForm=Conv|Voice=Act	19	advcl	_	Canto=17|Verso=76
5	no	non	ADV	b	_	4	advmod	_	Canto=17|Verso=76
6	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	Canto=17|Verso=76
7	più	più	ADV	b	_	8	advmod	_	Canto=17|Verso=76
8	star	stare	VERB	vi1fpsm3ms	Tense=Pres|VerbForm=Inf	9	csubj	_	Canto=17|Verso=76
9	crucciasse	crucciare	VERB	vta1cis3	Aspect=Imp|Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	4	ccomp	_	Canto=17|Verso=76
10	lui	lui	PRON	pp3mslco	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obj	_	Canto=17|Verso=77
11	che	che	PRON	pr	PronType=Rel	17	nsubj	_	Canto=17|Verso=77
12	di	di	ADP	epsb	_	14	mark	_	Canto=17|Verso=77
13	poco	poco	PRON	pi1ms	Gender=Masc|Number=Sing|PronType=Ind	14	obl:tmod	_	Canto=17|Verso=77
14	star	stare	VERB	vi1fp	Tense=Pres|VerbForm=Inf	17	advcl	_	Canto=17|Verso=77
15	m'	mi	PRON	pp1syac	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	17	obj	_	Canto=17|SpaceAfter=No|Verso=77
16	avea	avere	AUX	vta5iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	17	aux	_	Canto=17|Verso=77
17	'mmonito	ammonire	VERB	vta3iss3	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Tense=Past|VerbForm=Part|Voice=Act	10	acl:relcl	_	Canto=17|SpaceAfter=No|Verso=77
18	,	,	PUNCT	_	_	4	punct	_	_
19	torna'	tornare	VERB	vi+1irs1	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	Canto=17|Verso=78
20	mi	mi	PRON	pf1syle	Clitic=Yes|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	19	expl:pv	_	Canto=17|Verso=78
21	in	in	ADP	_	_	25	case	_	Canto=17|Verso=78
22	dietro	dietro	ADV	_	_	25	case	_	Canto=17|Verso=78
23	da	da	ADP	epskdl	_	25	case	_	Canto=17|Verso=78
24	l'	il	DET	rdfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	25	det	_	Canto=17|SpaceAfter=No|Verso=78
25	anime	anima	NOUN	sf1fp	Gender=Fem|Number=Plur	19	obl:lmod	_	Canto=17|Verso=78
26	lasse	lasso	ADJ	a1fp	Gender=Fem|Number=Plur	25	amod	_	Canto=17|SpaceAfter=No|Verso=78
27	.	.	PUNCT	_	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl:tmod	color:blue
1	Oh	oh	INTJ	i	_	5	discourse	_	Canto=23|Verso=67
2	in	in	ADP	_	_	3	case	_	Canto=23|Verso=67
3	etterno	etterno	NOUN	_	Gender=Masc|Number=Sing	5	obl:tmod	_	Canto=23|Verso=67
4	faticoso	faticoso	ADJ	a1ms	Gender=Masc|Number=Sing	5	amod	_	Canto=23|Verso=67
5	manto	manto	NOUN	sm2ms	Gender=Masc|Number=Sing	0	root	_	Canto=23|SpaceAfter=No|Verso=67
6	!	!	PUNCT	_	_	5	punct	_	_

~~~


