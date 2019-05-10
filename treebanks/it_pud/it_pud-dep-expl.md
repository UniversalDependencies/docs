---
layout: base
title:  'Statistics of expl in UD_Italian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Italian-PUD: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="it_pud-dep-expl-impers.html">expl:impers</a></tt>.

227 nodes (1%) are attached to their parents as `expl`.

184 instances of `expl` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22907488986784.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PRON.html">PRON</a></tt> (220; 97% instances), <tt><a href="it_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="it_pud-pos-PART.html">PART</a></tt> (4; 2% instances), <tt><a href="it_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="it_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl	color:blue
1	È	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	cop	_	_
2	la	il	DET	DT	Gender=Fem|Number=Sing	3	det	_	_
3	ragione	ragione	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
4	per	per	ADP	IN	_	5	case	_	_
5	cui	cui	PRON	WP	Gender=Fem|Number=Sing	7	obl	_	_
6	ne	ne	PRON	PRP	Case=Acc|Person=3	7	expl	_	_
7	chiediamo	chiedere	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	3	acl:relcl	_	_
8	ancora	ancora	ADV	RB	_	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 expl	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	si	si	PRON	SE	Number=Sing|Person=3	4	expl	_	_
3	è	essere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	aux	_	_
4	fatta	fare	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past	0	root	_	_
5	avanti	avanti	PART	RP	_	4	expl	_	_
6	soltanto	soltanto	ADV	RB	_	7	advmod	_	_
7	dopo	dopo	ADV	RB	_	17	mark	_	_
8	che	che	ADP	IN	_	7	fixed	_	_
9	l'	il	DET	DT	Gender=Fem|Number=Sing	10	det	_	SpaceAfter=No
10	Agenzia	Agenzia	PROPN	NN	Gender=Fem|Number=Sing	17	nsubj	_	_
11	statunitense	statunitense	ADJ	JJ	Gender=Fem|Number=Sing	10	amod	_	Proper=True
12	per	per	ADP	IN	_	14	case	_	Proper=True
13	la	il	DET	DT	Gender=Fem|Number=Sing	14	det	_	Proper=True
14	Protezione	Protezione	PROPN	NN	Gender=Fem|Number=Sing	10	nmod	_	_
15	Ambientale	Ambientale	ADJ	JJ	Gender=Fem|Number=Sing	14	amod	_	Proper=True
16	ha	avere	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	17	aux	_	_
17	avvertito	avvertire	VERB	VBN	Tense=Past	4	advcl	_	_
18	il	il	DET	DT	Gender=Masc|Number=Sing	19	det	_	_
19	mondo	mondo	NOUN	NN	Gender=Masc|Number=Sing	17	obj	_	_
20	in	in	ADP	IN	_	21	case	_	_
21	merito	merito	NOUN	NN	Gender=Masc|Number=Sing	17	obl	_	_
22	a	a	ADP	IN	_	24	case	_	_
23	la	il	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	questione	questione	NOUN	NN	Gender=Fem|Number=Sing	21	nmod	_	SpaceAfter=No
25	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 expl	color:blue
1	Penso	pensare	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	che	che	SCONJ	IN	_	3	mark	_	_
3	sia	essere	VERB	VBC	Mood=Sub|Number=Sing|Person=3|Tense=Pres|Voice=Act	1	ccomp	_	_
4	la	il	DET	DT	Gender=Fem|Number=Sing	5	det	_	_
5	ragione	ragione	NOUN	NN	Gender=Fem|Number=Sing	3	nsubj	_	_
6	per	per	ADP	IN	_	7	case	_	_
7	cui	cui	PRON	WP	Gender=Fem|Number=Sing	10	obl	_	_
8	si	si	PRON	SE	Number=Plur|Person=3	10	expl	_	_
9	siano	essere	AUX	VBC	Mood=Sub|Number=Plur|Person=3|Tense=Pres|Voice=Act	10	cop	_	_
10	immersi	immergere	ADJ	JJ	Gender=Masc|Number=Plur	5	acl:relcl	_	_
11	in	in	ADP	IN	_	13	case	_	_
12	le	il	DET	DT	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	13	det	_	_
13	fantasie	fantasia	NOUN	NN	Gender=Fem|Number=Plur	10	obl	_	_
14	e	e	CCONJ	CC	_	17	cc	_	_
15	in	in	ADP	IN	_	17	case	_	_
16	i	il	DET	DT	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	17	det	_	_
17	colori	colore	NOUN	NN	Gender=Masc|Number=Plur	13	conj	_	SpaceAfter=No
18	.	.	PUNCT	.	_	1	punct	_	_

~~~


