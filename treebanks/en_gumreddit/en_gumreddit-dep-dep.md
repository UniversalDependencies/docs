---
layout: base
title:  'Statistics of dep in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `dep`

This relation is universal.

33 nodes (0%) are attached to their parents as `dep`.

27 instances of `dep` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.54545454545455.

The following 13 pairs of parts of speech are connected with `dep`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (7; 21% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (5; 15% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 12% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (3; 9% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (3; 9% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-PART.html">PART</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 dep	color:blue
1	_	_	PRON	WP	PronType=Int	5	dep	5:dep	Discourse=evaluation:127->121:3|Lem=*LOWER*|Len=4
2	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(abstract-118-giv:inact-4-coref|Lem=_|Len=1
3	_	_	INTJ	UH	_	5	discourse	5:discourse	Lem=_|Len=7
4	_	_	NOUN	NN	Number=Sing	5	compound	5:compound	Lem=_|Len=5
5	_	_	NOUN	NN	Number=Sing	0	root	0:root	Entity=118)|Lem=_|Len=4|SpaceAfter=No
6	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1|SpaceAfter=No
7	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	_	_	X	LS	Abbr=Yes	3	dep	3:dep	Discourse=background:44->54:2|Lem=_|Len=2
2	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	Entity=(person-43-giv:act-1-ana)|Lem=*LOWER*|Len=2
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=refer|Len=6
4	_	_	SCONJ	IN	_	5	mark	5:mark	Lem=_|Len=2
5	_	_	VERB	VBG	VerbForm=Ger	3	advcl	3:advcl:to	Lem=dig|Len=7
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(object-45-new-2-coref|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=45)|Lem=_|Len=6
8	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=5
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(place-3-giv:inact-2-coref|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	5	obl	5:obl:under	Entity=3)|Lem=_|Len=4

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 dep	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	Discourse=elaboration:7->6:0|Entity=(person-10-giv:act-1-ana)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux	4:aux	Lem=be|Len=3
3	_	_	ADV	RB	Degree=Pos	4	advmod	4:advmod	Lem=_|Len=9
4	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	0	root	0:root	Lem=bounce|Len=8
5	_	_	ADP	IN	_	7	case	7:case	Lem=_|Len=6
6	_	_	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Bridge=2<14|Entity=(place-14-acc:inf-2-sgl|Lem=_|Len=3
7	_	_	NOUN	NN	Number=Sing	4	obl	4:obl:around	Entity=14)|Lem=_|Len=4
8	_	_	VERB	VBG	VerbForm=Ger	4	advcl	4:advcl	Discourse=elaboration:8->7:0|Lem=point|Len=8
9	_	_	ADP	RP	_	8	compound:prt	8:compound:prt	Lem=_|Len=3
10	_	_	NOUN	NNS	Number=Plur	8	obj	8:obj	Entity=(abstract-15-new-1-sgl|Lem=thing|Len=6
11	_	_	ADP	IN	_	13	obj	13:obj	Discourse=elaboration:9->8:0|Lem=_|Len=4
12	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nsubj	13:nsubj	Entity=(person-10-giv:act-1-ana)|Lem=_|Len=2
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	acl:relcl	10:acl:relcl	Lem=think|Len=7
14	_	_	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	cop	16:cop	Lem=be|Len=4
15	_	_	NOUN	NNS	Number=Plur	16	dep	16:dep	Entity=(abstract-16-new-1-coref)|Lem=clue|Len=5
16	_	_	NOUN	NNS	Number=Plur	13	ccomp	13:ccomp	Entity=(abstract-16-giv:act-1-coref)15)|Lem=clue|Len=5|XML=<sic></sic>
17	_	_	SCONJ	IN	_	20	mark	20:mark	Discourse=contrast_m:10->7:1|Lem=_|Len=5
18	_	_	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(person-9-giv:act-2-coref|Lem=_|Len=3
19	_	_	NOUN	NNS	Number=Plur	20	nsubj	20:nsubj	Entity=9)|Lem=parent|Len=7
20	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	advcl	4:advcl:while	Lem=dismiss|Len=9
21	_	_	DET	DT	_	22	det	22:det	Entity=(abstract-17-new-2-sgl|Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	20	obj	20:obj	Entity=17)|Lem=_|Len=4
23	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	nsubj	24:nsubj|26:nsubj|29:nsubj:xsubj	Discourse=elaboration:11->10:0|Entity=(person-10-giv:act-1-ana)|Lem=_|Len=2
24	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	22	acl:relcl	22:acl:relcl	Lem=have|Len=3
25	_	_	CCONJ	CC	_	26	cc	26:cc	Discourse=joint_m:12->10:1|Lem=_|Len=3
26	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	24	conj	22:acl:relcl|24:conj:and	Lem=tell|Len=4
27	_	_	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	26	iobj	26:iobj	Entity=(person-10-giv:act-1-ana)|Lem=he|Len=3
28	_	_	PART	TO	_	29	mark	29:mark	Lem=_|Len=2
29	_	_	VERB	VB	VerbForm=Inf	26	xcomp	26:xcomp	Lem=_|Len=4
30	_	_	VERB	VBG	VerbForm=Ger	29	xcomp	29:xcomp	Lem=get|Len=7
31	_	_	ADV	RB	_	32	advmod	32:advmod	Lem=_|Len=2
32	_	_	ADJ	JJ	Degree=Pos	30	xcomp	30:xcomp	Lem=_|Len=7|SpaceAfter=No
33	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


