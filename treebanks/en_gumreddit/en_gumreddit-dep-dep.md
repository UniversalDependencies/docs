---
layout: base
title:  'Statistics of dep in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `dep`

This relation is universal.

16 nodes (0%) are attached to their parents as `dep`.

12 instances of `dep` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.9375.

The following 7 pairs of parts of speech are connected with `dep`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 38% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (3; 19% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (2; 13% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 13% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 dep	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|19:nsubj	Discourse=organization-preparation:4->10:3:ref-prs-10,41|Entity=(4-person-acc:com-sssss-cf1-1-ana)|Lem=_|Len=1
2	_	_	ADV	RB	_	3	advmod	3:advmod	Lem=_|Len=4
3	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=see|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(5-abstract-new-nnnnn-cf4-2-sgl|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Lem=_|Len=4
6	_	_	VERB	VBG	VerbForm=Ger	5	acl	5:acl	Discourse=elaboration-attribute:5->4:0:syn-mdf-14+syn-nmn-15|Lem=make|Len=6|MSeg=mak-ing
7	_	_	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=(6-abstract-new-nnnnn-cf5-1-sgl|Lem=_|Len=7
8	_	_	ADP	IN	_	11	case	11:case	Lem=_|Len=2
9	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(7-abstract-new-nnnnn-cf7-3-sgl|Lem=_|Len=1
10	_	_	ADJ	JJ	Degree=Pos	11	amod	11:amod	Lem=_|Len=7|PDTB=AltLex:Expansion.Conjunction:similar:19:10-14:15-18,20
11	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of|13:nsubj	Lem=_|Len=9|MSeg=situat-ion
12	_	_	PRON	WDT	PronType=Rel	13	nsubj	11:ref	Discourse=elaboration-attribute:6->4:1:syn-mdf-20+syn-relcl-21-22|Lem=_|Len=5
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	acl:relcl	11:acl:relcl	Lem=remind|Len=8|MSeg=re-mind-ed
14	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	iobj	13:iobj	Entity=(4-person-giv:act-sssss-cf1-1-ana)|Lem=I|Len=2
15	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
16	_	_	PRON	DT	Number=Sing|PronType=Dem	13	obl	13:obl:of	Entity=(1-event-giv:act-sssss-cf2*-1-ana)7)6)5)|Lem=_|Len=4|SpaceAfter=No
17	_	_	PUNCT	,	_	19	punct	19:punct	Lem=_|Len=1
18	_	_	CCONJ	CC	_	19	cc	19:cc	Discourse=attribution-positive:7->8:0:sem-atsrc-10,18-25+lex-indwd-28|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:27:10-26:28-40
19	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	conj	3:conj:and	Lem=think|Len=7
20	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=2|PronType=Prs	21	dep	21:dep	Discourse=joint-list_m:8->4:2:dm-and-27|Entity=(8-person-acc:com-nnnnn-cf3-2-sgl|Lem=_|Len=3
21	_	_	NOUN	NNS	Number=Plur	23	nsubj	23:nsubj	Entity=8)|Lem=guy|Len=4|MSeg=guy-s
22	_	_	AUX	MD	VerbForm=Fin	23	aux	23:aux	Lem=_|Len=5
23	_	_	VERB	VB	VerbForm=Inf	19	ccomp	19:ccomp	Lem=_|Len=3
24	_	_	DET	DT	Definite=Ind|PronType=Art	25	det	25:det	Entity=(9-abstract-new-nnnnn-cf6-2-sgl|Lem=_|Len=1
25	_	_	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=9)|Lem=_|Len=6|SpaceAfter=No|XML=<w>
26	_	_	SYM	SYM	_	27	cc	27:cc	Lem=_|Len=1|SpaceAfter=No
27	_	_	NOUN	NN	Number=Sing	25	conj	23:obj|25:conj:slash	Entity=(10-abstract-new-nnnnn-cf8-1-sgl)|Lem=_|Len=8|XML=</w>
28	_	_	ADP	IN	ExtPos=ADP	30	case	30:case	Lem=_|Len=3
29	_	_	ADP	IN	_	28	fixed	28:fixed	Lem=_|Len=2
30	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	23	obl	23:obl:out_of	Entity=(1-event-giv:act-sssss-cf2*-1-ana)|Lem=_|Len=2|SpaceAfter=No
31	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 dep	color:blue
1	_	_	NOUN	NN	Abbr=Yes|Number=Sing	4	dep	4:dep	Discourse=organization-preparation:124->125:0:lex-indwd-927+grf-dsh-928|Entity=(100-abstract-new-nnnnn-cf2-1-sgl)|Lem=_|Len=2
2	_	_	PUNCT	:	_	1	punct	1:punct	Lem=_|Len=1
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Discourse=evaluation-comment:125->6:6:lex-indwd-929|Entity=(101-abstract-new-nnnnn-cf3-2-sgl|Lem=*LOWER*|Len=4
4	_	_	NOUN	NN	Number=Sing	0	root	0:root	Lem=_|Len=8
5	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=4
6	_	_	NOUN	NN	Abbr=Yes|Number=Sing	4	nmod	4:nmod:from	Entity=(7-person-giv:inact-n____-cf1-1-coref)101)|Lem=_|Len=2|SpaceAfter=No
7	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 21 dep	color:blue
1	_	_	ADV	RB	PronType=Dem	3	advmod	3:advmod	Discourse=joint-sequence_m:104->89:3:dm-then-799|Lem=*LOWER*|Len=4|PDTB=Explicit:Temporal.Asynchronous.Precedence:then:799:750-780:800-822
2	_	_	ADV	RB	Degree=Pos	3	advmod	3:advmod	Lem=_|Len=6|MSeg=simp-ly
3	_	_	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Lem=_|Len=3
4	_	_	PART	TO	_	5	mark	5:mark	Lem=_|Len=2
5	_	_	VERB	VB	VerbForm=Inf	3	xcomp	3:xcomp	Lem=_|Len=4
6	_	_	DET	DT	Number=Sing|PronType=Dem	8	det	8:det	Entity=(68-abstract-giv:inact-nssns-cf3-3-coref|Lem=_|Len=4
7	_	_	ADJ	JJ	Degree=Pos	8	amod	8:amod	Lem=_|Len=4
8	_	_	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=68)|Lem=_|Len=7|MSeg=clar-ity
9	_	_	CCONJ	CC	_	11	cc	11:cc	Lem=_|Len=2
10	_	_	PUNCT	``	_	11	punct	11:punct	Entity=(102-abstract-giv:act-n____-cf1*-2-coref|Lem=_|Len=1|SpaceAfter=No|XML=<q>
11	_	_	NOUN	NN	Number=Sing	8	conj	5:obj|8:conj:or	Lem=_|Len=4|SpaceAfter=No
12	_	_	PUNCT	''	_	11	punct	11:punct	Entity=102)|Lem=_|Len=1|XML=</q>
13	_	_	ADV	WRB	PronType=Int	15	advmod	15:advmod	Discourse=context-circumstance:105->104:0:dm-when-811|Lem=_|Len=4|PDTB=Explicit:Temporal.Synchronous:when:811:799-810:812-822
14	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	15	nsubj	15:nsubj	Entity=(3-person-giv:inact-sssss-cf2-1-ana)|Lem=_|Len=3
15	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	advcl	5:advcl:when	Lem=_|Len=4
16	_	_	DET	DT	Definite=Def|PronType=Art	17	det	17:det	Bridge=3<107|Entity=(107-object-acc:inf-nnnnn-cf5-2-sgl|Lem=_|Len=3
17	_	_	NOUN	NN	Number=Sing	15	obj	15:obj	Entity=107)|Lem=_|Len=5
18	_	_	ADP	IN	_	17	nmod	17:nmod	Lem=_|Len=4|MSeg=in-to
19	_	_	DET	DT	Definite=Def|PronType=Art	20	det	20:det	Entity=(95-abstract-giv:inact-n____-cf4-5-coref|Lem=_|Len=3
20	_	_	NOUN	NN	Number=Sing	23	compound	23:compound	Lem=_|Len=2|SpaceAfter=No|XML=<w>
21	_	_	SYM	SYM	_	23	dep	23:dep	Lem=_|Len=1|SpaceAfter=No
22	_	_	NOUN	NN	Number=Sing	23	compound	23:compound	Lem=_|Len=2|XML=</w>
23	_	_	NOUN	NN	Number=Sing	15	dep	15:dep	Entity=95)|Lem=_|Len=5|MSeg=vow-el|SpaceAfter=No
24	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


