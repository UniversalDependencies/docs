---
layout: base
title:  'Statistics of obl:npmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `obl:npmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_gumreddit-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="en_gumreddit-dep-obl-tmod.html">obl:tmod</a></tt>.

36 nodes (0%) are attached to their parents as `obl:npmod`.

24 instances of `obl:npmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.30555555555556.

The following 11 pairs of parts of speech are connected with `obl:npmod`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (15; 42% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (8; 22% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 6% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-ADV.html">ADV</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 obl:npmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=explanation-justify:85->83:2:_|Entity=(70-person-giv:inact-cf1-1-ana)|Lem=_|Len=1
2	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=4
3	_	_	PRON	DT	Number=Sing|PronType=Dem	2	obj	2:obj	Entity=(90-event-giv:act-cf2*-1-coref)|Lem=_|Len=4
4	_	_	SCONJ	IN	_	7	mark	7:mark	Discourse=explanation-evidence:86->85:0:_;explanation-justify:86->85:0:0:orp-because-544|Lem=_|Len=7
5	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	7:nsubj	Entity=(70-person-giv:act-cf1-1-ana)|Lem=_|Len=1
6	_	_	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	7:aux	Lem=have|Len=3
7	_	_	VERB	VBN	Tense=Past|VerbForm=Part	2	advcl	2:advcl:because	Lem=see|Len=4|MSeg=see-n
8	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	obj	7:obj|9:nsubj:xsubj	Entity=(90-event-giv:act-cf2*-1-ana)|Lem=_|Len=2
9	_	_	VERB	VB	VerbForm=Inf	7	xcomp	7:xcomp	Lem=_|Len=6|MSeg=happ-en
10	_	_	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(92-time-new-cf3-3-sgl|Lem=_|Len=1
11	_	_	NUM	CD	NumForm=Word|NumType=Card	12	compound	12:compound	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	7	obl:npmod	7:obl:npmod	Entity=92)|Lem=time|Len=5|MSeg=time-s|SpaceAfter=No
13	_	_	PUNCT	.	_	2	punct	2:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 28 27 obl:npmod	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=joint-other_m:145->133:5:_|Entity=(139-abstract-new-cf2-3-coref|Lem=*LOWER*|Len=3
2	_	_	NUM	CD	NumForm=Word|NumType=Card	3	nummod	3:nummod	Lem=*LOWER*|Len=3|XML=<hi rend:::"bold"></hi>
3	_	_	NOUN	NN	Number=Sing	15	nsubj:outer	15:nsubj:outer|30:nsubj:xsubj	Lem=_|Len=10|MSeg=differ-ence
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=7|MSeg=be-tween
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
15	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=weigh|Len=6|MSeg=weigh-s
16	_	_	DET	DT	Definite=Ind|PronType=Art	17	det	17:det	Lem=_|Len=1
17	_	_	NOUN	NN	Number=Sing	18	obl:npmod	18:obl:npmod	Lem=_|Len=3
18	_	_	ADV	RBR	Degree=Cmp	21	advmod	21:advmod	ExtPos=ADV|Lem=_|Len=4
19	_	_	ADP	IN	_	18	fixed	18:fixed	Lem=_|Len=4
20	_	_	SYM	$	_	15	obj	15:obj	Entity=(143-substance-new-cf4-1-sgl|Lem=_|Len=1
21	_	_	NUM	CD	NumForm=Digit|NumType=Card	20	nummod	20:nummod	Lem=100000|Len=7
22	_	_	ADP	IN	_	23	case	23:case	Lem=_|Len=2
23	_	_	NOUN	NN	Number=Sing	20	nmod	20:nmod:in	Entity=(99-substance-giv:act-cf1*-1-coref)143)|Lem=_|Len=4
24	_	_	CCONJ	CC	_	28	cc	28:cc	Discourse=joint-list_m:146->145:0:dm-and-954+lex-indwd-961|Lem=_|Len=3
25	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	28	cop	28:cop	Lem=be|Len=2
26	_	_	DET	DT	Definite=Ind|PronType=Art	27	det	27:det	Lem=_|Len=1
27	_	_	NOUN	NN	Number=Sing	28	obl:npmod	28:obl:npmod	Lem=_|Len=3
28	_	_	ADJ	JJR	Degree=Cmp	15	conj	15:conj:and	Lem=easy|Len=6|MSeg=easi-er
29	_	_	PART	TO	_	30	mark	30:mark	Lem=_|Len=2
30	_	_	VERB	VB	VerbForm=Inf	28	xcomp	28:xcomp	Lem=_|Len=4
31	_	_	ADV	RB	Degree=Pos	28	advmod	28:advmod	Entity=139)|Lem=_|Len=3|SpaceAfter=No
32	_	_	PUNCT	.	_	15	punct	15:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 obl:npmod	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=adversative-concession:71->72:1:dm-but-483|Entity=(72-event-new-cf2-1-cata)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	4:cop	Lem=be|Len=2
3	_	_	ADV	RB	Degree=Pos	4	advmod	4:advmod	Lem=_|Len=8|MSeg=slight-ly
4	_	_	ADJ	JJ	Degree=Pos|Polarity=Neg	0	root	0:root	Lem=_|Len=13|MSeg=un-comfort-able
5	_	_	PART	TO	_	6	mark	6:mark	Entity=(72-event-acc:com-cf2-2-disc|Lem=_|Len=2
6	_	_	VERB	VB	VerbForm=Inf	4	csubj	4:csubj	Lem=_|Len=4
7	_	_	NOUN	NNS	Number=Plur	6	obj	6:obj	Entity=(73-event-new-cf3-1-sgl)|Lem=conversation|Len=13|MSeg=convers-ation-s
8	_	_	ADP	IN	_	10	case	10:case	Lem=_|Len=5
9	_	_	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(74-abstract-new-cf4-2-sgl|Lem=_|Len=3
10	_	_	NOUN	NNS	Number=Plur	6	obl	6:obl:about	Entity=74)72)|Lem=price|Len=6|MSeg=price-s|SpaceAfter=No
11	_	_	PUNCT	,	_	15	punct	15:punct	Lem=_|Len=1
12	_	_	CCONJ	CC	_	15	cc	15:cc	Discourse=evaluation-comment:72->59:2:lex-indwd-501|Lem=_|Len=3
13	_	_	SCONJ	IN	_	15	mark	15:mark	Discourse=contingency-condition:73->75:0:dm-if-484|Lem=_|Len=2
14	_	_	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	15	nsubj	15:nsubj|17:nsubj:xsubj|23:nsubj:pass|26:nsubj:xsubj	Entity=(53-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
15	_	_	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	conj	4:csubj|6:conj:but	Lem=_|Len=4
16	_	_	PART	TO	_	17	mark	17:mark	Lem=_|Len=2
17	_	_	VERB	VB	VerbForm=Inf	15	xcomp	15:xcomp	Lem=_|Len=4
18	_	_	ADV	RBR	Degree=Cmp	17	advmod	17:advmod	Lem=_|Len=4
19	_	_	ADP	IN	_	20	case	20:case	Lem=_|Len=3
20	_	_	ADJ	JJR	Degree=Cmp	17	obl	17:obl:for	Entity=(75-abstract-new-cf5-1-sgl)|Lem=_|Len=4
21	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=joint-list_m:74->73:0:dm-and-492|Lem=_|Len=3
22	_	_	AUX	VB	VerbForm=Inf	23	aux:pass	23:aux:pass	Lem=_|Len=2
23	_	_	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	15	conj	6:conj|15:conj:and	Lem=treat|Len=7|MSeg=treat-ed
24	_	_	DET	DT	Definite=Ind|PronType=Art	26	det	26:det	Lem=_|Len=1
25	_	_	ADJ	JJ	Degree=Pos	26	obl:npmod	26:obl:npmod	Lem=_|Len=6
26	_	_	ADV	RBR	Degree=Cmp	23	xcomp	23:xcomp	Lem=well|Len=6|MSeg=bett-er
27	_	_	PUNCT	:	_	30	punct	30:punct	Lem=_|Len=1
28	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	30	nsubj	30:nsubj	Discourse=same-unit_m:75->72:0:_|Entity=(72-event-giv:act-cf2-1-coref)|Lem=_|Len=2
29	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	30	cop	30:cop	Lem=be|Len=2
30	_	_	ADJ	JJ	Degree=Pos	4	parataxis	4:parataxis	Lem=_|Len=5
31	_	_	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	30	obj	30:obj	Lem=_|Len=2|SpaceAfter=No
32	_	_	PUNCT	.	_	4	punct	4:punct	Lem=_|Len=1

~~~


