---
layout: base
title:  'Statistics of case:loc in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `case:loc`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-case.html">case</a></tt>.

20 nodes (0%) are attached to their parents as `case:loc`.

20 instances of `case:loc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25.

The following 2 pairs of parts of speech are connected with `case:loc`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (16; 80% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-ADP.html">ADP</a></tt> (4; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case:loc	color:blue
1	Նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	հայացքը	հայացք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	3	nsubj	_	_
3	սահում	սահել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
4	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	aux	_	_
5	թաց	թաց	ADJ	_	Degree=Pos	6	amod	_	_
6	զինվորների	զինվոր	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Plur	3	obl	_	_
7	վրայով	վրա	ADP	_	AdpType=Post|Case=Ins	6	case:loc	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	կորչում	կորչել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	3	conj	_	_
10	Հռոմեական	հռոմեական	ADJ	_	_	11	amod	_	_
11	կայսրության	կայսրություն	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	_
12	անծայրածիր	անծայրածիր	ADJ	_	_	13	amod	_	_
13	տիրույթներում	տիրույթ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Plur	9	obl	_	SpaceAfter=No
14	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 case:loc	color:blue
1	Շտաբն	շտաբ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	4	nsubj	_	_
2	ու	ու	CCONJ	_	_	3	cc	_	_
3	գեներալներն	գեներալ	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Plur	1	conj	_	_
4	արգելեցին	արգելել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	ժուռնալիստներին	ժուռնալիստ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Def|Number=Plur	4	iobj	_	_
6	մեր	մենք	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	8	obl	_	_
7	ետևից	ետև	ADP	_	AdpType=Post|Case=Abl	6	case:loc	_	_
8	խորանալ	խորանալ	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	xcomp	_	SpaceAfter=No
9	:	:	PUNCT	_	_	4	punct	_	_

~~~


