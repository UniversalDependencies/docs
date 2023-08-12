---
layout: base
title:  'Statistics of cc in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="en_gumreddit-dep-cc-preconj.html">cc:preconj</a></tt>.

540 nodes (3%) are attached to their parents as `cc`.

540 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.98888888888889.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (288; 53% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (137; 25% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (55; 10% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (12; 2% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (11; 2% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (6; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (6; 1% instances), <tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (5; 1% instances), <tt><a href="en_gumreddit-pos-DET.html">DET</a></tt>-<tt><a href="en_gumreddit-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 19 cc	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=evaluation-comment:29->16:4|Entity=(34-abstract-new-cf5-3-sgl|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	3:amod	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	17	nsubj:outer	17:nsubj:outer	Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=elaboration-attribute:30->29:0|Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(28-event-giv:act-cf1*-1-coref)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	3:acl:that	Lem=result|Len=7
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PRON	NN	Number=Sing|PronType=Ind	6	obl	6:obl:in	Entity=(35-abstract-new-cf8-1-sgl|Lem=_|Len=8
9	_	_	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=35)34)|Lem=_|Len=9
10	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	17:cop	Discourse=same-unit_m:31->29:1|Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	17:mark	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	17:nsubj	Entity=(36-person-new-cf6-1-sgl|Lem=person|Len=6
13	_	_	ADV	RB	Degree=Pos	16	advmod	16:advmod	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(37-place-acc:com-cf4-2-sgl|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	12:nmod:over	Entity=37)36)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=5
18	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	17	obj	17:obj	Entity=(27-abstract-giv:inact-cf2-1-coref-United_States_dollar)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=joint-list_m:32->31:0|Lem=_|Len=3
20	_	_	DET	DT	Number=Sing|PronType=Dem	22	det	22:det	Bridge=27<38|Entity=(38-object-acc:inf-cf3-3-sgl|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	23	nsubj	23:nsubj	Entity=38)|Lem=_|Len=8
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	17:conj:and	Lem=represent|Len=10
24	_	_	ADJ	JJ	Degree=Pos	25	amod	25:amod	Entity=(39-abstract-new-cf7-2-sgl|Lem=_|Len=9
25	_	_	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=39)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	28	punct	28:punct	Lem=_|Len=1
27	_	_	ADJ	JJ	Degree=Pos	28	amod	28:amod	Entity=(40-abstract-new-cf9-2-sgl|Lem=_|Len=3
28	_	_	NOUN	NNS	Number=Plur	25	conj	23:obj|25:conj	Entity=40)|Lem=asset|Len=6|SpaceAfter=No
29	_	_	PUNCT	,	_	30	punct	30:punct	Lem=_|Len=1
30	_	_	NOUN	FW	Abbr=Yes|Number=Plur	25	conj	23:obj|25:conj	Lem=_|Len=4

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cc	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	3:nsubj	Discourse=elaboration-additional:77->71:3|Entity=(75-person-giv:inact-cf3-1-ana)|Lem=*LOWER*|Len=3
2	_	_	AUX	MD	VerbForm=Fin	3	aux	3:aux	Lem=_|Len=3
3	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=3
4	_	_	NOUN	NN	Number=Sing|Typo=Yes	6	compound	6:compound	CorrectForm=government|Entity=(84-abstract-new-cf5-4,6-sgl(23-organization-giv:act-cf1*-1-coref)|Lem=government|Len=5|SpaceAfter=No|XML=<w><sic ana:::"government"></sic>
5	_	_	PUNCT	HYPH	_	4	punct	4:punct	Lem=_|Len=1|SpaceAfter=No
6	_	_	ADJ	JJ	Degree=Pos	7	amod	7:amod	Lem=_|Len=7|XML=</w>
7	_	_	NOUN	NNS	Number=Plur	3	obj	3:obj	Lem=fee|Len=4
8	_	_	CCONJ	CC	_	9	cc	9:cc	Lem=_|Len=3
9	_	_	NOUN	NNS	Number=Plur	7	conj	3:obj|7:conj:and	Entity=84)|Lem=bill|Len=5
10	_	_	ADP	IN	_	12	case	12:case	Lem=_|Len=4
11	_	_	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(85-abstract-new-cf2-2-coref|Lem=_|Len=3
12	_	_	NOUN	NN	Number=Sing	3	obl	3:obl:with	Lem=_|Len=5
13	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	14:nsubj	Discourse=elaboration-attribute:78->77:0|Entity=(23-organization-giv:act-cf1*-1-ana)|Lem=_|Len=4
14	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	acl:relcl	12:acl:relcl	Entity=85)|Lem=_|Len=5
15	_	_	CCONJ	CC	_	25	cc	25:cc	Discourse=joint-list_m:79->77:1|Lem=_|Len=3
16	_	_	SCONJ	IN	_	22	mark	22:mark	Discourse=causal-cause:80->81:0|Lem=_|Len=7
17	_	_	DET	DT	Definite=Def|PronType=Art	18	det	18:det	Entity=(23-organization-giv:act-cf1*-2-coref|Lem=_|Len=3
18	_	_	NOUN	NN	Number=Sing|Typo=Yes	22	nsubj:outer	22:nsubj:outer	CorrectForm=government|Entity=23)|Lem=government|Len=5|XML=<sic ana:::"government"></sic>
19	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	22:cop	Lem=be|Len=2
20	_	_	ADV	RB	Degree=Pos	22	advmod	22:advmod	Lem=_|Len=4|SpaceAfter=No|XML=<w>
21	_	_	PUNCT	HYPH	_	20	punct	20:punct	Lem=_|Len=1|SpaceAfter=No
22	_	_	VERB	VBN	Tense=Past|VerbForm=Part	25	advcl	25:advcl:because	Lem=secure|Len=7|SpaceAfter=No|XML=</w>
23	_	_	PUNCT	,	_	22	punct	22:punct	Lem=_|Len=1
24	_	_	NOUN	NNS	Number=Plur	25	nsubj	25:nsubj	Discourse=same-unit_m:81->79:0|Entity=(73-person-giv:inact-cf4-1-coref)|Lem=person|Len=6
25	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	conj	3:conj:and	Lem=_|Len=6
26	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	25	obj	25:obj	Entity=(85-abstract-giv:act-cf2-1-ana)|Lem=_|Len=2|SpaceAfter=No
27	_	_	PUNCT	.	_	3	punct	3:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 24 cc	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=joint-other_m:145->133:5|Entity=(139-abstract-new-cf2-3-coref|Lem=*LOWER*|Len=3
2	_	_	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Lem=*LOWER*|Len=3|XML=<hi rend:::"bold"></hi>
3	_	_	NOUN	NN	Number=Sing	15	nsubj:outer	15:nsubj:outer|30:nsubj:xsubj	Lem=_|Len=10
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=7
5	_	_	NOUN	NN	Number=Sing	6	compound	6:compound	Entity=(140-object-new-cf5-2-sgl|Lem=_|Len=5
6	_	_	NOUN	NN	Number=Sing	3	nmod	3:nmod:between	Entity=140)|Lem=_|Len=8
7	_	_	CCONJ	CC	_	8	cc	8:cc	Lem=_|Len=3
8	_	_	NOUN	NN	Number=Sing	6	conj	3:nmod:between|6:conj:and	Entity=(99-substance-giv:act-cf1*-1-coref)139)|Lem=_|Len=4
9	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	15:cop	Lem=be|Len=2
10	_	_	SCONJ	IN	_	15	mark	15:mark	Entity=(139-abstract-giv:act-cf2-6,19-coref|Lem=_|Len=4
11	_	_	SYM	$	_	15	nsubj	15:nsubj|30:nsubj:xsubj	Entity=(141-object-new-cf3-1-sgl|Lem=_|Len=1
12	_	_	NUM	CD	NumForm=Digit|NumType=Card	11	nummod	11:nummod	Lem=100000|Len=7
13	_	_	ADP	IN	_	14	case	14:case	Lem=_|Len=2
14	_	_	NOUN	NN	Number=Sing	11	nmod	11:nmod:in	Entity=(142-object-new-cf6-1-sgl)141)|Lem=_|Len=4
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=weigh|Len=6
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Lem=_|Len=1
17	_	_	NOUN	NN	Number=Sing	18	obl:npmod	18:obl:npmod	Lem=_|Len=3
18	_	_	ADV	RBR	Degree=Cmp	21	advmod	21:advmod	Lem=_|Len=4
19	_	_	ADP	IN	_	18	fixed	18:fixed	Lem=_|Len=4
20	_	_	SYM	$	_	15	obj	15:obj	Entity=(143-substance-new-cf4-1-sgl|Lem=_|Len=1
21	_	_	NUM	CD	NumForm=Digit|NumType=Card	20	nummod	20:nummod	Lem=100000|Len=7
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:in	Entity=(99-substance-giv:act-cf1*-1-coref)143)|Lem=_|Len=4
24	_	_	CCONJ	CC	_	28	cc	28:cc	Discourse=joint-list_m:146->145:0|Lem=_|Len=3
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	28:cop	Lem=be|Len=2
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	27:det	Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	28	obl:npmod	28:obl:npmod	Lem=_|Len=3
28	_	_	ADJ	JJR	Degree=Cmp	15	conj	15:conj:and	Lem=easy|Len=6
29	_	_	PART	TO	_	30	mark	30:mark	Lem=_|Len=2
30	_	_	VERB	VB	VerbForm=Inf	28	xcomp	28:xcomp	Lem=_|Len=4
31	_	_	ADV	RB	Degree=Pos	28	advmod	28:advmod	Entity=139)|Lem=_|Len=3|SpaceAfter=No
32	_	_	PUNCT	.	_	15	punct	15:punct	Lem=_|Len=1

~~~


