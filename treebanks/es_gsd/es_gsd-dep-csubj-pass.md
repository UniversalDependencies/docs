---
layout: base
title:  'Statistics of csubj:pass in UD_Spanish-GSD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="es_gsd-dep-csubj.html">csubj</a></tt>.

11 nodes (0%) are attached to their parents as `csubj:pass`.

10 instances of `csubj:pass` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.27272727272727.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-VERB.html">VERB</a></tt> (10; 91% instances), <tt><a href="es_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="es_gsd-pos-ADJ.html">ADJ</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:pass	color:blue
1	Es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
2	probablemente	probablemente	ADV	_	_	3	advmod	_	_
3	cazada	cazar	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
4	donde	donde	ADV	_	PronType=Rel	6	advmod	_	_
5	sea	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	dep	_	_
6	haya	haber	VERB	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	csubj:pass	_	_
7	humanos	humano	NOUN	_	VerbForm=Inf	6	obj	_	SpaceAfter=No
8	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 csubj:pass	color:blue
1	Sabido	saber	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
2	es	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	aux:pass	_	_
3	que	que	SCONJ	_	_	11	mark	_	_
4	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	jugadores	jugador	NOUN	_	Gender=Masc|Number=Plur	11	nsubj	_	_
6	de	de	ADP	_	_	7	case	_	_
7	fútbol	fútbol	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
8	no	no	ADV	_	Polarity=Neg	11	advmod	_	_
9	son	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	demasiado	demasiado	PRON	_	NumType=Card|PronType=Ind	11	nmod	_	_
11	inteligentes	inteligente	ADJ	_	Number=Plur	1	csubj:pass	_	_
12	y	y	CCONJ	_	_	15	cc	_	_
13	mucho	mucho	PRON	_	NumType=Card|PronType=Ind	14	nmod	_	_
14	menos	menos	ADV	_	Degree=Cmp	15	advmod	_	_
15	sabrán	saber	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	1	conj	_	_
16	de	de	ADP	_	_	17	case	_	_
17	gastronomía	gastronomía	NOUN	_	Gender=Fem|Number=Sing	15	obl	_	SpaceAfter=No
18	,	,	PUNCT	_	PunctType=Comm	25	punct	_	_
19	de	de	ADP	_	_	21	case	_	_
20	lo	él	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	21	det	_	_
21	único	único	ADJ	_	Gender=Masc|Number=Sing	25	obl	_	_
22	que	que	PRON	_	PronType=Rel	24	obj	_	_
23	podrán	poder	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	24	aux	_	_
24	opinar	opinar	VERB	_	VerbForm=Inf	21	acl:relcl	_	_
25	es	ser	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	parataxis	_	_
26	de	de	ADP	_	_	28	case	_	_
27	los	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	28	det	_	_
28	locales	local	NOUN	_	Gender=Masc|Number=Plur	25	obl	_	_
29	de	de	ADP	_	_	30	case	_	_
30	copas	copa	NOUN	_	Gender=Fem|Number=Plur	28	nmod	_	SpaceAfter=No
31	.	.	PUNCT	_	PunctType=Peri	1	punct	_	_

~~~


