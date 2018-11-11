---
layout: base
title:  'Statistics of nmod:npmod in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="hy_armtdp-dep-nmod-poss.html">nmod:poss</a></tt>.

178 nodes (1%) are attached to their parents as `nmod:npmod`.

140 instances of `nmod:npmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.62359550561798.

The following 7 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (129; 72% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (27; 15% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (9; 5% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (8; 4% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:npmod	color:blue
1	Առավոտից	առավոտ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	3	obl	_	_
2	երեկո	երեկո	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	1	nmod:npmod	_	_
3	ղողանջում	ղողանջել	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
4	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	3	aux	_	_
5	եկեղեցու	եկեղեցի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	6	nmod:poss	_	_
6	զանգերը	զանգ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	SpaceAfter=No
7	:	:	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 nmod:npmod	color:blue
1	–	–	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Ինչով	ինչ	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	4	obl	_	_
3	՞	՞	PUNCT	_	_	2	punct	_	_
4	կարող	կարող	ADJ	_	Degree=Pos	0	root	_	_
5	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	cop	_	_
6	պայմանավորված	պայմանավորվել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Mid	7	xcomp	_	_
7	լինել	լինել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	4	xcomp	_	_
8	Ադրբեջանի	Ադրբեջան	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	11	nmod:npmod	_	_
9	կողմից	կողմից	ADP	_	AdpType=Post	8	case	_	_
10	նման	նման	ADJ	_	Degree=Pos	11	amod	_	_
11	կուտակումները	կուտակում	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	4	nsubj	_	SpaceAfter=No
12	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:npmod	color:blue
1	-	-	PUNCT	_	_	6	punct	_	SpaceAfter=No
2	Մեզ	մենք	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	4	nmod:npmod	_	_
3	հետ	հետ	ADP	_	AdpType=Post	2	case	_	_
4	զրույցներում	զրույց	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Plur	6	obl	_	_
5	բազմիցս	բազմիցս	ADV	_	_	6	advmod	_	_
6	նշել	նշել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
7	եք	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	,	,	PUNCT	_	_	14	punct	_	_
9	որ	որ	SCONJ	_	_	14	mark	_	_
10	նախ	նախ	ADV	_	_	14	advmod	_	_
11	պետք	պետք	PART	_	Mood=Nec|Polarity=Pos	14	aux	_	_
12	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	cop	_	_
13	տեղի	տեղի	ADV	_	Style=Arch	14	compound:lvc	_	_
14	ունենա	ունենալ	VERB	_	Aspect=Prosp|Mood=Sub|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Pres|VerbForm=Fin|Voice=Act	6	ccomp	_	_
15	մտքի	միտք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	16	nmod:poss	_	_
16	հեղափոխություն	հեղափոխություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	14	nsubj	_	SpaceAfter=No
17	։	։	PUNCT	_	_	6	punct	_	_

~~~


