---
layout: base
title:  'Statistics of obl:agent in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_gentle-dep-obl-unmarked.html">obl:unmarked</a></tt>.

27 nodes (0%) are attached to their parents as `obl:agent`.

26 instances of `obl:agent` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44444444444444.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (20; 74% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (4; 15% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 obl:agent	color:blue
1	Labs	lab	NOUN	NNS	Number=Plur	6	nsubj:pass	6:nsubj:pass|8:nsubj:pass	Discourse=joint-other_m:166->13:4:_|Entity=(77-event-giv:inact-cf1-1-coref)|MSeg=Lab-s|PDTB=Implicit:Expansion.Substitution.Arg2-as-subst:instead:_:914-918:919-930
2	and	and	CCONJ	CC	_	3	cc	3:cc	_
3	Quizzes	quiz	NOUN	NNS	Number=Plur	1	conj	1:conj:and|6:nsubj:pass	Entity=(164-abstract-giv:inact-cf2-1-coref)
4	should	should	AUX	MD	VerbForm=Fin	6	aux	6:aux|8:aux	_
5	be	be	AUX	VB	VerbForm=Inf	6	aux:pass	6:aux:pass|8:aux:pass	_
6	solved	solve	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=solv-ed
7	and	and	CCONJ	CC	_	8	cc	8:cc	_
8	written	write	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	6	conj	6:conj:and	MSeg=writt-en
9	by	by	ADP	IN	_	10	case	10:case	_
10	individuals	individual	NOUN	NNS	Number=Plur	6	obl:agent	6:obl:agent	Entity=(245-person-new-cf3-1-sgl)|MSeg=individual-s
11	alone	alone	ADV	RB	Degree=Pos	6	advmod	6:advmod	MSeg=a-lone|SpaceAfter=No
12	.	.	PUNCT	.	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 obl:agent	color:blue
1	Then	then	ADV	RB	PronType=Dem	4	advmod	4:advmod	Discourse=context-circumstance:135->147:3:_|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	me	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	Discourse=attribution-positive:136->137:0:sem-atsrc-963+lex-indwd-964|Entity=(3-person-giv:inact-cf1-1-ana)
4	thought	think	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	,	_	8	punct	8:punct	_
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Discourse=same-unit_m:137->135:0:_|Entity=(98-substance-new-cf3-2-sgl
7	air	air	NOUN	NN	Number=Sing	8	nsubj	8:nsubj|9:nsubj:xsubj	Entity=98)
8	grew	grow	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	ccomp	4:ccomp	_
9	denser	dense	ADJ	JJR	Degree=Cmp	8	xcomp	8:xcomp	MSeg=dens-er|SpaceAfter=No
10	,	,	PUNCT	,	_	11	punct	11:punct	_
11	perfumed	perfume	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	8	advcl	8:advcl	Discourse=causal-cause:138->135:1:_|MSeg=perfum-ed|PDTB=Implicit:Contingency.Cause.Reason:as a result of being:_:961-970:971-988
12	from	from	ADP	IN	_	15	case	15:case	_
13	an	a	DET	DT	Definite=Ind|PronType=Art	15	det	15:det	Entity=(99-object-new-cf6-3-sgl
14	unseen	unseen	ADJ	JJ	Degree=Pos	15	amod	15:amod	Negation=Yes
15	censer	censer	NOUN	NN	Number=Sing	11	obl	11:obl:from	Entity=99)
16	Swung	swing	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	15	acl	15:acl	Discourse=elaboration-attribute:139->138:0:syn-mdf-975+syn-nmn-976
17	by	by	ADP	IN	_	18	case	18:case	_
18	Seraphim	Seraphim	PROPN	NNPS	Number=Plur	16	obl:agent	16:obl:agent	Entity=(19-person-giv:inact-cf2-1-coref
19	whose	whose	PRON	WP$	Poss=Yes|PronType=Rel	22	nmod:poss	18:ref|22:nmod:poss	Discourse=elaboration-attribute:140->139:0:syn-mdf-978+syn-relcl-983
20	foot	foot	NOUN	NN	Number=Sing	22	compound	22:compound	Entity=(100-abstract-new-cf4-3-sgl
21	-	-	PUNCT	:	_	20	punct	20:punct	_
22	falls	fall	NOUN	NNS	Number=Plur	23	nsubj	23:nsubj	Entity=100)|MSeg=fall-s
23	tinkled	tinkle	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	18	acl:relcl	18:acl:relcl	MSeg=tinkl-ed
24	on	on	ADP	IN	_	27	case	27:case	_
25	the	the	DET	DT	Definite=Def|PronType=Art	27	det	27:det	Entity=(101-object-new-cf5-3-sgl
26	tufted	tufted	ADJ	JJ	Degree=Pos	27	amod	27:amod	MSeg=tuft-ed
27	floor	floor	NOUN	NN	Number=Sing	23	obl	23:obl:on	Entity=101)19)|SpaceAfter=No
28	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	(	(	PUNCT	-LRB-	_	2	punct	2:punct	Discourse=context-background:140->141:1:_|SpaceAfter=No
2	intransitive	intransitive	ADJ	JJ	Degree=Pos	0	root	0:root	MSeg=in-transit-ive|XML=<ref target:::"https://en.wiktionary.org/wiki/Appendix:Glossary#intransitive"></ref>
3	followed	follow	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	2	parataxis	2:parataxis	MSeg=follow-ed
4	by	by	ADP	IN	_	5	case	5:case	_
5	to	to	ADP	IN	_	3	obl:agent	3:obl:agent	XML=<ref target:::"https://en.wiktionary.org/wiki/to#English"></ref>

~~~


