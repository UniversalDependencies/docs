---
layout: base
title:  'Statistics of csubj:pass in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-csubj.html">csubj</a></tt>.
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="en_gum-dep-csubj-outer.html">csubj:outer</a></tt>.

17 nodes (0%) are attached to their parents as `csubj:pass`.

13 instances of `csubj:pass` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.76470588235294.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (14; 82% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	3:expl	Discourse=elaboration-additional:10->9:0:_|Entity=(18-event-new-cf3-1-cata)|PDTB=Implicit:Expansion.Conjunction:also:_:59-84:85-98
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	recommend	recommend	VERB	VBN	Tense=Past|Typo=Yes|VerbForm=Part|Voice=Pass	0	root	0:root	CorrectForm=recommended|MSeg=re-commend|XML=<sic ana:::"recommended"></sic>
4	that	that	SCONJ	IN	_	6	mark	6:mark	_
5	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	6:nsubj	Entity=(18-event-acc:com-cf3-2-coref(5-person-giv:inact-cf2-1-ana)
6	use	use	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj:pass	3:csubj:pass	_
7	short	short	ADJ	JJ	Degree=Pos	8	amod	8:amod	Entity=(19-abstract-new-cf1-2-coref
8	words	word	NOUN	NNS	Number=Plur	6	obj	6:obj	Entity=19)18)|MSeg=word-s
9	since	since	SCONJ	IN	_	13	mark	13:mark	Discourse=explanation-justify:11->10:0:dm-since-93|PDTB=Explicit:Contingency.Cause.Reason:since:93:85-92:94-98
10	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	13	nsubj:pass	13:nsubj:pass	Entity=(19-abstract-giv:act-cf1-1-ana)
11	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux:pass	13:aux:pass	_
12	commonly	commonly	ADV	RB	Degree=Pos	13	advmod	13:advmod	MSeg=common-ly
13	used	use	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	advcl	3:advcl:since	MSeg=us-ed|SpaceAfter=No
14	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=elaboration-additional:88->85:1:ref-prs-688,699+grf-prn-713,719|Entity=(111-abstract-new-cf3-1-cata)|PDTB=Implicit:Expansion.Level-of-detail.Arg2-as-detail:in fact:_:670-693:694-731
2	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	4:aux	MSeg=ha-s
3	been	be	AUX	VBN	Tense=Past|VerbForm=Part	4	aux:pass	4:aux:pass	_
4	speculated	speculate	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=speculat-ed
5	that	that	SCONJ	IN	_	15	mark	15:mark	_
6	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	15:nsubj	Entity=(111-abstract-acc:com-cf3-6,10-disc(103-person-giv:act-cf1*-1-ana)
7	might	might	AUX	MD	VerbForm=Fin	15	aux	15:aux	_
8	have	have	AUX	VB	VerbForm=Inf	15	aux	15:aux	_
9	been	be	AUX	VBN	Tense=Past|VerbForm=Part	15	cop	15:cop	_
10	du	du	PROPN	NNP	Number=Sing	15	nmod:poss	15:nmod:poss	Entity=(86-person-giv:inact-cf4-2,6-coref(66-person-giv:inact-cf2-1,2-coref
11	Motel	Motel	PROPN	NNP	Number=Sing	10	flat	10:flat	MSeg=Mo-tel
12	's	's	PART	POS	_	10	case	10:case	Entity=66)
13	"	''	PUNCT	``	_	15	punct	15:punct	SpaceAfter=No|XML=<q>
14	supposed	suppose	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	15	amod	15:amod	MSeg=suppos-ed
15	fiancé	fiancé	NOUN	NN	Number=Sing	4	csubj:pass	4:csubj:pass	SpaceAfter=No
16	"	''	PUNCT	''	_	15	punct	15:punct	Entity=86)|XML=</q>
17	at	at	ADP	IN	_	19	case	19:case	_
18	the	the	DET	DT	Definite=Def|PronType=Art	19	det	19:det	Entity=(112-time-acc:com-cf5-2-sgl
19	time	time	NOUN	NN	Number=Sing	15	nmod	15:nmod:at	Entity=112)111)
20	(	(	PUNCT	-LRB-	_	23	punct	23:punct	Discourse=context-background:89->88:0:ref-prs-703-705,714|SpaceAfter=No
21	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	23	nsubj	23:nsubj	Entity=(66-person-giv:act-cf2-1-ana)
22	ultimately	ultimately	ADV	RB	Degree=Pos	23	advmod	23:advmod	MSeg=ultimate-ly
23	married	marry	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	15	parataxis	15:parataxis	MSeg=marri-ed
24	someone	someone	PRON	NN	Number=Sing|PronType=Ind	23	obj	23:obj	Entity=(113-person-new-cf7-1-sgl|MSeg=some-one
25	else	else	ADV	RB	Degree=Pos	24	advmod	24:advmod	Entity=113)|SpaceAfter=No
26	)	)	PUNCT	-RRB-	_	23	punct	23:punct	SpaceAfter=No
27	,	,	PUNCT	,	_	34	punct	34:punct	_
28	but	but	CCONJ	CC	_	34	cc	34:cc	Discourse=adversative-contrast_m:90->88:1:dm-but-721|PDTB=Explicit:Comparison.Contrast:but:721:694-720:722-731
29	no	no	DET	DT	PronType=Neg	31	det	31:det	Negation=Yes
30	clear	clear	ADJ	JJ	Degree=Pos	31	amod	31:amod	Entity=(114-abstract-new-cf6-2-sgl
31	evidence	evidence	NOUN	NN	Number=Sing	34	nsubj:pass	34:nsubj:pass	Entity=114)|MSeg=evid-ence
32	has	have	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	aux	34:aux	MSeg=ha-s
33	been	be	AUX	VBN	Tense=Past|VerbForm=Part	34	aux:pass	34:aux:pass	_
34	found	find	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	conj	4:conj:but	_
35	supporting	support	VERB	VBG	VerbForm=Ger	31	acl	31:acl	Discourse=elaboration-attribute:91->90:0:syn-mdf-724+syn-nmn-728|MSeg=support-ing
36	this	this	DET	DT	Number=Sing|PronType=Dem	37	det	37:det	Entity=(111-abstract-giv:act-cf3-2-coref
37	conjecture	conjecture	NOUN	NN	Number=Sing	35	obj	35:obj	Entity=111)|SpaceAfter=No
38	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 16 csubj:pass	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	Discourse=ROOT:43:0|Entity=(88-abstract-new-cf8-1-cata)|PDTB=NoRel:NoRel:_:_:362-374:375-418
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	4:aux:pass	_
3	widely	widely	ADV	RB	Degree=Pos	4	advmod	4:advmod	MSeg=wide-ly
4	accepted	accept	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=accept-ed
5	that	that	SCONJ	IN	_	16	mark	16:mark	Entity=(88-abstract-acc:com-cf8-12-coref
6	the	the	DET	DT	Definite=Def|PronType=Art	7	det	7:det	Entity=(89-abstract-new-cf9-2-sgl
7	corrections	correction	NOUN	NNS	Number=Plur	16	nsubj	16:nsubj	MSeg=correct-ion-s
8	of	of	ADP	IN	_	14	case	14:case	_
9	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(90-abstract-new-cf1-6-coref
10	sea	sea	NOUN	NN	Number=Sing	11	compound	11:compound	Entity=(40-place-giv:inact-cf5-2-coref(41-place-giv:inact-cf6-1-coref)
11	surface	surface	NOUN	NN	Number=Sing	14	compound	14:compound	Entity=40)
12	and	and	CCONJ	CC	_	13	cc	13:cc	_
13	atmospheric	atmospheric	ADJ	JJ	Degree=Pos	11	conj	11:conj:and|14:amod	MSeg=atmospher-ic
14	effects	effect	NOUN	NNS	Number=Plur	7	nmod	7:nmod:of	Entity=90)89)|MSeg=effect-s
15	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	cop	16:cop	_
16	essential	essential	ADJ	JJ	Degree=Pos	4	csubj:pass	4:csubj:pass	MSeg=essent-ial
17	for	for	ADP	IN	_	19	case	19:case	_
18	remote	remote	ADJ	JJ	Degree=Pos	19	amod	19:amod	Entity=(48-abstract-giv:act-cf2*-2-coref
19	sensing	sensing	NOUN	NN	Number=Sing	16	obl	16:obl:for	MSeg=sens-ing
20	of	of	ADP	IN	_	21	case	21:case	_
21	SSS	SSS	NOUN	NN	Number=Sing	19	nmod	19:nmod:of	Entity=(39-abstract-giv:act-cf3-1-coref)48)88)|SpaceAfter=No|XML=<hi rend:::"italic"></hi>
22	,	,	PUNCT	,	_	27	punct	27:punct	_
23	since	since	SCONJ	IN	_	27	mark	27:mark	Discourse=explanation-justify:44->43:0:dm-since-397|PDTB=Explicit:Contingency.Cause.Reason:since:397:375-396:398-418
24	these	this	DET	DT	Number=Plur|PronType=Dem	25	det	25:det	Entity=(90-abstract-giv:act-cf1-2-coref
25	effects	effect	NOUN	NNS	Number=Plur	27	nsubj	27:nsubj|37:nsubj	Entity=90)|MSeg=effect-s
26	could	could	AUX	MD	VerbForm=Fin	27	aux	27:aux|37:aux	_
27	alter	alter	VERB	VB	VerbForm=Inf	4	advcl	4:advcl:since	_
28	the	the	DET	DT	Definite=Def|PronType=Art	29	det	29:det	Entity=(91-abstract-new-cf10-2-sgl
29	value	value	NOUN	NN	Number=Sing	27	obj	27:obj	_
30	of	of	ADP	IN	_	35	case	35:case	_
31	sensor	sensor	NOUN	NN	Number=Sing	33	compound	33:compound	Entity=(92-abstract-new-cf13-5-sgl(93-object-new-cf14-1-sgl)|MSeg=sens-or|SpaceAfter=No|XML=<w>
32	-	-	PUNCT	HYPH	_	31	punct	31:punct	SpaceAfter=No
33	measured	measure	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	35	amod	35:amod	MSeg=measur-ed|XML=</w>
34	brightness	brightness	NOUN	NN	Number=Sing	35	compound	35:compound	Entity=(75-abstract-giv:inact-cf7-1-coref)|MSeg=bright-ness
35	temperature	temperature	NOUN	NN	Number=Sing	29	nmod	29:nmod:of	Entity=92)91)|MSeg=temperat-ure
36	and	and	CCONJ	CC	_	37	cc	37:cc	Discourse=joint-list_m:45->44:0:sem-lxchn-403,412+dm-and-410|PDTB=Explicit:Expansion.Conjunction:and:410:397-409:411-418
37	introduce	introduce	VERB	VB	VerbForm=Inf	27	conj	4:advcl:since|27:conj:and	_
38	errors	error	NOUN	NNS	Number=Plur	37	obj	37:obj	Entity=(94-abstract-new-cf11-1-sgl)|MSeg=err-or-s
39	into	into	ADP	IN	_	43	case	43:case	MSeg=in-to
40	the	the	DET	DT	Definite=Def|PronType=Art	43	det	43:det	Entity=(95-abstract-new-cf12-4-sgl
41	SSS	SSS	NOUN	NN	Number=Sing	42	compound	42:compound	Entity=(87-abstract-giv:act-cf4-2-coref(39-abstract-giv:act-cf3-1-coref)|XML=<hi rend:::"italic"></hi>
42	retrieval	retrieval	NOUN	NN	Number=Sing	43	compound	43:compound	Entity=87)|MSeg=retriev-al
43	process	process	NOUN	NN	Number=Sing	37	obl	37:obl:into	Entity=95)|SpaceAfter=No
44	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


