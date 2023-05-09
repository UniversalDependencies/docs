---
layout: base
title:  'Statistics of mark in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `mark`

This relation is universal.

4 nodes (1%) are attached to their parents as `mark`.

4 instances of `mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-SCONJ.html">SCONJ</a></tt> (1; 25% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (1; 25% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-SCONJ.html">SCONJ</a></tt> (1; 25% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-X.html">X</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Jorubutu	jorubutu	NOUN	n	_	6	advcl	_	dry.season,year;estação.seca,ano
2	bato	bato	SCONJ	n	_	1	mark	_	village;aldeia
3	,	,	PUNCT	_	_	1	punct	_	_
4	boe	boe	NOUN	_	_	6	nsubj	_	_
5	emode	e	PRON	bi	IF=Ass|Number=Plur|Person=3|PronType=Bi|Tense=Fut	6	dep	_	they;eles,elas
6	kurodo	kuro	NOUN	n	Voice=Cau	0	root	_	liana;timbó
7	kurugoa	kurugoa	NOUN	n	_	6	obl	_	_
8	ji	ji	ADP	posp	Number=Sing|Person=3	7	case	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Iwogumode	wogu	VERB	_	IF=Ass|Number[subj]=Sing|Person[subj]=1|Tense=Fut	0	root	_	_
2	kodi	kodi	ADV	adv	_	1	mark	_	because;por.que

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 mark	color:blue
1	Boe	_	NOUN	_	_	2	nmod	_	_
2	etaidukare	aidu	VERB	v	IF=Ass|Number=Plur|Person=3|Polarity=Neg	0	root	_	_
3	tumaragoduwo	ragodu	VERB	v	Number=Plur|Person=3|Reflex=Yes	2	ccomp	_	work;trabalhar
4	awu	_	DET	dem	_	5	nmod	_	this;este,esta
5	meri	_	NOUN	n	_	2	obl	_	day;dia
6	ji	_	ADP	posp	_	5	case	_	_
7	.	_	PUNCT	punct	_	2	punct	_	_
8	Eragodyre	_	VERB	_	IF=Ass|Number=Plur|Person=3	2	advcl	_	sing;cantar
9	boecoji	_	ADV	_	_	8	advmod	_	at.night;à.noite
10	kodi	kodi	SCONJ	_	_	8	mark	_	because;porque

~~~


