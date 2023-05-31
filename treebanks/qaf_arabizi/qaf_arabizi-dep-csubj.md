---
layout: base
title:  'Statistics of csubj in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `csubj`

This relation is universal.

4 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.75.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (3; 75% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	me3ak	avec_toi	PRON	P+PRO	_	0	root	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
2	ya	oh	INTJ	VOC	_	3	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
3	hamiti	Hamiti	PROPN	NPP	_	1	vocative	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
4	ou	et	CCONJ	CC	_	6	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
5	li	qui	PRON	PROREL	PronType=Rel	6	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
6	sar	devenu	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	7	csubj	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
7	isir	devient	VERB	V3ms	Gender=Masc|Number=Sing|Person=3	1	parataxis	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
8	vive	vivre	VERB	V	Mood=Sub	1	parataxis	_	ComposedUDPOS=VERB|LangO=fr|ner=O
9	la	la	DET	DET	_	10	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
10	jsimazighen	JS_Kabylie	PROPN	NPP	_	8	nsubj	_	ComposedUDPOS=PROPN|LangO=tm|ner=B-ORG

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	alache	Pourquoi	ADV	ADVWH	_	6	advmod	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
2	ya	ô	INTJ	VOC	_	3	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
3	tzayer	Algerie	PROPN	NPP	_	6	vocative	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-LOC
4	eli	qui	PRON	PROREL	PronType=Rel	5	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
5	andou	chez_lui	PRON	P+PRO	_	6	csubj	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O
6	tzidilou	vous_en_rajouter	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	0	root	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
7	wa	et	CCONJ	CC	_	10	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
8	el	le	DET	DET	_	9	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
9	galil	pauvre	NOUN	NC	_	10	nsubj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
10	yachka	se_plaint	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	6	conj	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
11	w	et	CCONJ	CC	_	12	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
12	yat3ab	se_fatigue	VERB	V3mp	Gender=Masc|Number=Plur|Person=3	10	conj	_	ComposedUDPOS=VERB|DeepDep=coord|LangO=ar_dz|ner=O

~~~


