---
layout: base
title:  'Statistics of nmod in UD_Ika-ChibErgIS'
udver: '2'
---

## Treebank Statistics: UD_Ika-ChibErgIS: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="arh_chibergis-dep-nmod-poss.html">nmod:poss</a></tt>.

28 nodes (1%) are attached to their parents as `nmod`.

19 instances of `nmod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.89285714285714.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (15; 54% instances), <tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="arh_chibergis-pos-PROPN.html">PROPN</a></tt> (4; 14% instances), <tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="arh_chibergis-pos-ADV.html">ADV</a></tt>-<tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="arh_chibergis-pos-ADV.html">ADV</a></tt>-<tt><a href="arh_chibergis-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="arh_chibergis-pos-NUM.html">NUM</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="arh_chibergis-pos-NUM.html">NUM</a></tt>-<tt><a href="arh_chibergis-pos-NUM.html">NUM</a></tt> (1; 4% instances), <tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt>-<tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="arh_chibergis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod	color:blue
1	niwi	niwi	PRON	_	Case=Nom	3	nsubj	_	AlignBegin=65630|AlignEnd=65815|GE=[1PL].[EXCL]|Gloss=1PL.EXCL|nWord=1|RX=[PRO]|TokenType=Root
2	=ri	_	PART	_	_	1	advmod	_	AlignBegin=65815|AlignEnd=66000|GE=[TOP]|Gloss==TOP|nWord=1|RX=[PRT]|TokenType=Clit
3	ʉnkikumu'	i	VERB	_	_	0	root	_	AlignBegin=66000|AlignEnd=66370|GE=[NEG]|Gloss=MIDAPPL1knitANTICNEG|nWord=2|RX=[VERB]|TokenType=InflAff
4	no	nan	AUX	_	_	3	aux	_	AlignBegin=66370|AlignEnd=66740|GE=[Q]|Gloss=auxQ|nWord=3|RX=[VERB]|TokenType=InflAff
5	bechʉ	bechʉ	NOUN	_	_	3	obj	_	AlignBegin=66740|AlignEnd=67110|GE=agave|Gloss=agave|nWord=4|RX=[N]|TokenType=Root
6	tutu	tutu	NOUN	_	_	5	nmod	_	AlignBegin=67110|AlignEnd=67480|GE=traditional.bag|Gloss=traditional.bag|nWord=5|RX=[N]|TokenType=Root
7	neki	neki	PART	_	_	6	advmod:emph	_	AlignBegin=67480|AlignEnd=67850|GE=[CNTR]|Gloss=CNTR|nWord=6|RX=[PRT]|TokenType=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod	color:blue
1	neki	neki	PART	_	_	2	advmod:emph	_	AlignBegin=52683|AlignEnd=53134|GE=[CNTR]|Gloss=CNTR|nWord=1|RX=[PRT]|TokenType=Root
2	ikumʉya	i	VERB	_	_	0	root	_	AlignBegin=53134|AlignEnd=53585|GE=[NONEGO]|Gloss=knitANTICNONEGO|nWord=2|RX=[V:ANY]|TokenType=InflAff
3	nanʉn	nan	AUX	_	_	2	aux	_	AlignBegin=53585|AlignEnd=53811|GE=IPFV|Gloss=copIPFV|nWord=3|RX=[COP]|TokenType=InflAff
4	=di	_	PART	_	_	2	advmod	_	AlignBegin=53811|AlignEnd=54036|GE=[TOP]|Gloss==TOP|nWord=3|RX=[PRT]|TokenType=Clit
5	,	_	PUNCT	_	_	4	punct	_	AlignBegin=54036|AlignEnd=54487|nWord=4
6	a'mia	a'mia	NOUN	_	_	2	nsubj	_	AlignBegin=54487|AlignEnd=54637|GE=woman|Gloss=woman|nWord=5|RX=[N]|TokenType=Root
7	=ɉina	_	PART	_	_	6	advmod	_	AlignBegin=54637|AlignEnd=54787|GE=many[animated]|Gloss==many[animated]|nWord=5|RX=[DET]|TokenType=Clit
8	=se'	=se'	ADP	_	Animacy=Anim|Case=Erg|Definite=Def	6	case	_	AgentShift=no|AlignBegin=54787|AlignEnd=54938|GE=[ERG]|Gloss==ERG|nWord=5|RX=[POST]|TokenType=Clit|Topic=yes
9	ikʉ	ikʉ	PROPN	_	_	6	nmod	_	AlignBegin=54938|AlignEnd=55088|GE=[Ika]|Gloss=Ika|nWord=6|RX=[NPROP]|TokenType=Root
10	=se'	_	ADP	_	_	9	case	_	AlignBegin=55088|AlignEnd=55238|GE=[ERG]|Gloss==ERG|nWord=6|RX=[POST]|TokenType=Clit
11	=ri	_	PART	_	_	9	advmod	_	AlignBegin=55238|AlignEnd=55389|GE=[TOP]|Gloss==TOP|nWord=6|RX=[PRT]|TokenType=Clit
12	.	_	PUNCT	_	_	11	punct	_	AlignBegin=55389|AlignEnd=55842|Gloss=.|nWord=7

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nmod	color:blue
1	inʉ	inʉ	PRON	_	_	3	iobj	_	AlignBegin=185464|AlignEnd=185736|GE=what|Gloss=what|nWord=1|RX=[INTERROG]|TokenType=Root
2	=ki	_	PART	_	_	1	advmod	_	AlignBegin=185736|AlignEnd=186007|GE=[CNTR]|Gloss==CNTR|nWord=1|RX=[PRT]|TokenType=Clit
3	winʉa'zʉna	a'zʉna	VERB	_	_	12	parataxis	_	AlignBegin=186007|AlignEnd=186550|GE=feel|Gloss=3PL.Sfeel|nWord=2|RX=[V]|TokenType=Root
4	,	_	PUNCT	_	_	3	punct	_	AlignBegin=186550|AlignEnd=187093|nWord=3
5	inʉ	inʉ	PRON	_	_	7	nmod:poss	_	AlignBegin=187093|AlignEnd=187365|GE=what|Gloss=what|nWord=4|RX=[INTERROG]|TokenType=Root
6	=ki	_	PART	_	_	5	advmod	_	AlignBegin=187365|AlignEnd=187636|GE=[CNTR]|Gloss==CNTR|nWord=4|RX=[PRT]|TokenType=Clit
7	zʉpaw	paw	NOUN	_	_	9	nmod	_	AlignBegin=187636|AlignEnd=188179|GE=[POSS]|Gloss=POSSowner|nWord=5|RX=[N:ANY]|TokenType=InflAff
8	,	_	PUNCT	_	_	7	punct	_	AlignBegin=188179|AlignEnd=188722|nWord=6
9	a	a	PRON	_	_	12	nsubj	_	AlignBegin=188722|AlignEnd=188994|GE=[3SG]|Gloss=3SG|nWord=7|RX=[PRO]|TokenType=Root
10	=se'	=se'	ADP	_	Animacy=Anim|Case=Erg|Definite=Def	9	case	_	AgentShift=yes|AlignBegin=188994|AlignEnd=189265|GE=[ERG]|Gloss==ERG|nWord=7|RX=[POST]|ShiftType=partial|TokenType=Clit|Topic=no
11	inʉ	inʉ	PRON	_	Animacy=Inan|Case=Abs|Definite=Spec	12	obj	_	AlignBegin=189265|AlignEnd=189808|GE=what|Gloss=what|nWord=8|RX=[INTERROG]|TokenType=Root|Topic=no
12	gowna	gow	VERB	_	_	0	root	_	AlignBegin=189808|AlignEnd=190351|GE=[RMTPST]|Gloss=buildRMTPST|nWord=9|RX=[VERB]|TokenType=InflAff
13	.	_	PUNCT	_	_	12	punct	_	AlignBegin=190351|AlignEnd=190896|Gloss=.|nWord=10

~~~


