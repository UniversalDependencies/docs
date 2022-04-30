---
layout: base
title:  'Statistics of fixed in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `fixed`

This relation is universal.

41 nodes (0%) are attached to their parents as `fixed`.

41 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 13 pairs of parts of speech are connected with `fixed`: <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (8; 20% instances), <tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (7; 17% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (5; 12% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (4; 10% instances), <tt><a href="en_gumreddit-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (3; 7% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (3; 7% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADP.html">ADP</a></tt> (2; 5% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-X.html">X</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 fixed	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=joint_m:145->133:5|Entity=(abstract-136-new-3-coref|Lem=*LOWER*|Len=3
2	_	_	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Lem=*LOWER*|Len=3|XML=<hi rend:::"bold"></hi>
3	_	_	NOUN	NN	Number=Sing	15	nsubj	15:nsubj|30:nsubj:xsubj	Lem=_|Len=10
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=7
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Entity=(object-137-new-2-sgl|Lem=_|Len=5
6	_	_	NOUN	NN	Number=Sing	3	nmod	3:nmod:between	Entity=137)|Lem=_|Len=8
7	_	_	CCONJ	CC	_	8	cc	8:cc	Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	6	conj	3:nmod:between|6:conj:and	Entity=(substance-98-giv:act-1-coref)136)|Lem=_|Len=4
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	Lem=be|Len=2
10	_	_	SCONJ	IN	_	15	mark	15:mark	Entity=(abstract-136-giv:act-6,19-coref|Lem=_|Len=4
11	_	_	SYM	SYM	_	15	nsubj	15:nsubj|30:nsubj:xsubj	Entity=(object-138-new-1-sgl|Lem=_|Len=1
12	_	_	NUM	CD	NumForm=Digit|NumType=Card	11	nummod	11:nummod	Lem=100000|Len=7
13	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	11	nmod	11:nmod:in	Entity=(object-139-new-1-sgl)138)|Lem=_|Len=4
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=weigh|Len=6
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Lem=_|Len=1
17	_	_	NOUN	NN	Number=Sing	18	obl:npmod	18:obl:npmod	Lem=_|Len=3
18	_	_	ADV	RBR	Degree=Cmp	21	advmod	21:advmod	Lem=_|Len=4
19	_	_	ADP	IN	_	18	fixed	18:fixed	Lem=_|Len=4
20	_	_	SYM	SYM	_	15	obj	15:obj	Entity=(substance-140-new-1-sgl|Lem=_|Len=1
21	_	_	NUM	CD	NumForm=Digit|NumType=Card	20	nummod	20:nummod	Lem=100000|Len=7
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:in	Entity=(substance-98-giv:act-1-coref)140)|Lem=_|Len=4
24	_	_	CCONJ	CC	_	28	cc	28:cc	Discourse=joint_m:146->145:0|Lem=_|Len=3
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	28:cop	Lem=be|Len=2
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	27:det	Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	28	obl:npmod	28:obl:npmod	Lem=_|Len=3
28	_	_	ADJ	JJR	Degree=Cmp	15	conj	15:conj:and	Lem=easy|Len=6
29	_	_	PART	TO	_	30	mark	30:mark	Lem=_|Len=2
30	_	_	VERB	VB	VerbForm=Inf	28	xcomp	28:xcomp	Lem=_|Len=4
31	_	_	ADV	RB	Degree=Pos	28	advmod	28:advmod	Entity=136)|Lem=_|Len=3|SpaceAfter=No
32	_	_	PUNCT	.	_	15	punct	15:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=justify:115->114:1|Lem=*LOWER*|Len=6
2	_	_	SCONJ	IN	_	10	mark	10:mark	Lem=_|Len=4
3	_	_	PROPN	NNP	Number=Sing	10	nsubj	10:nsubj	Entity=(abstract-98-new-1,2-sgl-Iron_Chef_America|Lem=_|Len=4
4	_	_	PROPN	NNP	Number=Sing	3	flat	3:flat	Entity=98)|Lem=_|Len=4
5	_	_	ADV	RB	_	10	advmod	10:advmod	Lem=_|Len=4
6	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	10:cop	Lem=be|Len=3
7	_	_	PART	RB	Polarity=Neg	10	advmod	10:advmod	Lem=not|Len=3
8	_	_	DET	DT	Definite=Ind|PronType=Art	10	det	10:det	Entity=(abstract-99-new-3-sgl|Lem=_|Len=1
9	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Lem=_|Len=5
10	_	_	NOUN	NN	Number=Sing	1	ccomp	1:ccomp	Entity=99)|Lem=_|Len=8
11	_	_	ADP	IN	_	15	case	15:case	Lem=_|Len=2
12	_	_	ADP	IN	_	11	fixed	11:fixed	Lem=_|Len=2
13	_	_	DET	DT	Definite=Def|PronType=Art	15	det	15:det	Entity=(substance-100-new-3-sgl|Lem=_|Len=3
14	_	_	VERB	VBN	Tense=Past|VerbForm=Part	15	amod	15:amod	Lem=feature|Len=8
15	_	_	NOUN	NN	Number=Sing	10	nmod	10:nmod:as_to	Entity=100)|Lem=_|Len=10|SpaceAfter=No
16	_	_	PUNCT	.	_	1	punct	1:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	_	_	ADV	WRB	PronType=Int|Typo=Yes	5	advmod	5:advmod	Discourse=elaboration:114->112:0|Lem=_|Len=3|XML=<hi rend:::"italic"><sic></sic>
2	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	aux	5:aux	Lem=_|Len=2
3	_	_	PART	RB	Polarity=Neg	5	advmod	5:advmod	Lem=not|Len=3
4	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	5:nsubj	Entity=(person-54-giv:inact-1-ana)|Lem=_|Len=3
5	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=2
6	_	_	PRON	DT	Number=Sing|PronType=Dem	5	obj	5:obj	Entity=(event-124-giv:act-1-ana)|Lem=_|Len=4
7	_	_	ADV	RB	_	5	advmod	5:advmod	Lem=_|Len=2
8	_	_	ADV	RB	Degree=Pos	7	fixed	7:fixed	Lem=_|Len=4|SpaceAfter=No
9	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1|XML=</hi>

~~~


