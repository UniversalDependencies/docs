---
layout: base
title:  'Statistics of advcl in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `advcl`

This relation is universal.

76 nodes (1%) are attached to their parents as `advcl`.

38 instances of `advcl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.71052631578947.

The following 11 pairs of parts of speech are connected with `advcl`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (53; 70% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (5; 7% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt> (5; 7% instances), <tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="be_hse-pos-ADV.html">ADV</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="be_hse-pos-DET.html">DET</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-PRON.html">PRON</a></tt>-<tt><a href="be_hse-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 advcl	color:blue
1	Равучы	равець	VERB	NNP	Aspect=Imp|Tense=Pres|VerbForm=Conv	5	advcl	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	цмок	цмок	NOUN	CC	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	_
4	тройчы	тройчы	ADV	NNP	_	5	advmod	_	_
5	пракружляў	пракружяць	VERB	VBC	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	над	над	ADP	IN	_	7	case	_	_
7	натоўпам	натоўп	NOUN	NN	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 advcl	color:blue
1	А	а	CCONJ	CC	_	11	cc	_	_
2	калі	калі	SCONJ	IN	_	7	mark	_	_
3	беларусы	беларус	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
4	не	не	PART	UH	Polarity=Neg	7	advmod	_	_
5	будуць	быць	AUX	VBC	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	7	aux	_	_
6	мяне	я	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obj	_	_
7	разумець	разумець	VERB	VB	Aspect=Imp|VerbForm=Inf|Voice=Act	11	advcl	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	7	punct	_	_
9	гэта	гэта	PRON	DT	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	11	nsubj	_	_
10	іх	іх	DET	PRP$	Poss=Yes|PronType=Prs	11	det	_	_
11	праблема	праблема	NOUN	NN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 advcl	color:blue
1	Але	але	CCONJ	_	_	2	cc	_	_
2	ўдзельнічаю	ўдзельнічаць	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	з	з	ADP	_	_	4	case	_	_
4	задавальненнем	задавальненне	NOUN	_	Animacy=Inan|Case=Ins|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	бо	бо	SCONJ	_	_	9	mark	_	_
7	гэта	гэта	PRON	_	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing	9	nsubj	_	_
8	каласальны	каласальны	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	досвед	досвед	NOUN	_	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	advcl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


