---
layout: base
title:  'Statistics of nummod in UD_Lithuanian-ALKSNIS'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-ALKSNIS: Relations: `nummod`

This relation is universal.
There are 1 language-specific subtypes of `nummod`: <tt><a href="lt_alksnis-dep-nummod-gov.html">nummod:gov</a></tt>.

561 nodes (1%) are attached to their parents as `nummod`.

497 instances of `nummod` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.349376114082.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="lt_alksnis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (529; 94% instances), <tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (24; 4% instances), <tt><a href="lt_alksnis-pos-X.html">X</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="lt_alksnis-pos-PRON.html">PRON</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="lt_alksnis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_alksnis-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	2004	2004	NUM	sktv.arab.	NumForm=Digit	2	nummod	_	_
2	m.	m.	NOUN	sutr.	Abbr=Yes	3	nmod	_	_
3	rugpjūčio	rugpjūtis	NOUN	dkt.vyr.vns.K.	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	_
4	9	9	NUM	sktv.arab.	NumForm=Digit	5	nummod	_	_
5	d.	d.	NOUN	sutr.	Abbr=Yes	0	root	_	_
6	Nr.	Nr.	NOUN	sutr.	Abbr=Yes	5	list	_	_
7	3D-473/D1-427	3D-473/D1-427	SYM	simb.	_	6	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	Šiuo	šis	DET	įv.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	metu	metas	NOUN	dkt.vyr.vns.Įn.	Case=Ins|Gender=Masc|Number=Sing	5	obl	_	_
3	ES	ES	PROPN	akr.	Abbr=Yes	4	nmod	_	_
4	rinkoje	rinka	NOUN	dkt.mot.vns.Vt.	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	_
5	cirkuliuoja	cirkuliuoti	VERB	vksm.asm.tiesiog.es.3.	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	trys	trys	NUM	sktv.raid.kiek.mot.dgs.V.	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
7	dešimtys	dešimtis	NUM	sktv.raid.kiek.mot.dgs.V.	Case=Nom|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	9	nummod:gov	_	_
8	GMO	GMO	NOUN	akr.	Abbr=Yes	9	nmod	_	_
9	produktų	produktas	NOUN	dkt.vyr.dgs.K.	Case=Gen|Gender=Masc|Number=Plur	5	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	skyr.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nummod	color:blue
1	Prie	prie	ADP	prl.K.	Case=Gen	10	case	_	_
2	„	„	PUNCT	skyr.	_	3	punct	_	SpaceAfter=No
3	Euro	euro	X	užs.	Foreign=Yes	6	nmod	_	_
4	2008	2008	NUM	sktv.arab.	NumForm=Digit	3	nummod	_	SpaceAfter=No
5	“	“	PUNCT	skyr.	_	3	punct	_	_
6	šeimininkių	šeimininkė	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	7	nmod	_	_
7	Austrijos	Austrija	PROPN	dkt.tikr.vtvrd.mot.vns.K.	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	10	nmod	_	_
8	ir	ir	CCONJ	jng.	_	9	cc	_	_
9	Šveicarijos	Šveicarija	PROPN	dkt.tikr.vtvrd.mot.vns.K.	Case=Gen|Gender=Fem|NameType=Geo|Number=Sing	7	conj	_	_
10	rinktinių	rinktinė	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	11	obl:arg	_	_
11	prisijungė	prisijungti	VERB	vksm.asm.sngr.tiesiog.būt-k.3.	Mood=Ind|Person=3|Reflex=Yes|Tense=Past|VerbForm=Fin	0	root	_	_
12	dar	dar	PART	dll.	_	13	advmod:emph	_	_
13	keturiolika	keturiolika	NUM	sktv.raid.kiek.V.	Case=Nom|NumForm=Word|NumType=Card	14	nummod:gov	_	_
14	komandų	komanda	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	11	nsubj	_	_
15	–	–	PUNCT	skyr.	_	18	punct	_	_
16	po	po	ADP	prl.G.	Case=Acc	18	case	_	_
17	dvi	du	NUM	sktv.raid.kiek.mot.dgs.G.	Case=Acc|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	18	nummod	_	_
18	pajėgiausias	pajėgus	ADJ	bdv.aukšč.mot.dgs.G.	Case=Acc|Degree=Sup|Gender=Fem|Number=Plur	14	appos	_	_
19	iš	iš	ADP	prl.K.	Case=Gen	22	case	_	_
20	septynių	septyni	NUM	sktv.raid.kiek.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	22	nummod	_	_
21	atrankos	atranka	NOUN	dkt.mot.vns.K.	Case=Gen|Gender=Fem|Number=Sing	22	nmod	_	_
22	grupių	grupė	NOUN	dkt.mot.dgs.K.	Case=Gen|Gender=Fem|Number=Plur	18	nmod:obl	_	SpaceAfter=No
23	.	.	PUNCT	skyr.	_	11	punct	_	_

~~~


