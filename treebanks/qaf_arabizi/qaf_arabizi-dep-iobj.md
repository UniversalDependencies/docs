---
layout: base
title:  'Statistics of iobj in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `iobj`

This relation is universal.

41 nodes (0%) are attached to their parents as `iobj`.

29 instances of `iobj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26829268292683.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (33; 80% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
1	on	on	PRON	PRO	_	2	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
2	va	va	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=fr|ner=O
3	gagné	gagner	VERB	VINF	VerbForm=Inf	2	xcomp	_	ComposedUDPOS=VERB|LangO=fr|ner=O
4	inchaalah	inchaAllah	INTJ	I	_	6	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
5	ya	oh	INTJ	VOC	_	6	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O|SpaceAfter=No
6	rabi	Dieu_mien	PROPN	NPP+POSS	_	7	vocative	_	ComposedUDPOS=PROPN+PRON|LangO=ar_dz|ner=B-PERderivA|Possessive=Yes|Reverse=NC_POSS
7	kon	soit	VERB	VIMP	Mood=Imp	2	parataxis	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
8	m3ana	avec_nous	PRON	P+PRO	_	7	iobj	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	l'	le	DET	DET	_	2	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
2	ess	ESS	PROPN	NPP	_	3	nsubj	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-ORG
3	3almo	appris	VERB	V	_	0	root	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
4	l'	le	DET	DET	_	5	det	_	ComposedUDPOS=DET|LangO=fr|ner=O
5	usma	USMA	PROPN	NPP	_	3	iobj	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-ORG
6	balon	le_ballon	NOUN	NC	_	3	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
7	w	et	CCONJ	CC	_	8	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
8	keraohom	ils_apprennent_eux	VERB	V3mp+CLO	Gender=Masc|Number=Plur|Person=3	3	conj	_	ComposedUDPOS=VERB+PRON|DeepDep=coord|LangO=ar_dz|ner=O|Reverse=VERB_CLO_1
9	werk	papier	NOUN	NC	_	8	obj	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
10	w	et	CCONJ	CC	_	11	cc	_	ComposedUDPOS=CCONJ|LangO=ar_dz|ner=O
11	stilo	stylo	NOUN	NC	_	9	conj	_	ComposedUDPOS=NOUN|DeepDep=coord|LangO=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 iobj	color:blue
1	saifi	Saifi	PROPN	NPP	_	2	vocative	_	ComposedUDPOS=PROPN|LangO=ar_dz|ner=B-PER
2	khir	mieux	ADJ	ADJ	_	0	root	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
3	lak	pour_toi	PRON	P+PRO	_	2	iobj	_	ComposedUDPOS=ADP+PRON|LangO=ar_dz|ner=O|Reverse=P_PRO_1
4	troh	pars	VERB	V2ms	Gender=Masc|Number=Sing|Person=2	2	ccomp	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
5	adir	tu_fais	VERB	V2ms	Gender=Masc|Number=Sing|Person=2	4	xcomp	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
6	jubilée	jubilée	NOUN	NC	_	5	obj	_	ComposedUDPOS=NOUN|LangO=fr|ner=O
7	fi	à	ADP	P	AdpType=Prep	9	case	_	ComposedUDPOS=ADP|LangO=ar_dz|ner=O
8	asr3a	rapide	ADJ	ADJ	_	9	amod	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
9	wakt	temps	NOUN	NC	_	5	obl	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
10	momkin	possible	ADJ	ADJ	_	9	amod	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
11	intahat	finit	VERB	V3fs	Gender=Fem|Number=Plur|Person=3	2	parataxis	_	ComposedUDPOS=VERB|LangO=ar_dz|ner=O
12	salahiyatek	validités_tien	NOUN	NC+POSS	_	11	obj	_	ComposedUDPOS=NOUN+PRON|LangO=ar_dz|ner=O|Possessive=Yes|Reverse=NC_POSS
13	by	aurevoir	INTJ	I	_	11	discourse	_	ComposedUDPOS=INTJ|LangO=en|ner=O
14	merci	merci	INTJ	I	_	11	discourse	_	ComposedUDPOS=INTJ|LangO=fr|ner=O

~~~


