---
layout: base
title:  'Statistics of obl:agent in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="de_lit-dep-obl-arg.html">obl:arg</a></tt>.

2 nodes (0%) are attached to their parents as `obl:agent`.

2 instances of `obl:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 obl:agent	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	17	mark	_	_
2	gemeine	gemein	ADJ	ADJA	_	3	amod	_	_
3	Menschen	Mensch	NOUN	NN	Case=Nom	17	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	6	punct	_	_
5	ohne	ohne	ADP	APPR	_	6	case	_	_
6	Sinn	Sinn	NOUN	NN	Case=Acc	3	nmod	_	_
7	für	für	ADP	APPR	_	9	case	_	_
8	die	der	DET	ART	Definite=Def|PronType=Art	9	det	_	_
9	Zukunft	Zukunft	NOUN	NN	Case=Acc	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	$,	_	6	punct	_	_
11	einmal	einmal	ADV	ADV	_	17	advmod	_	_
12	von	von	ADP	APPR	_	14	case	_	_
13	der	der	DET	ART	Definite=Def|PronType=Art	14	det	_	_
14	Wut	Wut	NOUN	NN	Case=Dat	17	obl:agent	_	_
15	des	der	DET	ART	Definite=Def|PronType=Art	16	det	_	_
16	Fortschreitens	Fortschreiten	NOUN	NN	Case=Gen	14	nmod	_	_
17	ergriffen	ergreifen	VERB	VVPP	_	20	advcl	_	_
18	werden	werden	AUX	VAINF	_	17	aux:pass	_	SpaceAfter=No
19	,	,	PUNCT	$,	_	20	punct	_	_
20	treiben	treiben	VERB	VVFIN	_	0	root	_	_
21	sie	sie	PRON	PPER	Case=Nom|Person=3|PronType=Prs	20	nsubj	_	SpaceAfter=No
22	's	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	20	obj	_	_
23	auch	auch	ADV	ADV	_	20	advmod	_	_
24	recht	recht	ADV	ADV	_	25	advmod	_	_
25	buchstäblich	buchstäblich	ADV	ADV	_	20	advmod	_	SpaceAfter=No
26	.	.	PUNCT	$.	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 24 obl:agent	color:blue
1	Der	der	DET	ART	Definite=Def|PronType=Art	2	det	_	_
2	Mensch	Mensch	NOUN	NN	Case=Nom	3	nsubj	_	_
3	gebe	geben	VERB	VVFIN	_	0	root	_	_
4	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	3	obj	_	_
5	selbst	selbst	ADV	ADV	_	4	advmod	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	3	punct	_	_
7	wie	wie	ADV	PWAV	_	9	advmod	_	_
8	ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	9	det	_	_
9	Kunstwerk	Kunstwerk	NOUN	NN	_	3	nmod	_	SpaceAfter=No
10	,	,	PUNCT	$,	_	18	punct	_	_
11	welches	welcher	DET	PRELS	Case=Nom|PronType=Int,Rel	18	nsubj	_	_
12	im	in	ADP	APPRART	_	13	case	_	_
13	Freien	freie	NOUN	NN	_	14	obl	_	_
14	ausgestellt	ausstellen	VERB	VVPP	_	18	xcomp	_	_
15	jedem	jeder	DET	PIAT	Case=Dat|Number=Sing|PronType=Tot	18	obl:arg	_	_
16	den	der	DET	ART	Definite=Def|PronType=Art	17	det	_	_
17	Zutritt	Zutritt	NOUN	NN	Case=Acc	18	obj	_	_
18	verstattet	verstatten	VERB	VVPP	_	9	acl	_	SpaceAfter=No
19	,	,	PUNCT	$,	_	18	punct	_	_
20	und	und	CCONJ	KON	_	25	cc	_	_
21	doch	doch	ADV	ADV	_	25	advmod	_	_
22	nur	nur	ADV	ADV	_	25	advmod	_	_
23	von	von	ADP	APPR	_	24	case	_	_
24	denen	der	PRON	PDAT	Case=Dat|Number=Plur|PronType=Dem,Rel	25	obl:agent	_	_
25	genossen	genießen	VERB	VVPP	_	18	parataxis	_	_
26	und	und	CCONJ	KON	_	27	cc	_	_
27	verstanden	verstehen	VERB	VVPP	_	25	conj	_	_
28	wird	werden	AUX	VAFIN	_	25	aux:pass	_	SpaceAfter=No
29	,	,	PUNCT	$,	_	34	punct	_	_
30	die	der	PRON	PRELS	Case=Nom|PronType=Dem,Rel	34	nsubj	_	_
31	Sinn	Sinn	NOUN	NN	_	34	obl	_	_
32	und	und	CCONJ	KON	_	33	cc	_	_
33	Studium	Studium	NOUN	NN	_	31	conj	_	_
34	mitbringen	mitbringen	VERB	VVINF	_	24	acl	_	SpaceAfter=No
35	.	.	PUNCT	$.	_	3	punct	_	_

~~~


