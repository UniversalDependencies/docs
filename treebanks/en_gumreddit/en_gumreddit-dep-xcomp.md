---
layout: base
title:  'Statistics of xcomp in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `xcomp`

This relation is universal.

319 nodes (2%) are attached to their parents as `xcomp`.

318 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.23824451410658.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (202; 63% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (62; 19% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (20; 6% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (18; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PART.html">PART</a></tt> (4; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="en_gumreddit-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	4:nsubj|5:nsubj:xsubj	Discourse=context-background:46->51:1|Entity=(53-person-new-cf2-1-sgl)|Lem=*LOWER*|Len=3
2	_	_	AUX	MD	VerbForm=Fin	4	aux	4:aux	Lem=can|Len=2
3	_	_	PART	RB	Polarity=Neg	4	advmod	4:advmod	Lem=not|Len=3
4	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=4
5	_	_	VERB	VBG	VerbForm=Ger	4	xcomp	4:xcomp	Lem=print|Len=8
6	_	_	ADJ	JJR	Degree=Cmp	7	amod	7:amod	Entity=(54-object-new-cf1-2-coref|Lem=_|Len=4
7	_	_	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=54)|Lem=_|Len=5
8	_	_	CCONJ	CC	_	15	cc	15:cc	Discourse=explanation-justify:47->46:0|Lem=_|Len=2
9	_	_	ADV	RB	Degree=Pos	15	advmod	15:advmod	Lem=_|Len=4
10	_	_	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(55-abstract-new-cf3-2-sgl|Lem=_|Len=3
11	_	_	NOUN	NN	Number=Sing	15	nsubj	15:nsubj	Lem=_|Len=5
12	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
13	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	nmod	11:nmod:of	Entity=(54-object-giv:act-cf1-1-ana)55)|Lem=_|Len=2
14	_	_	AUX	MD	Number=Sing|Person=3|VerbForm=Fin	15	aux	15:aux	Lem=_|Len=4
15	_	_	VERB	VB	VerbForm=Inf	4	conj	4:conj:or	Lem=_|Len=11|SpaceAfter=No
16	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 xcomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	2:nsubj	Bridge=60<63|Discourse=causal-cause:56->59:1|Entity=(63-person-acc:inf-cf2-1-coref)|Lem=*LOWER*|Len=4
2	_	_	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=print|Len=7
3	_	_	ADV	RB	_	4	advmod	4:advmod	Entity=(64-object-new-cf1-3-coref|Lem=_|Len=2
4	_	_	ADJ	JJ	Degree=Pos	5	amod	5:amod	Lem=_|Len=4
5	_	_	NOUN	NN	Number=Sing	2	obj	2:obj	Entity=64)|Lem=_|Len=5
6	_	_	PUNCT	-LRB-	_	10	punct	10:punct	Discourse=mode-manner:57->56:0|Lem=_|Len=1|SpaceAfter=No
7	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=7
8	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(65-abstract-new-cf4-3-sgl|Lem=_|Len=6
9	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Lem=_|Len=6
10	_	_	NOUN	NN	Number=Sing	2	obl	2:obl:without	Lem=_|Len=7
11	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
12	_	_	DET	DT	Definite=Def|PronType=Art	13	det	13:det	Bridge=60<66|Entity=(66-organization-acc:inf-cf3-2-sgl|Lem=_|Len=3
13	_	_	NOUN	NN	Number=Sing|Typo=Yes	10	nmod	10:nmod:by	CorrectForm=government|Entity=66)65)|Lem=government|Len=5|SpaceAfter=No|XML=<sic ana:::"government"></sic>
14	_	_	PUNCT	-RRB-	_	10	punct	10:punct	Lem=_|Len=1
15	_	_	SCONJ	IN	_	18	mark	18:mark	Discourse=causal-result:58->56:1|Lem=_|Len=4
16	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	18	nsubj	18:nsubj|19:nsubj:xsubj	Entity=(64-object-giv:act-cf1-1-ana)|Lem=_|Len=2
17	_	_	ADV	RB	_	18	advmod	18:advmod	Lem=_|Len=4
18	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	advcl	2:advcl:that	Lem=become|Len=6
19	_	_	ADJ	JJ	Degree=Pos	18	xcomp	18:xcomp	Lem=_|Len=9|SpaceAfter=No
20	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj|5:nsubj:xsubj	Discourse=adversative-concession:92->93:2|Entity=(88-substance-new-cf1-1-cata)|Lem=*LOWER*|Len=2
2	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	Lem=use|Len=4
3	_	_	PART	TO	_	5	mark	5:mark	Lem=_|Len=2
4	_	_	AUX	VB	VerbForm=Inf	5	cop	5:cop	Lem=_|Len=2
5	_	_	NOUN	NN	Number=Sing	2	xcomp	2:xcomp	Entity=(88-substance-acc:com-cf1-1-coref)|Lem=_|Len=4|SpaceAfter=No
6	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


