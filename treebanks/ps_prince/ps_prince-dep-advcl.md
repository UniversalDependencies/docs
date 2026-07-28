---
layout: base
title:  'Statistics of advcl in UD_Pashto-Prince'
udver: '2'
---

## Treebank Statistics: UD_Pashto-Prince: Relations: `advcl`

This relation is universal.

16 nodes (1%) are attached to their parents as `advcl`.

8 instances of `advcl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.6875.

The following 6 pairs of parts of speech are connected with `advcl`: <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (11; 69% instances), <tt><a href="ps_prince-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="ps_prince-pos-AUX.html">AUX</a></tt>-<tt><a href="ps_prince-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ps_prince-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-AUX.html">AUX</a></tt> (1; 6% instances), <tt><a href="ps_prince-pos-VERB.html">VERB</a></tt>-<tt><a href="ps_prince-pos-NOUN.html">NOUN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 advcl	color:blue
1	دا	دا	DET	_	PronType=Dem	2	det	_	_
2	تجربه	تجربه	NOUN	_	_	7	obj	_	_
3	مې	زه	PRON	_	Number=Sing|Person=1|PronType=Prs	2	det:poss	_	_
4	د	د	ADP	_	_	6	case	_	_
5	دې	دا	PRON	_	PronType=Dem	6	det:poss	_	_
6	لپاره	لپاره	NOUN	_	_	7	obl	_	_
7	کوله	کول	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
8	چې	چې	SCONJ	_	_	10	mark	_	_
9	پوه	پوه	ADJ	_	_	10	xcomp	_	_
10	شم	کېدل	VERB	_	Mood=Sub|VerbForm=Fin	7	advcl	_	_
11	دا	دا	DET	_	PronType=Dem	14	det	_	_
12	رښتينی	رښتينی	ADJ	_	_	14	amod	_	_
13	پوه	پوه	ADJ	_	_	14	amod	_	_
14	کس	کس	NOUN	_	_	10	ccomp	_	_
15	دی	ول	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	14	cop	_	_
16	که	که	CCONJ	_	_	17	cc	_	_
17	نه	نه	PART	_	Polarity=Neg	14	conj	_	_
18	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 5 advcl	color:blue
1	هسې	هسې	ADV	_	_	17	advmod	_	_
2	که	که	SCONJ	_	_	5	mark	_	_
3	څوک	څوک	PRON	_	PronType=Ind	5	nsubj	_	_
4	ورک	ورک	ADJ	_	_	5	xcomp	_	_
5	شي	کېدل	VERB	_	Mood=Sub|VerbForm=Fin	17	advcl	_	_
6	د	د	ADP	_	_	7	case	_	_
7	شپې	شپه	NOUN	_	_	10	nmod	_	_
8	په	په	ADP	_	_	10	case	_	_
9	تياره	تياره	NOUN	_	_	10	compound	_	_
10	منځ	منځ	NOUN	_	_	5	obl	_	_
11	کښې	کښې	ADP	_	_	10	case	_	_
12	نو	نو	ADV	_	_	17	discourse	_	_
13	د	د	ADP	_	_	14	case	_	_
14	جغرافيې	جغرافیه	NOUN	_	_	15	nmod	_	_
15	پوهه	پوهه	NOUN	_	_	17	nsubj	_	_
16	ورله	ورله	ADV	_	_	17	advmod	_	_
17	مهمه	مهم	ADJ	_	_	0	root	_	_
18	ده	ول	AUX	_	Tense=Pres|VerbForm=Fin	17	cop	_	SpaceAfter=No
19	.	.	PUNCT	_	_	17	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 6 advcl	color:blue
1	خو	خو	CCONJ	_	_	17	discourse	_	_
2	که	که	SCONJ	_	_	6	mark	_	_
3	رښتيا	رښتيا	ADV	_	_	6	advmod	_	_
4	راباندې	زه	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	obl:arg	_	_
5	و	و	PART	_	_	6	compound:prt	_	SpaceAfter=No
6	وايم	ويل	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	17	advcl	_	_
7	نو	نو	PART	_	_	17	discourse	_	_
8	د	د	ADP	_	_	9	case	_	_
9	دوی	هغه	PRON	_	Number=Plur|Person=3|PronType=Prs	11	nmod	_	_
10	په	په	ADP	_	_	11	case	_	_
11	اړه	اړه	NOUN	_	_	13	nmod	_	_
12	زما	زه	PRON	_	Number=Sing|Person=1|Poss=Yes|PronType=Prs	13	det:poss	_	_
13	رايه	رايه	NOUN	_	_	17	nsubj	_	_
14	هم	هم	ADV	_	_	17	advmod	_	_
15	هغه	هغه	DET	_	PronType=Dem	16	det	_	_
16	پخوانۍ	پخوانی	ADJ	_	_	17	xcomp	_	_
17	ده	ول	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
18	.	.	PUNCT	_	_	17	punct	_	_

~~~


