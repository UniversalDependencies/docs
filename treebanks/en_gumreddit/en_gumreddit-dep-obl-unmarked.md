---
layout: base
title:  'Statistics of obl:unmarked in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obl:unmarked`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gumreddit-dep-obl-agent.html">obl:agent</a></tt>.

65 nodes (0%) are attached to their parents as `obl:unmarked`.

39 instances of `obl:unmarked` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16923076923077.

The following 11 pairs of parts of speech are connected with `obl:unmarked`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (32; 49% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (11; 17% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (9; 14% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (3; 5% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:unmarked	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=context-circumstance:44->47:1:_|Entity=(51-time-new-cf1-2-sgl|Lem=*LOWER*|Len=4
2	_	_	NOUN	NN	Number=Sing	4	obl:unmarked	4:obl:unmarked	Entity=51)|Lem=_|Len=5|SpaceAfter=No
3	_	_	PUNCT	,	_	2	punct	2:punct	Lem=_|Len=1
4	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Lem=_|Len=4
5	_	_	ADV	RB	Degree=Pos	4	advmod	4:advmod	Entity=(52-place-new-cf2-1-sgl)|Lem=_|Len=4

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 27 obl:unmarked	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=joint-other_m:145->133:5:_|Entity=(139-abstract-new-cf2-3-coref|Lem=*LOWER*|Len=3
2	_	_	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Lem=*LOWER*|Len=3|XML=<hi rend:::"bold"></hi>
3	_	_	NOUN	NN	Number=Sing	15	nsubj:outer	15:nsubj:outer|30:nsubj:xsubj	Lem=_|Len=10|MSeg=differ-ence
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=7|MSeg=be-tween
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Entity=(140-object-new-cf5-2-sgl|Lem=_|Len=5
6	_	_	NOUN	NN	Number=Sing	3	nmod	3:nmod:between	Entity=140)|Lem=_|Len=8|MSeg=currenc-y
7	_	_	CCONJ	CC	_	8	cc	8:cc	Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	6	conj	3:nmod:between|6:conj:and	Entity=(99-substance-giv:act-cf1*-1-coref)139)|Lem=_|Len=4
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	Lem=be|Len=2
10	_	_	SCONJ	IN	_	15	mark	15:mark	Entity=(139-abstract-giv:act-cf2-6,19-coref|Lem=_|Len=4
11	_	_	SYM	$	_	15	nsubj	15:nsubj|30:nsubj:xsubj	Entity=(141-object-new-cf3-1-sgl|Lem=_|Len=1
12	_	_	NUM	CD	NumForm=Digit|NumType=Card	11	nummod	11:nummod	Lem=100000|Len=7
13	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	11	nmod	11:nmod:in	Entity=(142-object-new-cf6-1-sgl)141)|Lem=_|Len=4
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=weigh|Len=6|MSeg=weigh-s
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Lem=_|Len=1
17	_	_	NOUN	NN	Number=Sing	18	obl:unmarked	18:obl:unmarked	Lem=_|Len=3
18	_	_	ADV	RBR	Degree=Cmp|ExtPos=ADV	21	advmod	21:advmod	Lem=_|Len=4
19	_	_	ADP	IN	_	18	fixed	18:fixed	Lem=_|Len=4
20	_	_	SYM	$	_	15	obj	15:obj	Entity=(143-substance-new-cf4-1-sgl|Lem=_|Len=1
21	_	_	NUM	CD	NumForm=Digit|NumType=Card	20	nummod	20:nummod	Lem=100000|Len=7
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:in	Entity=(99-substance-giv:act-cf1*-1-coref)143)|Lem=_|Len=4
24	_	_	CCONJ	CC	_	28	cc	28:cc	Discourse=joint-list_m:146->145:0:dm-and-954+lex-indwd-961|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:954:931-953:955-962
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	28:cop	Lem=be|Len=2
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	27:det	Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	28	obl:unmarked	28:obl:unmarked	Lem=_|Len=3
28	_	_	ADJ	JJR	Degree=Cmp	15	conj	15:conj:and	Lem=easy|Len=6|MSeg=easi-er
29	_	_	PART	TO	_	30	mark	30:mark	Lem=_|Len=2
30	_	_	VERB	VB	VerbForm=Inf	28	xcomp	28:xcomp	Lem=_|Len=4
31	_	_	ADV	RB	Degree=Pos	28	advmod	28:advmod	Entity=139)|Lem=_|Len=3|SpaceAfter=No
32	_	_	PUNCT	.	_	15	punct	15:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 obl:unmarked	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=joint-other_m:145->133:5:_|Entity=(139-abstract-new-cf2-3-coref|Lem=*LOWER*|Len=3
2	_	_	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Lem=*LOWER*|Len=3|XML=<hi rend:::"bold"></hi>
3	_	_	NOUN	NN	Number=Sing	15	nsubj:outer	15:nsubj:outer|30:nsubj:xsubj	Lem=_|Len=10|MSeg=differ-ence
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=7|MSeg=be-tween
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Entity=(140-object-new-cf5-2-sgl|Lem=_|Len=5
6	_	_	NOUN	NN	Number=Sing	3	nmod	3:nmod:between	Entity=140)|Lem=_|Len=8|MSeg=currenc-y
7	_	_	CCONJ	CC	_	8	cc	8:cc	Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	6	conj	3:nmod:between|6:conj:and	Entity=(99-substance-giv:act-cf1*-1-coref)139)|Lem=_|Len=4
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	Lem=be|Len=2
10	_	_	SCONJ	IN	_	15	mark	15:mark	Entity=(139-abstract-giv:act-cf2-6,19-coref|Lem=_|Len=4
11	_	_	SYM	$	_	15	nsubj	15:nsubj|30:nsubj:xsubj	Entity=(141-object-new-cf3-1-sgl|Lem=_|Len=1
12	_	_	NUM	CD	NumForm=Digit|NumType=Card	11	nummod	11:nummod	Lem=100000|Len=7
13	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	11	nmod	11:nmod:in	Entity=(142-object-new-cf6-1-sgl)141)|Lem=_|Len=4
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=weigh|Len=6|MSeg=weigh-s
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Lem=_|Len=1
17	_	_	NOUN	NN	Number=Sing	18	obl:unmarked	18:obl:unmarked	Lem=_|Len=3
18	_	_	ADV	RBR	Degree=Cmp|ExtPos=ADV	21	advmod	21:advmod	Lem=_|Len=4
19	_	_	ADP	IN	_	18	fixed	18:fixed	Lem=_|Len=4
20	_	_	SYM	$	_	15	obj	15:obj	Entity=(143-substance-new-cf4-1-sgl|Lem=_|Len=1
21	_	_	NUM	CD	NumForm=Digit|NumType=Card	20	nummod	20:nummod	Lem=100000|Len=7
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:in	Entity=(99-substance-giv:act-cf1*-1-coref)143)|Lem=_|Len=4
24	_	_	CCONJ	CC	_	28	cc	28:cc	Discourse=joint-list_m:146->145:0:dm-and-954+lex-indwd-961|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:954:931-953:955-962
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	28:cop	Lem=be|Len=2
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	27:det	Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	28	obl:unmarked	28:obl:unmarked	Lem=_|Len=3
28	_	_	ADJ	JJR	Degree=Cmp	15	conj	15:conj:and	Lem=easy|Len=6|MSeg=easi-er
29	_	_	PART	TO	_	30	mark	30:mark	Lem=_|Len=2
30	_	_	VERB	VB	VerbForm=Inf	28	xcomp	28:xcomp	Lem=_|Len=4
31	_	_	ADV	RB	Degree=Pos	28	advmod	28:advmod	Entity=139)|Lem=_|Len=3|SpaceAfter=No
32	_	_	PUNCT	.	_	15	punct	15:punct	Lem=_|Len=1

~~~


