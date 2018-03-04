---
layout: base
title:  'Statistics of fixed in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `fixed`

This relation is universal.

21 nodes (0%) are attached to their parents as `fixed`.

21 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `fixed`: <tt><a href="lv-pos-ADV.html">ADV</a></tt>-<tt><a href="lv-pos-SCONJ.html">SCONJ</a></tt> (20; 95% instances), <tt><a href="lv-pos-PART.html">PART</a></tt>-<tt><a href="lv-pos-SCONJ.html">SCONJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Vairāk	daudz	ADV	rcq	Degree=Cmp	3	advmod	3:advmod	_
2	nekā	nekā	SCONJ	cs	_	1	fixed	1:fixed	_
3	pusgadu	pusgads	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	9	obl	9:obl:acc	_
4	Sofija	Sofija	PROPN	npfsn4	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	9:nsubj	_
5	vai	vai	PART	q	_	7	discourse	7:discourse	_
6	ik	ik	PART	q	_	7	discourse	7:discourse	_
7	dienu	diena	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	9	obl	9:obl:acc	_
8	bija	būt	VERB	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
9	jutusi	just	VERB	vmnpdfsnasnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
10	,	,	PUNCT	zc	_	15	punct	15:punct	_
11	cik	cik	ADV	r0q	PronType=Int	15	advmod	15:advmod	_
12	ļoti	ļoti	ADV	r0q	_	15	advmod	15:advmod	_
13	viņai	viņa	PRON	pp3fsdn	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs	15	obl	15:obl:dat	_
14	vecmāmiņas	vecmāmiņa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	15	nsubj	15:nsubj	_
15	trūkst	trūkt	VERB	vgnipi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	ccomp	9:ccomp	SpaceAfter=No
16	.	.	PUNCT	zs	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 30 fixed	color:blue
1	Tumbočkas	Tumbočkas	NOUN	ncfpn4	Case=Nom|Gender=Fem|Number=Plur	9	nsubj	9:nsubj	SpaceAfter=No
2	,	,	PUNCT	zc	_	7	punct	7:punct	_
3	kas	kas	PRON	pr000nn	Case=Nom|PronType=Rel	7	nsubj	7:nsubj	_
4	patiešām	patiešām	PART	q	_	7	discourse	7:discourse	_
5	ir	būt	VERB	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	īstas	īsta	ADJ	arfpnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Plur	7	amod	7:amod	_
7	tumbočkas	tumbočkas	NOUN	ncfpn4	Case=Nom|Gender=Fem|Number=Plur	1	acl	1:acl	SpaceAfter=No
8	,	,	PUNCT	zc	_	7	punct	7:punct	_
9	grīļojas	grīļoties	VERB	vmyipi230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
10	uz	uz	ADP	sppd	_	12	case	12:case	_
11	nedrošām	nedroša	ADJ	affpdnp	Case=Dat|Degree=Pos|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Act	12	amod	12:amod	_
12	kājām	kāja	NOUN	ncfpd4	Case=Dat|Gender=Fem|Number=Plur	9	obl	9:obl:uz	SpaceAfter=No
13	,	,	PUNCT	zc	_	17	punct	17.1:punct	_
14	divvietīgā	divvietīgs	ADJ	armslnp	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	15	amod	15:amod	_
15	numurā	numurs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	17	obl	17.1:obl:loc	_
16	trīs	trīs	NUM	mcsmpn	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	17	nummod	17:nummod	_
17	šķīvji	šķīvis	NOUN	ncmpn2	Case=Nom|Gender=Masc|Number=Plur	9	conj	17.1:nsubj	SpaceAfter=No
17.1	ir	būt	VERB	vmnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	_	_	9:conj	_
18	,	,	PUNCT	zc	_	21	punct	21:punct	_
19	trīs	trīs	NUM	mcsfpn	Case=Nom|Gender=Fem|Number=Plur|NumType=Card	21	nummod	21:nummod	_
20	kafijas	kafija	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	21	nmod	21:nmod:gen	_
21	tasītes	tasīte	NOUN	ncfpn5	Case=Nom|Gender=Fem|Number=Plur	17	conj	17:conj|17.1:nsubj	SpaceAfter=No
22	,	,	PUNCT	zc	_	24	punct	24:punct	_
23	trīs	trīs	NUM	mcsfpn	Case=Nom|Gender=Fem|Number=Plur|NumType=Card	24	nummod	24:nummod	_
24	glāzes	glāze	NOUN	ncfpn5	Case=Nom|Gender=Fem|Number=Plur	17	conj	17:conj|17.1:nsubj	_
25	-	-	PUNCT	zd	_	32	punct	32.1:punct	_
26	lūdzu	lūdzu	INTJ	i	_	32	discourse	32.1:discourse	_
27	-	-	PUNCT	zd	_	26	punct	26:punct	_
28	ne	ne	PART	q	_	29	discourse	29:discourse	_
29	vairāk	daudz	ADV	rcq	Degree=Cmp	31	advmod	31:advmod	_
30	kā	kā	SCONJ	cs	_	29	fixed	29:fixed	_
31	viens	viens	NUM	mcsmsn	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	32	nummod	32:nummod	_
32	ciemiņš	ciemiņš	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	9	conj	32.1:nsubj	_
32.1	_	_	VERB	vmn000030an	Person=3|Polarity=Pos|VerbForm=Fin|Voice=Act	_	_	9:conj	_
33	vienā	viena	NUM	mcsfsl	Case=Loc|Gender=Fem|Number=Sing|NumType=Card	34	nummod	34:nummod	_
34	reizē	reize	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	32	obl	32.1:obl:loc	SpaceAfter=No
35	.	.	PUNCT	zs	_	9	punct	9:punct	_

~~~


