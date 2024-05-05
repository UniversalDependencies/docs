---
layout: base
title:  'Statistics of iobj in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `iobj`

This relation is universal.

4 nodes (0%) are attached to their parents as `iobj`.

3 instances of `iobj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt> (2; 50% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	Žmonės	žmogus	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	2:nsubj	_
2	kaišiodavo	kaišioti	VERB	vksm.asm.tiesiog.būt-d.dgs.3.	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	vieni	vienas	PRON	sampl.įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Hyph=Yes|Number=Plur|PronType=Ind	2	iobj	2:iobj	_
4	kitiems	kitas	PRON	tęs.įv.vyr.dgs.N.	Case=Dat|Definite=Ind|Gender=Masc|Hyph=Yes|Number=Plur|PronType=Ind	3	nmod	3:nmod:dat	_
5	nuotraukas	nuotrauka	NOUN	dkt.mot.dgs.G.	Case=Acc|Gender=Fem|Number=Plur	2	obj	2:obj	_
6	su	su	ADP	prl.Įn.	AdpType=Prep|Case=Ins	8	case	8:case	_
7	skraidančiomis	skraidyti	VERB	vksm.dlv.veik.es.mot.dgs.Įn.	Case=Ins|Definite=Ind|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	8	acl	8:acl	_
8	lėkštėmis	lėkštė	NOUN	dkt.mot.dgs.Įn.	Case=Ins|Gender=Fem|Number=Plur	5	obl:arg	5:obl:arg:su:ins	SpaceAfter=No
9	,	,	PUNCT	skyr.	_	10	punct	10:punct	_
10	pasakodavo	pasakoti	VERB	vksm.asm.tiesiog.būt-d.dgs.3.	Aspect=Hab|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	2	conj	0:root|2:conj	SpaceAfter=No
11	,	,	PUNCT	skyr.	_	14	punct	14:punct	_
12	kad	kad	SCONJ	jng.	_	14	mark	14:mark	_
13	buvo	būti	AUX	vksm.asm.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	14	cop	14:cop	_
14	pagrobti	pagrobti	VERB	vksm.dlv.neveik.būt.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	10	ccomp	10:ccomp	SpaceAfter=No
15	,	,	PUNCT	skyr.	_	18	punct	18:punct	_
16	kad	kad	SCONJ	jng.	_	18	mark	18:mark	_
17	jiems	jis	PRON	įv.vyr.dgs.N.	Case=Dat|Definite=Ind|Gender=Masc|Number=Plur|Person=3|PronType=Prs	18	obl:arg	18:obl:arg:dat	_
18	pavyko	pavykti	VERB	vksm.asm.tiesiog.būt-k.3.	Aspect=Perf|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	14	conj	10:ccomp|14:conj	_
19	užmegzti	užmegzti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	18	xcomp	18:xcomp	_
20	kontaktus	kontaktas	NOUN	dkt.vyr.dgs.G.	Case=Acc|Gender=Masc|Number=Plur	19	obj	19:obj	_
21	su	su	ADP	prl.Įn.	AdpType=Prep|Case=Ins	23	case	23:case	_
22	nežemiškomis	nežemiškas	ADJ	bdv.nelygin.mot.dgs.Įn.	Case=Ins|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	23	amod	23:amod	_
23	būtybėmis	būtybė	NOUN	dkt.mot.dgs.Įn.	Case=Ins|Gender=Fem|Number=Plur	20	obl:arg	20:obl:arg:su:ins	SpaceAfter=No
24	,	,	PUNCT	skyr.	_	26	punct	26:punct	_
25	o	o	CCONJ	jng.	_	26	cc	26:cc	_
26	kartais	kartais	ADV	prv.nelygin.	Degree=Pos	2	conj	0:root|2:conj	_
27	–	–	PUNCT	skyr.	_	31	punct	31:punct	_
28	kad	kad	SCONJ	jng.	_	31	mark	31:mark	_
29	jie	jis	PRON	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Person=3|PronType=Prs	31	nsubj	31:nsubj	_
30	patys	pats	DET	įv.vyr.dgs.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|PronType=Emp	29	det	29:det	_
31	ateiviai	ateivis	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	26	appos	26:appos	SpaceAfter=No
32	.	.	PUNCT	skyr.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	VRK	VRK	X	akr.	Abbr=Yes	2	nmod	2:nmod	_
2	pirmininkas	pirmininkas	NOUN	dkt.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
3	Zenonas	Zenonas	PROPN	dkt.tikr.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	2	nmod	2:nmod:nom	_
4	Vaigauskas	Vaigauskas	PROPN	dkt.tikr.vyr.vns.V.	Case=Nom|Gender=Masc|Number=Sing	2	flat	2:flat	_
5	dienraštį	dienraštis	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	6	iobj	6:iobj	_
6	informavo	informuoti	VERB	vksm.asm.tiesiog.būt-k.vns.3.	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	skyr.	_	10	punct	10:punct	_
8	kad	kad	SCONJ	jng.	_	10	mark	10:mark	_
9	dabar	dabar	ADV	prv.nelygin.	Degree=Pos	10	advmod	10:advmod	_
10	tikrinama	tikrinti	VERB	vksm.dlv.neveik.es.bev.	Definite=Ind|Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	6	ccomp	6:ccomp	SpaceAfter=No
11	,	,	PUNCT	skyr.	_	14	punct	14:punct	_
12	ar	ar	SCONJ	jng.	_	14	mark	14:mark	_
13	ataskaitos	ataskaita	NOUN	dkt.mot.dgs.V.	Case=Nom|Gender=Fem|Number=Plur	14	nsubj	14:nsubj	_
14	atitinka	atitikti	VERB	vksm.asm.tiesiog.es.dgs.3.	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	csubj	10:csubj	_
15	tikrovę	tikrovė	NOUN	dkt.mot.vns.G.	Case=Acc|Gender=Fem|Number=Sing	14	obj	14:obj	SpaceAfter=No
16	.	.	PUNCT	skyr.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 iobj	color:blue
1	Po	po	ADP	prl.K.	AdpType=Prep|Case=Gen	2	case	2:case	_
2	to	tas	DET	įv.vyr.vns.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	7	obl:arg	7:obl:arg:po:gen	_
3	„	„	PUNCT	skyr.	_	5	punct	5:punct	SpaceAfter=No
4	Vilniaus	Vilnius	PROPN	dkt.tikr.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod:gen	_
5	prekyba	prekyba	NOUN	dkt.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	7:nsubj	_
6	“	“	PUNCT	skyr.	_	5	punct	5:punct	SpaceAfter=No
7	apkaltino	apkaltinti	VERB	vksm.asm.tiesiog.būt-k.vns.3.	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	0	root	0:root	_
8	D	D.	X	sutr.	Abbr=Yes	10	nmod	10:nmod	SpaceAfter=No
9	.	.	PUNCT	skyr.	_	8	punct	8:punct	_
10	Mockų	Mockus	PROPN	dkt.tikr.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	7	iobj	7:iobj	SpaceAfter=No
11	,	,	PUNCT	skyr.	_	15	punct	15:punct	_
12	kad	kad	PART	dll.	_	15	mark	15:mark	_
13	šis	šis	DET	įv.vyr.vns.V.	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|PronType=Dem	15	nsubj	15:nsubj|16:nsubj:xsubj	_
14	neva	neva	PART	dll.	_	15	advmod:emph	15:advmod:emph	_
15	siekia	siekti	VERB	vksm.asm.tiesiog.es.vns.3.	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	ccomp	7:ccomp	_
16	sužlugdyti	sužlugdyti	VERB	vksm.bndr.	Polarity=Pos|VerbForm=Inf	15	xcomp	15:xcomp	_
17	nacionalinio	nacionalinis	ADJ	bdv.nelygin.vyr.vns.K.	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	18	amod	18:amod	_
18	investuotojo	investuotojas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	19	obl:arg	19:obl:arg:gen	_
19	formavimą	formavimas	NOUN	dkt.vyr.vns.G.	Case=Acc|Gender=Masc|Number=Sing	16	obj	16:obj	SpaceAfter=No
20	,	,	PUNCT	skyr.	_	21	punct	21:punct	_
21	pasklido	pasklisti	VERB	vksm.asm.tiesiog.būt-k.dgs.3.	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	7	conj	0:root|7:conj	_
22	gandai	gandas	NOUN	dkt.vyr.dgs.V.	Case=Nom|Gender=Masc|Number=Plur	21	nsubj	21:nsubj	SpaceAfter=No
23	,	,	PUNCT	skyr.	_	36	punct	36:punct	_
24	kad	kad	SCONJ	jng.	_	36	mark	36:mark	_
25	„	„	PUNCT	skyr.	_	27	punct	27:punct	SpaceAfter=No
26	MG	MG	X	akr.	Abbr=Yes	27	nmod	27:nmod	_
27	Baltic	Baltic	X	užs.	Foreign=Yes	29	obj	29:obj	_
28	“	“	PUNCT	skyr.	_	27	punct	27:punct	SpaceAfter=No
29	priklausančio	priklausyti	VERB	vksm.dlv.veik.es.vyr.vns.K.	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	33	acl	33:acl	_
30	alkoholio	alkoholis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	31	nmod	31:nmod:gen	_
31	gamintojo	gamintojas	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	33	nmod	33:nmod:gen	_
32	„	„	PUNCT	skyr.	_	33	punct	33:punct	SpaceAfter=No
33	Stumbro	Stumbras	PROPN	dkt.tikr.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	35	nmod	35:nmod:gen	_
34	“	“	PUNCT	skyr.	_	33	punct	33:punct	SpaceAfter=No
35	produkcijos	produkcija	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	37	obl:arg	37:obl:arg:gen	_
36	gali	galėti	VERB	vksm.asm.tiesiog.es.vns.3.	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	22	acl	22:acl:kad	_
37	nelikti	nelikti	VERB	vksm.bndr.neig.	Polarity=Neg|VerbForm=Inf	36	xcomp	36:xcomp	_
38	„	„	PUNCT	skyr.	_	40	punct	40:punct	SpaceAfter=No
39	Vilniaus	Vilnius	PROPN	dkt.tikr.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	40	nmod	40:nmod:gen	_
40	prekybos	prekyba	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	42	nmod	42:nmod:gen	_
41	“	“	PUNCT	skyr.	_	40	punct	40:punct	SpaceAfter=No
42	tinkle	tinklas	NOUN	dkt.vyr.vns.Vt.	Case=Loc|Gender=Masc|Number=Sing	37	obl	37:obl:loc	_
43	„	„	PUNCT	skyr.	_	44	punct	44:punct	SpaceAfter=No
44	Maxima	Maxima	PROPN	dkt.tikr.mot.vns.V.	Case=Nom|Gender=Fem|Number=Sing	42	nmod	42:nmod:nom	_
45	“	“	PUNCT	skyr.	_	44	punct	44:punct	SpaceAfter=No
46	.	.	PUNCT	skyr.	_	7	punct	7:punct	_

~~~


