---
layout: base
title:  'Statistics of compound:prt in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-compound.html">compound</a></tt>.

75 nodes (0%) are attached to their parents as `compound:prt`.

73 instances of `compound:prt` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.69333333333333.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (71; 95% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 compound:prt	color:blue
1	Giebt	gieben	VERB	VVFIN	_	0	root	_	_
2	er	er	PRON	PPER	_	1	nsubj	_	_
3	die	der	DET	ART	_	4	det	_	_
4	Wahrheit	Wahrheit	NOUN	NN	_	1	obj	_	_
5	preis	preis	ADP	PTKVZ	_	1	compound:prt	_	SpaceAfter=No
6	,	--	PUNCT	$,	_	1	punct	_	_
7	so	so	ADV	ADV	_	8	advmod	_	_
8	giebt	gieben	VERB	VVFIN	_	1	parataxis	_	_
9	er	er	PRON	PPER	_	8	nsubj	_	_
10	sich	sich	PRON	PRF	_	8	obj	_	_
11	selbst	selbst	ADV	ADV	_	10	advmod	_	_
12	preis	preis	ADP	PTKVZ	_	8	compound:prt	_	SpaceAfter=No
13	.	--	PUNCT	$.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 compound:prt	color:blue
1	Man	man	PRON	PIS	_	2	nsubj	_	_
2	schreibt	schreiben	VERB	VVFIN	_	0	root	_	_
3	der	der	DET	ART	_	4	det	_	_
4	Natur	Natur	NOUN	NN	_	2	iobj	_	_
5	oder	oder	CCONJ	KON	_	8	cc	_	_
6	dem	der	DET	ART	_	8	det	_	_
7	höchsten	hoch	ADJ	ADJA	_	8	amod	_	_
8	Wesen	Wesen	NOUN	NN	_	4	conj	_	_
9	nie	nie	ADV	ADV	_	2	advmod	_	_
10	Klugheit	Klugheit	NOUN	NN	_	2	obj	_	_
11	zu	zu	PART	PTKZU	_	2	compound:prt	_	SpaceAfter=No
12	,	--	PUNCT	$,	_	13	punct	_	_
13	ungeachtet	ungeachtet	VERB	VVFIN	_	2	parataxis	_	_
14	man	man	PRON	PIS	_	13	nsubj	_	_
15	in	in	ADP	APPR	_	18	case	_	_
16	allen	aller	ADJ	ADJA	_	18	amod	_	_
17	ihren	ihr	DET	PPOSAT	_	18	det:poss	_	_
18	Veranstaltungen	Veranstaltung	NOUN	NN	_	13	obl	_	_
19	dies	dieser	PRON	PDS	_	20	det	_	_
20	Talent	Talent	NOUN	NN	_	13	obl	_	_
21	in	in	ADP	APPR	_	24	case	_	_
22	einem	ein	DET	ART	_	24	det	_	_
23	hohen	hoch	ADJ	ADJA	_	24	amod	_	_
24	Grade	Grade	NOUN	NN	_	13	obl	_	_
25	preist	preisen	ADP	PTKVZ	_	13	compound:prt	_	SpaceAfter=No
26	.	--	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 compound:prt	color:blue
1	Die	der	DET	ART	_	2	det	_	_
2	Verworrnen	Verworrne	NOUN	NN	_	3	nsubj	_	_
3	haben	haben	AUX	VAFIN	_	0	root	_	_
4	in	in	ADP	APPR	_	6	case	_	_
5	dem	der	DET	ART	_	6	det	_	_
6	Anfang	Anfang	NOUN	NN	_	11	obl	_	_
7	mit	mit	ADP	APPR	_	9	case	_	_
8	mächtigen	mächtig	ADJ	ADJA	_	9	amod	_	_
9	Hindernissen	Hindernis	NOUN	NN	_	11	obl	_	_
10	zu	zu	PART	PTKZU	_	11	mark	_	_
11	kämpfen	kämpfen	VERB	VVINF	_	3	xcomp	_	SpaceAfter=No
12	,	--	PUNCT	$,	_	11	punct	_	_
13	sie	sie	PRON	PPER	_	14	nsubj	_	_
14	dringennur	dringennur	ADV	ADV	_	3	parataxis	_	_
15	langsam	langsam	ADJ	ADJD	_	14	xcomp	_	_
16	ein	ein	ADP	PTKVZ	_	14	compound:prt	_	SpaceAfter=No
17	,	--	PUNCT	$,	_	19	punct	_	_
18	sie	sie	PRON	PPER	_	19	nsubj	_	_
19	lernen	lernen	VERB	VVFIN	_	3	parataxis	_	_
20	mit	mit	ADP	APPR	_	21	case	_	_
21	Mühe	Mühe	NOUN	NN	_	19	obl	_	_
22	arbeiten	arbeiten	VERB	VVFIN	_	19	ccomp	_	SpaceAfter=No
23	:	--	PUNCT	$.	_	3	punct	_	_
24	dann	dann	ADV	ADV	_	29	advmod	_	_
25	aber	aber	ADV	ADV	_	29	advmod	_	_
26	sind	sein	AUX	VAFIN	_	29	cop	_	_
27	sie	sie	PRON	PPER	_	29	nsubj	_	_
28	auch	auch	ADV	ADV	_	29	advmod	_	_
29	Herrn	Herr	NOUN	NN	_	3	parataxis	_	_
30	und	und	CCONJ	KON	_	31	cc	_	_
31	Meister	Meister	NOUN	NN	_	29	conj	_	_
32	auf	auf	ADP	APPR	_	33	case	_	_
33	immer	immer	ADV	ADV	_	29	advmod	_	SpaceAfter=No
34	.	--	PUNCT	$.	_	3	punct	_	_

~~~


