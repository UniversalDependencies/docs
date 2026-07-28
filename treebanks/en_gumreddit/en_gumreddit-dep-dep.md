---
layout: base
title:  'Statistics of dep in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `dep`

This relation is universal.

12 nodes (0%) are attached to their parents as `dep`.

11 instances of `dep` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.16666666666667.

The following 5 pairs of parts of speech are connected with `dep`: <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 50% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (2; 17% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 dep	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj|19:nsubj	Discourse=organization-preparation:4->10:3:ref-prs-10,41-_+sem-synym-25,64-66-_|Entity=(4-person-acc:com-sssss-cf1-1-ana)|Lem=_|Len=1
2	_	_	ADV	RB	_	3	advmod	3:advmod	Lem=_|Len=4
3	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=see|Len=3
4	_	_	DET	DT	Definite=Ind|PronType=Art	5	det	5:det	Entity=(5-abstract-new-nnnnn-cf4-2-sgl|Lem=_|Len=1
5	_	_	NOUN	NN	Number=Sing	3	obj	3:obj	Lem=_|Len=4
6	_	_	VERB	VBG	VerbForm=Ger	5	acl	5:acl	Discourse=elaboration-attribute:5->4:0:syn-mdf-14-_+syn-nmn-15-_|Lem=make|Len=6|MSeg=mak-ing
7	_	_	NOUN	NN	Number=Sing	6	obj	6:obj	Entity=(6-abstract-new-nnnnn-cf5-1-sgl|Lem=_|Len=7
8	_	_	ADP	IN	_	11	case	11:case	Lem=_|Len=2
9	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(7-abstract-new-nnnnn-cf7-3-sgl|Lem=_|Len=1
10	_	_	ADJ	JJ	Degree=Pos	11	amod	11:amod	Lem=_|Len=7|PDTB=AltLex:Expansion.Conjunction:similar:19:10-14:15-18,20
11	_	_	NOUN	NN	Number=Sing	7	nmod	7:nmod:of|13:nsubj	Lem=_|Len=9|MSeg=situat-ion
12	_	_	PRON	WDT	PronType=Rel	13	nsubj	11:ref	Discourse=elaboration-attribute:6->4:1:syn-mdf-20-_+syn-relcl-21-22-_|Lem=_|Len=5
13	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	acl:relcl	11:acl:relcl	Lem=remind|Len=8|MSeg=re-mind-ed
14	_	_	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	iobj	13:iobj	Entity=(4-person-giv:act-sssss-cf1-1-ana)|Lem=I|Len=2
15	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=2
16	_	_	PRON	DT	Number=Sing|PronType=Dem	13	obl	13:obl:of	Entity=(1-event-giv:act-sssss-cf2*-1-ana)7)6)5)|Lem=_|Len=4|SpaceAfter=No
17	_	_	PUNCT	,	_	19	punct	19:punct	Lem=_|Len=1
18	_	_	CCONJ	CC	_	19	cc	19:cc	Discourse=attribution-positive:7->8:0:sem-atsrc-10,18-25-_+lex-indwd-28-_|Lem=_|Len=3|PDTB=Explicit:Expansion.Conjunction:and:27:10-26:28-40
19	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	conj	3:conj:and	Lem=think|Len=7
20	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=2|PronType=Prs	21	dep	21:dep	Discourse=joint-list_m:8->4:2:dm-and-27-gold|Entity=(8-person-acc:com-nnnnn-cf3-2-sgl|Lem=_|Len=3
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
1	_	_	NOUN	NN	Abbr=Yes|Number=Sing	4	dep	4:dep	Discourse=organization-preparation:124->125:0:lex-indwd-927-_+grf-dsh-928-_|Entity=(100-abstract-new-nnnnn-cf2-1-sgl)|Lem=_|Len=2
2	_	_	PUNCT	:	_	1	punct	1:punct	Lem=_|Len=1
3	_	_	ADJ	JJ	Degree=Pos	4	amod	4:amod	Discourse=evaluation-comment:125->6:6:lex-indwd-929-_|Entity=(101-abstract-new-nnnnn-cf3-2-sgl|Lem=*LOWER*|Len=4
4	_	_	NOUN	NN	Number=Sing	0	root	0:root	Lem=_|Len=8|MSeg=analys-is
5	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=4
6	_	_	NOUN	NN	Abbr=Yes|Number=Sing	4	nmod	4:nmod:from	Entity=(7-person-giv:inact-nnnnn-cf1-1-coref)101)|Lem=_|Len=2|SpaceAfter=No
7	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dep	color:blue
1	_	_	NUM	CD	NumForm=Digit|NumType=Card	7	dep	7:dep	Discourse=topic-question:13->19:3:lex-indwd-119-_+syn-sbinv-120-_+grf-qst-141-_|Lem=_|Len=3
2	_	_	ADV	WRB	PronType=Int	7	advmod	7:advmod	CxnElt=7:Interrogative-WHInfo-Direct.WHWord|Lem=*LOWER*|Len=3
3	_	_	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	7:aux|9:aux	Lem=_|Len=2
4	_	_	ADJ	JJ	Degree=Pos	6	amod	6:amod	Entity=(23-place-new-nnnsn-cf3-3-sgl|Lem=_|Len=9|MSeg=differ-ent
5	_	_	ADJ	JJ	Degree=Pos	6	amod	6:amod	Lem=_|Len=8|MSeg=Europe-an
6	_	_	NOUN	NNS	Number=Plur	7	nsubj	7:nsubj|9:nsubj	Entity=23)|Lem=country|Len=9|MSeg=countrie-s
7	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Cxn=Interrogative-WHInfo-Direct|CxnElt=7:Interrogative-WHInfo-Direct.Clause|Lem=_|Len=4|SpaceAfter=No|XML=<w>
8	_	_	SYM	SYM	_	9	cc	9:cc	Lem=_|Len=1|SpaceAfter=No
9	_	_	VERB	VB	VerbForm=Inf	7	conj	7:conj:slash	Lem=_|Len=9|XML=</w>
10	_	_	PRON	PRP$	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	21	nmod:poss	21:nmod:poss	Entity=(24-abstract-new-snnnn-cf4-12-coref(6-person-giv:inact-nnnnn-cf1-1-ana)|Lem=_|Len=3
11	_	_	ADV	RB	Degree=Pos	21	amod	21:amod	Lem=_|Len=9|MSeg=seem-ing-ly|SpaceAfter=No
12	_	_	PUNCT	,	_	17	punct	17:punct	Lem=_|Len=1
13	_	_	ADP	IN	_	17	case	17:case	Lem=_|Len=4
14	_	_	DET	DT	Definite=Ind|PronType=Art	15	det	15:det	Bridge=4<26:entity-associative|Entity=(25-abstract-new-nnnnn-cf5-4-sgl(26-person-acc:inf-nnnnn-cf2-2-coref|Lem=a|Len=2
15	_	_	NOUN	NN	Number=Sing	17	nmod:poss	17:nmod:poss	Lem=_|Len=8|MSeg=out-sid-er
16	_	_	PART	POS	_	15	case	15:case	Entity=26)|Lem='s|Len=2
17	_	_	NOUN	NN	Number=Sing	11	advcl	11:advcl	Lem=_|Len=5
18	_	_	ADP	IN	_	19	case	19:case	Lem=_|Len=2
19	_	_	NOUN	NN	Number=Sing	17	nmod	17:nmod:of	Entity=25)|Lem=_|Len=4|SpaceAfter=No
20	_	_	PUNCT	,	_	11	punct	11:punct	Lem=_|Len=1
21	_	_	NOUN	NN	Number=Sing	9	obj	9:obj	Lem=_|Len=9|MSeg=obsess-ion
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=4
23	_	_	NOUN	NN	Number=Sing	21	nmod	21:nmod:with	Entity=(27-abstract-new-nnnnn-cf6-1-coref)24)|Lem=_|Len=4|SpaceAfter=No
24	_	_	PUNCT	.	_	7	punct	7:punct	Lem=_|Len=1

~~~


