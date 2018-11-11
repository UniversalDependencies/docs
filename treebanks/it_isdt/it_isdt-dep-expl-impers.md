---
layout: base
title:  'Statistics of expl:impers in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="it_isdt-dep-expl.html">expl</a></tt>.
There are also 1 other language-specific subtypes of `expl`: <tt><a href="it_isdt-dep-expl-pass.html">expl:pass</a></tt>.

425 nodes (0%) are attached to their parents as `expl:impers`.

400 instances of `expl:impers` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46823529411765.

The following 5 pairs of parts of speech are connected with `expl:impers`: <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (420; 99% instances), <tt><a href="it_isdt-pos-AUX.html">AUX</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-ADP.html">ADP</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:impers	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	3:aux	_
2	stata	essere	AUX	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	3:cop	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	0:root|7:obj	_
4	che	che	PRON	PR	PronType=Rel	7	obj	3:ref	_
5	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	7	expl	7:expl	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	7	expl:impers	7:expl:impers	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	3:acl:relcl	SpaceAfter=No
8	:	:	PUNCT	FC	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:impers	color:blue
1	Come	come	ADV	B	_	4	advmod	4:advmod	_
2	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	3	expl:impers	3:expl:impers	_
3	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	misurare	misurare	VERB	V	VerbForm=Inf	0	root	0:root	_
5	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	6:det	_
6	contenuto	contenuto	NOUN	S	Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
7	di	di	ADP	E	_	8	case	8:case	_
8	deuterio	deuterio	NOUN	S	Gender=Masc|Number=Sing	6	nmod	6:nmod:di	_
9	in	in	ADP	E	_	11	case	11:case	_
10	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	_
11	vino	vino	NOUN	S	Gender=Masc|Number=Sing	4	obl	4:obl:in	SpaceAfter=No
12	?	?	PUNCT	FS	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 expl:impers	color:blue
1	In	in	ADP	E	_	3	case	3:case	_
2	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	3:det	_
3	discorsi	discorso	NOUN	S	Gender=Masc|Number=Plur	10	obl	10:obl:in	_
4	e	e	CCONJ	CC	_	7	cc	7:cc	_
5	in	in	ADP	E	_	7	case	7:case	_
6	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	7:det	_
7	saggi	saggio	NOUN	S	Gender=Masc|Number=Plur	3	conj	3:conj:e|10:obl:in	_
8	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl:impers	10:expl:impers	_
9	è	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	10:cop	_
10	soliti	solito	ADJ	A	Gender=Masc|Number=Plur	0	root	0:root	_
11	ridur	ridurre	VERB	V	VerbForm=Inf	10	xcomp	10:xcomp	_
12	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	11:obj	_
13	ormai	ormai	ADV	B	_	11	advmod	11:advmod	_
14	a	a	ADP	E	_	17	case	17:case	_
15	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	17	det	17:det	_
16	sola	solo	ADJ	A	Gender=Fem|Number=Sing	17	amod	17:amod	_
17	parola	parola	NOUN	S	Gender=Fem|Number=Sing	11	obl	11:obl:a	SpaceAfter=No
18	.	.	PUNCT	FS	_	10	punct	10:punct	_

~~~


