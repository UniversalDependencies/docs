---
layout: base
title:  'Statistics of acl:relcl in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `acl:relcl`

This relation is a language-specific subtype of .

10 nodes (1%) are attached to their parents as `acl:relcl`.

10 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.3.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (7; 70% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt> (1; 10% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt> (1; 10% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Dëgjojmë	dëgjoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	lajmet	lajm	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	1	obj	_	_
3	dhe	dhe	CCONJ	_	_	4	cc	_	_
4	lexojmë	lexoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	1	conj	_	_
5	artikujt	artikull	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	4	obj	_	_
6	që	që	SCONJ	_	_	8	mark	_	_
7	na	ne	PRON	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Prs	8	iobj	_	_
8	japin	jap	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	5	acl:relcl	_	_
9	statistika	statistikë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	obj	_	_
10	për	për	ADP	_	_	12	case	_	_
11	të	i	DET	_	Gender=Masc	12	det:noun	_	_
12	vdekurit	vdekur	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	9	nmod	_	_
13	në	në	ADP	_	_	14	case	_	_
14	luftë	luftë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Ata	ai	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	4	nsubj	_	_
2	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	4	cop	_	_
3	të	i	DET	_	Gender=Masc	4	det:adj	_	_
4	vetmit	vetmi	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
5	anëtarë	anëtar	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	4	nmod	_	_
6	që	që	SCONJ	_	_	8	mark	_	_
7	kanë	kam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	8	aux	_	_
8	mbijetuar	mbijetoj	VERB	_	VerbForm=Part	4	acl:relcl	_	_
9	prej	prej	ADP	_	_	10	case	_	_
10	gjinisë	gjini	NOUN	_	Case=Abl|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	_
11	Homo	homo	PROPN	_	_	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 17 acl:relcl	color:blue
1	Në	në	ADP	_	_	3	case	_	_
2	këtë	ky	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	kuadër	kuadër	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	ai	ai	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	_
6	theksonte	theksoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
7	rëndësinë	rëndësi	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	obj	_	_
8	dhe	dhe	CCONJ	_	_	9	cc	_	_
9	përparësitë	përparësi	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	7	conj	_	_
10	që	që	SCONJ	_	_	11	mark	_	_
11	ka	ka	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	7	acl:relcl	_	_
12	edukimi	edukim	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	_
13	dhe	dhe	CCONJ	_	_	14	cc	_	_
14	arsimimi	arsimim	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	conj	_	_
15	jashtëinstitucional	jashtëinstitucional	ADJ	_	Gender=Masc|Number=Sing	14	amod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	siç	siç	ADV	_	_	7	acl:relcl	_	_
18	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	17	cop	_	_
19	karakteri	karakter	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	17	nsubj	_	_
20	i	i	DET	_	Gender=Masc	21	det:adj	_	_
21	drejtpërdrejtë	drejtpërdrejtë	ADJ	_	Gender=Masc|Number=Sing	19	amod	_	_
22	i	i	DET	_	Gender=Masc	23	det:pron	_	_
23	tij	tij	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	19	nmod:poss	_	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	_	_
25	vitaliteti	vitalitet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	19	conj	_	_
26	dhe	dhe	CCONJ	_	_	27	cc	_	_
27	efikasiteti	efikasitet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	19	conj	_	_
28	i	i	DET	_	Gender=Masc	29	det:pron	_	_
29	tij	tij	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	27	nmod:poss	_	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	_	_
31	etj	etj.	NOUN	_	_	19	conj	_	SpaceAfter=No
32	.	.	PUNCT	_	_	6	punct	_	_

~~~


