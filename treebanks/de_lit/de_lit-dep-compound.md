---
layout: base
title:  'Statistics of compound in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="de_lit-dep-compound-prt.html">compound:prt</a></tt>.

4 nodes (0%) are attached to their parents as `compound`.

3 instances of `compound` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 4 pairs of parts of speech are connected with `compound`: <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-CCONJ.html">CCONJ</a></tt> (1; 25% instances), <tt><a href="de_lit-pos-X.html">X</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 39 41 compound	color:blue
1	Diese	dieser	DET	PDAT	_	3	det	_	_
2	ruhige	ruhig	ADJ	ADJA	_	3	amod	_	_
3	Unbefangenheit	Unbefangenheit	NOUN	NN	_	4	nsubj	_	_
4	verdient	verdienen	VERB	VVFIN	_	0	root	_	_
5	eigentlich	eigentlich	ADV	ADV	_	4	advmod	_	_
6	den	der	DET	ART	_	7	det	_	_
7	Namen	Name	NOUN	NN	_	4	obj	_	_
8	der	der	DET	ART	_	9	det	_	_
9	Offenheit	Offenheit	NOUN	NN	_	7	nmod	_	_
10	allein	allein	ADV	ADV	_	4	advmod	_	SpaceAfter=No
11	:	--	PUNCT	$.	_	4	punct	_	_
12	denn	denn	CCONJ	KON	_	13	cc	_	_
13	offen	offen	ADJ	ADJD	_	4	conj	_	_
14	ist	sein	AUX	VAFIN	_	13	cop	_	SpaceAfter=No
15	,	--	PUNCT	$,	_	13	punct	_	_
16	wo	wo	ADV	PWAV	_	19	advmod	_	_
17	hinein	hinein	ADV	ADV	_	19	advmod	_	_
18	jeder	jeder	PRON	PIS	_	19	nsubj	_	_
19	gehn	gehn	VERB	VVINF	_	13	csubj	_	_
20	kann	können	AUX	VMFIN	_	19	aux	_	SpaceAfter=No
21	,	--	PUNCT	$,	_	26	punct	_	_
22	ohne	ohne	SCONJ	KOUI	_	26	mark	_	_
23	daß	daß	SCONJ	KOUS	_	26	mark	_	_
24	etwas	etwas	PRON	PIS	_	26	nsubj	_	_
25	Gewalttätiges	gewalttätige	NOUN	NN	_	24	nmod	_	_
26	nötig	nötig	ADJ	ADJD	_	19	acl	_	_
27	wäre	sein	AUX	VAFIN	_	26	cop	_	SpaceAfter=No
28	;	--	PUNCT	$.	_	4	punct	_	_
29	versteht	verstehen	VERB	VVFIN	_	4	parataxis	_	_
30	sich	sich	PRON	PRF	_	29	obj	_	SpaceAfter=No
31	,	--	PUNCT	$,	_	29	punct	_	_
32	daß	daß	SCONJ	KOUS	_	46	mark	_	_
33	er	er	PRON	PPER	_	46	nsubj	_	_
34	auch	auch	ADV	ADV	_	46	advmod	_	_
35	das	der	PRON	PDS	_	46	obj	_	SpaceAfter=No
36	,	--	PUNCT	$,	_	39	punct	_	_
37	was	was	PRON	PWS	_	39	nsubj	_	_
38	nicht	nicht	PART	PTKNEG	_	39	advmod	_	_
39	niet-	niet	ADJ	ADJD	_	35	acl	_	_
40	und	und	CCONJ	KON	_	41	cc	_	_
41	nagelfest	nagelfest	ADJ	ADJD	_	39	compound	_	_
42	ist	sein	AUX	VAFIN	_	39	cop	_	SpaceAfter=No
43	,	--	PUNCT	$,	_	39	punct	_	_
44	mit	mit	ADP	APPR	_	45	case	_	_
45	Achtung	Achtung	NOUN	NN	_	46	obl	_	_
46	behandle	behandeln	VERB	VVFIN	_	29	advcl	_	SpaceAfter=No
47	.	--	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 36	bgColor:blue
# visual-style 36	fgColor:white
# visual-style 38	bgColor:blue
# visual-style 38	fgColor:white
# visual-style 38 36 compound	color:blue
1	Im	in	ADP	APPRART	_	3	case	_	_
2	ersten	erster	ADJ	ADJA	_	3	amod	_	_
3	Falle	Fall	NOUN	NN	_	4	obl	_	_
4	gibts	gibt	ADV	ADV	_	0	root	_	_
5	reine	rein	ADJ	ADJA	_	6	amod	_	_
6	Tendenzen	Tendenz	NOUN	NN	_	4	nmod	_	SpaceAfter=No
7	,	--	PUNCT	$,	_	8	punct	_	_
8	Projekte	Projekt	NOUN	NN	_	6	appos	_	_
9	die	der	DET	ART	_	11	det	_	_
10	so	so	ADV	ADV	_	11	advmod	_	_
11	weit	weit	ADJ	ADJD	_	8	acl	_	_
12	sind	sein	AUX	VAFIN	_	11	cop	_	SpaceAfter=No
13	,	--	PUNCT	$,	_	11	punct	_	_
14	wie	wie	CCONJ	KOKOM	_	17	cc	_	_
15	der	der	DET	ART	_	17	det	_	_
16	blaue	blau	ADJ	ADJA	_	17	amod	_	_
17	Himmel	Himmel	NOUN	NN	_	8	nmod	_	SpaceAfter=No
18	,	--	PUNCT	$,	_	27	punct	_	_
19	oder	oder	CCONJ	KON	_	27	cc	_	_
20	wenn	wenn	SCONJ	KOUS	_	24	mark	_	SpaceAfter=No
21	'	--	PUNCT	$(	_	22	punct	_	SpaceAfter=No
22	s	--	PRON	PPER	_	24	nsubj	_	_
23	hoch	hoch	ADJ	ADJD	_	24	advmod	_	_
24	kömmt	kommen	VERB	VVFIN	_	27	advcl	_	SpaceAfter=No
25	,	--	PUNCT	$,	_	24	punct	_	_
26	skizzierte	skizzieren	VERB	VVPP	_	27	amod	_	_
27	Fantasien	Fantasien	PROPN	NE	_	17	conj	_	SpaceAfter=No
28	:	--	PUNCT	$.	_	4	punct	_	_
29	im	in	ADP	APPRART	_	30	case	_	_
30	letzten	letzt	PRON	PIS	_	31	obl	_	_
31	zeigt	zeigen	VERB	VVFIN	_	4	parataxis	_	_
32	sich	sich	PRON	PRF	_	31	iobj	_	_
33	jene	jener	PRON	PDS	_	38	det	_	_
34	harmonisch	harmonisch	ADV	ADV	_	35	advmod	_	_
35	ausgebildete	ausgebildet	ADJ	ADJA	_	38	amod	_	_
36	Kunst	Kunst	NOUN	NN	_	38	compound	_	SpaceAfter=No
37	-	--	PUNCT	$(	_	38	punct	_	SpaceAfter=No
38	Plattheit	Plattheit	NOUN	NN	_	31	nsubj	_	SpaceAfter=No
39	,	--	PUNCT	$,	_	47	punct	_	_
40	in	in	ADP	APPR	_	41	case	_	_
41	welcher	welcher	PRON	PRELS	_	47	nmod	_	_
42	die	der	DET	ART	_	45	det	_	_
43	größten	groß	ADJ	ADJA	_	45	amod	_	_
44	engländischen	engländisch	ADJ	ADJA	_	45	amod	_	_
45	Kritiker	Kritiker	NOUN	NN	_	47	nsubj	_	_
46	so	so	ADV	ADV	_	47	advmod	_	_
47	klassisch	klassisch	ADJ	ADJD	_	38	acl	_	_
48	sind	sein	AUX	VAFIN	_	47	cop	_	SpaceAfter=No
49	.	--	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Die	der	DET	ART	_	2	det	_	_
2	Vernunftgesetze	Vernunftgesetz	NOUN	NN	_	11	nsubj	_	_
3	der	der	DET	ART	_	4	det	_	_
4	Rechts-	Recht	X	TRUNC	_	2	nmod	_	_
5	und	und	CCONJ	KON	_	4	compound	_	_
6	Sittenlehre	Sittenlehre	NOUN	NN	_	4	compound	_	_
7	in	in	ADP	APPR	_	8	case	_	_
8	Naturgesetze	Naturgesetz	NOUN	NN	_	9	obl	_	_
9	verwandelt	verwandeln	VERB	VVFIN	_	2	acl	_	SpaceAfter=No
10	,	--	PUNCT	$,	_	9	punct	_	_
11	geben	geben	VERB	VVFIN	_	0	root	_	_
12	die	der	DET	ART	_	13	det	_	_
13	Grundsätze	Grundsatz	NOUN	NN	_	11	obj	_	_
14	der	der	DET	ART	_	15	det	_	_
15	Physiologie	Physiologie	NOUN	NN	_	13	nmod	_	_
16	und	und	CCONJ	KON	_	17	cc	_	_
17	Psychologie	Psychologie	NOUN	NN	_	15	conj	_	SpaceAfter=No
18	.	--	PUNCT	$.	_	11	punct	_	_

~~~


