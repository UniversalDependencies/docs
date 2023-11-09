---
layout: base
title:  'Statistics of punct in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `punct`

This relation is universal.

25766 nodes (14%) are attached to their parents as `punct`.

16826 instances of `punct` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.53582240161453.

The following 17 pairs of parts of speech are connected with `punct`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (10861; 42% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (5285; 21% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (2318; 9% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1829; 7% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1803; 7% instances), <tt><a href="en_gum-pos-INTJ.html">INTJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1054; 4% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (1043; 4% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (428; 2% instances), <tt><a href="en_gum-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (314; 1% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (262; 1% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (142; 1% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (141; 1% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (135; 1% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (68; 0% instances), <tt><a href="en_gum-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (47; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (34; 0% instances), <tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="en_gum-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 punct	color:blue
1	His	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	nmod:poss	2:nmod:poss	Discourse=organization-preparation:20->21:4:sem-synym-146,157|Entity=(34-abstract-new-cf2-2-sgl(3-person-giv:act-cf1*-1-ana-Lord_Byron)
2	lack	lack	NOUN	NN	Number=Sing	7	nsubj:pass	7:nsubj:pass	_
3	of	of	ADP	IN	_	4	case	4:case	_
4	moderation	moderation	NOUN	NN	Number=Sing	2	nmod	2:nmod:of	Entity=(35-abstract-new-cf3-1-sgl)34)|MSeg=moderat-ion
5	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	aux:pass	7:aux:pass	_
6	not	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
7	restricted	restrict	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=restrict-ed
8	to	to	ADP	IN	_	10	case	10:case	_
9	physical	physical	ADJ	JJ	Degree=Pos	10	amod	10:amod	Entity=(36-event-new-cf4-2-sgl|MSeg=physic-al
10	exercise	exercise	NOUN	NN	Number=Sing	7	obl	7:obl:to	Entity=36)|SpaceAfter=No
11	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 punct	color:blue
1	In	in	ADP	IN	_	3	case	3:case	Discourse=elaboration-additional:71->66:3:ref-prs-499-502,549+sem-synym-499,551
2	his	his	PRON	PRP$	Case=Gen|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(96-abstract-new-cf4-2-sgl(90-person-giv:act-cf1*-1-ana)
3	memory	memory	NOUN	NN	Number=Sing	5	obl	5:obl:in	Entity=96)
4	Byron	Byron	PROPN	NNP	Number=Sing	5	nsubj	5:nsubj	Entity=(3-person-giv:act-cf2-1-coref-Lord_Byron)
5	composed	compose	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=compos-ed
6	Thyrza	Thyrza	PROPN	NNP	Number=Sing	5	obj	5:obj	Entity=(97-abstract-new-cf3-1-coref)|SpaceAfter=No|XML=<hi rend:::"italic"></hi>
7	,	,	PUNCT	,	_	9	punct	9:punct	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	9:det	Entity=(97-abstract-giv:act-cf3-2-appos
9	series	series	NOUN	NN	Number=Sing	6	appos	6:appos	_
10	of	of	ADP	IN	_	11	case	11:case	_
11	elegies	elegy	NOUN	NNS	Number=Plur	9	nmod	9:nmod:of	Entity=97)|MSeg=elegie-s|SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_
13	[	[	PUNCT	-LRB-	_	14	punct	14:punct	Discourse=explanation-evidence:72->71:0:grf-prn-560,562|SpaceAfter=No
14	25	25	NUM	CD	NumForm=Digit|NumType=Card	5	dep	5:dep	Entity=(98-abstract-new-cf5-1-sgl)|SpaceAfter=No
15	]	]	PUNCT	-RRB-	_	14	punct	14:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 punct	color:blue
1	Digital	Digital	ADJ	NNP	Degree=Pos|Number=Sing	2	amod	2:amod	Discourse=organization-heading:1->58:7:grf-ly-+sem-synym-1-2,478+sem-lxchn-1,503|Entity=(1-place-new-cf1-1,2,3-coref(2-abstract-new-cf2-1,2-coref-Digital_humanities|MSeg=Digit-al
2	Humanities	Humanity	PROPN	NNPS	Number=Plur	3	compound	3:compound	Entity=2)|MSeg=Human-itie-s
3	Clinics	Clinic	PROPN	NNPS	Number=Plur	0	root	0:root	Entity=1)|MSeg=Clinic-s
4	-	-	PUNCT	:	_	3	punct	3:punct	_

~~~


