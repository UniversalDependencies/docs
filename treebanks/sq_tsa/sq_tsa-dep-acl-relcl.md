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
1	Dëgjojmë	dëgjoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	0	root	0:root	_
2	lajmet	lajm	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	1	obj	1:obj	_
3	dhe	dhe	CCONJ	_	_	4	cc	4:cc	_
4	lexojmë	lexoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Voice=Act	1	conj	1:conj	_
5	artikujt	artikull	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	4	obj	4:obj	_
6	që	që	SCONJ	_	_	8	mark	8:mark	_
7	na	ne	PRON	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Prs	8	iobj	8:iobj	_
8	japin	jap	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	5	acl:relcl	5:acl:relcl	_
9	statistika	statistikë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	obj	8:obj	_
10	për	për	ADP	_	_	12	case	12:case	_
11	të	i	DET	_	Gender=Masc	12	det:noun	12:det:noun	_
12	vdekurit	vdekur	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	9	nmod	9:nmod	_
13	në	në	ADP	_	_	14	case	14:case	_
14	luftë	luftë	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	12:nmod	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Ata	ai	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	4	nsubj	4:nsubj	_
2	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	4	cop	4:cop	_
3	të	i	DET	_	Gender=Masc	4	det:adj	4:det:adj	_
4	vetmit	vetmi	ADJ	_	Gender=Masc|Number=Plur	0	root	0:root	_
5	anëtarë	anëtar	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	4	nmod	4:nmod	_
6	që	që	SCONJ	_	_	8	mark	8:mark	_
7	kanë	kam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	8	aux	8:aux	_
8	mbijetuar	mbijetoj	VERB	_	VerbForm=Part	4	acl:relcl	4:acl:relcl	_
9	prej	prej	ADP	_	_	10	case	10:case	_
10	gjinisë	gjini	NOUN	_	Case=Abl|Definite=Def|Gender=Fem|Number=Sing	8	obl	8:obl	_
11	Homo	homo	PROPN	_	_	10	nmod	10:nmod	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 17 acl:relcl	color:blue
1	Në	në	ADP	_	_	3	case	3:case	_
2	këtë	ky	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	_
3	kuadër	kuadër	NOUN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	6	obl	6:obl	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	ai	ai	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	6:nsubj	_
6	theksonte	theksoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	0:root	_
7	rëndësinë	rëndësi	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	6	obj	6:obj	_
8	dhe	dhe	CCONJ	_	_	9	cc	9:cc	_
9	përparësitë	përparësi	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	7	conj	7:conj	_
10	që	që	SCONJ	_	_	11	mark	11:mark	_
11	ka	ka	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	7	acl:relcl	7:acl:relcl	_
12	edukimi	edukim	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
13	dhe	dhe	CCONJ	_	_	14	cc	14:cc	_
14	arsimimi	arsimim	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	12	conj	12:conj	_
15	jashtëinstitucional	jashtëinstitucional	ADJ	_	Gender=Masc|Number=Sing	14	amod	14:amod	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	17:punct	_
17	siç	siç	ADV	_	_	7	acl:relcl	7:acl:relcl	_
18	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	17	cop	17:cop	_
19	karakteri	karakter	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	17	nsubj	17:nsubj	_
20	i	i	DET	_	Gender=Masc	21	det:adj	21:det:adj	_
21	drejtpërdrejtë	drejtpërdrejtë	ADJ	_	Gender=Masc|Number=Sing	19	amod	19:amod	_
22	i	i	DET	_	Gender=Masc	23	det:pron	23:det:pron	_
23	tij	tij	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	19	nmod:poss	19:nmod:poss	SpaceAfter=No
24	,	,	PUNCT	_	_	25	punct	25:punct	_
25	vitaliteti	vitalitet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	19	conj	19:conj	_
26	dhe	dhe	CCONJ	_	_	27	cc	27:cc	_
27	efikasiteti	efikasitet	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	19	conj	19:conj	_
28	i	i	DET	_	Gender=Masc	29	det:pron	29:det:pron	_
29	tij	tij	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	27	nmod:poss	27:nmod:poss	SpaceAfter=No
30	,	,	PUNCT	_	_	31	punct	31:punct	_
31	etj	etj.	NOUN	_	_	19	conj	19:conj	SpaceAfter=No
32	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


