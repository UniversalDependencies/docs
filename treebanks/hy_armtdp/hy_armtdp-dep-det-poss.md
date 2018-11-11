---
layout: base
title:  'Statistics of det:poss in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `det:poss`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-det.html">det</a></tt>.

300 nodes (1%) are attached to their parents as `det:poss`.

300 instances of `det:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46.

The following 5 pairs of parts of speech are connected with `det:poss`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (292; 97% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hy_armtdp-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:poss	color:blue
1	Բարեբախտաբար	բարեբախտաբար	PART	_	_	7	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	7	punct	_	_
3	իմ	ես	DET	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	det:poss	_	_
4	աշխատանքի	աշխատանք	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	7	obl	_	_
5	հանդեպ	հանդեպ	ADP	_	AdpType=Post	4	case	_	_
6	երբեք	երբեք	ADV	_	_	7	advmod	_	_
7	անտարբեր	անտարբեր	ADJ	_	Degree=Pos	0	root	_	_
8	չեն	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	_
9	եղել	լինել	AUX	_	Aspect=Perf|VerbForm=Part	7	aux	_	SpaceAfter=No
10	:	:	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det:poss	color:blue
1	Եվրոպայի	Եվրոպա	PROPN	_	Animacy=Nhum|Case=Dat|Definite=Ind|NameType=Geo|Number=Sing	2	nmod:poss	_	_
2	կտրվածքով	կտրվածք	NOUN	_	Animacy=Nhum|Case=Ins|Definite=Ind|Number=Sing	6	obl	_	_
3	էլ	էլ	PART	_	_	2	advmod:emph	_	_
4	մեր	մենք	DET	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	5	det:poss	_	_
5	Հայաստանը	Հայաստան	PROPN	_	Animacy=Nhum|Case=Nom|Definite=Def|NameType=Geo|Number=Sing	6	nsubj	_	_
6	մոտ	մոտ	ADJ	_	Degree=Pos	0	root	_	_
7	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	6	cop	_	_
8	լավագույն	լավ	ADJ	_	Degree=Sup	10	amod	_	_
9	30	30	NUM	_	NumForm=Digit|NumType=Card	10	nummod	_	_
10	հավաքականների	հավաքական	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Plur	11	nmod:poss	_	_
11	շարքում	շարք	NOUN	_	Animacy=Nhum|Case=Loc|Definite=Ind|Number=Sing	12	obl	_	_
12	ընդգրկվելուն	ընդգրկել	VERB	_	Case=Dat|Definite=Def|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Pass	6	obl	_	SpaceAfter=No
13	:	:	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 19 det:poss	color:blue
1	Սատանան	սատանա	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	2	nsubj	_	_
2	ժպտում	ժպտալ	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	0	root	_	_
3	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	2	aux	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	և	և	CCONJ	_	_	7	cc	_	_
6	Եսային	Եսայի	PROPN	_	Animacy=Hum|Case=Nom|Definite=Def|NameType=Giv|Number=Sing	7	nsubj	_	_
7	զգաց	զգալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	որ	որ	SCONJ	_	_	12	mark	_	_
10	ինքը	ինքը	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Emp	12	nsubj	_	_
11	արդեն	արդեն	ADV	_	_	12	advmod	_	_
12	զզվում	զզվել	VERB	_	Aspect=Imp|Subcat=Intr|VerbForm=Part|Voice=Mid	7	ccomp	_	_
13	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	aux	_	_
14	աշխարհից	աշխարհ	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	12	obl	_	SpaceAfter=No
15	,	,	PUNCT	_	_	17	punct	_	_
16	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	17	det:poss	_	_
17	անտրամաբանությունից	անտրամաբանություն	NOUN	_	Animacy=Nhum|Case=Abl|Definite=Ind|Number=Sing	14	conj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	21	punct	_	_
19	նրա	նա	DET	_	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	21	det:poss	_	_
20	անհեռանկար	անհեռանկար	ADJ	_	_	21	xcomp	_	_
21	լինելուց	լինել	VERB	_	Case=Abl|Definite=Ind|Number=Coll|Polarity=Pos|Subcat=Intr|VerbForm=Gdv|Voice=Mid	14	conj	_	SpaceAfter=No
22	։	։	PUNCT	_	_	2	punct	_	_

~~~


