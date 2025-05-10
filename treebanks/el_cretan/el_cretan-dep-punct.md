---
layout: base
title:  'Statistics of punct in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `punct`

This relation is universal.

718 nodes (17%) are attached to their parents as `punct`.

431 instances of `punct` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.2075208913649.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (486; 68% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (108; 15% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (35; 5% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (31; 4% instances), <tt><a href="el_cretan-pos-INTJ.html">INTJ</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (21; 3% instances), <tt><a href="el_cretan-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (17; 2% instances), <tt><a href="el_cretan-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (6; 1% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (6; 1% instances), <tt><a href="el_cretan-pos-DET.html">DET</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (4; 1% instances), <tt><a href="el_cretan-pos-NUM.html">NUM</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="el_cretan-pos-AUX.html">AUX</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="el_cretan-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="el_cretan-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 punct	color:blue
1	Δεν	δεν	PART	PtNg	Polarity=Neg	2	advmod	_	mwe=1
2	ήβγαλε	βγάνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	mwe=1:VID
3	αχνιά	αχνιά	NOUN	AdBa	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	mwe=1
4	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Μελεμενιά	Μελεμενιά	PROPN	NoPr	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 punct	color:blue
1	Είντα	είντα	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	2	obj	_	_
2	'χεις	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
4	τέκνο	τέκνο	NOUN	NoCm	Case=Voc|Gender=Neut|Number=Sing	2	vocative	_	_
5	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
7	είντα	είντα	PRON	PnPe	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	8	obj	_	_
8	'παθες	παθαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
9	;	;	PUNCT	PTERM	_	2	punct	_	PunctType=Qest

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 punct	color:blue
1	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	άλλος	άλλος	DET	PnId	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	nsubj	_	_
3	πλούσιος	πλούσιος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	με	με	ADP	AsPpSp	_	5	case	_	_
5	αμπέλια	αμπέλι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	3	obl	_	_
6	κι	και	CCONJ	CjCo	_	7	cc	_	_
7	ελιές	ελιά	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	5	conj	_	_
8	και	και	CCONJ	CjCo	_	9	cc	_	_
9	χωράφια	χωράφι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	5	conj	_	_
10	αμέτρητα	αμέτρητος	ADJ	AjBa	Case=Acc|Gender=Neut|Number=Plur	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


