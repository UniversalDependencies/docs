---
layout: base
title:  'Statistics of advcl:pred in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `advcl:pred`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-advcl.html">advcl</a></tt>.

3 nodes (0%) are attached to their parents as `advcl:pred`.

3 instances of `advcl:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 3 pairs of parts of speech are connected with `advcl:pred`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt> (1; 33% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 33% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 advcl:pred	color:blue
1	Pavyzdžiui	pavyzdys	NOUN	dkt.vyr.vns.N.	Case=Dat|Gender=Masc|Number=Sing	11	parataxis	11:parataxis	SpaceAfter=No
2	,	,	PUNCT	skyr.	_	1	punct	1:punct	_
3	pirmoji	pirmas	NUM	sktv.raid.kelint.įvardž.mot.vns.V.	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	11	nsubj	11:nsubj	_
4	žvelgdama	žvelgti	VERB	vksm.pusd.mot.vns.	Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Conv	11	advcl	11:advcl	_
5	į	į	ADP	prl.G.	AdpType=Prep|Case=Acc	7	case	7:case	_
6	papilnėjusias	papilnėti	VERB	vksm.dlv.veik.būt-k.mot.dgs.G.	Aspect=Perf|Case=Acc|Definite=Ind|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	acl	7:acl	_
7	šlaunis	šlaunis	NOUN	dkt.mot.dgs.G.	Case=Acc|Gender=Fem|Number=Plur	4	obl:arg	4:obl:arg:į:acc	_
8	su	su	ADP	prl.Įn.	AdpType=Prep|Case=Ins	9	case	9:case	_
9	pasibaisėjimu	pasibaisėjimas	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	11	obl	11:obl:su:ins	_
10	sau	savęs	PRON	įv.vns.N.	Case=Dat|Definite=Ind|Number=Sing|PronType=Prs|Reflex=Yes	11	obl:arg	11:obl:arg:dat	_
11	sakytų	sakyti	VERB	vksm.asm.tar.vns.3.	Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|VerbForm=Fin	0	root	0:root	_
12	„	„	PUNCT	skyr.	_	14	punct	14:punct	SpaceAfter=No
13	kokios	koks	DET	įv.mot.dgs.V.	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|PronType=Int,Rel	14	det	14:det	_
14	storos	storas	ADJ	bdv.nelygin.mot.dgs.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	11	advcl:pred	11:advcl:pred	_
15	mano	aš	PRON	įv.vns.K.	Case=Gen|Definite=Ind|Number=Sing|Person=1|PronType=Prs	16	nmod	16:nmod:gen	_
16	šlaunys	šlaunis	NOUN	dkt.mot.dgs.V.	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	14:nsubj	_
17	“	“	PUNCT	skyr.	_	14	punct	14:punct	SpaceAfter=No
18	,	,	PUNCT	skyr.	_	11	punct	11:punct	_
19	o	o	CCONJ	jng.	_	11	cc	11:cc	_
20	antroji	antras	NUM	sktv.raid.kelint.įvardž.mot.vns.V.	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	11	dep	11:dep	_
21	–	–	PUNCT	skyr.	_	11	punct	11:punct	_
22	„	„	PUNCT	skyr.	_	24	punct	24:punct	SpaceAfter=No
23	kokios	koks	DET	įv.mot.dgs.V.	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|PronType=Int,Rel	24	det	24:det|26:det	_
24	tvirtos	tvirtas	ADJ	bdv.nelygin.mot.dgs.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	11	obj	11:obj	SpaceAfter=No
25	,	,	PUNCT	skyr.	_	26	punct	26:punct	_
26	moteriškos	moteriškas	ADJ	bdv.nelygin.mot.dgs.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	24	conj	11:obj|24:conj	_
27	mano	aš	PRON	įv.vns.K.	Case=Gen|Definite=Ind|Number=Sing|Person=1|PronType=Prs	28	nmod	28:nmod:gen	_
28	šlaunys	šlaunis	NOUN	dkt.mot.dgs.V.	Case=Nom|Gender=Fem|Number=Plur	24	nsubj	24:nsubj|26:nsubj	_
29	“	“	PUNCT	skyr.	_	24	punct	24:punct	SpaceAfter=No
30	.	.	PUNCT	skyr.	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 advcl:pred	color:blue
1	Bendraukite	bendrauti	VERB	vksm.asm.liep.dgs.2.	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	0:root	_
2	su	su	ADP	prl.Įn.	AdpType=Prep|Case=Ins	3	case	3:case	_
3	kolegomis	kolega	NOUN	dkt.vyr.dgs.Įn.	Case=Ins|Gender=Masc|Number=Plur	1	obl:arg	1:obl:arg:su:ins	SpaceAfter=No
4	,	,	PUNCT	skyr.	_	7	punct	7:punct	_
5	tegul	tegul	PART	dll.	_	7	advmod:emph	7:advmod:emph	_
6	jie	jis	PRON	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Person=3|PronType=Prs	7	nsubj	7:nsubj	_
7	pažįsta	pažinti	VERB	vksm.asm.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	conj	0:root|1:conj	_
8	jus	tu	PRON	įv.dgs.G.	Case=Acc|Definite=Ind|Number=Plur|Person=2|PronType=Prs	7	obj	7:obj	_
9	ne	ne	PART	dll.	_	10	advmod:emph	10:advmod:emph	_
10	tik	tik	PART	dll.	_	13	advmod:emph	13:advmod:emph	_
11	kaip	kaip	SCONJ	jng.	_	13	mark	13:mark	_
12	gerą	geras	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	13	amod	13:amod	_
13	specialistę	specialistė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	7	advcl:pred	7:advcl:pred:kaip	SpaceAfter=No
14	,	,	PUNCT	skyr.	_	21	punct	21:punct	_
15	bet	bet	CCONJ	jng.	_	21	cc	21:cc	_
16	ir	ir	PART	dll.	_	21	advmod:emph	21:advmod:emph	_
17	kaip	kaip	SCONJ	jng.	_	21	mark	21:mark	_
18	malonią	malonus	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	21	amod	21:amod	SpaceAfter=No
19	,	,	PUNCT	skyr.	_	20	punct	20:punct	_
20	žavią	žavus	ADJ	bdv.nelygin.mot.vns.G.	Case=Acc|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	18	conj	18:conj|21:amod	_
21	pašnekovę	pašnekovė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	13	conj	7:advcl:pred:kaip|13:conj	SpaceAfter=No
22	.	.	PUNCT	skyr.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:pred	color:blue
1	Tą	tas	DET	įv.mot.vns.G.	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Dem	2	det	2:det	_
2	dieną	diena	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	3	obj	3:obj	_
3	prisimenu	prisiminti	VERB	vksm.asm.sngr.tiesiog.es.vns.1.	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	kaip	kaip	SCONJ	jng.	_	5	mark	5:mark	_
5	vieną	vienas	PRON	įv.mot.vns.G.	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Ind	3	advcl:pred	3:advcl:pred:kaip	_
6	gražiausių	gražus	ADJ	bdv.aukšč.mot.dgs.K.	Case=Gen|Definite=Ind|Degree=Sup|Gender=Fem|Number=Plur	5	nmod	5:nmod:gen	_
7	šį	šis	DET	įv.vyr.vns.G.	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	_
8	mėnesį	mėnuo	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	6	obl	6:obl:acc	SpaceAfter=No
9	.	.	PUNCT	skyr.	_	3	punct	3:punct	_

~~~


