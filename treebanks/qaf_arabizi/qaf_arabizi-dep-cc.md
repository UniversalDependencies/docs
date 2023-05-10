---
layout: base
title:  'Statistics of cc in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `cc`

This relation is universal.

1030 nodes (5%) are attached to their parents as `cc`.

1030 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49320388349515.

The following 13 pairs of parts of speech are connected with `cc`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (437; 42% instances), <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (256; 25% instances), <tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (111; 11% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (108; 10% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (46; 4% instances), <tt><a href="qaf_arabizi-pos-INTJ.html">INTJ</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (38; 4% instances), <tt><a href="qaf_arabizi-pos-ADV.html">ADV</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (19; 2% instances), <tt><a href="qaf_arabizi-pos-ADP.html">ADP</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="qaf_arabizi-pos-NUM.html">NUM</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="qaf_arabizi-pos-DET.html">DET</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="qaf_arabizi-pos-PART.html">PART</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qaf_arabizi-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="qaf_arabizi-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="qaf_arabizi-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc	color:blue
1	les	les	DET	DET	_	2	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
2	algerien	algériens	NOUN	NC	_	0	root	_	ComposedUDPOS=NOUN|LangO=fr|ner=B-PERderiv
3	3andhom	chez_eux	PRON	P+PRO	_	2	nmod	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
4	6	6	NUM	NUM	_	5	nummod	_	ComposedUDPOS=NUM|LangO=fr|ner=O
5	jour	jours	NOUN	NC	_	6	nmod	_	ComposedUDPOS=NOUN|LangO=fr|ner=O
6	vacance	vacances	NOUN	NC	_	3	nmod	_	ComposedUDPOS=NOUN|LangO=fr|ner=O
7	ou	et	CCONJ	CC	_	8	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
8	youm	jours	NOUN	NC	_	6	conj	_	ComposedUDPOS=NOUN|DeepDep=coord|LangO=ar_dz|ner=O
9	kedma	travail	NOUN	NC	_	8	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
10	w	et	CCONJ	CC	_	11	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
11	ychkiw	se_plaignent	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	2	conj	_	ComposedUDPOS=VERB|DeepDep=coord|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	makfahomch	pas_suffir_eux	VERB	PART-NEG+V	Polarity=Neg	0	root	_	ComposedUDPOS=PART+VERB|LangO=ar_dz|ner=O
2	e	l'	DET	DET	_	3	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
3	drahom	argent	NOUN	NC	_	1	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
4	w	et	CCONJ	CC	_	6	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
5	le	le	DET	DET	_	6	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
6	pourcentage	pourcentage	NOUN	NC	_	1	conj	_	ComposedUDPOS=NOUN|DeepDep=coord|LangO=fr|ner=O
7	elli	qui	PRON	PROREL	PronType=Rel	8	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
8	yeddouh	ils_lui_donnent	VERB	V3ms+CLO	Gender=Masc|Number=Sing|Person=3	1	parataxis	_	ComposedUDPOS=VERB+PRON|LangO=ar_dz|ner=O
9	f	à	ADP	P	AdpType=Prep	11	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
10	e	la	DET	DET	_	11	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
11	ssel3a	marchandise	NOUN	NC	_	8	obl	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
1	l	la	DET	DET	_	2	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
2	macir	fin	NOUN	NC	_	0	root	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
3	ta3k	de_toi	PRON	P+PRO	_	2	nsubj	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=PREP_POSS
4	sure	surement	ADV	ADV	_	2	amod	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
5	ta3	comme	ADP	P	AdpType=Prep	6	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
6	l7asan	Al_Hassan	PROPN	NPP	_	2	nmod	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
7	w	et	CCONJ	CC	_	8	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O|SpaceAfter=No
8	el7oucine	Al_Hocine	PROPN	NPP	_	6	conj	_	ComposedUDPOS=PROPN|DeepDep=coord|LangO=ar_dz|ner=B-PER

~~~


