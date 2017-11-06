---
layout: base
title:  'Statistics of csubj:cleft in UD_Irish'
udver: '2'
---

## Treebank Statistics: UD_Irish: Relations: `csubj:cleft`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="ga-dep-csubj-cop.html">csubj:cop</a></tt>.

133 nodes (1%) are attached to their parents as `csubj:cleft`.

132 instances of `csubj:cleft` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.18796992481203.

The following 11 pairs of parts of speech are connected with `csubj:cleft`: <tt><a href="ga-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (43; 32% instances), <tt><a href="ga-pos-ADP.html">ADP</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (37; 28% instances), <tt><a href="ga-pos-PRON.html">PRON</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (20; 15% instances), <tt><a href="ga-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="ga-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="ga-pos-ADV.html">ADV</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="ga-pos-AUX.html">AUX</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="ga-pos-X.html">X</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ga-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="ga-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ga-pos-VERB.html">VERB</a></tt>-<tt><a href="ga-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj:cleft	color:blue
1	Seandúshlán	dúshlán	NOUN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	0	root	_	_
2	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	3	det	_	_
3	mhí-áidh	mí-ádh	NOUN	Noun	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	compound	_	_
4	a	a	PART	Vb	PartType=Vb|PronType=Rel	5	mark:prt	_	_
5	bhí	bí	VERB	PastInd	Form=Len|Mood=Ind|Tense=Past	1	csubj:cleft	_	_
6	ann	i	ADP	Prep	Gender=Masc|Number=Sing|Person=3	5	xcomp:pred	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 csubj:cleft	color:blue
1	I	I	ADP	Simp	_	0	root	_	_
2	nDáil	dáil	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Fem|Number=Sing	1	nmod	_	_
3	na	na	DET	Art	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	bhFlaitheas	flaitheas	NOUN	Noun	Case=Gen|Form=Ecl|Gender=Masc|NounType=Weak|Number=Plur	2	compound	_	_
5	go	go	PART	Vb	Mood=Sub|PartType=Vb	6	mark:prt	_	_
6	raibh	bí	VERB	VI	Form=Ecl|Mood=Sub|Tense=Pres	1	csubj:cleft	_	_
7	sé	sé	PRON	Pers	Gender=Masc|Number=Sing|Person=3	6	nsubj	_	SpaceAfter=No
8	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:cleft	color:blue
1	'	'	PUNCT	Punct	_	2	punct	_	SpaceAfter=No
2	Cén	cé	PRON	Q	Number=Sing|PronType=Int	0	root	_	_
3	diabhal	diabhal	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	xcomp:pred	_	_
4	útamála	útamáil	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	3	compound	_	_
5	atá	bí	VERB	PresInd	Mood=Ind|PronType=Rel|Tense=Pres	2	csubj:cleft	_	_
6	ar	ar	ADP	Simp	_	7	case	_	_
7	siúl	siúl	NOUN	Noun	VerbForm=Inf	5	xcomp	_	_
8	ansin	ansin	ADV	Loc	_	5	advmod	_	_
9	thíos	thíos	ADV	Dir	_	5	advmod	_	SpaceAfter=No
10	?	?	PUNCT	?	_	2	punct	_	_

~~~


