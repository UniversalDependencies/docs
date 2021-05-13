---
layout: base
title:  'Statistics of expl:pass in UD_Catalan-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Catalan-AnCora: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ca_ancora-dep-expl.html">expl</a></tt>.

512 nodes (0%) are attached to their parents as `expl:pass`.

499 instances of `expl:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.572265625.

The following 3 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ca_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (502; 98% instances), <tt><a href="ca_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (7; 1% instances), <tt><a href="ca_ancora-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ca_ancora-pos-PRON.html">PRON</a></tt> (3; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:pass	color:blue
1	No	no	ADV	_	Polarity=Neg	3	advmod	_	_
2	es	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	3	expl:pass	_	_
3	treballarà	treballar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	el	el	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	dissabte	dissabte	NOUN	_	AdvType=Tim	3	obl	_	_
6	i	i	CCONJ	_	_	8	cc	_	_
7	es	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	8	obj	_	_
8	reduiran	reduir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	3	conj	_	_
9	les	el	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	extres	extra	ADJ	_	Number=Plur	8	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl:pass	color:blue
1	Potser	potser	ADV	_	_	6	advmod	_	_
2	s'	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	6	expl:pass	_	SpaceAfter=No
3	hagi	haver	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
4	de	de	ADP	_	_	6	case	_	_
5	ser	ser	AUX	_	VerbForm=Inf	6	cop	_	_
6	comprensiu	comprensiu	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
7	amb	amb	ADP	_	_	9	case	_	_
8	els	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	diputats	diputat	NOUN	_	Gender=Masc|Number=Plur	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 expl:pass	color:blue
1	La	el	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	platea	platea	NOUN	_	Gender=Fem|Number=Sing	19	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	_	PunctType=Comm	5	punct	_	_
4	que	que	PRON	_	PronType=Rel	5	nsubj	_	_
5	sap	saber	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
6	els	el	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
7	mals	mal	ADJ	_	Gender=Masc|Number=Plur	8	amod	_	_
8	moments	moment	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	_
9	que	que	PRON	_	PronType=Rel	11	nsubj	_	_
10	es	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	11	obj	_	_
11	passen	passar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	_
12	quan	quan	SCONJ	_	_	16	mark	_	_
13	s'	ell	PRON	_	Case=Acc,Dat|Person=3|PrepCase=Npr|PronType=Prs|Reflex=Yes	16	expl:pass	_	SpaceAfter=No
14	és	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
15	un	un	DET	_	Gender=Masc|Number=Sing|PronType=Ind	16	det	_	_
16	incomprès	incomprès	NOUN	_	Gender=Masc|Number=Sing	11	advcl	_	SpaceAfter=No
17	,	,	PUNCT	_	PunctType=Comm	5	punct	_	_
18	va	anar	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux	_	_
19	deixar	deixar	VERB	_	VerbForm=Inf	0	root	_	_
20	anar	anar	VERB	_	VerbForm=Inf	19	xcomp	_	_
21	uns	un	DET	_	Gender=Masc|Number=Plur|PronType=Ind	22	det	_	_
22	crits	crit	NOUN	_	Gender=Masc|Number=Plur	20	obj	_	_
23	de	de	ADP	_	_	24	case	_	_
24	solidaritat	solidaritat	NOUN	_	Gender=Fem|Number=Sing	22	nmod	_	SpaceAfter=No
25	.	.	PUNCT	_	PunctType=Peri	19	punct	_	_

~~~


