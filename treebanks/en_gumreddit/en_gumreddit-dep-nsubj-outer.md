---
layout: base
title:  'Statistics of nsubj:outer in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="en_gumreddit-dep-nsubj-pass.html">nsubj:pass</a></tt>.

30 nodes (0%) are attached to their parents as `nsubj:outer`.

30 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.

The following 6 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (16; 53% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (6; 20% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt> (4; 13% instances), <tt><a href="en_gumreddit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gumreddit-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="en_gumreddit-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gumreddit-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 3 nsubj:outer	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=evaluation-comment:29->16:4:_|Entity=(34-abstract-new-cf5-3-sgl|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	3:amod	Lem=_|Len=4
3	_	_	NOUN	NN	Number=Sing	17	nsubj:outer	17:nsubj:outer	Lem=_|Len=6
4	_	_	SCONJ	IN	_	6	mark	6:mark	Discourse=elaboration-attribute:30->29:0:syn-mdf-169+syn-nmn-170,172|Lem=_|Len=4
5	_	_	PRON	DT	Number=Sing|PronType=Dem	6	nsubj	6:nsubj	Entity=(28-event-giv:act-cf1*-1-coref)|Lem=_|Len=4
6	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	3:acl:that	Lem=result|Len=7|MSeg=result-s
7	_	_	ADP	IN	_	8	case	8:case	Lem=_|Len=2
8	_	_	PRON	NN	Number=Sing|PronType=Ind	6	obl	6:obl:in	Entity=(35-abstract-new-cf8-1-sgl|Lem=_|Len=8
9	_	_	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=35)34)|Lem=_|Len=9|MSeg=favor-able
10	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	17:cop	Discourse=same-unit_m:31->29:1:_|Lem=be|Len=2
11	_	_	SCONJ	IN	_	17	mark	17:mark	Lem=_|Len=7
12	_	_	NOUN	NNS	Number=Plur	17	nsubj	17:nsubj	Entity=(36-person-new-cf6-1-sgl|Lem=person|Len=6
13	_	_	ADV	RB	Degree=Pos	16	advmod	16:advmod	Lem=_|Len=3
14	_	_	ADP	IN	_	16	case	16:case	Lem=_|Len=4
15	_	_	DET	DT	Definite=Def|PronType=Art	16	det	16:det	Entity=(37-place-acc:com-cf4-2-sgl|Lem=_|Len=3
16	_	_	NOUN	NN	Number=Sing	12	nmod	12:nmod:over	Entity=37)36)|Lem=_|Len=5
17	_	_	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=_|Len=5
18	_	_	PROPN	NNP	Abbr=Yes|Number=Sing	17	obj	17:obj	Entity=(27-abstract-giv:inact-cf2-1-coref-United_States_dollar)|Lem=_|Len=3
19	_	_	CCONJ	CC	_	23	cc	23:cc	Discourse=joint-list_m:32->31:0:sem-mrnym-184,186-188+sem-lxchn-184,188+dm-and-185|Lem=_|Len=3
20	_	_	DET	DT	Number=Sing|PronType=Dem	22	det	22:det	Bridge=27<38|Entity=(38-object-acc:inf-cf3-3-sgl|Lem=_|Len=4
21	_	_	NOUN	NN	Number=Sing	22	compound	22:compound	Lem=_|Len=5
22	_	_	NOUN	NN	Number=Sing	23	nsubj	23:nsubj	Entity=38)|Lem=_|Len=8
23	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	conj	17:conj:and	Lem=represent|Len=10|MSeg=represent-s
24	_	_	ADJ	JJ	Degree=Pos	25	amod	25:amod	Entity=(39-abstract-new-cf7-2-sgl|Lem=_|Len=9|MSeg=potent-ial
25	_	_	NOUN	NN	Number=Sing	23	obj	23:obj	Entity=39)|Lem=_|Len=5|SpaceAfter=No
26	_	_	PUNCT	,	_	28	punct	28:punct	Lem=_|Len=1
27	_	_	ADJ	JJ	Degree=Pos	28	amod	28:amod	Entity=(40-abstract-new-cf9-2-sgl|Lem=_|Len=3
28	_	_	NOUN	NNS	Number=Plur	25	conj	23:obj|25:conj	Entity=40)|Lem=asset|Len=6|MSeg=asset-s|SpaceAfter=No
29	_	_	PUNCT	,	_	30	punct	30:punct	Lem=_|Len=1
30	_	_	NOUN	FW	Abbr=Yes|Number=Plur	25	conj	23:obj|25:conj	Lem=_|Len=4

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:outer	color:blue
1	_	_	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj:outer	5:nsubj:outer	Discourse=adversative-concession:81->83:1:_|Entity=(83-abstract-giv:act-cf1*-1-coref)|Lem=*LOWER*|Len=2
2	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	Lem=be|Len=2
3	_	_	PART	RB	Polarity=Neg	5	advmod	5:advmod	Lem=_|Len=3
4	_	_	PART	TO	_	5	mark	5:mark	Lem=_|Len=2
5	_	_	VERB	VB	VerbForm=Inf	0	root	0:root	Lem=_|Len=5
6	_	_	SCONJ	IN	_	8	mark	8:mark	Lem=_|Len=4
7	_	_	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	8	nsubj	8:nsubj	Entity=(84-animal-giv:act-cf2-1-ana)|Lem=_|Len=4
8	_	_	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	ccomp	5:ccomp	Lem=do|Len=3|SpaceAfter=No
9	_	_	PUNCT	,	_	11	punct	11:punct	Lem=_|Len=1
10	_	_	ADV	RB	_	11	advmod	11:advmod	Discourse=attribution-positive:82->83:0:lex-indwd-498+sem-atsrc-498+syn-rpr-499|Lem=_|Len=4
11	_	_	VERB	VBG	Tense=Pres|VerbForm=Part	5	parataxis	5:parataxis	Lem=state|Len=7|MSeg=stat-ing
12	_	_	SCONJ	IN	_	15	mark	15:mark	Discourse=adversative-contrast_m:83->1:10:_|Lem=_|Len=4
13	_	_	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(85-abstract-new-cf3-2-sgl|Lem=_|Len=3
14	_	_	NOUN	NN	Number=Sing	15	nsubj	15:nsubj	Entity=85)|Lem=_|Len=6|MSeg=opt-ion
15	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	ccomp	11:ccomp	Lem=be|Len=2
16	_	_	ADV	RB	PronType=Dem	15	advmod	15:advmod	Lem=_|Len=5|SpaceAfter=No
17	_	_	PUNCT	.	_	5	punct	5:punct	Lem=_|Len=1

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 2 nsubj:outer	color:blue
1	_	_	ADJ	JJ	Degree=Pos	2	amod	2:amod	Discourse=evaluation-comment:18->7:3:lex-indwd-125+lex-indwd-135|Entity=(21-abstract-new-cf6-11,18,20-disc(22-abstract-new-cf3-2-coref|Lem=*LOWER*|Len=3
2	_	_	NOUN	NN	Number=Sing	11	nsubj:outer	11:nsubj:outer	Entity=22)|Lem=_|Len=4
3	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	11:cop	Lem=be|Len=2
4	_	_	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	5:nmod:poss	Entity=(22-abstract-giv:act-cf3-8,15,17-coref(23-abstract-new-cf4-2-sgl(10-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
5	_	_	NOUN	NNS	Number=Plur	11	nsubj	11:nsubj	Entity=23)|Lem=instinct|Len=9|MSeg=instinct-s
6	_	_	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	11	cop	11:cop	Lem=be|Len=4
7	_	_	ADV	RBR	Degree=Cmp	8	advmod	8:advmod	Lem=_|Len=4
8	_	_	ADV	RB	Degree=Pos	11	advmod	11:advmod	Lem=_|Len=5
9	_	_	SCONJ	IN	_	10	mark	10:mark	Lem=_|Len=4
10	_	_	PART	RB	Polarity=Neg	8	advcl	8:advcl:than	Lem=_|Len=3
11	_	_	ADJ	JJ	Degree=Pos	0	root	0:root	Lem=_|Len=7
12	_	_	CCONJ	CC	_	18	cc	18:cc	Discourse=adversative-contrast_m:19->18:0:dm-but-136|Lem=_|Len=3
13	_	_	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	14	nmod:poss	14:nmod:poss	Entity=(24-abstract-new-cf7-6,8-disc(9-person-giv:act-cf2-2-coref(10-person-giv:act-cf1*-1-ana)|Lem=_|Len=3
14	_	_	NOUN	NNS	Number=Plur	18	nsubj	18:nsubj|20:nsubj|22:nsubj:xsubj	Entity=9)|Lem=parent|Len=7|MSeg=parent-s
15	_	_	ADV	RB	_	18	advmod	18:advmod	Lem=_|Len=4
16	_	_	AUX	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	18	aux	18:aux	Lem=do|Len=3
17	_	_	PART	RB	Polarity=Neg	18	advmod	18:advmod	Lem=not|Len=3
18	_	_	VERB	VB	VerbForm=Inf	11	conj	11:conj:but	Lem=_|Len=6
19	_	_	CCONJ	CC	_	20	cc	20:cc	Discourse=joint-list_m:20->19:0:dm-and-143|Lem=_|Len=3
20	_	_	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	18	conj	11:conj|18:conj:and	Lem=refuse|Len=7|MSeg=refus-ed
21	_	_	PART	TO	_	22	mark	22:mark	Lem=_|Len=2
22	_	_	VERB	VB	VerbForm=Inf	20	xcomp	20:xcomp	Lem=_|Len=3
23	_	_	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	22	obj	22:obj|24:nsubj:xsubj|26:nsubj:xsubj	Entity=(10-person-giv:act-cf1*-1-ana)|Lem=he|Len=3
24	_	_	VERB	VB	VerbForm=Inf	22	xcomp	22:xcomp	Lem=_|Len=7
25	_	_	CCONJ	CC	_	26	cc	26:cc	Lem=_|Len=3
26	_	_	VERB	VB	VerbForm=Inf	24	conj	22:xcomp|24:conj:and	Lem=_|Len=3
27	_	_	NOUN	NN	Number=Sing	26	obj	26:obj	Entity=(25-object-new-cf5-1-sgl)|Lem=_|Len=5
28	_	_	ADP	RP	_	26	compound:prt	26:compound:prt	Entity=24)22)|Lem=_|Len=3|SpaceAfter=No
29	_	_	PUNCT	.	_	11	punct	11:punct	Entity=21)|Lem=_|Len=1

~~~


