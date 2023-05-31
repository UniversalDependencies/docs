---
layout: base
title:  'Statistics of xcomp in UD_Belarusian'
udver: '2'
---

## Treebank Statistics: UD_Belarusian: Relations: `xcomp`

This relation is universal.

109 nodes (1%) are attached to their parents as `xcomp`.

106 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77064220183486.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="be-pos-VERB.html">VERB</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (77; 71% instances), <tt><a href="be-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (16; 15% instances), <tt><a href="be-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (15; 14% instances), <tt><a href="be-pos-ADV.html">ADV</a></tt>-<tt><a href="be-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Сірыя	сірыя	PROPN	NNP	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	хоча	хацець	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	выпускаць	выпускаць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	_	_
4	лекі	лекі	NOUN	NN	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
5	разам	разам	ADV	RB	Degree=Pos	3	advmod	_	_
6	з	з	ADP	IN	_	7	case	_	_
7	Беларуссю	беларусь	PROPN	NNP	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	5	obl	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Да	да	ADP	IN	_	3	case	_	_
2	сваіх	свой	DET	PRP$	Case=Gen|Number=Plur|Poss=Yes|PronType=Prs	3	det	_	_
3	сяброў	сябар	NOUN	NN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	5	obl	_	_
4	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	гавару	гаварыць	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	8	punct	_	_
7	зараз	зараз	ADV	RB	Degree=Pos	8	advmod	_	_
8	час	час	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	5	ccomp	_	_
9	падрыхтавацца	падрыхтавацца	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Mid	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Беларускія	беларускі	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	2	amod	_	_
2	банкі	банк	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	гатовыя	гатовы	ADJ	JJL	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
4	працаваць	працаваць	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	3	xcomp	_	_
5	з	з	ADP	IN	_	7	case	_	_
6	200-тысячнай	200-тысячны	ADJ	JJL	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
7	купюрай	купюра	NOUN	NN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


