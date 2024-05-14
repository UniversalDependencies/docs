---
layout: base
title:  'Statistics of reparandum in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `reparandum`

This relation is universal.

2 nodes (0%) are attached to their parents as `reparandum`.

2 instances of `reparandum` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `reparandum`: <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 reparandum	color:blue
1	B	B	INTJ	I	_	12	discourse	_	ComposedUDPOS=INTJ|LangO=fr|ner=O|SpaceAfter=No
2	(	(	PUNCT	PONCT	_	12	punct	_	ComposedUDPOS=PUNCT|LangO=fr|ner=O|SpaceAfter=No
3	bien	bienvenue	INTJ	I	Typo=Yes	12	discourse	_	ComposedUDPOS=INTJ|LangO=fr|ner=O
4	venu	_	X	_	_	3	goeswith	_	ComposedUDPOS=X|LangO=fr|ner=O|SpaceAfter=No
5	)	)	PUNCT	PONCT	_	12	punct	_	ComposedUDPOS=PUNCT|LangO=fr|ner=O
6	A	A	ADP	P+DET	AdpType=Prep	12	case	_	ComposedUDPOS=ADP+DET|LangO=fr|ner=O|SpaceAfter=No
7	(	(	PUNCT	PONCT	_	12	punct	_	ComposedUDPOS=PUNCT|LangO=fr|ner=O|SpaceAfter=No
8	au	au	ADP	P+DET	AdpType=Prep	12	case	_	ComposedUDPOS=ADP+DET|LangO=fr|ner=O|SpaceAfter=No
9	)	)	PUNCT	PONCT	_	12	punct	_	ComposedUDPOS=PUNCT|LangO=fr|ner=O
10	C	C	NOUN	NC	_	12	reparandum	_	ComposedUDPOS=NOUN|LangO=fr|ner=O|SpaceAfter=No
11	(	(	PUNCT	PONCT	_	12	punct	_	ComposedUDPOS=PUNCT|LangO=fr|ner=O|SpaceAfter=No
12	chaumage	chômage	NOUN	NC	_	16	parataxis	_	ComposedUDPOS=NOUN|LangO=fr|ner=O|SpaceAfter=No
13	)	)	PUNCT	PONCT	_	12	punct	_	ComposedUDPOS=PUNCT|LangO=fr|ner=O
14	el	le	DET	DET	_	15	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
15	blad	pays	NOUN	NC	_	16	nsubj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
16	ntba3at	a_été_vendu	VERB	V3fs	Gender=Fem|Number=Plur|Person=3	0	root	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
17	si	c'est	VERB	CLS-SUJ+V	_	16	parataxis	_	ComposedUDPOS=PRON+VERB|LangO=fr|ner=O
18	volu	voulu	VERB	V	_	17	xcomp	_	ComposedUDPOS=VERB|LangO=fr|ner=O

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 reparandum	color:blue
1	Ki	Quand	ADV	ADV	_	2	mark	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
2	nesma3	j'entends	VERB	V1ms	Gender=Masc|Number=Sing|Person=1	15	advcl	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
3	b'	que	ADP	P	AdpType=Prep	5	mark	_	ComposedUDPOS=ADP|LangO=fr|ner=O
4	deux	deux	DET	DET	_	5	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
5	parties	parties	NOUN	NC	_	6	nsubj	_	ComposedUDPOS=NOUN|LangO=fr|ner=O
6	yeddabzou	ils_battent	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	2	ccomp	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
7	3la	pour	ADP	P	AdpType=Prep	9	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
8	l	le	DET	DET	_	9	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
9	koursi	trône	NOUN	NC	_	6	obl	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
10	,	,	PUNCT	PONCT	_	2	punct	_	ComposedUDPOS=PUNCT|LangO=ar_dz|ner=O
11	j'	je	PRON	CLS-SUJ	_	15	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
12	men	m'en	PRON	CLR+CLO	_	13	reparandum	_	ComposedUDPOS=PRON+PRON|LangO=fr|ner=O
13	m	m'	PRON	CLR	_	15	expl:pv	_	ComposedUDPOS=PRON|LangO=fr|ner=O
14	en	en	PRON	CLO	_	15	obj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
15	fou	fous	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O
16	ghir	tant	PART	PART-EXP	_	17	advmod	_	ComposedUDPOS=PART|LangO=ar_dz|ner=O
17	yakhtîwli	ils_épargnent_moi	VERB	V3mp+CLO	Gender=Masc|Number=Plur|Person=3	15	parataxis	_	ComposedUDPOS=VERB+PRON|LangO=ar_dz|ner=O
18	rassi	tête_mien	NOUN	NC+POSS	_	17	obj	_	ComposedUDPOS=NOUN+PRON|LangO=ar_dz|ner=O|Possessive=Yes|Reverse=NC_POSS

~~~


