---
layout: base
title:  'Statistics of parataxis in UD_Ika-ChibErgIS'
udver: '2'
---

## Treebank Statistics: UD_Ika-ChibErgIS: Relations: `parataxis`

This relation is universal.

12 nodes (0%) are attached to their parents as `parataxis`.

9 instances of `parataxis` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.5.

The following 5 pairs of parts of speech are connected with `parataxis`: <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt> (8; 67% instances), <tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="arh_chibergis-pos-PART.html">PART</a></tt> (1; 8% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="arh_chibergis-pos-VERB.html">VERB</a></tt>-<tt><a href="arh_chibergis-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 parataxis	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 parataxis	color:blue
1	be	be	PRON	_	_	3	discourse	_	AlignBegin=30139|AlignEnd=30406|GE=where|Gloss=where|nWord=1|RX=[INTERROG]|TokenType=Root
2	=ki	_	PART	_	_	1	advmod	_	AlignBegin=30406|AlignEnd=30673|GE=[CNTR]|Gloss==CNTR|nWord=1|RX=[PRT]|TokenType=Clit
3	kʉn	kʉn	NOUN	_	_	8	parataxis	_	AlignBegin=30673|AlignEnd=31207|GE=tree|Gloss=tree|nWord=2|RX=[N]|TokenType=Root
4	nanʉn	nan	AUX	_	_	3	cop	_	Gloss=copIPFV|TokenType=InflAff
5	nuga	nik	AUX	_	_	3	aux	_	AlignBegin=31741|AlignEnd=32275|GE=[NONEGO]|Gloss=auxNONEGO|nWord=4|RX=[V:ANY]|TokenType=InflAff
6	,	_	PUNCT	_	_	3	punct	_	AlignBegin=32275|AlignEnd=32809|nWord=5
7	a'nʉ	a'nʉ	NOUN	_	_	8	nsubj	_	AlignBegin=32809|AlignEnd=33343|GE=stone|Gloss=stone|nWord=6|RX=[N]|TokenType=Root
8	gwirkʉnʉ	gwirkʉnʉ	NOUN	_	_	0	root	_	AlignBegin=33343|AlignEnd=33877|GE=mountain|Gloss=mountain|nWord=7|RX=[N]|TokenType=Root
9	na'	nan	AUX	_	_	8	cop	_	AlignBegin=33877|AlignEnd=34411|GE=[AUX]|Gloss=AUX|nWord=8|RX=[AUX]|TokenType=Root
10	nʉn	nan	AUX	_	_	8	aux	_	AlignBegin=34411|AlignEnd=34945|GE=cop|Gloss=cop|nWord=9|RX=[COP]|TokenType=Root
11	nuga	nik	AUX	_	_	8	aux	_	AlignBegin=34945|AlignEnd=35479|GE=[NONEGO]|Gloss=auxNONEGO|nWord=10|RX=[V:ANY]|TokenType=InflAff
12	,	_	PUNCT	_	_	8	punct	_	AlignBegin=35479|AlignEnd=36010|nWord=11|wordform=,.

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 24 parataxis	color:blue
1	en	en	X	_	_	25	obl:arg	_	AlignBegin=84689|AlignEnd=85092|GE=[SPA_in]|Gloss=SPA_in|nWord=1|RX=[PREP]|TokenType=Root
2	el	el	X	_	_	1	compound	_	AlignBegin=85092|AlignEnd=85495|GE=[SPA_the]|Gloss=SPA_the|nWord=2|RX=[DEF]|TokenType=Root
3	setentaytre	setentaytre	NUM	_	_	2	compound	_	AlignBegin=85495|AlignEnd=85697|GE=[SPA_seventythree]|Gloss=SPA_seventythree|nWord=3|RX=[NUM]|TokenType=Root
4	=se'	_	ADP	_	_	1	case	_	AlignBegin=85697|AlignEnd=85898|GE=[LOC]|Gloss==LOC|nWord=3|RX=[POST]|TokenType=Clit
5	pari	pari	ADP	_	_	1	case	_	AlignBegin=85898|AlignEnd=86301|GE=from|Gloss=from|nWord=4|RX=[POST]|TokenType=Root
6	ingʉ	ingʉ	ADJ	_	_	7	advcl	_	AlignBegin=86301|AlignEnd=86704|GE=few|Gloss=few|nWord=5|RX=[ADJ]|TokenType=Root
7	emay	emay	ADV	_	_	25	advmod	_	AlignBegin=86704|AlignEnd=87107|GE=there|Gloss=there|nWord=6|RX=[ADV]|TokenType=Root
8	,	_	PUNCT	_	_	7	punct	_	AlignBegin=87107|AlignEnd=87510|nWord=7
9	(	_	PUNCT	_	_	10	punct	_	AlignBegin=87510|AlignEnd=87913|nWord=8
10	eh	eh	INTJ	_	_	12	discourse	_	AlignBegin=87913|AlignEnd=88316|GE=[HES]|Gloss=HES|nWord=9|RX=[INTERJ]|TokenType=Root
11	)	_	PUNCT	_	_	10	punct	_	AlignBegin=88316|AlignEnd=88719|nWord=10
12	bunachʉ	bunachʉ	NOUN	_	_	25	nsubj	_	AlignBegin=88719|AlignEnd=89122|GE=non-indigenous person|Gloss=non-indigenous person|nWord=11|RX=[N]|TokenType=Root
13	gobiernu	gobiernu	NOUN	_	_	12	nmod	_	AlignBegin=89122|AlignEnd=89324|GE=government|Gloss=government|nWord=12|RX=[N]|TokenType=Root
14	=se'	=se'	ADP	_	Animacy=Anim|Case=Erg|Definite=Def	12	case	_	AgentShift=yes|AlignBegin=89324|AlignEnd=89525|GE=[ERG]|Gloss==ERG|nWord=12|RX=[POST]|ShiftType=full|TokenType=Clit|Topic=no
15	kʉtʉkʉnʉn	kʉtʉkʉnʉn	ADV	_	_	18	obl:arg	_	AlignBegin=89525|AlignEnd=89928|GE=first|Gloss=first|nWord=13|RX=[ADV]|TokenType=Root
16	pari	pari	ADP	_	_	15	case	_	AlignBegin=89928|AlignEnd=90331|GE=from|Gloss=from|nWord=14|RX=[POST]|TokenType=Root
17	neki	neki	PART	_	_	15	advmod:emph	_	AlignBegin=90331|AlignEnd=90734|GE=[CNTR]|Gloss=CNTR|nWord=15|RX=[PRT]|TokenType=Root
18	ingiti	ingiti	ADV	_	_	24	advcl	_	AlignBegin=90734|AlignEnd=91137|GE=little|Gloss=little|nWord=16|RX=[ADV]|TokenType=Root
19	nʉngwa	nan	AUX	_	_	18	cop	_	AlignBegin=91137|AlignEnd=91540|GE=[FUT]|Gloss=AUXFUT|nWord=17|RX=[VERB]|TokenType=InflAff
20	awya	aw	AUX	_	_	18	aux	_	AlignBegin=91540|AlignEnd=91943|GE=[NONEGO]|Gloss=auxNONEGO|nWord=18|RX=[V:ANY]|TokenType=InflAff
21	(	_	PUNCT	_	_	22	punct	_	AlignBegin=91943|AlignEnd=92346|nWord=19
22	ze	ze	X	_	_	24	discourse	_	AlignBegin=92346|AlignEnd=92749|nWord=20|TokenType=Root
23	)	_	PUNCT	_	_	22	punct	_	AlignBegin=92749|AlignEnd=93152|nWord=21
24	ni	nan	PART	_	_	12	parataxis	_	AlignBegin=93152|AlignEnd=93555|GE=[DECL]|Gloss=DECL|nWord=22|RX=[AUX]|TokenType=Root
25	gwa'na	gwa'	VERB	_	_	0	root	_	AlignBegin=93555|AlignEnd=93958|GE=[RMTPST]|Gloss=sayRMTPST|nWord=23|RX=[VERB]|TokenType=InflAff
26	gunʉn	nan	AUX	_	_	25	aux	_	AlignBegin=93958|AlignEnd=94226|GE=cop|Gloss=GUcop|nWord=24|RX=[COP]|TokenType=Root
27	=di	_	PART	_	_	25	advmod	_	AlignBegin=94226|AlignEnd=94361|GE=[TOP]|Gloss==TOP|nWord=24|RX=[PRT]|TokenType=Clit
28	.	_	PUNCT	_	_	27	punct	_	AlignBegin=94361|AlignEnd=94772|Gloss=.|nWord=25

~~~


