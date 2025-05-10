---
layout: base
title:  'Statistics of obj in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `obj`

This relation is universal.

351 nodes (8%) are attached to their parents as `obj`.

196 instances of `obj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.76638176638177.

The following 9 pairs of parts of speech are connected with `obj`: <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (168; 48% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PRON.html">PRON</a></tt> (150; 43% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (11; 3% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (11; 3% instances), <tt><a href="el_cretan-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cretan-pos-DET.html">DET</a></tt> (7; 2% instances), <tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cretan-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="el_cretan-pos-DET.html">DET</a></tt>-<tt><a href="el_cretan-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Δεν	δεν	PART	PtNg	Polarity=Neg	2	advmod	_	mwe=1
2	ήβγαλε	βγάνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	mwe=1:VID
3	αχνιά	αχνιά	NOUN	AdBa	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	mwe=1
4	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Μελεμενιά	Μελεμενιά	PROPN	NoPr	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	SpaceAfter=No
6	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 obj	color:blue
1	Κι	και	CCONJ	CjCo	_	4	cc	_	_
2	απ'	από	ADP	AsPpSp	_	3	case	_	_
3	ό,τι	ό,τι	DET	PnRi	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	4	obl	_	_
4	είδα	βλέπω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	13	parataxis	_	_
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	αριστερή	αριστερός	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Sing	13	obj	_	_
8	σ	σε	ADP	AsPpSp	_	10	case	_	_
9	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	τσέπη	τσέπη	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	13	obl	_	_
11	δεν	δεν	PART	PtNg	Polarity=Neg	13	advmod	_	_
12	την	εγώ	PRON	PnPe	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	expl	_	_
13	ήβανε	βάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
14	.	.	PUNCT	PTERMP	_	13	punct	_	PunctType=Peri

~~~


