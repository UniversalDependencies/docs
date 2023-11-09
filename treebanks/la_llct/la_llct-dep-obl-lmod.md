---
layout: base
title:  'Statistics of obl:lmod in UD_Latin-LLCT'
udver: '2'
---

## Treebank Statistics: UD_Latin-LLCT: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="la_llct-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="la_llct-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="la_llct-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="la_llct-dep-obl-tmod.html">obl:tmod</a></tt>.

3 nodes (0%) are attached to their parents as `obl:lmod`.

2 instances of `obl:lmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.

The following 1 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="la_llct-pos-VERB.html">VERB</a></tt>-<tt><a href="la_llct-pos-NOUN.html">NOUN</a></tt> (3; 100% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 22 obl:lmod	color:blue
1	omnia	omnis	DET	a|a|-|p|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	35	dislocated:obj	_	_
2	quantum	quantum	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Rel	29	advmod	_	_
3	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	5	case	_	_
4	ipsa	ipse	DET	p|p|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	_
5	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	29	dislocated:obl	_	_
6	sancti	sanctus	ADJ	a|a|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	7	amod	_	_
7	Andree	Andreas	PROPN	Propn|n|-|s|-|-|-|m|g|-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	5	punct	_	_
9	tam	tam	ADV	d|d|-|-|-|-|-|-|-|-	PronType=Dem	11	advmod:emph	_	_
10	domnicatis	domnicatus	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	11	amod	_	_
11	casis	casa	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	29	dislocated:nsubj	_	_
12	et	et	CCONJ	c|c|-|-|-|-|-|-|-|-	_	13	cc	_	_
13	rebus	res	NOUN	n|n|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	11	conj	_	_
14	quam	quam	SCONJ	c|c|-|-|-|-|-|-|-|-	_	16	cc	_	_
15	et	et	CCONJ	d|d|-|-|-|-|-|-|-|-	_	16	advmod:emph	_	_
16	massariciis	massaricius	ADJ	a|a|-|p|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Plur	10	advcl:cmp	_	SpaceAfter=No
17	,	,	PUNCT	Punc	_	16	punct	_	_
18	quantas	quantus	DET	a|a|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|NumType=Card|PronType=Rel	29	nsubj	_	_
19	ubique	ubique	ADV	d|d|-|-|-|-|-|-|-|-	AdvType=Loc|PronType=Rel	29	advmod:lmod	_	_
20	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	22	case	_	_
21	qualibet	quilibet	DET	p|p|-|s|-|-|-|f|b|-	Case=Abl|Gender=Fem|Number=Sing|PronType=Ind	22	det	_	_
22	locis	locus	NOUN	n|n|-|p|-|-|-|m|b|-	Case=Abl|Gender=Masc|Number=Plur	29	obl:lmod	_	_
23	vel	uel	CCONJ	c|c|-|-|-|-|-|-|-|-	_	24	cc	_	_
24	vocabulis	uocabulum	NOUN	n|n|-|p|-|-|-|n|b|-	Case=Abl|Gender=Neut|Number=Plur	22	conj	_	_
25	ad	ad	ADP	r|r|-|-|-|-|-|-|-|-	_	27	case	_	_
26	predicta	praedictus	DET	a|a|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	27	det	_	_
27	ecclesia	ecclesia	NOUN	n|n|-|s|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Sing	29	obl:arg	_	_
28	est	sum	AUX	v|v|3|s|p|i|a|-|-|-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	29	aux	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
29	pertenentes	pertineo	VERB	t|t|-|s|p|p|a|m|a|-	Aspect=Imp|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	1	acl:relcl	_	SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Praesens
30	,	,	PUNCT	Punc	_	1	punct	_	_
31	in	in	ADP	r|r|-|-|-|-|-|-|-|-	_	32	case	_	_
32	integrum	integer	ADJ	a|a|-|s|-|-|-|n|a|-	Case=Acc|Gender=Neut|Number=Sing	35	obl	_	_
33	mihi	ego	PRON	p|p|1|s|-|-|-|m|d|-	Case=Dat|Number=Sing|Person=1|PronType=Prs	35	obl:arg	_	_
34	eas	is	PRON	p|p|-|p|-|-|-|f|a|-	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	35	obj	_	_
35	dedisti	do	VERB	v|v|2|s|r|i|a|-|-|-	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Perfectum
36	;	;	PUNCT	Punc	_	35	punct	_	_

~~~


