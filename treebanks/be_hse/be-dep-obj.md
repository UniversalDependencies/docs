---
layout: base
title:  'Statistics of obj in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `obj`

This relation is universal.

352 nodes (4%) are attached to their parents as `obj`.

295 instances of `obj` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.07102272727273.

The following 11 pairs of parts of speech are connected with `obj`: <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (273; 78% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-PRON.html">PRON</a></tt> (43; 12% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-ADJ.html">ADJ</a></tt> (13; 4% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-PROPN.html">PROPN</a></tt> (12; 3% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="be-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Эштан	эштан	PROPN	NNP	Animacy=Anim|Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	PUNCT	_	4	punct	_	_
3	ЕС	ес	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
4	пасылае	пасылаць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	_
5	ясны	ясны	ADJ	JJL	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	_
6	сігнал	сігнал	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	_
7	Беларусі	беларусь	PROPN	NNP	Animacy=Inan|Case=Dat|Gender=Fem|Number=Sing	4	iobj	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	Вярхоўны	вярхоўны	ADJ	JJL	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	суд	суд	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	Беларусі	беларусь	PROPN	NNP	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	прысудзіў	прысудзіць	VERB	VBC	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	іх	яны	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	obj	_	_
6	да	да	ADP	IN	_	8	case	_	_
7	вышэйшай	вышэйшы	ADJ	JJS	Case=Gen|Degree=Sup|Gender=Fem|Number=Sing	8	amod	_	_
8	меры	мера	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Fem|Number=Sing	4	obl	_	_
9	пакарання	пакаранне	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 obj	color:blue
1	Я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	прыехала	прыехаць	VERB	VBC	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ўпершыню	ўпершыню	ADV	RB	Degree=Pos	2	advmod	_	_
4	ў	ў	ADP	IN	_	5	case	_	_
5	Беларусь	беларусь	PROPN	NNP	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	2	obl	_	_
6	і	і	CCONJ	CC	_	8	cc	_	_
7	паўсюль	паўсюль	ADV	RB	Degree=Pos	8	advmod	_	_
8	чула	чуць	VERB	VBC	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
9	толькі	толькі	PART	UH	_	10	advmod:discourse	_	_
10	расейскую	расейскi	ADJ	JJL	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


