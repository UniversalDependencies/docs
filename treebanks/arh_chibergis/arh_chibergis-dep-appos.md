---
layout: base
title:  'Statistics of appos in UD_Ika-ChibErgIS'
udver: '2'
---

## Treebank Statistics: UD_Ika-ChibErgIS: Relations: `appos`

This relation is universal.

11 nodes (0%) are attached to their parents as `appos`.

11 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.09090909090909.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="arh_chibergis-pos-ADJ.html">ADJ</a></tt>-<tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="arh_chibergis-pos-AUX.html">AUX</a></tt>-<tt><a href="arh_chibergis-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="arh_chibergis-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 appos	color:blue
1	yow	yow	PRON	_	_	0	root	_	AlignBegin=386059|AlignEnd=386644|GE=all|Gloss=all|nWord=1|RX=[QUANT]|TokenType=Root
2	keywʉ	keywʉ	PART	_	_	1	discourse	_	AlignBegin=386644|AlignEnd=387229|GE=soon|Gloss=soon|nWord=2|RX=[PRT]|TokenType=Root
3	na'	nan	AUX	_	_	1	cop	_	AlignBegin=387229|AlignEnd=387814|GE=[NEG]|Gloss=copNEG|nWord=3|RX=[VERB]|TokenType=InflAff
4	neki	neki	PART	_	_	1	advmod:emph	_	AlignBegin=387814|AlignEnd=388399|GE=[CNTR]|Gloss=CNTR|nWord=4|RX=[PRT]|TokenType=Root
5	,	_	PUNCT	_	_	4	punct	_	AlignBegin=388399|AlignEnd=388984|nWord=5
6	iɉuna	iɉuna	NOUN	_	_	1	appos	_	AlignBegin=388984|AlignEnd=389570|GE=type|Gloss=type|nWord=6|RX=[N]|TokenType=Root

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	iwa	iwa	CCONJ	_	_	10	cc	_	AlignBegin=38869|AlignEnd=39492|GE=and|Gloss=and|nWord=1|RX=[COORDCONN]|TokenType=Root
2	ikʉ	ikʉ	PROPN	_	Animacy=Anim|Case=Erg|Definite=Def	10	nsubj	_	AgentShift=yes|AlignBegin=39492|AlignEnd=39804|GE=[Ika]|Gloss=Ika|nWord=2|RX=[NPROP]|ShiftType=partial|TokenType=Root|Topic=yes
3	=ri	_	PART	_	_	2	advmod	_	AlignBegin=39804|AlignEnd=40115|GE=[TOP]|Gloss==TOP|nWord=2|RX=[PRT]|TokenType=Clit
4	(	_	PUNCT	_	_	5	punct	_	AlignBegin=40115|AlignEnd=40738|nWord=3
5	mhm	mhm	INTJ	_	_	7	discourse	_	AlignBegin=40738|AlignEnd=41361|GE=[HES]|Gloss=HES|nWord=4|RX=[INTERJ]|TokenType=Root
6	)	_	PUNCT	_	_	5	punct	_	AlignBegin=41361|AlignEnd=41984|nWord=5
7	mʉkʉ	mʉkʉ	NOUN	_	_	9	nmod	_	AlignBegin=41984|AlignEnd=42296|GE=cloth|Gloss=cloth|nWord=6|RX=[N]|TokenType=Root
8	=ri	_	PART	_	_	7	advmod	_	AlignBegin=42296|AlignEnd=42607|GE=[TOP]|Gloss==TOP|nWord=6|RX=[PRT]|TokenType=Clit
9	mowga	mowga	NUM	_	Animacy=Inan|Case=Abs|Definite=Ind	10	obj	_	AlignBegin=42607|AlignEnd=43230|GE=two|Gloss=two|nWord=7|RX=[NUM]|TokenType=Root|Topic=no
10	mikʉnʉsi	nʉsi	VERB	_	_	0	root	_	AlignBegin=43230|AlignEnd=43853|ArgumentOrder=SOV|GE=stand|Gloss=2SG.OAPPL1stand|nWord=8|RX=[V]|TokenType=Root|Transitivity=transitive
11	,	_	PUNCT	_	_	10	punct	_	AlignBegin=43853|AlignEnd=44476|nWord=9
12	a'mia	a'mia	NOUN	_	_	10	appos	_	AlignBegin=44476|AlignEnd=44788|GE=woman|Gloss=woman|nWord=10|RX=[N]|TokenType=Root
13	=ri	_	PART	_	_	12	advmod	_	AlignBegin=44788|AlignEnd=45100|GE=[TOP]|Gloss==TOP|nWord=10|RX=[PRT]|TokenType=Clit

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 appos	color:blue
1	inʉ	inʉ	PRON	_	_	4	nsubj	_	AlignBegin=205441|AlignEnd=205673|GE=what|Gloss=what|nWord=1|RX=[INTERROG]|TokenType=Root
2	=ki	_	PART	_	_	1	advmod	_	AlignBegin=205673|AlignEnd=205904|GE=[CNTR]|Gloss==CNTR|nWord=1|RX=[PRT]|TokenType=Clit
3	neki	neki	PART	_	_	2	advmod:emph	_	AlignBegin=205904|AlignEnd=206367|GE=[CNTR]|Gloss=CNTR|nWord=2|RX=[PRT]|TokenType=Root
4	a'zʉna	a'zʉna	ADJ	_	_	0	root	_	AlignBegin=206367|AlignEnd=206830|GE=holy|Gloss=holy|nWord=3|RX=[ADJ]|TokenType=Root
5	na'	nan	AUX	_	_	4	cop	_	AlignBegin=206830|AlignEnd=207293|GE=[NEG]|Gloss=copNEG|nWord=4|RX=[VERB]|TokenType=InflAff
6	no	nan	AUX	_	_	4	aux	_	AlignBegin=207293|AlignEnd=207756|GE=[Q]|Gloss=auxQ|nWord=5|RX=[VERB]|TokenType=InflAff
7	,	_	PUNCT	_	_	4	punct	_	AlignBegin=207756|AlignEnd=208219|nWord=6
8	inʉ	inʉ	PRON	_	_	4	appos	_	AlignBegin=208219|AlignEnd=208451|GE=what|Gloss=what|nWord=7|RX=[INTERROG]|TokenType=Root
9	=ki	_	PART	_	_	8	advmod	_	AlignBegin=208451|AlignEnd=208682|GE=[CNTR]|Gloss==CNTR|nWord=7|RX=[PRT]|TokenType=Clit
10	neki	neki	PART	_	_	9	advmod:emph	_	AlignBegin=208682|AlignEnd=209142|GE=[CNTR]|Gloss=CNTR|nWord=8|RX=[PRT]|TokenType=Root

~~~


