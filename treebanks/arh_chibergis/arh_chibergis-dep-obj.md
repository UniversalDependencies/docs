---
layout: base
title:  'Statistics of obj in UD_Ika-ChibErgIS'
udver: '2'
---

## Treebank Statistics: UD_Ika-ChibErgIS: Relations: `obj`

This relation is universal.

208 nodes (6%) are attached to their parents as `obj`.

204 instances of `obj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.13461538461538.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (143; 69% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt> (44; 21% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-PROPN.html">PROPN</a></tt> (10; 5% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-NUM.html">NUM</a></tt> (4; 2% instances), <tt><a href="arh_chibergis-pos-AUX.html">AUX</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="arh_chibergis-pos-AUX.html">AUX</a></tt>-<tt><a href="arh_chibergis-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obj	color:blue
1	niwi	niwi	PRON	_	Case=Nom	5	nsubj	_	AlignBegin=1670|AlignEnd=2470|GE=[1PL].[EXCL]|Gloss=1PL.EXCL|nWord=1|RX=[PRO]|TokenType=Root
2	ma'keywa	ma'keywa	NUM	_	_	3	nummod	_	AlignBegin=2470|AlignEnd=3270|GE=four|Gloss=four|nWord=2|RX=[NUM]|TokenType=Root
3	yuga	yuga	NOUN	_	_	5	obj	_	AlignBegin=3270|AlignEnd=4070|GE=little.brother|Gloss=little.brother|nWord=3|RX=[N]|TokenType=Root
4	zʉn	zan	PART	_	_	3	advmod:emph	_	AlignBegin=4070|AlignEnd=4870|GE=[COP]|Gloss=COP|nWord=4|RX=[COP]|TokenType=Root
5	agwaku'	gwak	VERB	_	_	0	root	_	AlignBegin=4870|AlignEnd=5670|GE=[NEG]|Gloss=1PL.SinformNEG|nWord=5|RX=[VERB]|TokenType=InflAff
6	no	nan	AUX	_	_	5	aux	_	AlignBegin=5670|AlignEnd=6467|GE=[Q]|Gloss=auxQ|nWord=6|RX=[VERB]|TokenType=InflAff

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 obj	color:blue
1	pinna	pinna	PRON	_	_	2	obj	_	AlignBegin=9310|AlignEnd=10035|GE=all|Gloss=all|nWord=1|RX=[QUANT]|TokenType=Root
2	chwi	chwi	VERB	_	_	0	root	_	AlignBegin=10035|AlignEnd=10760|GE=see|Gloss=see|nWord=2|RX=[VT]|TokenType=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 obj	color:blue
1	ewey	aw	PART	_	_	9	discourse	_	AlignBegin=71560|AlignEnd=71878|GE=then|Gloss=auxthen|nWord=1|RX=[VERB]|TokenType=InflAff
2	=ki	_	PART	_	_	1	advmod	_	AlignBegin=71878|AlignEnd=72037|GE=[CNTR]|Gloss==CNTR|nWord=1|RX=[PRT]|TokenType=Clit
3	Paw	Paw	PROPN	_	Animacy=Anim|Case=Abs|Definite=Def	9	obj	_	AlignBegin=72037|AlignEnd=72275|GE=[Paula]|Gloss=Paula|nWord=2|RX=[NPROP]|TokenType=Root|Topic=no
4	Señora	Señora	NOUN	_	_	3	flat	_	AlignBegin=72275|AlignEnd=72514|GE=[SPA_lady]|Gloss=SPA_lady|nWord=2|RX=[N]|TokenType=Root
5	zʉn	zan	PART	_	_	4	advmod:emph	_	AlignBegin=72514|AlignEnd=72991|GE=[COP]|Gloss=COP|nWord=3|RX=[COP]|TokenType=Root
6	ikʉ	ikʉ	PROPN	_	_	9	nsubj	_	AlignBegin=72991|AlignEnd=73150|GE=[Ika]|Gloss=Ika|nWord=4|RX=[NPROP]|TokenType=Root
7	=se'	=se'	ADP	_	Animacy=Anim|Case=Erg|Definite=Def	6	case	_	AgentShift=yes|AlignBegin=73150|AlignEnd=73309|GE=[ERG]|Gloss==ERG|nWord=4|RX=[POST]|ShiftType=partial|TokenType=Clit|Topic=yes
8	=ri	_	PART	_	_	6	advmod	_	AlignBegin=73309|AlignEnd=73468|GE=[TOP]|Gloss==TOP|nWord=4|RX=[PRT]|TokenType=Clit
9	ʉngʉga	gʉga	VERB	_	_	0	root	_	AlignBegin=73468|AlignEnd=73945|ArgumentOrder=OSV|GE=say|Gloss=MIDsay|nWord=5|RX=[V]|TokenType=Root|Transitivity=transitive
10	nʉn	nan	AUX	_	_	9	aux	_	AlignBegin=73945|AlignEnd=74183|GE=cop|Gloss=cop|nWord=6|RX=[COP]|TokenType=Root
11	=di	_	PART	_	_	9	advmod	_	AlignBegin=74183|AlignEnd=74420|GE=[TOP]|Gloss==TOP|nWord=6|RX=[PRT]|TokenType=Clit

~~~


