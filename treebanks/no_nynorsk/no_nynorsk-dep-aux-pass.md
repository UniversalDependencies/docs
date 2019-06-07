---
layout: base
title:  'Statistics of aux:pass in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-aux.html">aux</a></tt>.

1203 nodes (0%) are attached to their parents as `aux:pass`.

1203 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54280964256027.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (1194; 99% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:pass	color:blue
1	Jaudå	jaudå	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	_	_	1	punct	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	10	punct	_	_
7	og	og	CCONJ	_	_	10	cc	_	_
8	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	ADJ	_	Definite=Ind|Number=Sing|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
12	som	som	PRON	_	PronType=Rel	14	nsubj	_	_
13	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	blitt	bli	ADJ	_	Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part	4	aux:pass	_	_
4	nyansert	nyansere	ADJ	_	Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	_
5	ved	ved	SCONJ	_	_	9	mark	_	_
6	at	at	SCONJ	_	_	9	mark	_	_
7	ein	ein	PRON	_	Animacy=Hum|Number=Sing|PronType=Art,Prs	9	nsubj	_	_
8	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	aux	_	_
9	byrja	byrje	VERB	_	VerbForm=Part	4	advcl	_	_
10	å	å	PART	_	_	11	mark	_	_
11	bruke	bruke	VERB	_	VerbForm=Inf	9	xcomp	_	_
12	andre	annan	DET	_	Number=Plur|PronType=Dem	13	det	_	_
13	kjelder	kjelde	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	11	obj	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 aux:pass	color:blue
1	-	$-	PUNCT	_	_	16	punct	_	_
2	Sidan	sidan	SCONJ	_	_	6	mark	_	_
3	resultatet	resultat	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	6	nsubj	_	_
4	etter	etter	ADP	_	_	5	case	_	_
5	avstemminga	avstemming	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
6	vart	verte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	16	advcl	_	_
7	12	12	NUM	_	Number=Plur|NumType=Card	10	nummod	_	_
8	mot	mot	ADP	_	_	9	case	_	_
9	11	11	NUM	_	Number=Plur|NumType=Card	7	obl	_	_
10	stemmer	stemme	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	6	xcomp	_	SpaceAfter=No
11	,	$,	PUNCT	_	_	6	punct	_	_
12	skulle	skulle	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	16	aux	_	_
13	denne	denne	DET	_	Gender=Fem|Number=Sing|PronType=Dem	14	det	_	_
14	saka	sak	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	16	nsubj:pass	_	_
15	blitt	bli	AUX	_	VerbForm=Part	16	aux:pass	_	_
16	stoppa	stoppe	VERB	_	Definite=Ind|Number=Sing|VerbForm=Part	0	root	_	_
17	her	her	ADV	_	_	16	advmod	_	SpaceAfter=No
18	,	$,	PUNCT	_	_	19	punct	_	_
19	uttalar	uttale	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	16	parataxis	_	_
20	ordføraren	ordførar	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	19	nsubj	_	SpaceAfter=No
21	.	$.	PUNCT	_	_	16	punct	_	_

~~~


