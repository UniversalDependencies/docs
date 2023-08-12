---
layout: base
title:  'Statistics of ccomp in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `ccomp`

This relation is universal.

270 nodes (1%) are attached to their parents as `ccomp`.

270 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.67037037037037.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (245; 91% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="qaf_arabizi-pos-INTJ.html">INTJ</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="qaf_arabizi-pos-ADV.html">ADV</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	welaw	ils_deviennent	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	0	root	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
2	kif	comme	ADP	P	AdpType=Prep	3	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
3	9orayche	Kouraych	PROPN	NPP	_	1	obl	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-OTH
4	yadefno	ils_enterrent	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	1	ccomp	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
5	f	dans	ADP	P	AdpType=Prep	6	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
6	trab	terre	NOUN	NC	_	4	obl	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 ccomp	color:blue
1	incha	si_Dieu_le_veut	INTJ	I	Typo=Yes	0	root	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
2	allah	_	X	_	_	1	goeswith	_	ComposedUDPOS=X|LangO=ar_dz|ner=B-PERderivA
3	nerebhou	nous_gagnerons	VERB	V1mp	Gender=Masc|Number=Plur|Person=1	1	ccomp	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
4	zkara	expres	ADV	ADV	_	3	advmod	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
5	et	et	CCONJ	CC	_	6	cc	_	ComposedUDPOS=CCONJ|LangO=fr|ner=O
6	nrouhou	nous_partons	VERB	V1mp	Gender=Masc|Number=Plur|Person=1	3	conj	_	ComposedUDPOS=VERB|DeepDep=coord|LangO=ar_dz|ner=O
7	el	la	DET	DET	_	8	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
8	kaas	coupe	NOUN	NC	_	6	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
9	el	la	DET	DET	_	10	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
10	3alemamine	foule	NOUN	NC	_	8	nmod	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O

~~~


