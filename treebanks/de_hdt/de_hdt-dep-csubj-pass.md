---
layout: base
title:  'Statistics of csubj:pass in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="de_hdt-dep-csubj.html">csubj</a></tt>.

919 nodes (0%) are attached to their parents as `csubj:pass`.

717 instances of `csubj:pass` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.4417845484222.

The following 6 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-VERB.html">VERB</a></tt> (830; 90% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADJ.html">ADJ</a></tt> (32; 3% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-AUX.html">AUX</a></tt> (32; 3% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt> (20; 2% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-VERB.html">VERB</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj:pass	color:blue
1	Wer	Wer	PRON	PWS	Case=Nom|Number=Sing|Person=3|PronType=Int	3	nsubj	_	_
2	genauer	genau	ADJ	ADJD	Degree=Cmp|Variant=Short	3	advmod	_	_
3	hinschaut	hinschauen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	csubj:pass	_	_
4	,	,	PUNCT	$,	PunctType=Comm	3	punct	_	_
5	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	überrascht	überraschen	VERB	VVPP	Aspect=Perf|VerbForm=Part	0	root	_	_
7	sein	sein	AUX	VAINF	VerbForm=Inf	6	aux:pass	_	_
8	:	:	PUNCT	$.	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 csubj:pass	color:blue
1	Daß	Daß	SCONJ	KOUS	_	3	mark	_	_
2	OS/2	OS/2	PROPN	NE	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
3	tot	tot	ADJ	ADJD	Degree=Pos|Variant=Short	9	csubj:pass	_	_
4	sei	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
5	,	,	PUNCT	$,	PunctType=Comm	3	punct	_	_
6	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	_
7	immer	immer	ADV	ADV	_	8	advmod	_	_
8	wieder	wieder	ADV	ADV	_	9	advmod	_	_
9	behauptet	behaupten	VERB	VVPP	Aspect=Perf|VerbForm=Part	0	root	_	_
10	.	.	PUNCT	$.	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 csubj:pass	color:blue
1	Welche	Welche	DET	PWAT	Case=Acc|Gender=Fem|Number=Sing|PronType=Int	2	det	_	_
2	Ausrichtung	Ausrichtung	NOUN	NN	Gender=Fem|Number=Sing|Person=3	8	obj	_	_
3	das	das	DET	ART	Case=Nom|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	Magazin	Magazin	NOUN	NN	Gender=Neut|Number=Sing|Person=3	8	nsubj	_	_
5	nach	nach	ADP	APPR	AdpType=Prep|Case=Dat	7	case	_	_
6	diesem	dies	DET	PDAT	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	7	det	_	_
7	Relaunch	unknown	NOUN	NN	Person=3	8	nmod	_	_
8	haben	haben	AUX	VAINF	VerbForm=Inf	14	csubj:pass	_	_
9	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
10	,	,	PUNCT	$,	PunctType=Comm	8	punct	_	_
11	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	aux:pass	_	_
12	noch	noch	ADV	ADV	_	14	advmod	_	_
13	nicht	nicht	PART	PTKNEG	Polarity=Neg	14	advmod	_	_
14	entschieden	entscheiden	VERB	VVPP	Aspect=Perf|VerbForm=Part	0	root	_	_
15	.	.	PUNCT	$.	PunctType=Peri	14	punct	_	_

~~~


