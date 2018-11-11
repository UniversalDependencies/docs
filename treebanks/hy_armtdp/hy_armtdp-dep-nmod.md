---
layout: base
title:  'Statistics of nmod in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `nmod`

This relation is universal.
There are 2 language-specific subtypes of `nmod`: <tt><a href="hy_armtdp-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="hy_armtdp-dep-nmod-poss.html">nmod:poss</a></tt>.

266 nodes (1%) are attached to their parents as `nmod`.

261 instances of `nmod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06390977443609.

The following 12 pairs of parts of speech are connected with `nmod`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (92; 35% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (84; 32% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (70; 26% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-X.html">X</a></tt> (11; 4% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-X.html">X</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nmod	color:blue
1	Շատ	շատ	ADV	_	Degree=Pos	2	advmod	_	_
2	կարևոր	կարևոր	ADJ	_	Degree=Pos	4	amod	_	_
3	մի	մի	DET	_	PronType=Art	4	det	_	_
4	գործ	գործ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	0	root	_	SpaceAfter=No
5	՝	՝	PUNCT	_	_	10	punct	_	_
6	«	«	PUNCT	_	_	8	punct	_	SpaceAfter=No
7	Վարդապետի	վարդապետ	NOUN	_	Animacy=Hum|Case=Dat|Definite=Ind|Number=Sing	8	nmod:poss	_	_
8	լռությունը	լռություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Sing	10	nmod	_	SpaceAfter=No
9	»	»	PUNCT	_	_	8	punct	_	_
10	ֆիլմից	ֆիլմ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	4	obl	_	_
11	հետո	հետո	ADP	_	AdpType=Post	10	case	_	SpaceAfter=No
12	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	Մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	զրուցակիցն	զրուցակից	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	0	root	_	_
3	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	քաղաքական	քաղաքական	ADJ	_	Degree=Pos	5	amod	_	_
5	մեկնաբան	մեկնաբան	NOUN	_	Animacy=Hum|Case=Nom|Definite=Ind|Number=Sing	6	nmod	_	_
6	Լևոն	Լևոն	PROPN	_	Animacy=Hum|Case=Nom|Definite=Ind|NameType=Giv|Number=Sing	2	nsubj	_	_
7	Մարգարյանը	Մարգարյան	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Sur|Number=Sing	6	flat	_	SpaceAfter=No
8	։	։	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod	color:blue
1	Առաջին	առաջին	ADJ	_	Degree=Pos|NumForm=Word|NumType=Ord	2	amod	_	_
2	անգամ	անգամ	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Ind|Number=Sing	4	obl	_	_
3	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
4	նկատել	նկատել	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	0	root	_	_
5	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	4	aux	_	_
6	2010-ին	2010	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing|NumForm=Digit	4	obl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	_
8	Քեթրին	Քեթրին	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Ind|NameType=Geo|Number=Sing	9	nmod	_	_
9	գետում	գետ	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	4	obl	_	SpaceAfter=No
10	։	։	PUNCT	_	_	4	punct	_	_

~~~


