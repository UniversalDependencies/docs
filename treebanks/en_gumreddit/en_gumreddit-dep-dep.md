---
layout: base
title:  'Statistics of dep in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `dep`

This relation is universal.

28 nodes (0%) are attached to their parents as `dep`.

22 instances of `dep` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.42857142857143.

The following 11 pairs of parts of speech are connected with `dep`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 21% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (6; 21% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-X.html">X</a></tt> (2; 7% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (2; 7% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 7% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (1; 4% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 dep	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|19:nsubj	Discourse=organization-preparation:4->10:3:ref-prs-10,41|Entity=(4-person-acc:com-cf1-1-ana)|Lem=_|Len=1
2	_	_	ADV	RB	_	3	advmod	3:advmod	Lem=_|Len=4
3	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=see|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(5-abstract-new-cf4-2-sgl|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Lem=_|Len=4
6	_	_	VERB	VBG	VerbForm=Ger	5	acl	5:acl	Discourse=elaboration-attribute:5->4:0:syn-mdf-14+syn-nmn-15|Lem=make|Len=6|MSeg=mak-ing
7	_	_	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=(6-abstract-new-cf5-1-sgl|Lem=_|Len=7
8	_	_	ADP	IN	_	11	case	11:case	Lem=_|Len=2
9	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(7-abstract-new-cf7-3-sgl|Lem=_|Len=1
10	_	_	ADJ	JJ	Degree=Pos	11	amod	11:amod	Lem=_|Len=7
11	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of|13:nsubj	Lem=_|Len=9|MSeg=situat-ion
12	_	_	PRON	WDT	PronType=Rel	13	nsubj	11:ref	Discourse=elaboration-attribute:6->4:1:syn-mdf-20+syn-relcl-21-22|Lem=_|Len=5
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	acl:relcl	11:acl:relcl	Lem=remind|Len=8|MSeg=remind-ed
14	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	iobj	13:iobj	Entity=(4-person-giv:act-cf1-1-ana)|Lem=I|Len=2
15	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
16	_	_	PRON	DT	Number=Sing|PronType=Dem	13	obl	13:obl:of	Entity=(1-event-giv:act-cf2*-1-ana)7)6)5)|Lem=_|Len=4|SpaceAfter=No
17	_	_	PUNCT	,	_	19	punct	19:punct	Lem=_|Len=1
18	_	_	CCONJ	CC	_	19	cc	19:cc	Discourse=attribution-positive:7->8:0:sem-atsrc-10,18-25+lex-indwd-28|Lem=_|Len=3
19	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	conj	3:conj:and	Lem=think|Len=7
20	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=2|PronType=Prs	21	dep	21:dep	Discourse=joint-list_m:8->4:2:dm-and-27|Entity=(8-person-acc:com-cf3-2-sgl|Lem=_|Len=3
21	_	_	NOUN	NNS	Number=Plur	23	nsubj	23:nsubj	Entity=8)|Lem=guy|Len=4|MSeg=guy-s
22	_	_	AUX	MD	Number=Plur|Person=3|VerbForm=Fin	23	aux	23:aux	Lem=_|Len=5
23	_	_	VERB	VB	VerbForm=Inf	19	ccomp	19:ccomp	Lem=_|Len=3
24	_	_	DET	DT	Definite=Ind|PronType=Art	25	det	25:det	Entity=(9-abstract-new-cf6-2-sgl|Lem=_|Len=1
25	_	_	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=9)|Lem=_|Len=6|SpaceAfter=No|XML=<w>
26	_	_	SYM	SYM	_	27	cc	27:cc	Lem=_|Len=1|SpaceAfter=No
27	_	_	NOUN	NN	Number=Sing	25	conj	23:obj|25:conj:slash	Entity=(10-abstract-new-cf8-1-sgl)|Lem=_|Len=8|XML=</w>
28	_	_	ADP	IN	_	30	case	30:case	Lem=_|Len=3
29	_	_	ADP	IN	_	28	fixed	28:fixed	Lem=_|Len=2
30	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	obl	23:obl:out_of	Entity=(1-event-giv:act-cf2*-1-ana)|Lem=_|Len=2|SpaceAfter=No
31	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	_	_	X	LS	Abbr=Yes	3	dep	3:dep	Discourse=context-background:44->54:2:ref-prs-374,450|Lem=_|Len=2
2	_	_	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	Entity=(43-person-giv:act-cf1*-1-ana)|Lem=*LOWER*|Len=2
3	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=refer|Len=6|MSeg=refer-s
4	_	_	SCONJ	IN	_	5	mark	5:mark	Lem=_|Len=2
5	_	_	VERB	VBG	VerbForm=Ger	3	advcl	3:advcl:to	Lem=dig|Len=7|MSeg=digg-ing
6	_	_	DET	DT	Definite=Ind|PronType=Art	7	det	7:det	Entity=(45-object-new-cf3-2-coref|Lem=_|Len=1
7	_	_	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=45)|Lem=_|Len=6
8	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=5
9	_	_	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(3-place-giv:inact-cf2-2-coref|Lem=_|Len=3
10	_	_	NOUN	NN	Number=Sing	5	obl	5:obl:under	Entity=3)|Lem=_|Len=4

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	_	_	NOUN	NN	Number=Sing	4	dep	4:dep	Discourse=organization-preparation:124->125:0:grf-dsh-928|Entity=(100-abstract-new-cf2-1-sgl)|Lem=_|Len=2
2	_	_	PUNCT	:	_	1	punct	1:punct	Lem=_|Len=1
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Discourse=evaluation-comment:125->6:6:lex-indwd-929|Entity=(101-abstract-new-cf3-2-sgl|Lem=*LOWER*|Len=4
4	_	_	NOUN	NN	Number=Sing	0	root	0:root	Lem=_|Len=8
5	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=4
6	_	_	NOUN	NN	Number=Sing	4	nmod	4:nmod:from	Entity=(7-person-giv:inact-cf1-1-coref)101)|Lem=_|Len=2|SpaceAfter=No
7	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


