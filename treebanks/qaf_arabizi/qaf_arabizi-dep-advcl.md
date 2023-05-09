---
layout: base
title:  'Statistics of advcl in UD_Maghrebi_Arabic_French-Arabizi'
udver: '2'
---

## Treebank Statistics: UD_Maghrebi_Arabic_French-Arabizi: Relations: `advcl`

This relation is universal.

70 nodes (0%) are attached to their parents as `advcl`.

59 instances of `advcl` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.71428571428571.

The following 10 pairs of parts of speech are connected with `advcl`: <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (55; 79% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="qaf_arabizi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="qaf_arabizi-pos-ADV.html">ADV</a></tt>-<tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="qaf_arabizi-pos-PRON.html">PRON</a></tt>-<tt><a href="qaf_arabizi-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="qaf_arabizi-pos-VERB.html">VERB</a></tt>-<tt><a href="qaf_arabizi-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 advcl	color:blue
1	vive	vivre	VERB	V	Mood=Sub	0	root	_	ComposedUDPOS=VERB|lango=fr|ner=O
2	saadan	Saadane	PROPN	NPP	_	1	nsubj	_	ComposedUDPOS=PROPN|lango=ar_dz|ner=B-PER
3	wa	et	CCONJ	CC	_	4	cc	_	ComposedUDPOS=CCONJ|lango=ar_dz|ner=O
4	ma3ak	avec_toi	PRON	P+PRO	_	1	parataxis	_	ComposedUDPOS=ADP+PRON|lango=ar_dz|ner=O|Reverse=P_PRO_1
5	lala	jusque	PART	PART-NEG	Polarity=Neg	6	mark	_	ComposedUDPOS=PART|lango=ar_dz|ner=O|SpaceAfter=No
6	mamat	mourir	VERB	PART-NEG+V	Polarity=Neg	4	advcl	_	ComposedUDPOS=PART+VERB|lango=ar_dz|ner=O
7	wa	et	CCONJ	CC	_	8	cc	_	ComposedUDPOS=CCONJ|lango=ar_dz|ner=O
8	nchlah	inchaAllah	INTJ	I	_	9	discourse	_	ComposedUDPOS=INTJ|lango=ar_dz|ner=O
9	takamal	tu_termine	VERB	V2ms	Gender=Masc|Number=Sing|Person=2	4	parataxis	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O
10	ch	ce_que	PRON	PROREL	PronType=Rel	9	obj	_	ComposedUDPOS=PRON|lango=ar_dz|ner=O
11	abdit	tu_commencé	VERB	V2ms	Gender=Masc|Number=Sing|Person=2	10	acl:relcl	_	ComposedUDPOS=VERB|lango=ar_dz|ner=O

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 advcl	color:blue
1	wallah	Wallah	INTJ	I	_	2	discourse	_	ComposedUDPOS=INTJ|LangO=ar_dz|ner=O
2	haram	illicite	NOUN	NC	_	3	dep	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
3	makontch	pas_était_toi	VERB	PART-NEG+V	Polarity=Neg	0	root	_	ComposedUDPOS=PART+VERB|LangO=ar_dz|ner=O
4	metwak3a	malade	ADJ	ADJ	_	3	obj	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
5	haka	comme_ça	PRON	DEM	PronType=Dem	4	nsubj	_	ComposedUDPOS=PRON|LangO=ar_dz|ner=O
6	kafirine	mécréant	ADJ	ADJ	_	3	parataxis	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
7	ki	comme_ça	ADV	ADV	_	9	advmod	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
8	el	des	DET	DET	_	9	det	_	ComposedUDPOS=DET|LangO=ar_dz|ner=O
9	mordha	malades	ADJ	ADJ	_	6	advcl	_	ComposedUDPOS=ADJ|LangO=ar_dz|ner=O
10	ki	comme	ADV	ADV	_	11	advmod	_	ComposedUDPOS=ADV|LangO=ar_dz|ner=O
11	tobba	repentir	NOUN	NC	_	9	nmod	_	ComposedUDPOS=NOUN|LangO=ar_dz|ner=O
12	je	je	PRON	CLS-SUJ	_	13	det	_	ComposedUDPOS=PRON|LangO=fr|ner=O
13	desolis	désolé	ADJ	ADJ	_	3	parataxis	_	ComposedUDPOS=ADJ|LangO=fr|ner=O
14	sa	ça	PRON	CLS-SUJ	_	13	nsubj	_	ComposedUDPOS=PRON|LangO=fr|ner=O
15	pour	pour	ADP	P	AdpType=Prep	13	dep	_	ComposedUDPOS=ADP|LangO=fr|ner=O

~~~


