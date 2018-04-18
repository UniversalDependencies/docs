---
layout: base
title:  'Statistics of nmod:poss in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="hy_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>.

746 nodes (6%) are attached to their parents as `nmod:poss`.

740 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6514745308311.

The following 7 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (632; 85% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (103; 14% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Որն	որ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Int	0	root	_	_
2	՞	՞	PUNCT	_	_	1	punct	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	_
4	այդ	այդ	DET	_	Distance=Med|PronType=Dem	5	det	_	_
5	փոփոխության	փոփոխություն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	_
6	պատճառը	պատճառ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	1	nsubj	_	SpaceAfter=No
7	։	։	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	Փարիզում	Փարիզ	PROPN	_	Animacy=Inan|Case=Loc|Definite=Ind|NameType=Geo|Number=Sing	2	obl	_	_
2	բացվել	բացել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	aux	_	_
4	Զաբել	Զաբել	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	6	nmod:poss	_	_
5	Եսայանի	Եսայան	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	4	flat	_	_
6	անվան	անուն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	_
7	ճեմուղին	ճեմուղի	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	2	nsubj:pass	_	SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Որքան	որքան	PRON	_	Case=Nom|PronType=Int	5	cc	_	_
2	որ	որ	PART	_	_	1	advmod:emph	_	_
3	Շուշան	Շուշան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	4	nmod	_	_
4	նախատատի	նախատատ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	5	nmod:poss	_	_
5	հայտնվելն	հայտնվել	VERB	_	Case=Nom|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	8	nsubj	_	_
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	_
7	եղել	լինել	AUX	_	Aspect=Perf|VerbForm=Part	8	aux	_	_
8	խորհրդավոր	խորհրդավոր	ADJ	_	Degree=Pos	0	root	_	SpaceAfter=No
9	,	,	PUNCT	_	_	13	punct	_	_
10	այնքան	այնքան	ADV	_	Distance=Dist|PronType=Dem	13	cc	_	_
11	էլ	էլ	PART	_	_	10	advmod	_	SpaceAfter=No
12	՝	՝	PUNCT	_	_	13	punct	_	_
13	հեռանալը	հեռանալ	VERB	_	Case=Nom|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	8	conj	_	SpaceAfter=No
14	։	։	PUNCT	_	_	8	punct	_	_

~~~


