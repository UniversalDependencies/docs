---
layout: base
title:  'Statistics of parataxis in UD_Faroese-FarPaHC'
udver: '2'
---

## Treebank Statistics: UD_Faroese-FarPaHC: Relations: `parataxis`

This relation is universal.

10 nodes (0%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.1.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="fo_farpahc-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_farpahc-pos-VERB.html">VERB</a></tt> (5; 50% instances), <tt><a href="fo_farpahc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (2; 20% instances), <tt><a href="fo_farpahc-pos-AUX.html">AUX</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="fo_farpahc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 10% instances), <tt><a href="fo_farpahc-pos-VERB.html">VERB</a></tt>-<tt><a href="fo_farpahc-pos-PRON.html">PRON</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 parataxis	color:blue
1	Konan	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	2	nsubj	_	_
2	sigur	_	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	við	_	ADP	P	_	4	case	_	_
4	hann	_	PRON	PRO-A	Case=Acc	2	obl	_	SpaceAfter=No
5	:	:	PUNCT	,	_	4	punct	_	_
6	"	_	PUNCT	"	_	5	punct	_	_
7	Eg	_	PRON	PRO-N	Case=Nom	8	nsubj	_	_
8	veit	_	VERB	VBPI	Mood=Ind|Tense=Pres	2	ccomp	_	SpaceAfter=No
9	,	,	PUNCT	,	_	8	punct	_	_
10	at	_	SCONJ	C	_	12	mark	_	_
11	Messias	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	12	nsubj	_	_
12	kemur	_	VERB	VBPI	Mood=Ind|Tense=Pres	8	ccomp	_	_
13	tað	_	PRON	PRO-N	Case=Nom	14	nsubj	_	_
14	merkir	_	VERB	VBPI	Mood=Ind|Tense=Pres	12	parataxis	_	SpaceAfter=No
15	:	:	PUNCT	,	_	14	punct	_	_
16	Kristus	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	14	dep	_	SpaceAfter=No
17	;	;	PUNCT	.	_	16	punct	_	_
18	tá	_	ADV	ADV	Degree=Pos	25	advmod	_	_
19	ið	_	SCONJ	C	_	21	mark	_	_
20	hann	_	PRON	PRO-N	Case=Nom	21	nsubj	_	_
21	kemur	_	VERB	VBPI	Mood=Ind|Tense=Pres	18	acl:relcl	_	SpaceAfter=No
22	,	,	PUNCT	,	_	25	punct	_	_
23	skal	_	AUX	MDPI	Mood=Ind|Tense=Pres	25	aux	_	_
24	hann	_	PRON	PRO-N	Case=Nom	25	nsubj	_	_
25	kunngera	_	VERB	VB	VerbForm=Inf	2	conj	_	OriginalHead=0
26	okkum	_	PRON	PRO-D	Case=Dat	25	iobj	_	_
27	alt	_	DET	Q-A	Case=Acc	25	obj	_	SpaceAfter=No
28	.	.	PUNCT	.	_	27	punct	_	SpaceAfter=No
29	"	_	PUNCT	"	_	28	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 27 29 parataxis	color:blue
1	Men	_	CCONJ	CONJ	_	2	cc	_	_
2	Jesus	_	PROPN	NPR-G	Case=Gen|Definite=Ind|Number=Sing	3	nsubj	_	_
3	hugdi	_	VERB	VBDI	Mood=Ind|Tense=Past	0	root	_	_
4	upp	_	ADP	RP	_	3	compound:prt	_	_
5	á	_	ADP	P	_	6	case	_	_
6	hann	_	PRON	PRO-A	Case=Acc	3	obl	_	_
7	og	_	CCONJ	CONJ	_	8	cc	_	_
8	segði	_	VERB	VBDI	Mood=Ind|Tense=Past	3	conj	_	OriginalHead=0|SpaceAfter=No
9	:	:	PUNCT	,	_	8	punct	_	_
10	"	_	PUNCT	"	_	9	punct	_	_
11	Tú	_	PRON	PRO-N	Case=Nom	8	xcomp	_	_
12	ert	_	AUX	BEPI	Mood=Ind|Tense=Pres	11	cop	_	_
13	Símun	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	11	xcomp	_	SpaceAfter=No
14	,	,	PUNCT	,	_	13	punct	_	_
15	sonur	_	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	13	appos	_	_
16	Jónasar	_	PROPN	NPR-G	Case=Gen|Definite=Ind|Number=Sing	15	nmod:poss	_	SpaceAfter=No
17	,	,	PUNCT	.	_	16	punct	_	_
18	tú	_	PRON	PRO-N	Case=Nom	21	nsubj	_	_
19	skalt	_	AUX	MDPI	Mood=Ind|Tense=Pres	21	aux	_	_
20	verða	_	AUX	RD	VerbForm=Inf	21	aux	_	_
21	kallaður	_	VERB	VAN	Tense=Past|VerbForm=Part	3	conj	_	OriginalHead=0
22	Kefas	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	21	ccomp	_	_
23	sum	_	SCONJ	C	_	25	mark	_	_
24	er	_	AUX	BEPI	Mood=Ind|Tense=Pres	25	cop	_	_
25	útlagt	_	VERB	VAN	Tense=Past|VerbForm=Part	22	acl:relcl	_	SpaceAfter=No
26	:	:	PUNCT	,	_	25	punct	_	_
27	Petros	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	25	xcomp	_	SpaceAfter=No
28	;	;	PUNCT	.	_	27	punct	_	_
29	tað	_	PRON	PRO-N	Case=Nom	27	parataxis	_	_
30	er	_	AUX	BEPI	Mood=Ind|Tense=Pres	29	cop	_	SpaceAfter=No
31	:	:	PUNCT	,	_	30	punct	_	_
32	klettur	_	NOUN	N-N	Case=Nom|Definite=Ind|Number=Sing	29	xcomp	_	SpaceAfter=No
33	.	.	PUNCT	.	_	32	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 27 parataxis	color:blue
1	Hann	_	PRON	PRO-N	Case=Nom	2	nsubj	_	_
2	finnur	_	VERB	VBPI	Mood=Ind|Tense=Pres	0	root	_	_
3	fyrst	_	ADV	ADVS	Degree=Sup	2	advmod	_	_
4	bróður	_	NOUN	N-A	Case=Acc|Definite=Ind|Number=Sing	2	obj	_	_
5	sín	_	PRON	PRO-A	Case=Acc	4	nmod:poss	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	Símun	_	PROPN	NPR-A	Case=Acc|Definite=Ind|Number=Sing	4	appos	_	SpaceAfter=No
8	,	,	PUNCT	.	_	7	punct	_	_
9	og	_	CCONJ	CONJ	_	10	cc	_	_
10	sigur	_	VERB	VBPI	Mood=Ind|Tense=Pres	2	conj	_	OriginalHead=0
11	við	_	ADP	P	_	12	case	_	_
12	hann	_	PRON	PRO-A	Case=Acc	10	obl	_	SpaceAfter=No
13	:	:	PUNCT	,	_	12	punct	_	_
14	"	_	PUNCT	"	_	13	punct	_	_
15	Vit	_	PRON	PRO-N	Case=Nom	17	nsubj	_	_
16	hava	_	AUX	HVPI	Mood=Ind|Tense=Pres	17	aux	_	_
17	funnið	_	VERB	VBN	Tense=Past|VerbForm=Part	10	ccomp	_	_
18	Messias	_	PROPN	NPR-A	Case=Acc|Definite=Ind|Number=Sing	17	obj	_	SpaceAfter=No
19	"	_	PUNCT	"	_	18	punct	_	_
20	sum	_	SCONJ	C	_	21	mark	_	_
21	er	_	AUX	BEPI	Mood=Ind|Tense=Pres	18	acl:relcl	_	_
22	tað	_	DET	D-N	Case=Nom	23	det	_	_
23	sama	_	ADJ	ADJ-N	Case=Nom|Degree=Pos	21	xcomp	_	_
24	sum	_	SCONJ	C	_	25	mark	_	_
25	Kristus	_	PROPN	NPR-N	Case=Nom|Definite=Ind|Number=Sing	23	advcl	_	SpaceAfter=No
26	;	;	PUNCT	.	_	25	punct	_	_
27	tað	_	PRON	PRO-N	Case=Nom	21	parataxis	_	_
28	er	_	AUX	BEPI	Mood=Ind|Tense=Pres	27	cop	_	SpaceAfter=No
29	:	:	PUNCT	,	_	28	punct	_	_
30	salvaður	_	VERB	VAN	Tense=Past|VerbForm=Part	27	dep	_	SpaceAfter=No
31	.	.	PUNCT	.	_	30	punct	_	_

~~~


