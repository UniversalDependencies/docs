---
layout: base
title:  'Statistics of csubj:pass in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="lt_alksnis-dep-csubj.html">csubj</a></tt>.

6 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.16666666666667.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-DET.html">DET</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 csubj:pass	color:blue
1	Kita	kita	ADV	sampl.prv.nelygin.	Degree=Pos|Hyph=Yes	11	parataxis	11:parataxis|19:parataxis	_
2	vertus	vertus	X	tęs.	Hyph=Yes	1	nmod	1:nmod	SpaceAfter=No
3	,	,	PUNCT	skyr.	_	1	punct	1:punct	_
4	griežtai	griežtai	ADV	prv.nelygin.	Degree=Pos	5	advmod	5:advmod	_
5	laikantis	laikytis	VERB	vksm.sngr.pad.es.	Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Ger	11	advcl	11:advcl|19:advcl	_
6	statistinio	statistinis	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	_
7	reprezentatyvumo	reprezentatyvumas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	5	obl:arg	5:obl:arg:gen	SpaceAfter=No
8	,	,	PUNCT	skyr.	_	5	punct	5:punct	_
9	viename	vienas	PRON	įv.vyr.vns.Vt.	Case=Loc|Definite=Ind|Gender=Masc|Number=Sing|PronType=Ind	10	nmod	10:nmod:loc	_
10	tyrime	tyrimas	NOUN	dkt.vyr.vns.Vt.	Case=Loc|Gender=Masc|Number=Sing	11	obl	11:obl:loc	_
11	imti	imti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
12	emigracijoje	emigracija	NOUN	dkt.mot.vns.Vt.	Case=Loc|Gender=Fem|Number=Sing	13	obl	13:obl:loc	_
13	buvusieji	būti	VERB	vksm.dlv.veik.būt-k.įvardž.vyr.dgs.V.	Aspect=Perf|Case=Nom|Definite=Def|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	csubj:pass	11:csubj:pass	_
14	metus	metai	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	13	obl	13:obl:acc	_
15	ir	ir	CCONJ	jng.	_	16	cc	16:cc	_
16	daugiau	daug	ADV	prv.aukšt.	Degree=Cmp	14	conj	13:advmod|14:conj	SpaceAfter=No
17	,	,	PUNCT	skyr.	_	19	punct	19:punct	_
18	visuose	visas	DET	įv.vyr.dgs.Vt.	Case=Loc|Definite=Ind|Gender=Masc|Number=Plur|PronType=Tot	19	det	19:det	_
19	kituose	kitas	PRON	įv.vyr.dgs.Vt.	Case=Loc|Definite=Ind|Gender=Masc|Number=Plur|PronType=Ind	11	conj	0:root|11:conj	_
20	–	–	PUNCT	skyr.	_	21	punct	21:punct	_
21	pusę	pusė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	19	appos	19:appos	_
22	metų	metai	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	21	nmod	21:nmod:gen	SpaceAfter=No
23	.	.	PUNCT	skyr.	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 csubj:pass	color:blue
1	Pozityvūs	pozityvus	ADJ	bdv.nelygin.vyr.dgs.V.	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	procesai	procesas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	8	nsubj:pass	8:nsubj:pass	_
3	po	po	ADP	prl.K.	AdpType=Prep|Case=Gen	4	case	4:case	_
4	traumos	trauma	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	2	obl	2:obl:po:gen	_
5	dar	dar	ADV	sampl.prv.nelygin.	Degree=Pos|Hyph=Yes	8	advmod	8:advmod	_
6	tik	tik	X	tęs.	Hyph=Yes	5	nmod	5:nmod	_
7	pradedami	pradėti	VERB	vksm.dlv.neveik.es.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	8	csubj	8:csubj	_
8	tyrinėti	tyrinėti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
9	,	,	PUNCT	skyr.	_	12	punct	12:punct	_
10	todėl	todėl	ADV	prv.nelygin.	Degree=Pos	12	advmod	12:advmod	_
11	nėra	nebūti	VERB	vksm.asm.neig.tiesiog.es.3.	Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	csubj	12:csubj	_
12	žinoma	žinoti	VERB	vksm.dlv.neveik.es.bev.	Definite=Ind|Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	8	conj	0:root|8:conj	SpaceAfter=No
13	,	,	PUNCT	skyr.	_	14	punct	14:punct	_
14	kokios	koks	DET	įv.mot.dgs.V.	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|PronType=Int,Rel	12	csubj:pass	12:csubj:pass	_
15	yra	būti	AUX	vksm.asm.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	cop	14:cop	_
16	potrauminio	potrauminis	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	17	amod	17:amod	_
17	augimo	augimas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	32	nmod	32:nmod:gen	_
18	(	(	PUNCT	skyr.	_	19	punct	19:punct	SpaceAfter=No
19	PTA	PTA	X	akr.	Abbr=Yes	17	nmod	17:nmod	SpaceAfter=No
20	)	)	PUNCT	skyr.	_	19	punct	19:punct	SpaceAfter=No
21	,	,	PUNCT	skyr.	_	24	punct	24:punct	_
22	trauminio	trauminis	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	23	amod	23:amod	_
23	įvykio	įvykis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	24	nmod	24:nmod:gen	_
24	intensyvumo	intensyvumas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	17	conj	17:conj|32:nmod:gen	_
25	ir	ir	CCONJ	jng.	_	28	cc	28:cc	_
26	potrauminio	potrauminis	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	27	amod	27:amod	_
27	streso	stresas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	28	nmod	28:nmod:gen	_
28	sutrikimo	sutrikimas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	17	conj	17:conj|32:nmod:gen	_
29	(	(	PUNCT	skyr.	_	30	punct	30:punct	SpaceAfter=No
30	PTSS	PTSS	X	akr.	Abbr=Yes	28	nmod	28:nmod	SpaceAfter=No
31	)	)	PUNCT	skyr.	_	30	punct	30:punct	_
32	sąsajos	sąsaja	NOUN	dkt.mot.dgs.V.	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	14:nsubj	SpaceAfter=No
33	.	.	PUNCT	skyr.	_	8	punct	8:punct	_

~~~


