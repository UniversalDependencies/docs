---
layout: base
title:  'Statistics of conj in UD_Kangri-KDTB'
udver: '2'
---

## Treebank Statistics: UD_Kangri-KDTB: Relations: `conj`

This relation is universal.

24 nodes (1%) are attached to their parents as `conj`.

24 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.125.

The following 8 pairs of parts of speech are connected with `conj`: <tt><a href="xnr_kdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="xnr_kdtb-pos-VERB.html">VERB</a></tt> (9; 38% instances), <tt><a href="xnr_kdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xnr_kdtb-pos-NOUN.html">NOUN</a></tt> (7; 29% instances), <tt><a href="xnr_kdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xnr_kdtb-pos-VERB.html">VERB</a></tt> (2; 8% instances), <tt><a href="xnr_kdtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="xnr_kdtb-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="xnr_kdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xnr_kdtb-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="xnr_kdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xnr_kdtb-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="xnr_kdtb-pos-NUM.html">NUM</a></tt>-<tt><a href="xnr_kdtb-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="xnr_kdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="xnr_kdtb-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 conj	color:blue
1	पता	पता	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	compound	_	Translit=patā|LTranslit=patā
2	नी	नी	PART	NEG	Polarity=Neg	4	dep	_	Translit=nī|LTranslit=nī
3	मोआ	मोआ	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	Translit=moā|LTranslit=moā
4	तोपा	तोपाणा	VERB	VM	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Translit=topā|LTranslit=topāṇā
5	भी	भी	PART	RP	_	4	dep	_	Translit=bhī|LTranslit=bhī
6	करदा	करणा	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	4	aux	_	Translit=karadā|LTranslit=karaṇā
7	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	Translit=hai|LTranslit=hai
8	कि	कि	CCONJ	CC	_	4	cc	_	Translit=ki|LTranslit=ki
9	चला	चलणा	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Pass	4	conj	_	Translit=calā|LTranslit=calaṇā
10	गेया	जाणा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	9	aux	_	Translit=geyā|LTranslit=jāṇā
11	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	Translit=hai|LTranslit=hai
12	घरे	घरा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	obj	_	Translit=ghare|LTranslit=gharā
13	जो	जो	ADP	PSP	AdpType=Post	12	case	_	SpaceAfter=No|Translit=jo|LTranslit=jo
14	!	!	PUNCT	SYM	_	4	punct	_	Translit=!|LTranslit=!

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 conj	color:blue
1	ग्लान्दे	ग्लान्देणा	VERB	VM	_	0	root	_	Translit=glānde|LTranslit=glāndeṇā
2	हन	है	AUX	VAUX	_	1	aux	_	Translit=hana|LTranslit=hai
3	प्रीता	प्रीता	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	nmod	_	Translit=prītā|LTranslit=prītā
4	कने	कने	CCONJ	CC	_	5	cc	_	Translit=kane|LTranslit=kane
5	लड़ाइया	लड़ाइया	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	3	conj	_	Translit=laṛāiyā|LTranslit=laṛāiyā
6	विच	विच	ADP	PSP	AdpType=Post	3	case	_	Translit=vica|LTranslit=vica
7	सब	सब	PRON	PRPC	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	compound	_	Translit=saba|LTranslit=saba
8	कुछ	कुछ	PRON	PRP	Case=Nom|Person=3|PronType=Prs	9	nsubj	_	Translit=kucha|LTranslit=kucha
9	जायज़	जायज	ADJ	JJ	_	1	obj	_	Translit=jāyaza|LTranslit=jāyaja
10	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	SpaceAfter=No|Translit=hai|LTranslit=hai
11	।	।	PUNCT	SYM	_	9	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 conj	color:blue
1	तिसा	तिसा	PRON	PR	Case=Nom|Gender=Masc|Number=Sing	3	nmod	_	Translit=tisā|LTranslit=tisā
2	दा	दा	ADP	PSP	AdpType=Post	1	case	_	Translit=dā|LTranslit=dā
3	लाड़ा	लाडा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nsubj	_	Translit=lāṛā|LTranslit=lāḍā
4	फ़ौजी	फ़ौजी	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Translit=faujī|LTranslit=faujī
5	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	Translit=hai|LTranslit=hai
6	कने	कने	CCONJ	CC	_	4	cc	_	Translit=kane|LTranslit=kane
7	खरा	खरा	ADJ	JJ	Case=Nom|Gender=Masc|Number=Sing	8	amod	_	Translit=kharā|LTranslit=kharā
8	आदमी	आदमी	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Translit=ādamī|LTranslit=ādamī
9	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	SpaceAfter=No|Translit=hai|LTranslit=hai
10	।	।	PUNCT	SYM	_	4	punct	_	Translit=.|LTranslit=.

~~~


