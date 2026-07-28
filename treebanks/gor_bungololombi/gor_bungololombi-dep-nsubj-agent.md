---
layout: base
title:  'Statistics of nsubj:agent in UD_Gorontalo-BungoLoLombi'
udver: '2'
---

## Treebank Statistics: UD_Gorontalo-BungoLoLombi: Relations: `nsubj:agent`

This relation is a language-specific subtype of <tt><a href="gor_bungololombi-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="gor_bungololombi-dep-nsubj-instrument.html">nsubj:instrument</a></tt>, <tt><a href="gor_bungololombi-dep-nsubj-patient.html">nsubj:patient</a></tt>.

16 nodes (8%) are attached to their parents as `nsubj:agent`.

16 instances of `nsubj:agent` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1875.

The following 3 pairs of parts of speech are connected with `nsubj:agent`: <tt><a href="gor_bungololombi-pos-VERB.html">VERB</a></tt>-<tt><a href="gor_bungololombi-pos-PROPN.html">PROPN</a></tt> (6; 38% instances), <tt><a href="gor_bungololombi-pos-VERB.html">VERB</a></tt>-<tt><a href="gor_bungololombi-pos-NOUN.html">NOUN</a></tt> (5; 31% instances), <tt><a href="gor_bungololombi-pos-VERB.html">VERB</a></tt>-<tt><a href="gor_bungololombi-pos-PRON.html">PRON</a></tt> (5; 31% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj:agent	color:blue
1	Ti	ti	ADP	_	Case=Piv|Gender=Fem	2	case	_	Gloss=pivot.fem|MSeg=Ti
2	Ati	ati	PROPN	_	_	3	nsubj:agent	_	Gloss=name|MSeg=Ati
3	lowundudu	wundudu	VERB	_	Mood=Ind|Voice=Act	0	root	_	Gloss=actvoice.realis-push|MSeg=lo-wundudu
4	le	le	ADP	_	Case=Npiv|Gender=Masc	5	case	_	Gloss=nonpivot.masculine|MSeg=le
5	Pulu	pulu	PROPN	_	_	3	obj:patient	_	Gloss=name|MSeg=Pulu

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:agent	color:blue
1	Tamohalawa	tamohalawa	NOUN	_	_	2	nsubj:agent	_	Gloss=fisherman|MSeg=tamohalawa
2	hemohutu	hutu	VERB	_	Aspect=Prog|Voice=Act	0	root	_	Gloss=act.voice.real-make|MSeg=hemo-hutu
3	tayango	tayango	NOUN	_	_	2	obj:patient	_	Gloss=net|MSeg=tayango
4	bohu	bohu	ADJ	_	_	3	amod	_	Gloss=new|MSeg=bohu

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:agent	color:blue
1	Ami	ami	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj:agent	_	Gloss=1pl.pivot|MSeg=Ami
2	mobuka	buka	VERB	_	Mood=Irr|Voice=Act	0	root	_	Gloss=act.irr-break.fast|MSeg=mo-buka
3	lo	lo	ADP	_	Case=Npiv	4	case	_	Gloss=notpivot|MSeg=lo
4	buburu	buburu	NOUN	_	_	2	obj:patient	_	Gloss=porridge|MSeg=buburu
5	wawu	wawu	CCONJ	_	_	6	cc	_	Gloss=coordinator|MSeg=wawu
6	tiliaya	tiliaya	NOUN	_	_	4	conj	_	Gloss=tiliaya|MSeg=tiliaya

~~~


