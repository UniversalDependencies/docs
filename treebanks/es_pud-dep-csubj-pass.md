---
layout: base
title:  'Statistics of csubj:pass in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-csubj.html">csubj</a></tt>.

16 nodes (0%) are attached to their parents as `csubj:pass`.

16 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.1875.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (11; 69% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="es_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj:pass	color:blue
1	Los	_	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
2	últimos	_	ADJ	JJ	Gender=Masc|Number=Plur	3	amod	_	_
3	Juegos	_	NOUN	NN	Gender=Masc|Number=Plur	8	nsubj	_	_
4	Olímpicos	_	ADJ	JJ	Gender=Masc|Number=Plur	3	amod	_	_
5	se	_	PRON	SE	Number=Sing|Person=3	6	compound:prt	_	_
6	cree	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
7	que	_	ADP	IN	_	8	mark	_	_
8	tuvieron	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	6	csubj:pass	_	_
9	lugar	_	NOUN	NN	Gender=Masc|Number=Sing	8	obj	_	_
10	en	_	ADP	IN	_	12	case	_	_
11	el	_	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
12	393	_	NUM	CD	Gender=Masc	8	obl	_	SpaceAfter=No
13	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 csubj:pass	color:blue
1	En	_	ADP	IN	_	3	case	_	_
2	una	_	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	ocasión	_	NOUN	NN	Gender=Fem|Number=Sing	5	obl	_	_
4	se	_	PRON	SE	Number=Sing|Person=3	5	compound:prt	_	_
5	insinúa	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
6	que	_	ADP	IN	_	9	mark	_	_
7	es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	9	cop	_	_
8	un	_	DET	DT	Gender=Masc|Number=Sing	9	det	_	_
9	agente	_	NOUN	NN	Gender=Masc|Number=Sing	5	csubj:pass	_	_
10	encubierto	_	ADJ	JJ	Gender=Masc|Number=Sing	9	amod	_	_
11	cuyo	_	PRON	DTP$	Gender=Masc|Number=Sing|Person=3	12	det	_	_
12	objetivo	_	NOUN	NN	Gender=Masc|Number=Sing	9	acl:relcl	_	_
13	es	_	AUX	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	12	cop	_	_
14	Homero	_	PROPN	NNP	Gender=Masc|Number=Sing	12	nsubj	_	SpaceAfter=No
15	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 csubj:pass	color:blue
1	No	_	ADV	RB	Polarity=Neg	3	advmod	_	_
2	se	_	PRON	SE	Number=Sing|Person=3	3	compound:prt	_	_
3	sabe	_	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
4	de	_	ADP	IN	_	6	case	_	_
5	que	_	DET	WDT	Gender=Masc|Number=Sing	6	det	_	_
6	modo	_	NOUN	NN	Gender=Masc|Number=Sing	9	obl	_	_
7	han	_	VERB	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|Voice=Act	9	aux	_	_
8	trabajado	_	AUX	VBN	_	9	cop	_	_
9	juntos	_	ADJ	JJ	Gender=Masc|Number=Plur	3	csubj:pass	_	_
10	ambos	_	DET	DT	Gender=Masc|Number=Plur	11	det	_	_
11	dramaturgos	_	NOUN	NN	Gender=Masc|Number=Plur	9	nsubj	_	SpaceAfter=No
12	.	_	PUNCT	.	_	3	punct	_	_

~~~


