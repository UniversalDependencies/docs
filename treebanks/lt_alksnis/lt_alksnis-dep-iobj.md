---
layout: base
title:  'Statistics of iobj in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `iobj`

This relation is universal.

28 nodes (0%) are attached to their parents as `iobj`.

14 instances of `iobj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.75.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (14; 50% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (7; 25% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (4; 14% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Tinkamai	tinkamai	ADV	prv.nelygin.	Degree=Pos	2	advmod	2:advmod	_
2	reikšti	reikšti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	_
3	pyktį	pyktis	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	_
4	tėvai	tėvai	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	6:nsubj	_
5	vaikus	vaikas	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	6	iobj	2:nsubj|6:iobj	_
6	moko	mokyti	VERB	vksm.asm.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	savo	savęs	PRON	įv.K.	Case=Gen|Definite=Ind|PronType=Prs|Reflex=Yes	8	nmod	8:nmod:gen	_
8	pavyzdžiu	pavyzdys	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	6	obl:arg	6:obl:arg:ins	SpaceAfter=No
9	.	.	PUNCT	skyr.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Pagalvokite	pagalvoti	VERB	vksm.asm.liep.dgs.2.	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	0:root	_
2	ir	ir	CCONJ	jng.	_	3	cc	3:cc	_
3	užsirašykite	užsirašyti	VERB	vksm.asm.sngr.liep.dgs.2.	Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Reflex=Yes|VerbForm=Fin	1	conj	0:root|1:conj	SpaceAfter=No
4	,	,	PUNCT	skyr.	_	6	punct	6:punct	_
5	ką	kas	PRON	įv.G.	Case=Acc|Definite=Ind|PronType=Int,Rel	6	iobj	6:iobj	_
6	turite	turėti	VERB	vksm.asm.tiesiog.es.dgs.2.	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	ccomp	3:ccomp	_
7	padaryti	padaryti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	6	xcomp	6:xcomp	_
8	ruošdamasi	ruoštis	VERB	vksm.pusd.sngr.mot.vns.	Gender=Fem|Number=Sing|Polarity=Pos|Reflex=Yes|VerbForm=Conv	7	advcl	7:advcl	_
9	šventei	šventė	NOUN	dkt.mot.vns.N.	Case=Dat|Gender=Fem|Number=Sing	8	obl:arg	8:obl:arg:dat	SpaceAfter=No
10	.	.	PUNCT	skyr.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 iobj	color:blue
1	Tačiau	tačiau	CCONJ	jng.	_	4	cc	4:cc	_
2	ir	ir	PART	dll.	_	3	advmod:emph	3:advmod:emph	_
3	jos	jis	PRON	įv.mot.dgs.V.	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|Person=3|PronType=Prs	4	nsubj	4:nsubj	_
4	lieka	likti	VERB	vksm.asm.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	skyr.	_	6	punct	6:punct	_
6	siurbdamos	siurbti	VERB	vksm.pusd.mot.dgs.	Gender=Fem|Number=Plur|Polarity=Pos|VerbForm=Conv	4	advcl	4:advcl	_
7	tą	tas	DET	įv.mot.vns.G.	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Dem	9	det	9:det	_
8	energijos	energija	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	9	nmod	9:nmod:gen	_
9	dalį	dalis	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	6	obj	6:obj|13:iobj	SpaceAfter=No
10	,	,	PUNCT	skyr.	_	13	punct	13:punct	_
11	kurią	kuris	DET	įv.mot.vns.G.	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Int,Rel	13	iobj	9:ref	_
12	sau	savęs	PRON	įv.N.	Case=Dat|Definite=Ind|PronType=Prs|Reflex=Yes	13	obl:arg	13:obl:arg:dat|15:nsubj	_
13	leidome	leisti	VERB	vksm.asm.tiesiog.būt-k.dgs.1.	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Past|VerbForm=Fin	9	acl:relcl	9:acl:relcl	_
14	joms	jis	PRON	įv.mot.dgs.N.	Case=Dat|Definite=Ind|Gender=Fem|Number=Plur|Person=3|PronType=Prs	15	obl:arg	15:obl:arg:dat	_
15	atiduoti	atiduoti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	13	xcomp	13:xcomp	SpaceAfter=No
16	.	.	PUNCT	skyr.	_	4	punct	4:punct	_

~~~


