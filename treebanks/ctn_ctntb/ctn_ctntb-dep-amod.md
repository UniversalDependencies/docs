---
layout: base
title:  'Statistics of amod in UD_Chintang-CTNTB'
udver: '2'
---

## Treebank Statistics: UD_Chintang-CTNTB: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="ctn_ctntb-dep-amod-nmlz.html">amod:nmlz</a></tt>.

45 nodes (0%) are attached to their parents as `amod`.

44 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17777777777778.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt> (39; 87% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-DET.html">DET</a></tt> (2; 4% instances), <tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt>-<tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ctn_ctntb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ctn_ctntb-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="ctn_ctntb-pos-PRON.html">PRON</a></tt>-<tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ctn_ctntb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ctn_ctntb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Boka	boka	NOUN	_	Case=Abs|Number=Sing	2	obj	2:obj	Gloss=he_goat|MSeg=boka
2	maikahiŋa	hid	VERB	ACT.PTCP	Aspect=Imp|Case=Erg|Number=Sing|Polarity=Neg|VerbForm=Part|Voice=Act	6	csubj	5:csubj:xsubj|6:csubj	Gloss=NEG-ACT.PTCP-can-ERG|MSeg=mai-ka-hid-ŋa
3	seto	seto	ADJ	_	_	4	amod	4:amod	Gloss=white|MSeg=set̪o
4	bhale	bhale	NOUN	_	Case=Abs|Number=Sing	5	obj	5:obj	Gloss=rooster|MSeg=bhale
5	pima	pid	VERB	_	Aspect=Imp|Case=Abs|VerbForm=Inf|Voice=Act	6	xcomp	6:xcomp	Gloss=give-INF|MSeg=pid-ma
6	ŋakno	ŋakt	VERB	_	Aspect=Perfv|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=ask-IND.PST[.3SG.S]|MSeg=ŋakt-nok|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 amod	color:blue
1	Jamm	jammai	DET	_	PronType=Tot	3	amod	3:amod	Gloss=all|MSeg=jʌmma
2	ai	ai	PART	FOC	InfStruct=Foc	1	advmod:emph	1:advmod:emph	Gloss=FOC|MSeg=ʌi
3	abhaga	bhag	NOUN	NTVZ	Case=Abs|Number=Sing|Number[psor]=Sing|Person=1	4	obj	4:obj	Gloss=1SG.POSS-share-NTVZ|MSeg=a-bhag-a
4	uputtandaŋbidaŋsehẽ	putt-pid	VERB	COMPL1-BEN1	Aspect=ComplPerf|Mood=Ind|Number=Plur|Number[p]=Sing|Person=3|Person[p]=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=3[PL].A-pick-PST-COMPL1-PST-1SG-BEN1-PST-1SG-PRF-PST-1SG[.P]-IND.PST|MSeg=u-putt-a-dhend-a-ŋ-pid-a-ŋ-ŋs-a-ŋ-e|SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 amod	color:blue
1	Ba	ba	DET	_	Deixis=Prox|PronType=Dem	2	det:nmlz	2:det:nmlz	Gloss=PROX|MSeg=ba
2	go	go	NOUN	NMLZ1	Case=Abs|Number=Sing	6	nsubj	6:nsubj	Gloss=NMLZ1|MSeg=go
3	camciŋa	camci	NOUN	_	Case=Erg|Number=Sing	6	obl	6:obl	Gloss=spoon-ERG|MSeg=camci-ŋa
4	nusayaŋ	nusayaŋ	ADP	CONCS	_	3	case	3:case	Gloss=CONCS|MSeg=nusayaŋ
5	siŋkiŋa	sinko	NOUN	_	Case=Erg|Number=Sing	3	conj	3:conj|8:obl	Gloss=wooden_pick-ERG|MSeg=siŋki-ŋa
6	phagum	phak	VERB	_	Aspect=Imp|Clusivity=In|Mood=Sub|Number=Plur|Number[p]=Sing|Person=1|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	20	advcl	20:advcl	Gloss=sweep-3[SG].P-[SUBJ.NPST.]1PL[.INCL].A|MSeg=phak-u-m
7	kina	kina	CCONJ	SEQ	_	8	cc	8:cc	Gloss=SEQ|MSeg=kina
8	khaum	khag	VERB	_	Aspect=Imp|Clusivity=In|Mood=Sub|Number=Plur|Number[p]=Sing|Person=1|Person[p]=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	6:conj|20:advcl	Gloss=watch-3[SG].P-[SUBJ.NPST.]1PL[.INCL].A|MSeg=khag-u-m
9	para	para	SCONJ	COND1	_	6	mark	6:mark|8:mark	Gloss=COND1|MSeg=para|SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	6:punct	_
11	ba	ba	DET	_	Deixis=Prox|PronType=Dem	12	det:nmlz	12:det:nmlz	Gloss=PROX|MSeg=ba
12	goiʔ	go	NOUN	NMLZ1-LOC1	Case=Loc|Number=Sing	15	nsubj	15:nsubj	Gloss=NMLZ1-LOC1|MSeg=go-iʔ
13	thitta	thitta	NUM	_	Animacy=Nhum|NumType=Card	14	nummod	14:nummod	Gloss=one|MSeg=thitta
14	khale	khal	ADJ	ADJZ	_	15	amod	15:amod	Gloss=kind-ADJZ|MSeg=khal-e
15	cɨkhepcɨkhep	cɨkhepcɨkhep	ADV	_	_	16	acl:nmlz	16:acl:nmlz	Gloss=sticky|MSeg=cɨkhepcɨkhep
16	kha	kha	NOUN	NMLZ2	Case=Abs|Number=Sing	6	parataxis	6:parataxis	Gloss=NMLZ2|MSeg=kha|SpaceAfter=No
17	,	,	PUNCT	_	_	6	punct	6:punct	_
18	ɨcɨkheppa	cɨkheppa	NOUN	_	Case=Abs|Number=Sing|Number[psor]=Sing|Person=3	20	nsubj	20:nsubj	Gloss=3SG.POSS-stickiness|MSeg=u-cɨkheppa=yaŋ
19	yaŋ	yaŋ	PART	ADD	_	18	advmod	18:advmod	Gloss=ADD|MSeg=yaŋ
20	thaʔno	that	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	Gloss=appear-IND.NPST[.3SG.S]|MSeg=that-nok|SpaceAfter=No
21	.	.	PUNCT	_	_	20	punct	20:punct	SpacesAfter=\n

~~~


