---
layout: base
title:  'Statistics of expl:impers in UD_Portuguese-PortJur'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PortJur: Relations: `expl:impers`

This relation is a language-specific subtype of <tt><a href="pt_portjur-dep-expl.html">expl</a></tt>.

319 nodes (0%) are attached to their parents as `expl:impers`.

185 instances of `expl:impers` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02507836990596.

The following 4 pairs of parts of speech are connected with `expl:impers`: <tt><a href="pt_portjur-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (315; 99% instances), <tt><a href="pt_portjur-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pt_portjur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_portjur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_portjur-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:impers	color:blue
1	Agravo	agravo	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
2	em	em	ADP	_	_	3	case	_	_
3	recurso	recurso	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
4	especial	especial	ADJ	_	Number=Sing	3	amod	_	_
5	eleitoral	eleitoral	ADJ	_	Number=Sing	3	amod	_	_
6	a	a	ADP	_	_	7	case	_	_
7	que	que	PRON	_	PronType=Rel	9	obl	_	_
8	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	9	expl:impers	_	_
9	nega	negar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl:relcl	_	_
10	provimento	provimento	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 expl:impers	color:blue
1	Quando	quando	SCONJ	_	_	4	mark	_	_
2	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	agente	agente	NOUN	_	Number=Sing	4	nsubj	_	_
4	deseja	desejar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
5	diretamente	diretamente	ADV	_	_	4	advmod	_	_
6	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	exposição	exposição	NOUN	_	Gender=Fem|Number=Sing	4	obj	_	_
8	de	de	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	bem	bem	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
11	jurídico	jurídico	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	_
12	a	a	ADP	_	_	14	case	_	_
13	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	perigo	perigo	NOUN	_	Gender=Masc|Number=Sing	7	nmod	_	_
15	de	de	ADP	_	_	16	case	_	_
16	lesão	lesão	NOUN	_	Gender=Fem|Number=Sing	14	nmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	4	punct	_	_
18	tem	ter	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
19	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	18	expl:impers	_	_
20	como	como	ADV	_	_	21	advmod	_	_
21	configurado	configurar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	18	xcomp	_	_
22	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	dolo	dolo	NOUN	_	Gender=Masc|Number=Sing	18	obj	_	_
24	direto	direto	ADJ	_	Gender=Masc|Number=Sing	23	amod	_	SpaceAfter=No
25	.	.	PUNCT	_	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 expl:impers	color:blue
1	"	"	PUNCT	_	_	17	punct	_	SpaceAfter=No
2	Negar	negar	VERB	_	VerbForm=Inf	17	csubj	_	_
3	ouvido	ouvido	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
4	a	a	ADP	_	_	6	case	_	_
5	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	opinião	opinião	NOUN	_	Gender=Fem|Number=Sing	2	obl	_	_
7	porque	porque	SCONJ	_	_	10	mark	_	_
8	se	se	PRON	_	Case=Nom|Person=3|PronType=Prs	10	expl:impers	_	_
9	esteja	estar	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	certo	certo	ADJ	_	Gender=Masc|Number=Sing	2	advcl	_	_
11	de	de	ADP	_	ExtPos=SCONJ	14	mark	_	_
12	que	que	SCONJ	_	_	11	fixed	_	_
13	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	_	_
14	falsa	falso	ADJ	_	Gender=Fem|Number=Sing	10	acl	_	SpaceAfter=No
15	,	,	PUNCT	_	_	10	punct	_	_
16	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
17	presumir	presumir	VERB	_	VerbForm=Inf	0	root	_	_
18	que	que	SCONJ	_	_	24	mark	_	_
19	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
20	própria	próprio	DET	_	Gender=Fem|Number=Sing|PronType=Dem	21	det	_	_
21	certeza	certeza	NOUN	_	Gender=Fem|Number=Sing	24	nsubj	_	_
22	seja	ser	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	cop	_	_
23	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	mesmo	mesmo	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	17	ccomp	_	_
25	que	que	SCONJ	_	_	26	mark	_	_
26	certeza	certeza	NOUN	_	Gender=Fem|Number=Sing	24	advcl	_	_
27	absoluta	absoluto	ADJ	_	Gender=Fem|Number=Sing	26	amod	_	SpaceAfter=No
28	.	.	PUNCT	_	_	17	punct	_	SpaceAfter=No
29	"	"	PUNCT	_	_	17	punct	_	_

~~~


