---
layout: base
title:  'Statistics of root in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `root`

This relation is universal.

1287 nodes (7%) are attached to their parents as `root`.

1287 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.51437451437451.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (1049; 82% instances), -<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (119; 9% instances), -<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (52; 4% instances), -<tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt> (39; 3% instances), -<tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt> (17; 1% instances), -<tt><a href="qaf_arabizi-pos-INTJ.html">INTJ</a></tt> (7; 1% instances), -<tt><a href="qaf_arabizi-pos-ADV.html">ADV</a></tt> (2; 0% instances), -<tt><a href="qaf_arabizi-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="qaf_arabizi-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	mala	alors	ADV	ADV	_	3	advmod	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
2	kon	si	SCONJ	CS	_	3	mark	_	ComposedUDPOS=SCONJ|LangO=ar_dz|ner=O
3	galo	ils_disent	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	0	root	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
4	lik	à_toi	PRON	P+PRO	_	3	obl	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
5	hadro	ils_parlent	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	3	advcl	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
6	lik	à_toi	PRON	P+PRO	_	5	obl	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
7	bli	que	SCONJ	CS	AdpType=Prep	9	mark	_	ComposedUDPOS=SCONJ|LangO=ar_dz|ner=O
8	klemi	mots_mien	NOUN	NC+POSS	_	9	nsubj	_	ComposedUDPOS=NOUN+PRON|LangO=ar_dz|ner=O|Possessive=Yes|Reverse=NC_POSS
9	3eyab	vulgaires	ADJ	ADJ	_	5	ccomp	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	l	la	DET	DET	_	2	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
2	macir	fin	NOUN	NC	_	0	root	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
3	ta3k	de_toi	PRON	P+PRO	_	2	nsubj	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=PREP_POSS
4	sure	surement	ADV	ADV	_	2	amod	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
5	ta3	comme	ADP	P	AdpType=Prep	6	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
6	l7asan	Al_Hassan	PROPN	NPP	_	2	nmod	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
7	w	et	CCONJ	CC	_	8	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O|SpaceAfter=No
8	el7oucine	Al_Hocine	PROPN	NPP	_	6	conj	_	ComposedUDPOS=PROPN|DeepDep=coord|LangO=ar_dz|ner=B-PER

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	m3ak	avec_toi	PRON	P+PRO	_	0	root	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
2	ya	oh	INTJ	VOC	_	3	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
3	sadaane	Saadane	PROPN	NPP	_	1	appos	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
4	le	le	DET	DET	_	5	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
5	grand	grand	ADJ	ADJ	_	1	amod	_	ComposedUDPOS=ADJ|LangO=fr|ner=O
6	de	de	ADP	P	AdpType=Prep	7	case	_	ComposedUDPOS=ADP|LangO=fr|ner=O
7	oum	Om	PROPN	NPP	_	5	nmod	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-LOC
8	dermane	Dourman	PROPN	NPP	_	7	flat	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=I-LOC
9	hata	jusque	ADP	P	AdpType=Prep	11	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
10	l	la	DET	DET	_	11	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
11	mamat	mort	NOUN	NC	_	1	parataxis	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O

~~~


