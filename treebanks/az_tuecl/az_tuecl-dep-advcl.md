---
layout: base
title:  'Statistics of advcl in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `advcl`

This relation is universal.

25 nodes (3%) are attached to their parents as `advcl`.

23 instances of `advcl` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.12.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (16; 64% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt> (3; 12% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="az_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="az_tuecl-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 advcl	color:blue
1	O	O	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
2	çox	çox	ADV	_	_	3	advmod	_	_
3	yeyin	yeyin	ADV	_	_	4	advmod	_	_
4	qaçdığı	qaç	VERB	_	Case=Gen|Number=Sing|Person=3|Tense=Past|VerbForm=Part	7	advcl	_	_
5	için	için	ADP	_	_	4	case	_	_
6	ona	o	PRON	_	Case=Dat|Number=Sing|Person=3|PronType=Prs	7	obl	_	_
7	çata	çata	VERB	_	VerbForm=Conv	0	root	_	_
8	bilmədim	bil	AUX	_	Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Past	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advcl	color:blue
1	Deniz	Deniz	PROPN	_	Case=Nom|Number=Sing	7	nsubj	_	_
2	yoldaşının	yoldaş	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	nsubj	_	_
3	pişirdigi	piş	VERB	_	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	4	advcl	_	_
4	qəzadan	qəza	NOUN	_	Case=Abl|Number=Sing	7	obl	_	_
5	ikki	ikki	NUM	_	NumType=Card	6	nummod	_	_
6	boşqab	boşqab	NOUN	_	Case=Nom|Number=Sing	7	obj	_	_
7	yedi	ye	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	O	O	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
2	Tüklərin	tük	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person[psor]=3	3	obj	_	_
3	cürləməliydi	cürləmə	VERB	_	Mood=Nec|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	amma	amma	CCONJ	_	_	11	cc	_	_
6	neçə	neçə	NUM	_	PronType=Int	7	nummod	_	_
7	dəlilə	dəlil	NOUN	_	Case=Dat|Number=Sing	11	advcl	_	_
8	görə	görə	ADP	_	_	7	case	_	_
9	o	o	DET	_	PronType=Dem	10	det	_	_
10	gün	gün	NOUN	_	Number=Sing	11	obl	_	_
11	eləmədi	elə	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


