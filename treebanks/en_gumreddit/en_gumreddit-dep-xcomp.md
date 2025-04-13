---
layout: base
title:  'Statistics of xcomp in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `xcomp`

This relation is universal.

324 nodes (2%) are attached to their parents as `xcomp`.

323 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.23765432098765.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (208; 64% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (62; 19% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (20; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (20; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj|5:nsubj:xsubj	Discourse=context-background:46->51:1:_|Entity=(53-person-new-cf2-1-sgl)|Lem=*LOWER*|Len=3|PDTB=NoRel:NoRel:_:_:284-291:292-307
2	_	_	AUX	MD	VerbForm=Fin	4	aux	4:aux	Lem=can|Len=2
3	_	_	PART	RB	Polarity=Neg	4	advmod	4:advmod	Lem=not|Len=3|Negation=Yes
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=4
5	_	_	VERB	VBG	VerbForm=Ger	4	xcomp	4:xcomp	Lem=print|Len=8|MSeg=print-ing
6	_	_	ADJ	JJR	Degree=Cmp	7	amod	7:amod	Entity=(54-object-new-cf1-2-coref|Lem=_|Len=4
7	_	_	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=54)|Lem=_|Len=5
8	_	_	CCONJ	CC	_	15	cc	15:cc	Discourse=explanation-justify:47->46:0:_;adversative-antithesis:47->46:0:0:orp-or else-299-300|Lem=_|Len=2|PDTB=Explicit:Comparison.Contrast:or else:299-300:292-298:301-307
9	_	_	ADV	RB	Degree=Pos	15	advmod	15:advmod	Lem=_|Len=4
10	_	_	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(55-abstract-new-cf3-2-sgl|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	15	nsubj	15:nsubj	Lem=_|Len=5
12	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
13	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	nmod	11:nmod:of	Entity=(54-object-giv:act-cf1-1-ana)55)|Lem=_|Len=2
14	_	_	AUX	MD	VerbForm=Fin	15	aux	15:aux	Lem=_|Len=4
15	_	_	VERB	VB	VerbForm=Inf	4	conj	4:conj:or	Lem=_|Len=11|SpaceAfter=No
16	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 xcomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	2:nsubj	Bridge=60<64|Discourse=causal-cause:56->59:1:dm-so-391|Entity=(64-person-acc:inf-cf2-1-coref)|Lem=*LOWER*|Len=4|PDTB=Implicit:Expansion.Conjunction:but:_:352-370:371-390
2	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=print|Len=7|MSeg=print-ed
3	_	_	ADV	RB	_	4	advmod	4:advmod	Entity=(65-object-new-cf1-3-coref|Lem=_|Len=2
4	_	_	ADJ	JJ	Degree=Pos	5	amod	5:amod	Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=65)|Lem=_|Len=5
6	_	_	PUNCT	-LRB-	_	10	punct	10:punct	Discourse=mode-manner:57->56:0:dm-without-377|Lem=_|Len=1|SpaceAfter=No
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=7|MSeg=with-out
8	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(66-abstract-new-cf4-3-sgl|Lem=_|Len=6
9	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Lem=_|Len=6
10	_	_	NOUN	NN	Number=Sing	2	obl	2:obl:without	Lem=_|Len=7|MSeg=back-ing
11	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
12	_	_	DET	DT	Definite=Def|PronType=Art	13	det	13:det	Bridge=60<67|Entity=(67-organization-acc:inf-cf3-2-sgl|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	nmod	10:nmod:by	CorrectForm=government|Entity=67)66)|Lem=government|Len=5|SpaceAfter=No|XML=<sic ana:::"government"></sic>
14	_	_	PUNCT	-RRB-	_	10	punct	10:punct	Lem=_|Len=1
15	_	_	SCONJ	IN	_	18	mark	18:mark	Discourse=causal-result:58->56:1:_|Lem=_|Len=4
16	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	18:nsubj|19:nsubj:xsubj	Entity=(65-object-giv:act-cf1-1-ana)|Lem=_|Len=2
17	_	_	ADV	RB	_	18	advmod	18:advmod	Lem=_|Len=4
18	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	advcl	2:advcl:that	Lem=become|Len=6
19	_	_	ADJ	JJ	Degree=Pos	18	xcomp	18:xcomp	Lem=_|Len=9|MSeg=worth-less|SpaceAfter=No
20	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 30 xcomp	color:blue
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


