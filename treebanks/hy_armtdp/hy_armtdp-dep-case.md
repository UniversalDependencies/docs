---
layout: base
title:  'Statistics of case in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="hy_armtdp-dep-case-loc.html">case:loc</a></tt>.

337 nodes (3%) are attached to their parents as `case`.

272 instances of `case` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5786350148368.

The following 9 pairs of parts of speech are connected with `case`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (239; 71% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (38; 11% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (28; 8% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (22; 7% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-SCONJ.html">SCONJ</a></tt> (6; 2% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_armtdp-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 case	color:blue
1	Եվ	և	CCONJ	_	_	4	cc	_	_
2	զամբյուղները	զամբյուղ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	_
3	ցած	ցած	ADV	_	_	4	compound:lvc	_	_
4	իջան	իջնել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
5	արդեն	արդեն	ADV	_	_	6	advmod	_	_
6	կատարյալ	կատարյալ	ADJ	_	Degree=Pos	7	amod	_	_
7	լռության	լռություն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Coll	4	obl	_	_
8	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	7	case	_	SpaceAfter=No
9	։	։	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 case	color:blue
1	Զգաց	զգալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	որ	որ	SCONJ	_	_	4	mark	_	_
4	ուզում	ուզել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	1	ccomp	_	_
5	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
6	չլինել	լինել	VERB	_	Polarity=Neg|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	xcomp	_	_
7	այս	այս	DET	_	Distance=Prox|PronType=Dem	8	det	_	_
8	բոլորի	բոլորը	PRON	_	Case=Gen|Definite=Ind|PronType=Tot	6	obl	_	_
9	մեջ	մեջ	ADP	_	AdpType=Post|Case=Nom	8	case	_	SpaceAfter=No
10	։	։	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Պարելուց	պարել	VERB	_	Case=Abl|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	3	obl	_	_
2	հետո	հետո	ADP	_	AdpType=Post	1	case	_	_
3	գնացել	գնալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	ջրաղաց	ջրաղաց	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	3	obl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	7	punct	_	_
7	քնել	քնել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	3	conj	_	_
8	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	_
9	ու	ու	CCONJ	_	_	12	cc	_	_
10	էլ	էլ	PART	_	_	12	advmod	_	_
11	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	արթնացել	արթնանալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	3	conj	_	SpaceAfter=No
13	։	։	PUNCT	_	_	3	punct	_	_

~~~


