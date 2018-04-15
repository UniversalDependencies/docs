---
layout: base
title:  'Statistics of aux in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `aux`

This relation is universal.

608 nodes (5%) are attached to their parents as `aux`.

375 instances of `aux` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.11184210526316.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (571; 94% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (15; 2% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (14; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt>-<tt><a href="hy_armtdp-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Նախագծողի	նախագծող	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	6	iobj	_	_
2	խելքին	խելք	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	6	compound:lvc	_	_
3	ինչ	ինչ	PRON	_	Case=Nom|Number=Sing|PronType=Int	6	obj	_	_
4	՞	՞	PUNCT	_	_	3	punct	_	_
5	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin	6	aux	_	_
6	փչել	փչել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
7	այստեղ	այստեղ	ADV	_	PronType=Dem	9	advmod	_	_
8	վանդակապատ	վանդակապատ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	9	obj	_	_
9	դնել	դնել	VERB	_	Polarity=Pos|Subcat=Tran|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
10	...	...	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Բայց	բայց	CCONJ	_	_	6	cc	_	_
2	երևի	երևի	PART	_	_	6	discourse	_	_
3	դույլերն	դույլ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	6	nsubj	_	_
4	էնքան	այնքան	ADV	_	Distance=Dist|PronType=Dem|Style=Coll	6	advmod	_	_
5	էլ	էլ	PART	_	_	4	advmod	_	_
6	ծանր	ծանր	ADJ	_	Degree=Pos	0	root	_	_
7	չէին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	։	։	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Նա	նա	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	մազերը	մազ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Plur	3	obj	_	_
3	հարդարած	հարդարել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
4	պիտի	պիտի	PART	_	Mood=Nec|Polarity=Pos	3	aux	_	_
5	լիներ	լինել	AUX	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	aux	_	SpaceAfter=No
6	,	,	PUNCT	_	_	13	punct	_	_
7	բայց	բայց	CCONJ	_	_	13	cc	_	_
8	ինչ	ինչ	DET	_	Case=Nom|PronType=Int	11	det	_	SpaceAfter=No
9	-	-	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	ինչ	ինչ	DET	_	Case=Nom|PronType=Int	8	compound:redup	_	_
11	պատճառներով	պատճառ	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind|Number=Plur	13	obl	_	_
12	չէր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Imp|VerbForm=Fin	13	aux	_	_
13	արել	անել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	3	conj	_	_
14	այդ	այդ	DET	_	Distance=Med|PronType=Dem	15	det	_	_
15	օրը	օր	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	13	obl	_	SpaceAfter=No
16	:	:	PUNCT	_	_	3	punct	_	_

~~~


