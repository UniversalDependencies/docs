---
layout: base
title:  'Statistics of reparandum in UD_Portuguese-Porttinari'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Porttinari: Relations: `reparandum`

This relation is universal.

5 nodes (0%) are attached to their parents as `reparandum`.

4 instances of `reparandum` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.6.

The following 4 pairs of parts of speech are connected with `reparandum`: <tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_porttinari-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_porttinari-pos-ADJ.html">ADJ</a></tt> (1; 20% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="pt_porttinari-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_porttinari-pos-PRON.html">PRON</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 reparandum	color:blue
1	Acho	achar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	reparandum	8:reparandum	_
2	que	que	SCONJ	_	_	3	mark	3:mark	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	1:ccomp	SpaceAfter=No
4	...	...	PUNCT	_	_	1	punct	1:punct	_
5	olha	olhar	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	8	parataxis	8:parataxis	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	5:punct	_
7	nem	nem	ADV	_	_	8	advmod	8:advmod	_
8	consigo	conseguir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	15	ccomp:speech	15:ccomp:speech	_
9	achar	achar	VERB	_	VerbForm=Inf	8	xcomp	8:xcomp	_
10	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	11:det	_
11	adjetivo	adjetivo	NOUN	_	Gender=Masc|Number=Sing	9	obj	9:obj	_
12	para	para	ADP	_	_	13	case	13:case	_
13	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	obl	9:obl:para	SpaceAfter=No
14	,	,	PUNCT	_	_	8	punct	8:punct	_
15	diz	dizer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
16	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	17:det	_
17	atriz	atriz	NOUN	_	Gender=Fem|Number=Sing	15	nsubj	15:nsubj	SpaceAfter=No
18	.	.	PUNCT	_	_	15	punct	15:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 reparandum	color:blue
1	Pura	puro	ADJ	_	Gender=Fem|Number=Sing	2	amod	2:amod	_
2	lenda	lenda	NOUN	_	Gender=Fem|Number=Sing	0	root	0:root	_
3	urbana	urbano	ADJ	_	Gender=Fem|Number=Sing	9	reparandum	9:reparandum	_
4	(	(	PUNCT	_	_	9	punct	9:punct	SpaceAfter=No
5	em	em	ADP	_	_	7	case	7:case	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	7:det	_
7	verdade	verdade	NOUN	_	Gender=Fem|Number=Sing	9	obl	9:obl:em	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	7:punct	_
9	rural	rural	ADJ	_	Number=Sing	2	amod	2:amod	_
10	-	-	PUNCT	_	_	13	punct	13:punct	SpaceAfter=No
11	dificilmente	dificilmente	ADV	_	_	13	advmod	13:advmod	_
12	você	você	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	13	nsubj	13:nsubj	_
13	encontrará	encontrar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	2	parataxis	2:parataxis	_
14	sapos	sapo	NOUN	_	Gender=Masc|Number=Plur	13	obj	13:obj	_
15	pra	para	ADP	_	Abbr=Yes	16	mark	16:mark	_
16	ferver	ferver	VERB	_	VerbForm=Inf	13	advcl	13:advcl:para	_
17	em	em	ADP	_	_	19	case	19:case	_
18	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	19:det	_
19	cidade	cidade	NOUN	_	Gender=Fem|Number=Sing	13	obl	13:obl:em	SpaceAfter=No
20	)	)	PUNCT	_	_	13	punct	13:punct	SpaceAfter=No
21	.	.	PUNCT	_	_	2	punct	2:punct	SpaceAfter=No

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 18 reparandum	color:blue
1	Em	em	ADP	_	_	3	case	3:case	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	3:det	_
3	Encontro	Encontro	PROPN	_	_	24	obl	24:obl:em	_
4	Nacional	Nacional	PROPN	_	_	3	flat:name	3:flat:name	_
5	de	de	ADP	_	_	6	case	6:case	_
6	Procuradores	Procuradores	PROPN	_	_	3	flat:name	3:flat:name	_
7	de	de	ADP	_	_	9	case	9:case	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	9:det	_
9	República	República	PROPN	_	_	3	flat:name	3:flat:name	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	12:punct	_
11	em	em	ADP	_	_	12	case	12:case	_
12	outubro	outubro	NOUN	_	Gender=Masc|Number=Sing	24	obl	24:obl:em	_
13	de	de	ADP	_	_	15	case	15:case	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	15:det	_
15	ano	ano	NOUN	_	Gender=Masc|Number=Sing	12	nmod	12:nmod:de	_
16	passado	passado	ADJ	_	Gender=Masc|Number=Sing|VerbForm=Part	15	amod	15:amod	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	18:punct	_
18	início	início	NOUN	_	Gender=Masc|Number=Sing	12	reparandum	12:reparandum	_
19	de	de	ADP	_	_	20	case	20:case	_
20	novembro	novembro	NOUN	_	Gender=Masc|Number=Sing	18	nmod	18:nmod:de	SpaceAfter=No
21	,	,	PUNCT	_	_	18	punct	18:punct	_
22	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	23:det	_
23	Janot	Janot	PROPN	_	_	24	nsubj	24:nsubj	_
24	soltou	soltar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
25	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	26	det	26:det	_
26	frase	frase	NOUN	_	Gender=Fem|Number=Sing	24	obj	24:obj|29:nsubj	_
27	que	que	PRON	_	PronType=Rel	29	nsubj	26:ref	_
28	me	me	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	29	iobj	29:iobj	_
29	chamou	chamar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	26	acl:relcl	26:acl:relcl	_
30	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	31	det	31:det	_
31	atenção	atenção	NOUN	_	Gender=Fem|Number=Sing	29	obj	29:obj	SpaceAfter=No
32	.	.	PUNCT	_	_	24	punct	24:punct	SpaceAfter=No

~~~


