---
layout: base
title:  'Statistics of obl:agent in UD_Italian-PoSTWITA'
udver: '2'
---

## Treebank Statistics: UD_Italian-PoSTWITA: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="it_postwita-dep-obl.html">obl</a></tt>.

73 nodes (0%) are attached to their parents as `obl:agent`.

72 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.97260273972603.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (33; 45% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (24; 33% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-SYM.html">SYM</a></tt> (10; 14% instances), <tt><a href="it_postwita-pos-VERB.html">VERB</a></tt>-<tt><a href="it_postwita-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="it_postwita-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_postwita-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_postwita-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 obl:agent	color:blue
1	DI	DI	PROPN	SP	_	4	nmod	_	_
2	RUSCIO	RUSCIO	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	:	:	PUNCT	FC	_	1	punct	_	_
4	ritengo	ritenere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	ingiusto	ingiusto	ADJ	A	Gender=Masc|Number=Sing	4	xcomp	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	decreto	decreto	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
8	varato	varare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
9	da	da	ADP	E	_	11	case	_	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Governo	governo	NOUN	S	Gender=Masc|Number=Sing	8	obl:agent	_	_
12	Monti	Monti	PROPN	SP	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:agent	color:blue
1	Si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	2	expl:impers	_	_
2	va	andare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	verso	verso	ADP	E	_	5	case	_	_
4	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	governo	governo	NOUN	S	Gender=Masc|Number=Sing	2	obl	_	_
6	tecnico	tecnico	ADJ	A	Gender=Masc|Number=Sing	5	amod	_	_
7	guidato	guidare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
8	da	da	ADP	E	_	9	case	_	_
9	Mario	mario	PROPN	SP	_	7	obl:agent	_	_
10	Monti	Monti	PROPN	SP	_	9	flat:name	_	_
11	...........	...........	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obl:agent	color:blue
1	Come	come	ADV	B	_	3	advmod	_	_
2	non	non	ADV	BN	PronType=Neg	3	advmod	_	_
3	condividere	condividere	VERB	V	VerbForm=Inf	0	root	_	_
4	quanto	quanto	PRON	PR	PronType=Rel	3	obj	_	_
5	sostenuto	sostenere	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	acl	_	_
6	da	da	ADP	E	_	7	case	_	_
7	#Grillo	#Grillo	SYM	SYM	_	5	obl:agent	_	_
8	su	su	ADP	E	_	10	case	_	_
9	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	blog	blog	NOUN	S	_	5	obl	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_
12	La	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	dilapidazione	dilapidazione	NOUN	S	Gender=Fem|Number=Sing	3	parataxis	_	_
14	di	di	ADP	E	_	16	case	_	_
15	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	denaro	denaro	NOUN	S	Gender=Masc|Number=Sing	13	nmod	_	_
17	pubblico	pubblico	ADJ	A	Gender=Masc|Number=Sing	16	amod	_	SpaceAfter=No
18	,	,	PUNCT	FF	_	19	punct	_	_
19	scandalo	scandalo	NOUN	S	Gender=Masc|Number=Sing	13	conj	_	_
20	di	di	ADP	E	_	22	case	_	_
21	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	politica	politica	NOUN	S	Gender=Fem|Number=Sing	19	nmod	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	3	punct	_	_
24	http://t.co/Y80RhwBD	http://t.co/Y80RhwBD	SYM	X	_	3	dep	_	_

~~~


