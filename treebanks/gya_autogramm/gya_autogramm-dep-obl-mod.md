---
layout: base
title:  'Statistics of obl:mod in UD_Northwest_Gbaya-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Northwest_Gbaya-Autogramm: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="gya_autogramm-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="gya_autogramm-dep-obl-arg.html">obl:arg</a></tt>.

17 nodes (1%) are attached to their parents as `obl:mod`.

14 instances of `obl:mod` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 4 pairs of parts of speech are connected with `obl:mod`: <tt><a href="gya_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="gya_autogramm-pos-NOUN.html">NOUN</a></tt> (14; 82% instances), <tt><a href="gya_autogramm-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gya_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="gya_autogramm-pos-INTJ.html">INTJ</a></tt>-<tt><a href="gya_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="gya_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="gya_autogramm-pos-NUM.html">NUM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:mod	color:blue
1	dáà	dáà	NOUN	N	_	6	obl:mod	_	AlignBegin=60979|AlignEnd=61245|Gloss=[père]|MGloss=[père]|MSeg=dáà|nWord=8|RX=[N]
2	kɔ́	kɔ́	ADP	FCT	_	3	case	_	AlignBegin=61245|AlignEnd=61511|Gloss=[de]|MGloss=[de]|MSeg=kɔ́|nWord=9|RX=[FCT]
3	bêm	bêm	NOUN	N	_	1	nmod	_	AlignBegin=61511|AlignEnd=61777|Gloss=[enfant]|MGloss=[enfant]|MSeg=bêm|nWord=10|RX=[N]
4	ná	ná	INTJ	_	_	1	discourse	_	AlignBegin=61777|AlignEnd=62039|Gloss=[DISC]|MGloss=[DISC]|MSeg=ná|nWord=11|RX=[DISC]
5	ʔéí	ʔéí	PRON	PERS	Number=Sing|PronType=Prs	6	nsubj	_	AlignBegin=62039|AlignEnd=62238|Gloss=[LOGSG]|Logophoric=Yes|MGloss=[LOGSG]|MSeg=ʔéí|nWord=12|RX=[PERS]
6	nɛ̀ɛ̀	BHa-nɛ-H	VERB	V	_	0	root	_	AlignBegin=62238|AlignEnd=62437|Gloss=[aller]|MGloss=[ACC][aller][MT]|MSeg=BHa-nɛ-H|nWord=13|RX=[V]|wordform=BHa-nɛ-H
7	kpéé	Háà-kpe-H	VERB	V	_	6	compound:svc	_	AlignBegin=62437|AlignEnd=62636|Gloss=[fermer]|MGloss=[INF].[INAC][fermer][MT]|MSeg=Háà-kpe-H|nWord=14|RX=[V]|wordform=Háà-kpe-H
8	yì	yì	NOUN	N	_	7	obj	_	AlignBegin=62636|AlignEnd=62834|Gloss=[rivière]|MGloss=[rivière]|MSeg=yì|nWord=15|RX=[N]

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 obl:mod	color:blue
1	ʔèè	ʔèè	CCONJ	COORD	_	26	cc	_	AlignBegin=291725|AlignEnd=291996|Gloss=[puis]|MGloss=[puis]|MSeg=ʔèè|nWord=1|RX=[COORD]
2	ʔá̰	ʔá̰	CCONJ	COORD	_	26	cc	_	AlignBegin=291996|AlignEnd=292267|Gloss=[voilà_que]|MGloss=[voilà_que]|MSeg=ʔá̰|nWord=2|RX=[COORD]
3	mɔ̀	mɔ̀-nɛ̀	SCONJ	N	_	5	mark	_	AlignBegin=292267|AlignEnd=292538|Gloss=[du fait que]|MGloss=[du fait que]|MSeg=mɔ̀-nɛ̀|nWord=3|RX=[SUB]|wordform=mɔ̀-nɛ̀
4	ndèì	ʔéí-H	PRON	PRO	PronType=Ind	5	nsubj	_	AlignBegin=292628|AlignEnd=292809|Gloss=[IMPS]|MGloss=[IMPS][MT]|MSeg==éí-H|nWord=4|RX=[PRO]|wordform==éí-H
5	tɔ̰́	H-tɔ̰	VERB	V	_	26	advcl	_	AlignBegin=292809|AlignEnd=293080|Gloss=[dire]|MGloss=[INAC][dire]|MSeg=H-tɔ̰|nWord=5|RX=[V]|wordform=H-tɔ̰
6	kà	kà	SCONJ	SUB	_	8	mark	_	AlignBegin=293080|AlignEnd=293380|Gloss=[quand]|MGloss=[quand]|MSeg=kà|nWord=6|RX=[SUB]
7	mbɔ́zɔ̀-bêm	mbɔ́zɔ̀-bêm	NOUN	N	_	8	nsubj	_	AlignBegin=293380|AlignEnd=293680|Gloss=[nouveau-né]|MGloss=[nouveau-né]|MSeg=mbɔ́zɔ̀-bêm|nWord=7|RX=[N]
8	nɛ́-bèè	nɛ́-BHabe-H	VERB	V	_	26	advcl	_	AlignBegin=293680|AlignEnd=293980|Gloss=[pouvoir_être]|MGloss=[HYPO-ACC][pouvoir_être][MT]|MSeg=nɛ́-BHabe-H|nWord=8|RX=[V]|wordform=nɛ́-BHabe-H
9	sór-mɔ̀-ná	sór-mɔ̀-ná	ADV	ADV	_	8	xcomp	_	AlignBegin=293980|AlignEnd=294280|Gloss=[un_tout_petit_peu]|MGloss=[un_tout_petit_peu]|MSeg=sór-mɔ̀-ná|nWord=9|RX=[ADV]
10	mbálámbúlú	mbálámbúlú	ADJ	AA	_	8	xcomp	_	AlignBegin=294280|AlignEnd=294580|Gloss=[tout_petit]|MGloss=[tout_petit]|MSeg=mbálámbúlú|nWord=10|RX=[AA]
11	hé	hé	ADP	FCT	_	12	case	_	AlignBegin=294580|AlignEnd=294880|Gloss=[SIM]|MGloss=[SIM]|MSeg=hé|nWord=11|RX=[FCT]
12	mɔ̀	mɔ̀	NOUN	N	_	10	obl:mod	_	AlignBegin=294880|AlignEnd=295180|Gloss=[chose]|MGloss=[chose]|MSeg=mɔ̀|nWord=12|RX=[N]
13	sɛ̌n	sɛ̀n-H	ADP	FCT	_	15	case	_	AlignBegin=295180|AlignEnd=295480|Gloss=[dans]|MGloss=[dans][MT]|MSeg=sɛ̀n-H|nWord=13|RX=[FCT]|wordform=sɛ̀n-H
14	kɔ̀	kɔ̀	ADP	FCT	_	15	case	_	AlignBegin=295480|AlignEnd=295780|Gloss=[intérieur]|MGloss=[intérieur]|MSeg=kɔ̀|nWord=14|RX=[FCT]
15	ʔér	ʔér-H	NOUN	N	_	12	nmod	_	AlignBegin=295780|AlignEnd=296080|Gloss=[main]|MGloss=[main][MT]|MSeg=ʔér-H|nWord=15|RX=[N]|wordform=ʔér-H
16	wíìí	wí-ìí	NOUN	N	_	15	obj	_	AlignBegin=296080|AlignEnd=296380|Gloss=[homo]|MGloss=[homo][ANAPH]|MSeg=wí-ìí|nWord=16|RX=[N]|wordform=wí-ìí
17	hɛ̰̀	hɛ̰̀	ADV	ADV	_	15	advmod	_	AlignBegin=296380|AlignEnd=296680|Gloss=[ici]|MGloss=[ici]|MSeg=hɛ̰̀|nWord=17|RX=[ADV]
18	gá	gá	ADP	FCT	_	12	compound	_	AlignBegin=296680|AlignEnd=296980|Gloss=[SIM]|MGloss=[SIM]|MSeg=gá|nWord=18|RX=[FCT]
19	kóó	kóó	SCONJ	SUB	_	21	mark	_	AlignBegin=296980|AlignEnd=297280|Gloss=[même_si]|MGloss=[même_si]|MSeg=kóó|nWord=19|RX=[SUB]
20	wà	wà	PRON	PERS	Number=Plur|Person=3|PronType=Prs	21	nsubj	_	AlignBegin=297280|AlignEnd=297580|Gloss=[3PL]|MGloss=[3PL]|MSeg=wà|nWord=20|RX=[PERS]
21	bá	H-ba	VERB	V	_	26	advcl	_	AlignBegin=297580|AlignEnd=297880|Gloss=[prendre]|MGloss=[INAC][prendre]|MSeg=H-ba|nWord=21|RX=[V]|wordform=H-ba
22	gbó	H-gbo	VERB	V	_	21	compound:svc	_	AlignBegin=297880|AlignEnd=298180|Gloss=[arriver]|MGloss=[INF-ACC][arriver]|MSeg=H-gbo|nWord=22|RX=[V]|wordform=H-gbo
23	sɛ̌n	sɛ̀n-H	ADP	FCT	_	24	case	_	AlignBegin=298180|AlignEnd=298480|Gloss=[dans]|MGloss=[dans][MT]|MSeg=sɛ̀n-H|nWord=23|RX=[FCT]|wordform=sɛ̀n-H
24	bàngí	bàngí	PROPN	NPR	_	22	obl:arg	_	AlignBegin=298480|AlignEnd=298780|Gloss=[village sp]|MGloss=[village sp]|MSeg=bàngí|nWord=24|RX=[NPR]
25	ʔà̰	ʔà̰	PRON	PERS	Number=Sing|Person=3|PronType=Prs	26	nsubj	_	AlignBegin=298780|AlignEnd=299080|Gloss=[3SG]|MGloss=[3SG]|MSeg=ʔà̰|nWord=25|RX=[PERS]
26	tɛ́-gàsì	tɛ́-Bgasi	VERB	V	_	0	root	_	AlignBegin=299080|AlignEnd=299380|Gloss=[grandir]|MGloss=[VIRT].[INAC][grandir]|MSeg=tɛ́-Bgasi|nWord=26|RX=[V]|wordform=tɛ́-Bgasi
27	kɔ̀	kɔ̀	ADP	FCT	_	28	case	_	AlignBegin=299380|AlignEnd=299680|Gloss=[intérieur]|MGloss=[intérieur]|MSeg=kɔ̀|nWord=27|RX=[FCT]
28	ʔér	ʔér-H	NOUN	N	_	26	obl:arg	_	AlignBegin=299680|AlignEnd=299680|Gloss=[main]|MGloss=[main][MT]|MSeg=ʔér-H|nWord=28|RX=[N]|wordform=ʔér-H
29	nàà	nàà	NOUN	N	_	28	obj	_	AlignBegin=299680|AlignEnd=299970|Gloss=[mère]|MGloss=[mère]|MSeg=nàà|nWord=29|RX=[N]
30	kɔ́àìí	kɔ́=à̰-ìí	ADP	N	_	29	dep	_	AlignBegin=299680|AlignEnd=299970|Gloss=[de]|MGloss=[de][3SG][ANAPH]|MSeg=kɔ́=à̰-ìí|nWord=30|RX=[FCT]|wordform=kɔ́=à̰-ìí

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 obl:mod	color:blue
1	mɔ́	mɔ́	ADP	FCT	_	2	case	_	AlignBegin=346600|AlignEnd=346912|Gloss=[à_savoir]|MGloss=[à_savoir]|MSeg=mɔ́|nWord=1|RX=[FCT]
2	ndàyá	ndàyà-H	NOUN	N	_	9	obl:mod	_	AlignBegin=346912|AlignEnd=347224|Gloss=[fond]|MGloss=[fond][MT]|MSeg=ndàyà-H|nWord=2|RX=[N]|wordform=ndàyà-H
3	mɔ̀	mɔ̀	NOUN	N	_	2	obj	_	AlignBegin=347224|AlignEnd=347536|Gloss=[chose]|MGloss=[chose]|MSeg=mɔ̀|nWord=3|RX=[N]
4	nɛ̀mɛ́	nɛ̀mɛ́	PRON	PERS	Number=Sing|Person=2|PronType=Prs	5	nsubj	_	AlignBegin=347536|AlignEnd=347848|Gloss=[2SG]|MGloss=[REL][2SG]|MSeg=nɛ̀mɛ́|nWord=4|RX=[PERS]
5	nɛ́	H-nɛ	VERB	V	_	2	acl:relcl	_	AlignBegin=347848|AlignEnd=348160|Gloss=[aller]|MGloss=[INAC][aller]|MSeg=H-nɛ|nWord=5|RX=[V]|wordform=H-nɛ
6	hárá	Há-har	VERB	V	_	5	compound:svc	_	AlignBegin=348160|AlignEnd=348472|Gloss=[s'aligner]|MGloss=[INF].[INAC][s'aligner]|MSeg=Há-har|nWord=6|RX=[V]|wordform=Há-har
7	kóò	kóò	NOUN	N	_	6	obj	_	AlignBegin=348472|AlignEnd=348786|Gloss=[épouse]|MGloss=[épouse]|MSeg=kóò|nWord=7|RX=[N]
8	ká	ká	CCONJ	COORD	_	9	cc	_	AlignBegin=348786|AlignEnd=349084|Gloss=[alors]|MGloss=[alors]|MSeg=ká|nWord=8|RX=[COORD]
9	hèè	hèè	INTJ	INTERJ	_	0	root	_	AlignBegin=349084|AlignEnd=349382|Gloss=[DISC]|MGloss=[DISC]|MSeg=hèè|nWord=9|RX=[DISC]
10	mɛ́	mɛ́	PRON	PERS	Number=Sing|Person=2|PronType=Prs	11	nsubj	_	AlignBegin=349382|AlignEnd=349680|Gloss=[2SG]|MGloss=[2SG]|MSeg=mɛ́|nWord=10|RX=[PERS]
11	nɛ́-nɛ̀á	nɛ́-BHanɛ	VERB	V	_	14	advcl	_	AlignBegin=349680|AlignEnd=349976|Gloss=[aller]|MGloss=[HYPO-ACC][aller]|MSeg=nɛ́-BHanɛ|nWord=11|RX=[V]|wordform=nɛ́-BHanɛ
12	nɛ̀	nɛ̀	CCONJ	COORD	_	14	cc	_	AlignBegin=349976|AlignEnd=350331|Gloss=[et_ainsi]|MGloss=[et_ainsi]|MSeg=nɛ̀|nWord=12|RX=[COORD]
13	mɛ̀	mɛ́-B	PRON	PERS	Number=Sing|Person=2|PronType=Prs	14	nsubj	_	AlignBegin=350331|AlignEnd=350686|Gloss=[2SG]|MGloss=[2SG][INJ]|MSeg=mɛ́-B|nWord=13|RX=[PERS]|wordform=mɛ́-B
14	yák-tɛ́-ɲɔ̀ŋ	H-yak-ká-Bɲɔŋ	VERB	V	_	9	parataxis:quoter	_	AlignBegin=350686|AlignEnd=351041|Gloss=[manger]|MGloss=[INAC][PROH][manger]|MSeg=H-yak-ká-Bɲɔŋ|nWord=14|RX=[V]|wordform=H-yak-ká-Bɲɔŋ
15	ɓélá	ɓélá	NOUN	N	_	14	obj	_	AlignBegin=351041|AlignEnd=351396|Gloss=[viande]|MGloss=[viande]|MSeg=ɓélá|nWord=15|RX=[N]
16	kútùà	kútùà	NOUN	N	_	14	obl:arg	_	AlignBegin=351396|AlignEnd=351751|Gloss=[maison]|MGloss=[maison]|MSeg=kútùà|nWord=16|RX=[N]
17	kó	kɔ́ʔó	ADP	FCT	_	18	case	_	AlignBegin=351751|AlignEnd=352106|Gloss=[de]|MGloss=[de][PL]|MSeg=kɔ́ʔó|nWord=17|RX=[FCT]|wordform=kɔ́ʔó
18	fòrmɛ́	fòr-Hmɛ́	NOUN	N	_	16	nmod	_	AlignBegin=352106|AlignEnd=352461|Gloss=[beaux-parents]|MGloss=[beaux-parents][MT][2SG]|MSeg=fòr-H=mɛ́|nWord=18|RX=[N]|wordform=fòr-H=mɛ́
19	sítí-há̰wà	sítí-há̰wà	ADP	FCT	_	14	dep	_	AlignBegin=352461|AlignEnd=352816|Gloss=[avant]|MGloss=[avant][3PL]|MSeg=sítí-há̰wà|nWord=19|RX=[FCT]
20	ná	ná	PART	MV	Polarity=Neg	14	advmod	_	AlignBegin=352816|AlignEnd=353170|Gloss=[NEG]|MGloss=[NEG]|MSeg=ná|nWord=20|RX=[MV]

~~~


