---
layout: base
title:  'Statistics of advcl in UD_Bororo-BDT'
udver: '2'
---

## Treebank Statistics: UD_Bororo-BDT: Relations: `advcl`

This relation is universal.

145 nodes (2%) are attached to their parents as `advcl`.

81 instances of `advcl` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.84137931034483.

The following 15 pairs of parts of speech are connected with `advcl`: <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (70; 48% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (38; 26% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (12; 8% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (6; 4% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-ADV.html">ADV</a></tt> (3; 2% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-ADP.html">ADP</a></tt> (3; 2% instances), <tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="bor_bdt-pos-ADP.html">ADP</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bor_bdt-pos-NUM.html">NUM</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="bor_bdt-pos-VERB.html">VERB</a></tt>-<tt><a href="bor_bdt-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advcl	color:blue
1	Ure	u	PRON	bi	Mood=Ind|Number=Sing|Person=3	4	nsubj	_	_
2	tumugudo	mugudo	VERB	v	Reflex=Yes	4	advcl	_	_
3	keje	keje	SCONJ	sconj	_	2	mark	_	_
4	akore	ako	VERB	v	Mood=Ind|Number=Sing|Person=3	0	root	_	_
5	:	:	PUNCT	punct	_	4	punct	_	_
6	inoba	inoba	ADV	adv	PronType=Int	7	advmod	_	_
7	boemode	boe	VERB	v	Mood=Ind|Tense=Fut	4	conj	_	_
8	?	?	PUNCT	punct	_	7	punct	_	_
9	Tui	ty	PRON	_	Reflex=Yes|VerbForm=Ger	10	nsubj	_	_
10	tumugudo	mugudo	VERB	v	Reflex=Yes|Voice=Cau	4	advcl	_	_
11	keje	keje	SCONJ	sconj	_	10	mark	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 advcl	color:blue
1	Icare	icare	ADV	adv	_	4	advmod	_	_
2	Akaruio	Akaruio	PROPN	propn	_	4	nsubj	_	_
3	Bokodori	Bokodori	PROPN	propn	_	2	compound	_	_
4	akore	ako	VERB	v	Mood=Ind|Number=Sing|Person=3	0	root	_	_
5	Bakoro	Bakoro	PROPN	propn	_	4	ccomp	_	_
6	Uwuria	Uwuria	PROPN	propn	_	5	compound	_	_
7	,	,	PUNCT	punct	_	4	punct	_	_
8	oino	oino	ADV	adv	_	4	advcl	_	_
9	arigao	arigao	NOUN	n	Number=Sing	4	obl	_	_
10	corewy	co	NOUN	n	Mood=Ind|Nomzr=Rel	9	nmod	_	_
11	ji	ji	ADP	posp	Number=Sing|Person=3	9	case	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advcl	color:blue
1	Juremode	jure	NOUN	n	Number=Sing	5	advcl	_	[];python;sucuri
2	pobo	pobo	NOUN	n	_	1	obl	_	[];;
3	tada	_	ADP	posp	Number=Sing|Person=3	2	case	_	[];;
4	ma	_	SCONJ	sconj	_	1	mark	_	[];;
5	akurugodykaba	kurugody	VERB	v	Mood=Imp|Number=Sing|Person=2|Polarity=Neg	0	root	_	[];;

~~~


