---
layout: base
title:  'Statistics of csubj in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="en_gumreddit-dep-csubj-pass.html">csubj:pass</a></tt>.

57 nodes (0%) are attached to their parents as `csubj`.

37 instances of `csubj` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.50877192982456.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (25; 44% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (14; 25% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (9; 16% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 csubj	color:blue
1	_	_	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	2:nsubj|4:nsubj:xsubj	Discourse=cause:86->1:12|Entity=(event-87-giv:act-1-coref)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=have|Len=3
3	_	_	PART	TO	_	4	mark	4:mark	Lem=_|Len=2
4	_	_	VERB	VB	VerbForm=Inf	2	xcomp	2:xcomp	Lem=_|Len=2
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=4
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(abstract-90-new-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:with	Lem=_|Len=4
8	_	_	SCONJ	IN	_	9	mark	9:mark	Discourse=elaboration:87->86:0|Lem=_|Len=4
9	_	_	VERB	VBG	VerbForm=Ger	16	csubj	16:csubj	Lem=raise|Len=7
10	_	_	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	11	nmod:poss	11:nmod:poss	Entity=(person-91-new-2-sgl(person-2-giv:inact-1-ana)|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=91)|Lem=_|Len=9
12	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	16:cop	Lem=be|Len=2
13	_	_	NOUN	NN	Number=Sing	16	compound	16:compound	Entity=(abstract-92-new-1-sgl)|Lem=_|Len=5
14	_	_	CCONJ	CC	_	15	cc	15:cc	Lem=_|Len=3
15	_	_	NOUN	NN	Number=Sing	13	conj	13:conj:and|16:compound	Entity=(abstract-93-new-1-sgl)|Lem=_|Len=8
16	_	_	ADJ	JJ	Degree=Pos	7	acl	7:acl	Entity=90)|Lem=_|Len=9|SpaceAfter=No
17	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 csubj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	Discourse=evaluation:39->36:3|Entity=(abstract-43-new-1-cata)|Lem=*LOWER*|Len=2
2	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=amaze|Len=6
3	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	2:obj	Entity=(person-44-acc:com-1-sgl)|Lem=I|Len=2
4	_	_	DET	DT	Definite=Def|PronType=Art	5	det	5:det	Entity=(abstract-43-acc:com-2-coref(object-45-new-2-sgl|Lem=_|Len=3
5	_	_	NOUN	NNS	Number=Plur	2	dislocated	2:dislocated	Lem=chunk|Len=6
6	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=2
7	_	_	NOUN	NN	Number=Sing	5	nmod	5:nmod:of	Entity=(time-46-new-1-sgl)45)|Lem=_|Len=4
8	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	expl	9:expl	Discourse=elaboration:40->39:0|Entity=(abstract-47-new-1-cata)|Lem=_|Len=2
9	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	7:acl:relcl	Lem=take|Len=5
10	_	_	SCONJ	IN	_	13	mark	13:mark	Entity=(abstract-47-acc:com-4-coref|Lem=_|Len=3
11	_	_	NOUN	NNS	Number=Plur	13	nsubj	13:nsubj	Entity=(person-48-new-1-sgl)|Lem=person|Len=6
12	_	_	PART	TO	_	13	mark	13:mark	Lem=_|Len=2
13	_	_	VERB	VB	VerbForm=Inf	9	csubj	9:csubj	Lem=_|Len=7
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
15	_	_	DET	DT	Number=Plur|PronType=Dem	16	det	16:det	Entity=(abstract-49-new-2-sgl|Lem=this|Len=5
16	_	_	NOUN	NNS	Number=Plur	13	obl	13:obl:to	Entity=49)47)43)|Lem=thing|Len=6
17	_	_	SYM	SYM	_	2	discourse	2:discourse	Lem=_|Len=3|XML=<w></w>

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 5 csubj	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	nsubj	14:nsubj	Discourse=justify:10->9:1|Entity=(abstract-16-new-1-cata)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	14:cop	Lem=be|Len=2
3	_	_	ADV	RB	_	14	advmod	14:advmod	Lem=_|Len=4
4	_	_	SCONJ	IN	_	14	mark	14:mark	Lem=_|Len=4
5	_	_	VERB	VBG	VerbForm=Ger	14	csubj	14:csubj	Entity=(abstract-16-acc:com-10-disc|Lem=get|Len=7
6	_	_	DET	DT	_	7	det	7:det	Entity=(animal-17-new-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	5	obj	5:obj|11:nsubj:xsubj	Lem=_|Len=7
8	_	_	ADP	IN	_	9	case	9:case	Lem=_|Len=2
9	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:in	Entity=(abstract-18-new-1-coref)17)|Lem=_|Len=9
10	_	_	PART	TO	_	11	mark	11:mark	Lem=_|Len=2
11	_	_	VERB	VB	VerbForm=Inf	5	xcomp	5:xcomp	Lem=_|Len=9
12	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	cop	14:cop	Lem=be|Len=2
13	_	_	DET	DT	Definite=Ind|PronType=Art	14	det	14:det	Entity=(abstract-19-new-2-sgl|Lem=_|Len=1
14	_	_	NOUN	NN	Number=Sing	0	root	0:root	Entity=19)16)|Lem=_|Len=9|SpaceAfter=No
15	_	_	PUNCT	,	_	28	punct	28:punct	Lem=_|Len=1
16	_	_	ADV	RB	_	28	advmod	28:advmod	Discourse=result:11->10:0|Lem=_|Len=2
17	_	_	PRON	DT	Number=Sing|PronType=Dem	28	nsubj	28:nsubj	Entity=(abstract-16-giv:act-1-coref)|Lem=_|Len=4
18	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	28:cop	Lem=be|Len=2
19	_	_	SCONJ	WRB	PronType=Int	28	mark	28:mark	Lem=_|Len=3
20	_	_	VERB	VBG	VerbForm=Ger	28	csubj	28:csubj	Entity=(abstract-20-new-1-disc|Lem=get|Len=7
21	_	_	NOUN	NNS	Number=Plur	20	obj	20:obj|25:nsubj:xsubj	Bridge=7<21|Entity=(animal-21-acc:inf-1-sgl|Lem=panda|Len=6
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	21	nmod	21:nmod:in	Entity=(abstract-18-giv:act-1-coref)21)|Lem=_|Len=9
24	_	_	PART	TO	_	25	mark	25:mark	Lem=_|Len=2
25	_	_	VERB	VB	VerbForm=Inf	20	xcomp	20:xcomp	Entity=20)|Lem=_|Len=9
26	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	28:cop	Lem=be|Len=2
27	_	_	DET	DT	Definite=Ind|PronType=Art	28	det	28:det	Entity=(abstract-20-giv:act-2-coref|Lem=_|Len=1
28	_	_	NOUN	NN	Number=Sing	14	parataxis	14:parataxis	Entity=20)|Lem=_|Len=9
29	_	_	ADV	RB	Degree=Pos	28	advmod	28:advmod	Lem=_|Len=3|SpaceAfter=No
30	_	_	PUNCT	.	_	14	punct	14:punct	Lem=_|Len=1

~~~


