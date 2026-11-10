---
layout: base
title:  'Statistics of nsubj:outer in UD_Northwest_Gbaya-Autogramm'
udver: '2'
---

## Treebank Statistics: UD_Northwest_Gbaya-Autogramm: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="gya_autogramm-dep-nsubj.html">nsubj</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:outer`.

4 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="gya_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="gya_autogramm-pos-PRON.html">PRON</a></tt> (3; 75% instances), <tt><a href="gya_autogramm-pos-VERB.html">VERB</a></tt>-<tt><a href="gya_autogramm-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	wà	wà	PRON	PRO.PERS	Number=Plur|Person=3|PronType=Prs	4	nsubj:outer	_	GE=[3PL]|Gloss=3PL|MGloss=3PL--TOP|MSeg=wà-H|nWord=14|RX=[PRO].[PERS]|WordAlignmentBegin=165900|WordAlignmentEnd=166160
2	nɛ̀	nɛ̀	DET	MODY	_	1	dep	_	GE=[TOP]|Gloss=TOP|MGloss=TOP|MSeg=nɛ̀|nWord=15|RX=[MODY]|WordAlignmentBegin=166160|WordAlignmentEnd=166247
3	wà	wà	PRON	PRO.PERS	Number=Plur|Person=3|PronType=Prs	4	nsubj	_	GE=[3PL]|Gloss=3PL|MGloss=3PL-TM|MSeg=wà-H|nWord=15|RX=[PRO].[PERS]|WordAlignmentBegin=166247|WordAlignmentEnd=166420
4	BHa-kur	kur	VERB	V	_	0	root	_	GE=stand_up|Gloss=stand_up|MGloss=PFV-stand_up-TM|MSeg=BHa-kur-H|nWord=18|RX=[V]|WordAlignmentBegin=167160|WordAlignmentEnd=167420
5	ʔé	ʔé	ADV	ADV	_	4	advmod	_	GE=already|Gloss=already|MGloss=already|MSeg=ʔé|nWord=19|RX=[ADV]|WordAlignmentBegin=167420|WordAlignmentEnd=167680
6	nɛ̀	nɛ̀	ADP	PREP	_	8	case	_	GE=par|Gloss=par|MGloss=par|MSeg=nɛ̀|nWord=20|RX=[PREP]|WordAlignmentBegin=167680|WordAlignmentEnd=167940
7	ɗúká	ɗúká	ADJ	ADJ.V	_	8	dep	_	GE=deep|Gloss=deep|MGloss=deep|MSeg=ɗúká|nWord=21|RX=[ADJ].[V]|WordAlignmentBegin=167940|WordAlignmentEnd=168200
8	zɛ̀	zɛ̀	NOUN	N	_	4	obl:arg	_	GE=night|Gloss=night|MGloss=night|MSeg=zɛ̀|nWord=22|RX=[N]|WordAlignmentBegin=168200|WordAlignmentEnd=168460
9	mɔ́	mɔ́	ADP	PREP	_	8	nmod	_	GE=[APPOS]|Gloss=APPOS|MGloss=APPOS|MSeg=mɔ́|nWord=23|RX=[PREP]|WordAlignmentBegin=168460|WordAlignmentEnd=168720
10	tɛ̀	tɛ̀	ADP	PREP	_	11	case	_	GE=at|Gloss=at|MGloss=at|MSeg=tɛ̀|nWord=24|RX=[PREP]|WordAlignmentBegin=168720|WordAlignmentEnd=168980
11	midi	midi	NOUN	N	_	9	obl:arg	_	GE=<F|Gloss=midi|MGloss=midi|MSeg=midi|nWord=25|RX=[N]|WordAlignmentBegin=168980|WordAlignmentEnd=169240
12	zɛ̀	zɛ̀	NOUN	N	_	11	obj	_	GE=nuit|Gloss=nuit|MGloss=nuit|MSeg=zɛ̀|nWord=25|RX=[N]|WordAlignmentBegin=168980|WordAlignmentEnd=169240

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 nsubj:outer	color:blue
1	ká	ká	CCONJ	SUB	_	4	reparandum	_	Gloss=alors|MGloss=alors|MSeg=ká|nWord=5|RX=SUB|WordAlignmentBegin=86851|WordAlignmentEnd=87063
2	wáɲá	wáɲá	NOUN	N	_	5	reparandum	_	Gloss=feuille|MGloss=feuille|MSeg=wáɲá|nWord=6|RX=N|WordAlignmentBegin=87063|WordAlignmentEnd=87275
3	nɛ̀	nɛ̀	ADP	FCT	_	2	obl:arg	_	Gloss=en_tant_que|MGloss=en_tant_que|MSeg=nɛ̀|nWord=7|RX=FCT|WordAlignmentBegin=87275|WordAlignmentEnd=87485
4	ká	ká	CCONJ	COORD	_	9	cc	_	Gloss=alors|MGloss=alors|MSeg=ká|nWord=8|RX=COORD|WordAlignmentBegin=87485|WordAlignmentEnd=87785
5	wáɲá	wáɲá	NOUN	N	_	9	nsubj:outer	_	Gloss=feuille|MGloss=feuille|MSeg=wáɲá|nWord=9|RX=N|WordAlignmentBegin=87785|WordAlignmentEnd=88085
6	nɛ̀	nɛ̀	ADP	FCT	_	7	case	_	Gloss=en_tant_que|MGloss=en_tant_que|MSeg=nɛ̀|nWord=10|RX=FCT|WordAlignmentBegin=88085|WordAlignmentEnd=88385
7	tàrɛ̀-H-à	tàrɛ̀	ADJ	AR	_	5	nmod	_	Gloss=produit_urticant|MGloss=produit_urticant-MT-NMLS|MSeg=tàrɛ̀-H-à|nWord=11|RX=AR|WordAlignmentBegin=88385|WordAlignmentEnd=88685
8	ʔà̰	ʔà̰	PRON	PERS	Number=Sing|Person=3|PronType=Prs	9	nsubj	_	Gloss=3SG|MGloss=3SG|MSeg=ʔà̰|nWord=12|RX=PERS|WordAlignmentBegin=88685|WordAlignmentEnd=88985
9	H-duk	duk	VERB	V	_	0	root	_	Gloss=rester|MGloss=INAC-rester|MSeg=H-duk|nWord=13|RX=V|WordAlignmentBegin=88985|WordAlignmentEnd=89285
10	sɛ̀n	sɛ̀n	ADP	FCT	_	9	obl:arg	_	Gloss=dans|MGloss=dans|MSeg=sɛ̀n|nWord=14|RX=FCT|WordAlignmentBegin=89285|WordAlignmentEnd=89585
11	ká	ká	ADP	FCT	_	12	case	_	Gloss=à_côté_de|MGloss=à_côté_de|MSeg=ká|nWord=15|RX=FCT|WordAlignmentBegin=89585|WordAlignmentEnd=89885
12	zàŋ	zàŋ	NOUN	N	_	10	obl:arg	_	Gloss=continuité|MGloss=continuité-MT|MSeg=zàŋ-H|nWord=16|RX=N|WordAlignmentBegin=89885|WordAlignmentEnd=90185
13	yì	yì	NOUN	N	_	12	obj	_	Gloss=rivière|MGloss=rivière|MSeg=yì|nWord=17|RX=N|WordAlignmentBegin=90185|WordAlignmentEnd=90485
14	hòkòyòkò	hòkòyòkò	ADJ	AA	_	9	advcl	_	Gloss=un_peu_sec|MGloss=un_peu_sec|MSeg=hòkòyòkò|nWord=18|RX=AA|WordAlignmentBegin=90485|WordAlignmentEnd=90785

~~~


