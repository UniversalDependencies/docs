---
layout: base
title:  'Statistics of det:poss in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-det.html">det</a></tt>.
There are also 1 other language-specific subtypes of `det`: <tt><a href="it_kiparlaforest-dep-det-predet.html">det:predet</a></tt>.

64 nodes (0%) are attached to their parents as `det:poss`.

64 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.046875.

The following 3 pairs of parts of speech are connected with `det:poss`: <tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (62; 97% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="it_kiparlaforest-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_kiparlaforest-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	mi	mi	PRON	_	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	Begin=299.343|KID=123-0|OverlappingGroup=63
2	ripete	ripetere	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=123-1|OverlappingGroup=63
3	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	KID=123-2|OverlappingGroup=63
4	suo	suo	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	5	det:poss	_	KID=123-3|OverlappingGroup=63
5	nome	nome	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	End=300.365|Intonation=Rising|KID=123-4|OverlappingGroup=63

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det:poss	color:blue
1	mi	mi	PRON	_	Clitic=Yes|Number=Sing|Person=1|PronType=Prs	2	iobj	_	KID=931-6
2	guardo	guardare	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	KID=931-7|Prolonged=Yes
3	ormai	ormai	ADV	_	_	5	advmod	_	KID=931-8|PaceFast=Yes
4	c'	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	5	expl	_	KID=931-9|PaceFast=Yes|SpaceAfter=No
5	ho	avere	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	2	parataxis:parenth	_	KID=931-10|PaceFast=Yes
6	i	il	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	KID=931-11|PaceFast=Yes
7	miei	mio	DET	_	Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	8	det:poss	_	KID=931-12|PaceFast=Yes
8	fissi	fisso	ADJ	_	Gender=Masc|Number=Plur	5	obj	_	End=1779.744|KID=931-13|PaceFast=Yes
9	carta	carta	NOUN	_	_	2	obj	_	Begin=1780.186|KID=932-0
10	bianca	bianco	ADJ	_	Gender=Fem|Number=Sing	9	flat:name	_	End=1781.388|Intonation=WeaklyRising|KID=932-1
11	con	con	ADP	_	_	13	case	_	Begin=1782.132|KID=933-0
12	la	il	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	KID=933-1
13	berlinguer	Berlinguer	PROPN	_	_	9	nmod	_	End=1783.217|Intonation=WeaklyRising|KID=933-2|OverlappingGroup=177

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:poss	color:blue
1	oh	oh	INTJ	_	_	3	discourse	_	KID=200-6
2	mio	mio	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	det:poss	_	KID=200-7
3	dio	Dio	PROPN	_	_	8	discourse	_	KID=200-8
4	quanti	quanto	DET	_	Gender=Masc|Number=Plur|PronType=Int	5	det	_	KID=200-9
5	dialetti	dialetto	NOUN	_	Gender=Masc|Number=Plur	8	nsubj	_	KID=200-10
6	diversi	diverso	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	KID=200-11
7	ci	ci	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	8	expl	_	KID=200-12
8	sono	essere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=200-13|Reported=Yes

~~~


